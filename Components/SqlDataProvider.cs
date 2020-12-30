#region Copyright
/*
DNNSearchAndReplace
Copyright (c) 2013-Present by Evotiva (www.evotiva.com)
Horacio Judeikin (horacioj@evotiva.com)
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are 
permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of 
conditions and the following disclaimer.

Redistributions in binary form must reproduce the above copyright notice, this list 
of conditions and the following disclaimer in the documentation and/or other 
materials provided with the distribution.

Neither the name of Evotiva, Horacio Judeikin, DNNSearchAndReplace, nor the names of 
its contributors may be used to endorse or promote products derived from this software
without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES 
OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT 
SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, 
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED 
TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR 
BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN 
ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH 
DAMAGE.
*/
#endregion

using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using DotNetNuke.Common.Utilities;
using DotNetNuke.Data;
using System.Linq;

namespace Evotiva.DNNSearchAndReplace.Components
{
    public static class SqlDataProvider
    {
        #region Private Members

        private static string ConnectionString => Config.GetConnectionString();

        private static string DatabaseOwner => Config.GetDataBaseOwner();

        private static string ObjectQualifier => Config.GetObjectQualifer();

        private static string ExecuteScript(string script)
        {
            string[] delimiter = { "GO\r\n" };
            var arrSql = script.Split(delimiter, StringSplitOptions.RemoveEmptyEntries);
            var exceptions = new StringBuilder();

            foreach (var sql in arrSql)
            {
                if (string.IsNullOrEmpty(sql.Trim())) continue;
                try
                {
                    exceptions.Append(DataProvider.Instance().ExecuteScript(sql));
                }
                catch (SqlException objException)
                {
                    exceptions.Append(objException);
                }
            }

            return exceptions.ToString();
        }

        #endregion

        #region Public Properties

        public static string QuoteName(string name)
        {
            name = DeQuoteName(name);
            return "[" + name + "]";
        }

        public static string DeQuoteName(string name)
        {
            if (name.StartsWith("[", StringComparison.OrdinalIgnoreCase)) name = name.Remove(0, 1);
            if (name.EndsWith("]", StringComparison.OrdinalIgnoreCase)) name = name.Remove(name.Length - 1, 1);
            return name;
        }

        public static string FullDbObjectName(string dbObjectName)
        {
            return DatabaseOwner + QuoteName(ObjectQualifier + dbObjectName);
        }

        #endregion

        #region Public Methods

        public static void CreateHelperDatabaseObjects()
        {
            const string sqlProcs = @"
                    if exists (select * from dbo.sysobjects 
                                where id = object_id(N'{databaseOwner}{objectQualifier}EvotivaSearchAndReplace') 
                                  and OBJECTPROPERTY(id, N'IsProcedure') = 1)
                        DROP PROCEDURE {databaseOwner}{objectQualifier}EvotivaSearchAndReplace
                    GO

                    CREATE PROCEDURE {databaseOwner}{objectQualifier}EvotivaSearchAndReplace
                    --http://www.mssqltips.com/tip.asp?tip=1522                    
                        @table NVARCHAR(1000),
                        @columnName sysname,
                        @stringToFind NVARCHAR(1000),
                        @stringToReplace NVARCHAR(1000)
                    AS 

                    SET NOCOUNT ON

                    DECLARE @count INT
                    DECLARE @sqlCommand VARCHAR(8000)
                    DECLARE @where VARCHAR(8000)
                    DECLARE @object_id INT
                                        
                    BEGIN TRY 

                        SET @sqlCommand = 'UPDATE ' + @table + 
			                                ' SET ' + @columnName + ' = REPLACE(convert(nvarchar(max),' + @columnName + '),''' 
				                                                        + @stringToFind + ''',''' + @stringToReplace + ''')'
                        SET @where = ' WHERE ' + @columnName + ' LIKE ''%' + @stringToFind + '%'''

                        EXEC( @sqlCommand + @where)

                        SET @count = @@ROWCOUNT
                        SELECT @count
        
                    END TRY
                    BEGIN CATCH
                        SELECT -1
                    END CATCH
                    GO
              ";

            var result = ExecuteScript(sqlProcs);
            if (!string.IsNullOrEmpty(result))
            {
                throw new DnnSearchAndReplaceException(result);
            }
        }

        public static IEnumerable<string> GetPkColumns(string tableName)
        {
            var sqlQuery = $@"
                    SELECT 
                        QUOTENAME(c.name) AS column_name
                    FROM sys.indexes i
                        inner join sys.index_columns ic  ON i.object_id = ic.object_id AND i.index_id = ic.index_id
                        inner join sys.columns c ON ic.object_id = c.object_id AND c.column_id = ic.column_id
                    WHERE i.is_primary_key = 1
                        and i.object_ID = OBJECT_ID('{tableName}')
                    ORDER BY ic.key_ordinal ASC
            ";

            IEnumerable<string> pkColumns;
            using (var context = DataContext.Instance())
            {
                pkColumns = context.ExecuteQuery<string>(CommandType.Text, sqlQuery);
            }

            return pkColumns;
        }

        public static SearchResults GetSearchResults(string tableName, IEnumerable<string> pkColumns, string searchColumnName, string searchText)
        {
            //TODO: This implementation of GetSearchResults() is bad, specially for large data sets. Besides (more very bad things), everything travels to the client side in one go.

            var columnsList = new StringBuilder();
            foreach (var column in pkColumns)
            {
                if (columnsList.Length > 0) columnsList.Append(", ");
                columnsList.Append(column);
            }

            if (columnsList.Length > 0) columnsList.Append(", ");
            columnsList.Append(searchColumnName);

            var sqlSearchQuery =
                $" SELECT {columnsList} FROM {tableName} WHERE convert(nvarchar(max), {searchColumnName}) like '%' + @0 + '%';";

            long count = 0;
            var json = string.Empty;
            using (var reader = DotNetNuke.Data.PetaPoco.PetaPocoHelper.ExecuteReader(ConnectionString, CommandType.Text, sqlSearchQuery, searchText))
            {
                var r = Utility.Serialize(reader);
                count = r.Count();
                json = Newtonsoft.Json.JsonConvert.SerializeObject(r, Newtonsoft.Json.Formatting.None);
            }

            return  new SearchResults { Data = json, Count = count };
        }

        public static long PerformReplace(string tableName, string columnName, string searchText, string replaceText)
        {
            CreateHelperDatabaseObjects();
            return DotNetNuke.Data.PetaPoco.PetaPocoHelper.ExecuteScalar<long>(ConnectionString, CommandType.StoredProcedure,
                                                                                FullDbObjectName("EvotivaSearchAndReplace"),
                                                                                tableName, columnName, searchText, replaceText);
        }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Style", "IDE0063:Use simple 'using' statement", Justification = "Thanks, but no.")]
        public static IEnumerable<SearchItem> GetAllPossibleSearchTargets()
        {
            //TODO: make CHARACTER_MAXIMUM_LENGTH a parameter (module's setting)

            const string sqlQuery = @"
                    SELECT c.TABLE_SCHEMA + '.' + QUOTENAME(c.TABLE_NAME) AS TableName, 
                            QUOTENAME(c.COLUMN_NAME) AS ColumnName, 
                            c.DATA_TYPE AS ColumnType, 
                            CASE WHEN c.DATA_TYPE IN ('text', 'ntext', 'xml') THEN 'n/a' 
                                 WHEN c.CHARACTER_MAXIMUM_LENGTH = -1 THEN 'MAX' 
                                 ELSE CAST(c.CHARACTER_MAXIMUM_LENGTH AS varchar(10)) 
                             END AS ColumnLenght 
                        FROM INFORMATION_SCHEMA.COLUMNS AS c 
                            INNER JOIN INFORMATION_SCHEMA.TABLES AS t ON 
                            c.TABLE_CATALOG = t.TABLE_CATALOG AND 
                            c.TABLE_SCHEMA = t.TABLE_SCHEMA AND 
                            c.TABLE_NAME = t.TABLE_NAME 
                        WHERE c.DATA_TYPE IN ('text', 'ntext', 'varchar', 'nvarchar', 'xml') 
                        AND (c.CHARACTER_MAXIMUM_LENGTH = -1 OR c.CHARACTER_MAXIMUM_LENGTH >= 250) 
                        AND (t.TABLE_TYPE = 'BASE TABLE') 
                        ORDER BY c.TABLE_NAME, c.COLUMN_NAME; 
            ";

            const string cacheKey = "esrAllPossibleSearchTargets";
            var searchItems = DataCache.GetCache<IEnumerable<SearchItem>>(cacheKey);
            if (searchItems == null)
            {
                using (var context = DataContext.Instance())
                {
                    searchItems = context.ExecuteQuery<SearchItem>(CommandType.Text, sqlQuery);
                    DataCache.SetCache(cacheKey, searchItems, TimeSpan.FromMinutes(30));
                }
            }

            return searchItems;
        }

        public static bool SearchTargetExists(SearchItem item)
        {
            const string sqlQuery = @"
                        IF  EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS AS c 
				                        WHERE (c.TABLE_SCHEMA = @0 OR @0 = '') 
				                          AND c.TABLE_NAME = @1
				                          AND c.COLUMN_NAME = @2
                                   ) 
                            SELECT 1
                        ELSE
                            SELECT 0
            ";

            //NOTE: TableName is like: databaseowner.[tablename]
            string schemaName;
            string tableName;
            if (!item.TableName.Contains("."))
            {
                schemaName = "";
                tableName = DeQuoteName(item.TableName);
            }
            else
            {
                var components = item.TableName.Split('.');
                schemaName = components[0];
                tableName = DeQuoteName(components[1]);
            }
            var columnName = DeQuoteName(item.ColumnName);

            var result = DotNetNuke.Data.PetaPoco.PetaPocoHelper.ExecuteScalar<int>(ConnectionString, CommandType.Text, sqlQuery,
                                                                                    schemaName, tableName, columnName);
            return result == 1;
        }

        #endregion

    }
}

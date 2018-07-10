<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Import Namespace="System.Data" %>
<%@ Import Namespace="System.Data.SqlClient" %>
<%@ Import Namespace="System.Reflection" %>
<%@ Import Namespace="System.Web.UI" %>
<%@ Import Namespace="System.Text" %>
<%@ Import Namespace="System.Collections.Generic" %>

<%@ Import Namespace="DotNetNuke" %>
<%@ Import Namespace="DotNetNuke.Data" %>
<%@ Import Namespace="DotNetNuke.Security" %>

<!--
= DNN Search and Replace tool = 
Created by: Horacio Judeikin
License: Distributed under the terms of the GNU General Public License
First WinForms version: March 3, 2005 (a.k.a. DNN UrlFixer)
First ASPX version: October 31, 2008 
This version: 1.8 | Apr 3, 2013
Get the latest version from: http://www.evotiva.com/Products/DNNSearchReplace.aspx
-->

<script language="C#" runat="server">  

    #region ---------------------- Documentation ----------------------

    /*
     * = DNN Search and Replace tool = 
     * A generic DNN Search and Replace tool
     * 
		Configuration
		=============
		The "Settings" region defines the tables available for the tool (where the tool can search and replace).
		You can add more (or remove), specifying the table name and column where to search & replace. 
		You do this adding each value pair in the LoadItems() defined below. 
        You can even add the same table and a different column to search/replace.
		You can add any table, for which the following conditions are met:
		- you are searching in a string column (varchar, nvarchar, text, ntext,..)

		To handle long-time running operations you may have to set or increase  
		the executionTimeout value defined for <httpRuntime> in the web.config file.
		e.g.: <httpRuntime .... executionTimeout="96000" .... />

		Usage
		=============
		This ASPX page is self-contained. To work, it does not need any external stored procedure, DLL, vb or cs file. 
        No module to install/register.
		Just upload the ASPX page to your site (in any folder, even the root) and browse to it.
		Before browsing to this page, you must be logged in as a super user (host).

		Select the table (tablesList) where you want to search and/or replace data on the configured column (columnsList)
		You can enter a term to search, and once you click on <search> a grid will display the results 
        (may be in the future paging/sorting could be implemented)
		The search  will look for the given string on the select table/column. The search will match 'contains...'
		The search  will be case sensitive depending on your database configuration (the database collation). 
        Typically (by default), the search is case-insensitive.

		Clicking on <Search & Replace> will replace every instance of the search string with the defined 'Replace With' string.
		An empty 'Replace With' is valid. Therefore, you can 'delete' text.
		The replace operation is case-insensitive.
     * 
    */

    #endregion

    #region ---------------------- Settings ----------------------

    class SearchItem
    {
        private string _TableName;
        private string _TableColumn;
                
        public string TableName {get { return _TableName; } set {_TableName = value;}  }
        public string TableColumn {get { return _TableColumn; } set {_TableColumn = value;}  }
        public string Definition {get { return "Table " + TableName + "  within Column " + TableColumn; } }
        public string Values {get { return TableName + separator + TableColumn; } }

        public SearchItem() {}

        public SearchItem(string table, string column)
        {
            TableName = table;
            TableColumn = column;
        }
    }

    private const string separator = "!";

    private List<SearchItem> list = new List<SearchItem>();
    
    private void LoadItems()
    {
        list.Clear();
        list.Add(new SearchItem("HtmlText", "Content"));
        list.Add(new SearchItem("ModuleSettings", "SettingValue"));
        list.Add(new SearchItem("TabModuleSettings", "SettingValue"));
        list.Add(new SearchItem("Tabs", "Url"));
        list.Add(new SearchItem("Urls", "Url"));
        list.Add(new SearchItem("UrlTracking", "Url"));
        list.Add(new SearchItem("Links", "Url"));
        list.Add(new SearchItem("DnnForge_NewsArticles_Page", "PageText"));
        list.Add(new SearchItem("DnnForge_NewsArticles_Article", "Summary"));
        list.Add(new SearchItem("DnnForge_NewsArticles_Article", "Url"));
        list.Add(new SearchItem("activeforums_Content", "Body"));
        list.Add(new SearchItem("EventsCalendar", "Content"));
    }
        
    #endregion

    
    #region ---------------------- Events ----------------------

    ///////////////////////////////////////////////////////////////////////
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (!Page.IsPostBack)
            {
                UserController usrCtrl = new UserController();
                UserInfo usrInfo = UserController.GetUserByName(Null.NullInteger, Context.User.Identity.Name);
                if (usrInfo == null || !usrInfo.IsSuperUser)
                {
                    lblCurrentUser.Text = "No superuser is logged in - page disabled.<br />You must be a logged in Super User (e.g. 'host') to use this page.";
                    pnlForm.Visible = false;
                }
                else
                {
                    lblCurrentUser.Text = string.Format("Current superuser: {0} ({1})", usrInfo.DisplayName, usrInfo.Username);
                    pnlForm.Visible = true;

                    CreateTempProcs();

                    LoadItems();

                    drpTables.DataSource = list; // tablesList;
                    drpTables.DataTextField = "Definition";
                    drpTables.DataValueField = "Values";
                    drpTables.DataBind();
                    drpTables.SelectedIndex = 0;
                    drpTables_SelectedIndexChanged(null, null);                   
                }
            }
        }
        catch (Exception ex)
        {
            lblError.Text = ex.ToString();
            ClearResults();
            pnlForm.Visible = false;
        }
    }


    ///////////////////////////////////////////////////////////////////////
    protected void drpTables_SelectedIndexChanged(object sender, EventArgs e)
    {
        lblTableDesciption.Text = string.Format("Searching on table: <b>{0}</b>, within the column: <b>{1}</b>", this.TableName, this.ColumnSearchName);
    }

    
    ///////////////////////////////////////////////////////////////////////
    protected void btnSearch_Click(object sender, EventArgs e)
    {
        try
        {
            if  (txtSearchFor.Text.Trim() != string.Empty)
            {
                ClearResults();
                this.grdResults.DataSource = GetSearchResults(txtSearchFor.Text);
                this.grdResults.DataBind();
                lblError.Text = "Search completed.";
            }
        }
        catch (Exception ex)
        {
            lblError.Text = ex.ToString();
        }
    }
    
    ///////////////////////////////////////////////////////////////////////
    protected void btnSearchAndReplaceAll_Click(object sender, EventArgs e)
    {
        try
        {
            if (txtSearchFor.Text.Trim() != string.Empty)
            {
                LoadItems();
                int totalRowCount = 0;
                lblResults.Text = "Replaced rows:<br /><table><tr><td>Table</td><td>Column</td><td>Rows</td></tr>";
                foreach (SearchItem item in list)
                {
                    int rowCount = PerformSearchAndReplace(item.TableName, item.TableColumn, txtSearchFor.Text.Trim(), txtReplaceWith.Text);
                    //lblResults.Text += "<br />Replaced rows count on Table " + item.TableName + " within Column " + item.TableColumn + ": ";
                    string result = rowCount.ToString();
                    if (rowCount >= 0)                    
                        totalRowCount += rowCount;
                        //lblResults.Text +=  rowCount.ToString();
                    else
                        result = "(table/column does not exists)";

                    lblResults.Text += String.Format("<tr><td>{0}</td><td>{1}</td><td>{2}</td></tr>", item.TableName, item.TableColumn, result);
                }
                lblResults.Text += String.Format("<tr><td colspan=\"2\">Replaced rows count (total, for all tables) = </td><td>{0}</td></tr></table>", totalRowCount.ToString());                
            }
            else
            {
                lblResults.Text = "<br />Please specify a search string.";
            }
        }
        catch (Exception ex)
        {
            lblError.Text = ex.ToString();
        }   
    }

    ///////////////////////////////////////////////////////////////////////
    protected void btnSearchAndReplace_Click(object sender, EventArgs e)
    {
        try
        {
            if (txtSearchFor.Text.Trim() != string.Empty)
            {
                int rowCount = PerformSearchAndReplace(this.TableName, this.ColumnSearchName, txtSearchFor.Text, txtReplaceWith.Text);                    
                //int rowCount = (int)DotNetNuke.Data.DataProvider.Instance().ExecuteScalar("EvotivaSearchAndReplace",
                //                                                                            this.TableSchema,
                //                                                                            Config.GetObjectQualifer() + this.TableName,
                //                                                                            this.ColumnSearchName,
                //                                                                            txtSearchFor.Text.Trim(),
                //                                                                            txtReplaceWith.Text);
                lblResults.Text = "<br />Replaced rows count: " + rowCount.ToString() + "<br />";
            }
            else
            {
                lblResults.Text = "<br />Please specify a search string.";
            }
        }
        catch (Exception ex)
        {
            lblError.Text = ex.ToString();
        }
    }    

    #endregion

    
    #region ---------------------- Private Properties ----------------------

    ///////////////////////////////////////////////////////////////////////
    private string TableName 
    {
        get
        {
            return drpTables.SelectedValue.Split(separator.ToCharArray())[0]; 
        }
    }

    private string ColumnSearchName
    {
        get
        {
            return drpTables.SelectedValue.Split(separator.ToCharArray())[1]; 
        }
    }

    private string TableSchema
    {
        get
        {
            return Config.GetDataBaseOwner().Remove(Config.GetDataBaseOwner().Length - 1);
        }
    }

    #endregion

    
    #region ---------------------- Private Methods ----------------------

    ///////////////////////////////////////////////////////////////////////
    private void ClearResults()
    {
        this.lblError.Text = this.lblResults.Text = string.Empty;
        this.grdResults.DataSource = null;
        this.grdResults.DataBind();
    }

    ///////////////////////////////////////////////////////////////////////
    private string ReplaceTokens(string sqlQuery)
    {
        return sqlQuery.Replace("$TABLENAME", this.TableName).Replace("$COLUMNSEARCHNAME", this.ColumnSearchName);
    }
        
    ///////////////////////////////////////////////////////////////////////
    private IDataReader GetSearchResults(string searchString)
    {
        if (searchString == null || searchString == string.Empty)
            return null;
        
        // will match 'contains...'       
        string sqlSearchQuery
            = @" SELECT * 
                   FROM {databaseOwner}{objectQualifier}$TABLENAME 
                  WHERE convert(nvarchar(max), $COLUMNSEARCHNAME) like '%' + @SearchString + '%' ";
                     //OR $COLUMNSEARCHNAME like @SearchString + '%' ";

        sqlSearchQuery = ReplaceTokens(sqlSearchQuery);

        SqlParameter parmSearchString = new SqlParameter("@SearchString", SqlDbType.VarChar, 1024);
        parmSearchString.Value = searchString;

        return (IDataReader)DotNetNuke.Data.DataProvider.Instance().ExecuteSQL(sqlSearchQuery, parmSearchString);
    }
    
    ///////////////////////////////////////////////////////////////////////
    private int PerformSearchAndReplace(string tableName, string columnName, string searchFor, string replaceWith)
    {
        int rowCount = (int)DotNetNuke.Data.DataProvider.Instance().ExecuteScalar("EvotivaSearchAndReplace",
                                                                                            this.TableSchema,
                                                                                            Config.GetObjectQualifer() + tableName,
                                                                                            columnName,
                                                                                            searchFor,
                                                                                            replaceWith);
        return rowCount;        
    }
    
    #endregion

    
    #region ---------------------- Database stuff ----------------------

    ///////////////////////////////////////////////////////////////////////
    private string ExecuteScript(string script)
    {
        string Exceptions = string.Empty;
        string[] delimiter = {"GO" + ControlChars.CrLf};
        string[] arrSQL =  script.Split(delimiter, StringSplitOptions.RemoveEmptyEntries);

        foreach (string sql in arrSQL) {
            if (sql.Trim() != string.Empty)
            {
                try {
                    string s = DotNetNuke.Data.DataProvider.Instance().ExecuteScript(sql);
					Exceptions += s;
                }
                catch (SqlException objException) {
                    Exceptions += objException.ToString();
                }
            }
        }

        return Exceptions;
    }

    ///////////////////////////////////////////////////////////////////////
    private void CreateTempProcs()
    {
        string sqlProcs = @"
                    if exists (select * from dbo.sysobjects 
                                where id = object_id(N'{databaseOwner}{objectQualifier}EvotivaSearchAndReplace') 
                                  and OBJECTPROPERTY(id, N'IsProcedure') = 1)
                        DROP PROCEDURE {databaseOwner}{objectQualifier}EvotivaSearchAndReplace
                    GO

                    CREATE PROCEDURE {databaseOwner}{objectQualifier}EvotivaSearchAndReplace
                    --http://www.mssqltips.com/tip.asp?tip=1522                    
                        @schema sysname, 
                        @table sysname,
                        @columnName sysname,
                        @stringToFind VARCHAR(1000),
                        @stringToReplace VARCHAR(1000)
                    AS 

                    SET NOCOUNT ON

                    DECLARE @count INT
                    DECLARE @sqlCommand VARCHAR(8000)
                    DECLARE @where VARCHAR(8000)
                    DECLARE @object_id INT
                                        
                    BEGIN TRY 

                        SET @sqlCommand = 'UPDATE ' + 
			                                @schema + '.' + @table + 
			                                ' SET [' + @columnName + '] 
			                                = REPLACE(convert(nvarchar(max),[' + @columnName + ']),''' 
				                                + @stringToFind + ''',''' + @stringToReplace + ''')'

                        SET @where = ' WHERE [' + @columnName + '] LIKE ''%' 
                                + @stringToFind + '%'''

                        EXEC( @sqlCommand + @where)

                        SET @count = @@ROWCOUNT
                        SELECT @count
                    /*
                        IF @count > 0
                            BEGIN
                            PRINT @sqlCommand + @where
                            PRINT 'Updated: ' + CONVERT(VARCHAR(10),@count)
                            PRINT '----------------------------------------------------'
                        END
                    */	        
                    END TRY
                    BEGIN CATCH
                        SELECT -1
                    END CATCH
                    GO
              ";

        string result = ExecuteScript(sqlProcs);
        if (result != string.Empty)
        {
            throw new Exception(result);
        }
    }

    #endregion

</script>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="pragma" content="no-cache" />
    <meta name="author" content="Horacio Judeikin" />
    <meta name="description" content="A generic DNN Search and Replace tool" />
    <link rel="stylesheet" type="text/css" href="/Portals/_default/default.css" />
    <title>DNN Search and Replace</title>
</head>

<body style="margin-top: 10px; margin-left: 10px;">
    <form id="frmFindAndReplace" runat="server">
    <div>
        <h2>DNN Search and Replace tool (case insensitive)</h2>
		<p>
		<span class="Normal">v. 1.7 | by <a class="CommandButton" target="_blank" href="http://www.evotiva.com/Modules/DNNSearchReplace.aspx">Evotiva Software</a>
        <br />Note: You can configure this tool to perform search and replace operations on any table/column.
        </span>
        </p>
        <p>
            <asp:Label ID="lblCurrentUser" runat="server" Text="" CssClass="SubHead"></asp:Label>
        </p>
        
        <asp:Panel ID="pnlForm" runat="server">
        
			<table>
			<tr>
			<td><span class="NormalBold">Search on:</span></td>
			<td><asp:DropDownList 
                ID="drpTables"  CssClass="NormalTextBox" AutoPostBack="true" runat="server" 
                onselectedindexchanged="drpTables_SelectedIndexChanged"></asp:DropDownList>
            &nbsp; &nbsp;<asp:Label ID="lblTableDesciption" Text="" CssClass="Normal" runat="server" ></asp:Label></td>
			</tr>
			<tr>
			<td><span class="NormalBold">Search For:</span></td>
			<td><asp:TextBox ID="txtSearchFor" CssClass="NormalTextBox" Columns="100" runat="server"></asp:TextBox></td>
			</tr>
			<tr>
			<td><span class="NormalBold">Replace With:</span></td>
			<td><asp:TextBox ID="txtReplaceWith" CssClass="NormalTextBox" Columns="100" runat="server"></asp:TextBox></td>
			</tr>			
			</table>
			
			
            <p>            
            <asp:Button ID="btnSearch" CssClass="CommandButton" runat="server" Text="Search only" OnClick="btnSearch_Click" /> <%-- OnClientClick="javascript:return confirm('Confirm search');" --%>
            &nbsp; &nbsp; 
            <asp:Button ID="btnSearchAndReplace" runat="server" Text="Replace" CssClass="CommandButton"
                OnClick="btnSearchAndReplace_Click" 
                OnClientClick="javascript:return confirm('Confirm search & replace?');" />
            &nbsp; &nbsp; 
            <asp:Button ID="btnSearchAndReplaceAll" runat="server" Text="Replace ALL" CssClass="CommandButton"
                OnClick="btnSearchAndReplaceAll_Click" 
                OnClientClick="javascript:return confirm('Confirm search & replace IN ALL THE DEFINED TABLE-COLUMN PAIRS?');" />
            </p>
            <p></p>
            <asp:Label ID="lblResults" runat="server" Text="" CssClass="NormalBold"></asp:Label>
            <p></p>
            <asp:Label ID="lblError" runat="server" Text="" CssClass="NormalRed"></asp:Label>
            <p></p>
            
            <hr />
            <asp:GridView ID="grdResults" runat="server">
                <AlternatingRowStyle BackColor="#CCFFFF" />
            </asp:GridView>
          
        </asp:Panel>
    </div>
    </form>
</body>
</html>

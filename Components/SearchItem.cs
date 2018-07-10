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

namespace Evotiva.Modules.DNNSearchAndReplace
{
    public class SearchItem
    {

        #region Private Member
        
        private const string Separator = "!";
        private const string Indicator = " -> ";

        #endregion


        #region Constructors

        public SearchItem()
        {            
        }

        public SearchItem(string table, string column)
        {
            TableName = table;
            ColumnName = column;
        }

        #endregion


        #region Properties

        public string TableName { get; set; }

        public string ColumnName { get; set; }
        
        public string ColumnType { get; set; }
        
        public string ColumnLenght { get; set; }

        public string Id => TableName + Separator + ColumnName;

        public string Description => TableName + Indicator + ColumnName;

        public static string GetTableNameFromId(string id)
        {
            return id.Split(Separator.ToCharArray())[0]; 
        }

        public static string GetColumnNameFromId(string id)
        {
            return id.Split(Separator.ToCharArray())[1];
        }

        #endregion

    }
}
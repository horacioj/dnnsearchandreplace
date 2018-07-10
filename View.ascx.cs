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
using System.Web;
using DotNetNuke.Services.Exceptions;
using DotNetNuke.UI.Skins;
using DotNetNuke.UI.Skins.Controls;
using Telerik.Web.UI;

namespace Evotiva.Modules.DNNSearchAndReplace
{

    public partial class View : DotNetNuke.Entities.Modules.PortalModuleBase
    {
        #region Event Handlers

        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);
            cmdSearch.Click += OnCmdSearchClick;
            cmdReplace.Click += OncmdReplaceClick;
        }

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            try
            {
                if (!IsAuthorizedUser()) return;

                if (Page.IsPostBack) return;

                CreateHelperDatabaseObjects();
                SetupUi();
            }
            catch (Exception exc) // Module failed to load
            {
                Exceptions.ProcessModuleLoadException(this, exc);
            }
        }

        protected void OnCmdSearchClick(object sender, EventArgs e)
        {
            try
            {
                PerformSearch(cboSearchTarget.CheckedItems, chkHtmlEncode.Checked, txtSearchFor.Text.Trim());
            }
            catch (Exception exc) // Module failed to load
            {
                Exceptions.ProcessModuleLoadException(this, exc);
            }
        }

        private void OncmdReplaceClick(object sender, EventArgs e)
        {
            try
            {
                PerformReplace(cboSearchTarget.CheckedItems, chkHtmlEncode.Checked, txtSearchFor.Text.Trim(), txtReplaceWith.Text);
            }
            catch (Exception exc) // Module failed to load
            {
                Exceptions.ProcessModuleLoadException(this, exc);
            }
        }

        #endregion

       
        #region Private Members

        private bool IsReplace
        {
            get => ViewState["IsReplace"] != null && bool.Parse(ViewState["IsReplace"].ToString());
            set => ViewState["IsReplace"] = value;
        }

        private bool IsAuthorizedUser()
        {
            if (UserInfo.IsSuperUser) return UserInfo.IsSuperUser;
            Skin.AddModuleMessage(this, LocalizeString("AccessDenied"), ModuleMessage.ModuleMessageType.RedError);
            divMain.Visible = false;
            return UserInfo.IsSuperUser;
        }

        private void SetupUi()
        {
            lblInfo.Text =
                $@"This module was created by <a href=""http://www.evotiva.com"" target=""_blank"">Evotiva</a>, makers of 
DNN's premier backup/restore/clone module <a href=""http://www.evotiva.com/Products/DNNBackup"" target=""_blank"">DNNBackup</a>, 
and its perfect companion <a href=""http://www.evotiva.com/Products/DNNUpgrade"" target=""_blank"">DNNUpgrade</a>, 
DNN's best extended storage provider (UNC, FTP, Azure, Amazon S3, DropBox. Box, OneDrive, Google Drive, Sharepoint, etc.) <a href=""http://www.evotiva.com/Products/DNNGlobalStorage"" target=""_blank"">DNN GlobalStorage</a>, 
A flexible Documents and Files Manager for DNN with many unique and powerful options <a href=""http://www.evotiva.com/Products/DNN-User-Files"" target=""_blank"">DNN UserFiles</a>, 
and a simple (yet powerful) gallery for your local or off-site media files <a href=""http://www.evotiva.com/Products/DNNGlobalGallery"" target=""_blank"">DNN GlobalGallery</a>.";

            cmdSearch.ToolTip = LocalizeString("cmdSearch.ToolTip");
            cmdReplace.ToolTip = LocalizeString("cmdReplace.ToolTip");
            divSearchResults.Visible = divReplaceResults.Visible = divOperationResults.Visible = false;
            BindSearchTargets();
        }

        private bool ValidateUi(IList<RadComboBoxItem> checkedItems, bool htmlEncode, ref string searchText, bool doReplace)
        {
            if (string.IsNullOrEmpty(searchText))
            {
                Skin.AddModuleMessage(this, LocalizeString("NoSearchText"), ModuleMessage.ModuleMessageType.YellowWarning);
                return false;
            }

            if (checkedItems.Count <= 0)
            {
                var msg = string.Format(LocalizeString("NoSearchItems"), LocalizeString("Search"));
                Skin.AddModuleMessage(this, msg, ModuleMessage.ModuleMessageType.YellowWarning);
                return false;
            }

            if (htmlEncode)
            {
                searchText = HttpUtility.HtmlEncode(searchText);
            }


            // Show either the single-table search results, or the multi-table search results
            divSearchResults.Visible = (checkedItems.Count == 1);
            divReplaceResults.Visible = (checkedItems.Count == 1 && doReplace);
            divOperationResults.Visible = (checkedItems.Count > 0);

            return true;
        }

        private void CreateHelperDatabaseObjects()
        {
            SqlDataProvider.CreateHelperDatabaseObjects();
        }

        private void BindSearchTargets()
        {
            var settings = new SearchAndReplaceSettings(ModuleId);
            var searchItems = settings.SearchTargts;

            cboSearchTarget.DataTextField = "Description";
            cboSearchTarget.DataValueField = "Id";
            cboSearchTarget.DataSource = searchItems;
            cboSearchTarget.DataBind();
        }


        private void PerformSearch(IList<RadComboBoxItem> checkedItems, bool htmlEncode, string searchText)
        {
            PerformOperation(checkedItems, htmlEncode, searchText, string.Empty, false);
        }

        private void PerformReplace(IList<RadComboBoxItem> checkedItems, bool htmlEncode, string searchText, string replaceText)
        {
            PerformOperation(checkedItems, htmlEncode, searchText, replaceText, true);
        }

        private void PerformOperation(IList<RadComboBoxItem> checkedItems, bool htmlEncode, string searchText, string replaceText, bool doReplace)
        {
            if (!ValidateUi(checkedItems, htmlEncode, ref searchText, doReplace)) return;

            IsReplace = doReplace;

            var operationResults = new List<OperationResult>();
            foreach (var item in checkedItems)
            {
                var tableName = SearchItem.GetTableNameFromId(item.Value);
                var columnName = SearchItem.GetColumnNameFromId(item.Value);

                if (checkedItems.Count == 1) BindSearchResultsGrid(tableName, columnName, searchText);

                long rowCount;

                if (doReplace)
                {
                    rowCount = SqlDataProvider.PerformReplace(tableName, columnName, searchText, replaceText);
                    if (checkedItems.Count == 1) BindReplaceResultsGrid(tableName, columnName, replaceText);
                }
                else
                {
                    rowCount = SqlDataProvider.GetSearchResultsCount(tableName, columnName, searchText);   
                }
                
                operationResults.Add(new OperationResult(tableName, columnName, rowCount));
            }
            grdOperationResults.DataSource = operationResults;
            grdOperationResults.DataBind();
        }
        
        protected void OnGrdOperationResultsItemCommand(object source, GridCommandEventArgs e)
        {
            switch (e.CommandName.ToLower())
            {
                case "searchdetails":
                    var row = e.Item as GridDataItem;
                    if (row != null)
                    {
                        row.Selected = true;
                        var tableName = row["TableName"].Text;
                        var columnName = row["ColumnName"].Text;
                        var searchText = IsReplace ? txtReplaceWith.Text : txtSearchFor.Text.Trim();
                        divSearchResults.Visible = true;
                        BindSearchResultsGrid(tableName, columnName, searchText);
                    }
                    break;
            }           
        }

        private void BindReplaceResultsGrid(string tableName, string columnName, string searchText)
        {

            using (var dr = SqlDataProvider.GetSearchResults(tableName, columnName, searchText))
            {
                if (dr != null)
                {
                    grdReplaceResults.DataSource = dr;
                    grdReplaceResults.DataBind();
                    dr.Close();
                }
            }
        }

        private void BindSearchResultsGrid(string tableName, string columnName, string searchText)
        {
            using (var dr = SqlDataProvider.GetSearchResults(tableName, columnName, searchText))
            {
                if (dr != null)
                {
                    grdSearchResults.DataSource = dr;
                    grdSearchResults.DataBind();
                    dr.Close();
                }
            }
        }

        #endregion
    }

}

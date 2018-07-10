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
using DotNetNuke.Services.Exceptions;
using DotNetNuke.Entities.Modules;
using Telerik.Web.UI;

namespace Evotiva.Modules.DNNSearchAndReplace
{
    public partial class Settings : ModuleSettingsBase
    {
        
        #region Base Method Implementations

        public override void LoadSettings()
        {
            try
            {
                if (Page.IsPostBack) return;

                var settings = new SearchAndReplaceSettings(ModuleId);
                var searchItems = settings.SearchTargts;
               
                // Load UI
                foreach (var item in searchItems)
                {
                    lstSelectedSearchTargets.Items.Add(new RadListBoxItem(item.Description, item.Id));
                }
            }
            catch (Exception exc) //Module failed to load
            {
                Exceptions.ProcessModuleLoadException(this, exc);
            }
        }

        public override void UpdateSettings()
        {
            try
            {
                // NOTE: will fail in chrome if zoom != 100% because of a Telerik bug.
                // https://www.telerik.com/forums/system-formatexception-78e82e51af27
                // Error appears only on Google Chrome when the page is zoomed in/out.
                // Temporary workaround: Change the Zoom to 100 %.

                var searchItems = new List<SearchItem>();
                foreach (RadListBoxItem item in lstSelectedSearchTargets.Items)
                {
                    var tableName = SearchItem.GetTableNameFromId(item.Value);
                    var columnName = SearchItem.GetColumnNameFromId(item.Value);
                    var searchItem = new SearchItem(tableName, columnName);
                    searchItems.Add(searchItem);
                }
                var settings = new SearchAndReplaceSettings(ModuleId) {SearchTargts = searchItems};
            }
            catch (Exception exc) //Module failed to load
            {
                Exceptions.ProcessModuleLoadException(this, exc);
            }
        }

        #endregion


        #region Event Handlers
        
        protected void OnGrdAvailableSearchTargetsNeedDataSource(object source, GridNeedDataSourceEventArgs e)
        {
            var items = SqlDataProvider.GetAllPossibleSearchTargets();
            grdAvailableSearchTargets.DataSource = items;
        }

        #endregion
    }

}


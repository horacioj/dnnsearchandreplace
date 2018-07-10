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

using System.Collections;
using System.Collections.Generic;
using System.Linq;
using DotNetNuke.Common.Utilities;
using DotNetNuke.Entities.Modules;

namespace Evotiva.Modules.DNNSearchAndReplace
{
    public class SearchAndReplaceSettings
    {
        #region Default Settings

        public const string SettingNameSearchTargets = "SearchTargets";
        public const string SettingNameSearchTargetsDefault = "";

        #endregion


        #region Private Memebers

        private readonly ModuleController _moduleCtrl = new ModuleController();
        private readonly int _moduleId;

        private Hashtable Settings => _moduleCtrl.GetModule(_moduleId).ModuleSettings;

        #endregion


        #region  Constructors

        public SearchAndReplaceSettings(int moduleId)
        {
            _moduleId = moduleId;
        }

        #endregion


        #region  Public Properties

        public List<SearchItem> SearchTargts
        {
            get
            {
                List<SearchItem> searchItems;
                var searchTargetsRaw = string.Empty;
                if (Settings.Contains(SettingNameSearchTargets))
                {
                    searchTargetsRaw = Settings[SettingNameSearchTargets].ToString();
                }
                if (string.IsNullOrEmpty(searchTargetsRaw))
                {
                    // Load default configuration
                    searchItems = new List<SearchItem>
                                      {
                                          new SearchItem(SqlDataProvider.FullDbObjectName("HtmlText"),
                                                         SqlDataProvider.QuoteName("Content")),
                                          new SearchItem(SqlDataProvider.FullDbObjectName("ModuleSettings"),
                                                         SqlDataProvider.QuoteName("SettingValue")),
                                          new SearchItem(SqlDataProvider.FullDbObjectName("TabModuleSettings"),
                                                         SqlDataProvider.QuoteName("SettingValue")),
                                          new SearchItem(SqlDataProvider.FullDbObjectName("Tabs"),
                                                         SqlDataProvider.QuoteName("Url")),
                                          new SearchItem(SqlDataProvider.FullDbObjectName("Urls"),
                                                         SqlDataProvider.QuoteName("Url")),
                                          new SearchItem(SqlDataProvider.FullDbObjectName("UrlTracking"),
                                                         SqlDataProvider.QuoteName("Url")),
                                          new SearchItem(SqlDataProvider.FullDbObjectName("Links"),
                                                         SqlDataProvider.QuoteName("Url")),
                                          new SearchItem(SqlDataProvider.FullDbObjectName("DnnForge_NewsArticles_Page"),
                                                         SqlDataProvider.QuoteName("PageText")),
                                          new SearchItem(SqlDataProvider.FullDbObjectName("DnnForge_NewsArticles_Article"),
                                                         SqlDataProvider.QuoteName("Summary")),
                                          new SearchItem(SqlDataProvider.FullDbObjectName("DnnForge_NewsArticles_Article"),
                                                         SqlDataProvider.QuoteName("Url")),
                                          new SearchItem(SqlDataProvider.FullDbObjectName("activeforums_Content"),
                                                         SqlDataProvider.QuoteName("Body")),
                                          new SearchItem(SqlDataProvider.FullDbObjectName("EventsCalendar"),
                                                         SqlDataProvider.QuoteName("Content"))
                                      };
                }
                else
                {
                    // Load saved configuration
                    searchItems = searchTargetsRaw.FromJson<List<SearchItem>>();
                }
                return searchItems.Where(SqlDataProvider.SearchTargetExists).ToList();

            }
            set => _moduleCtrl.UpdateModuleSetting(_moduleId, SettingNameSearchTargets, value.ToJson());
        }

        #endregion

    }
}
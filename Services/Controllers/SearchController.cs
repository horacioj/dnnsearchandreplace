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
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DotNetNuke.Entities.Controllers;
using DotNetNuke.Web.Api;
using DotNetNuke.Common.Utilities;
using System.Linq;
using Newtonsoft.Json;
using System.Text;
using Evotiva.DNNSearchAndReplace.Components;
using Evotiva.DNNSearchAndReplace.Services.ViewModels;
using System.Web;

namespace Evotiva.DNNSearchAndReplace.Services.Controllers
{
    [RequireHost]
    public class SearchController : DnnApiController
    {
        /// <summary>
        /// /DesktopModules/Evotiva.DNNSearchAndReplace/API/Search/Test
        /// </summary>
        [HttpGet]
        [AllowAnonymous]
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Design", "MA0076:Do not use implicit culture-sensitive ToString in interpolated strings", Justification = "No need...")]
        public HttpResponseMessage Test()
        {
            var isValid = IsValidRequest();
            var roles = string.Join(", ", UserInfo?.Roles);
            var name = UserInfo?.Username;
            return Request.CreateResponse(HttpStatusCode.OK, $"{DateTime.Now} | Hello! {name} | {roles} | Is Valid? {isValid}");
        }

        [HttpGet]
        [AllowAnonymous]
        public HttpResponseMessage IsAuthorized()
        {
            var isValid = IsValidRequest();
            return Request.CreateResponse(HttpStatusCode.OK, isValid.ToString().ToLowerInvariant());
        }

        /// <summary>
        /// Control authentication and authorization. Some are redundant, but better safe than sorry.
        /// </summary>
        private bool IsValidRequest()
        {
            if (UserInfo?.IsSuperUser == false) return false;
            if (UserInfo?.IsDeleted == true) return false;
            if (RequestContext?.IsLocal == false) return false;
            if (!string.Equals(Request?.Headers?.Referrer?.LocalPath, "/DesktopModules/admin/Dnn.PersonaBar/index.html", StringComparison.OrdinalIgnoreCase)) return false;
            return true;
        }

        [HttpGet]
        public HttpResponseMessage GetSettings()
        {
            var settings = new SettingsViewModel();

            var ctl = new HostController();
            var searchTargetsRaw = ctl.GetString(Utility.SettingNameSearchTargets);

            if (string.IsNullOrEmpty(searchTargetsRaw))
            {
                // Load default configuration
                settings.SearchTargts = new List<SearchItem>
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
                                      };
            }
            else
            {
                // Load saved configuration
                settings.SearchTargts = searchTargetsRaw.FromJson<List<SearchItem>>();
            }

            // Filter out non-existing targets
            settings.SearchTargts = settings.SearchTargts.Where(SqlDataProvider.SearchTargetExists);

            // Return Settings
            var res = Request.CreateResponse(HttpStatusCode.OK);
            res.Content = new StringContent(JsonConvert.SerializeObject(settings), Encoding.UTF8, "application/json");
            return res;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage SaveSettings(SettingsViewModel settings)
        {
            var ctl = new HostController();
            ctl.Update(key: Utility.SettingNameSearchTargets,
                       value: settings.SearchTargts.ToJson(),
                       clearCache: true);
            return Request.CreateResponse(HttpStatusCode.OK, "success");
        }

        [HttpGet]
        [ActionName("GetAllTargets")]
        public HttpResponseMessage GetAllPossibleSearchTargets()
        {
            var items = SqlDataProvider.GetAllPossibleSearchTargets();

            var res = Request.CreateResponse(HttpStatusCode.OK);
            res.Content = new StringContent(JsonConvert.SerializeObject(items), Encoding.UTF8, "application/json");
            return res;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage PerformSearch(PerformActiomSettingsViewModel settings)
        {
            var operationResults = new List<OperationResult>();

            if (settings.SearchTargets.Any() && !string.IsNullOrEmpty(settings.SearchText))
            {
                if (settings.HtmlEncode) settings.SearchText = HttpUtility.HtmlEncode(settings.SearchText);

                foreach (var item in settings.SearchTargets)
                {
                    var tableName = SearchItem.GetTableNameFromId(item.Id);
                    var columnName = SearchItem.GetColumnNameFromId(item.Id);
                    var pkColumns = SqlDataProvider.GetPkColumns(tableName);                    

                    var searchResults = SqlDataProvider.GetSearchResults(tableName, pkColumns, columnName, settings.SearchText);

                    if (searchResults.Count > 0)
                    {
                        if (settings.DoReplace)
                        {
                            _ = SqlDataProvider.PerformReplace(tableName, columnName, settings.SearchText, settings.ReplaceText);
                        }

                        operationResults.Add(new OperationResult(tableName, columnName, BuildColumnsList(columnName, pkColumns), searchResults.Data, searchResults.Count));
                    }
                }
            }

            var jsonResults = JsonConvert.SerializeObject(operationResults);
            var res = Request.CreateResponse(HttpStatusCode.OK);
            res.Content = new StringContent(jsonResults, Encoding.UTF8, "application/json");
            return res;
        }

        private static string BuildColumnsList(string columnName, IEnumerable<string> pkColumns)
        {
            var columnsList = new StringBuilder();
            columnsList.Append('[');

            var i = 0;
            foreach (var col in pkColumns)
            {
                i++;
                if (i > 1) columnsList.Append(',');

                columnsList.Append('{');
                columnsList.Append("\"field\": ");
                columnsList.Append('"');
                columnsList.Append(col);
                columnsList.Append('"');
                columnsList.Append(',');
                columnsList.Append("\"label\": ");
                columnsList.Append('"');
                columnsList.Append(col);
                columnsList.Append('"');
                columnsList.Append(',');
                columnsList.Append("\"sortable\": true,");
                columnsList.Append("\"searchable\": true");
                columnsList.Append('}');
            }

            if (!pkColumns.Contains(columnName, StringComparer.OrdinalIgnoreCase))
            {
                if (pkColumns.Any()) columnsList.Append(',');

                columnsList.Append('{');
                columnsList.Append("\"field\": ");
                columnsList.Append('"');
                columnsList.Append(columnName);
                columnsList.Append('"');
                columnsList.Append(',');
                columnsList.Append("\"label\": ");
                columnsList.Append('"');
                columnsList.Append(columnName);
                columnsList.Append('"');
                columnsList.Append(',');
                columnsList.Append("\"sortable\": false,");
                columnsList.Append("\"searchable\": true");
                columnsList.Append('}');
            }

            columnsList.Append(']');
            return columnsList.ToString();
        }
    }
}
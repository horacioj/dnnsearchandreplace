<%@ Control Language="C#" AutoEventWireup="false" Inherits="Evotiva.Modules.DNNSearchAndReplace.View"
    CodeBehind="View.ascx.cs" %>
<%@ Register TagPrefix="dnn" TagName="Label" Src="~/controls/LabelControl.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.UI.WebControls" Assembly="DotNetNuke.Web" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.UI.WebControls" Assembly="DotNetNuke" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.UI.WebControls" Assembly="DotNetNuke.Web.Deprecated" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Import Namespace="DotNetNuke.Services.Localization" %>

<div runat="server" id="divMain">
    <div id="divSearchForm" class="dnnForm dnnClear">
    
        <div runat="server" id="divSettings">
        <h2 id="dnnPanel-Settings" class="dnnFormSectionHead"><a href="#"><%=LocalizeString("PanelSettings")%></a></h2>
        <fieldset>
            <div class="dnnFormItem">
                <dnn:Label ID="plSearchTarget" runat="server" ControlName="cboSearchTarget" Suffix=":" />
                <dnn:DnnComboBox ID="cboSearchTarget" runat="server" CheckBoxes="True"
                    EnableCheckAllItemsCheckBox="True" EnableViewState="True" CssClass="evFixedSizeComboBox">
                    <HeaderTemplate>
                        <span runat="server" class="evComboBoxHeader"><%= LocalizeString("cboSearchTarget.Header")%></span>
                    </HeaderTemplate>
                </dnn:DnnComboBox>
            </div>
            <div class="dnnFormItem">
                <dnn:Label ID="plSearchFor" runat="server" ControlName="txtSearchFor" Suffix=":" />
                <asp:TextBox ID="txtSearchFor" runat="server" MaxLength="256" Width="500" />
            </div>
            <div class="dnnFormItem">
                <dnn:Label ID="plReplaceWith" runat="server" ControlName="txtReplaceWith" Suffix=":" />
                <asp:TextBox ID="txtReplaceWith" runat="server" MaxLength="256" Width="500" />
            </div>
            <div class="dnnFormItem">
                <dnn:Label ID="plHtmlEncode" runat="server" ControlName="chkHtmlEncode" Suffix=":" />
                <asp:CheckBox runat="server" ID="chkHtmlEncode" />
            </div>
            <ul class="dnnActions">
                <li><asp:LinkButton ID="cmdSearch" runat="server" resourcekey="cmdSearch" CssClass="dnnPrimaryAction" /></li>
                <li><asp:LinkButton ID="cmdReplace" runat="server" resourcekey="cmdReplace" CssClass="dnnSecondaryAction"/></li>
            </ul>
            <div style="margin-top: 5px;font-size: 90%;font-style: italic;"><asp:Label runat="server" ID="lblInfo"/></div>
        </fieldset>
        </div>
                
        <div runat="server" id="divOperationResults">
        <h2 id="dnnPanel-OperationResults" class="dnnFormSectionHead"><a href="#"><%=LocalizeString("PanelOperationResults")%></a></h2>
        <fieldset>
            <div>
                <dnn:DnnGrid ID="grdOperationResults" runat="server" EnableViewState="True" AutoGenerateColumns="False"
                    AllowPaging="False" AllowSorting="False" AllowFilteringByColumn="False" OnItemCommand="OnGrdOperationResultsItemCommand">
                    <MasterTableView>
                        <Columns>
                            <dnn:DnnGridBoundColumn UniqueName="TableName"  DataField="TableName"  HeaderText="Table"  MaxLength="150" />
                            <dnn:DnnGridBoundColumn UniqueName="ColumnName" DataField="ColumnName" HeaderText="Column" MaxLength="150" />
                            <dnn:DnnGridBoundColumn DataField="Count" HeaderText="Count" MaxLength="50" />
                            <dnn:DnnGridImageCommandColumn CommandName="SearchDetails" IconKey="Search" /> 
                        </Columns>
                        <NoRecordsTemplate>
                            <div class="dnnFormMessage dnnFormWarning">
                                <asp:Label ID="lblNoRecords" runat="server" resourcekey="lblNoRecords" />
                            </div>
                        </NoRecordsTemplate>
                    </MasterTableView>
                </dnn:DnnGrid>
            </div>
        </fieldset>
        </div>

        <div runat="server" id="divSearchResults">
        <h2 id="dnnPanel-SearchResults" class="dnnFormSectionHead"><a href="#"><%=LocalizeString("PanelSearchResults")%></a></h2>
        <fieldset>
            <div>
                <dnn:DnnGrid ID="grdSearchResults" runat="server" EnableViewState="False" AutoGenerateColumns="true"
                    AllowPaging="False" AllowSorting="False" AllowFilteringByColumn="False">
                    <MasterTableView>
                        <NoRecordsTemplate>
                            <div class="dnnFormMessage dnnFormWarning">
                                <asp:Label ID="lblNoRecords" runat="server" resourcekey="lblNoRecords" />
                            </div>
                        </NoRecordsTemplate>
                    </MasterTableView>
                </dnn:DnnGrid>
            </div>
        </fieldset>
        </div>
        
        <div runat="server" id="divReplaceResults">
        <h2 id="dnnPanel-ReplaceResults" class="dnnFormSectionHead"><a href=""><%=LocalizeString("PanelReplaceResults")%></a></h2>
        <fieldset>
            <div>
                <dnn:DnnGrid ID="grdReplaceResults" runat="server" EnableViewState="False" AutoGenerateColumns="true"
                    AllowPaging="False" AllowSorting="False" AllowFilteringByColumn="False">
                    <MasterTableView>
                        <NoRecordsTemplate>
                            <div class="dnnFormMessage dnnFormWarning">
                                <asp:Label ID="lblNoRecords" runat="server" resourcekey="lblNoRecords" />
                            </div>
                        </NoRecordsTemplate>
                    </MasterTableView>
                </dnn:DnnGrid>
            </div>
        </fieldset>
        </div>

    </div>
</div>

<script type="text/javascript">
    
    /* global jQuery, window, Sys */
    (function ($, Sys) {

        function expandPanels() {
            var clickToToggleSelector = "h2.dnnFormSectionHead a";

            $(clickToToggleSelector).each(function (i, value) {
                var $clickToToggleElement = $(value),
                    sectionHeadSelectorCookieId = $clickToToggleElement.parent().attr("id").replace(/[^a-zA-Z0-9\-]+/g, ""),
                    panelSettingExists = dnn.dom.getCookie(sectionHeadSelectorCookieId) !== null;

                if (!panelSettingExists)
                    $(clickToToggleSelector + ':not(.dnnSectionExpanded)').click();
            });
        }

        function setupSearchForm() {

            $('#divSearchForm').dnnPanels();
            expandPanels();

            $('#<%= cmdReplace.ClientID %>').dnnConfirm({
                text: '<%= LocalizeString("PerformReplace.Text") %>',
                yesText: '<%= Localization.GetSafeJSString("Yes.Text", Localization.SharedResourceFile) %>',
                noText: '<%= Localization.GetSafeJSString("No.Text", Localization.SharedResourceFile) %>',
                title: '<%= Localization.GetSafeJSString("Confirm.Text", Localization.SharedResourceFile) %>'
            });            
        }

        $(document).ready(function () {
            setupSearchForm();
            Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function () {
                setupSearchForm();
            });
        });

    } (jQuery, window.Sys));

</script>

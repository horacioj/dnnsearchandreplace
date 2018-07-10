<%@ Control Language="C#" AutoEventWireup="false" Inherits="Evotiva.Modules.DNNSearchAndReplace.Settings" 
    Codebehind="Settings.ascx.cs" %>
<%@ Register TagPrefix="dnn" TagName="Label" Src="~/controls/LabelControl.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.UI.WebControls" Assembly="DotNetNuke.Web" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.UI.WebControls" Assembly="DotNetNuke" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.UI.WebControls" Assembly="DotNetNuke.Web.Deprecated" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="telerik"  Namespace="Telerik.Web.UI" Assembly="Telerik.Web.UI" %>
<%@ Import Namespace="DotNetNuke.Services.Localization" %>

<div id="divSearchSettingsForm" class="dnnForm">
 
    <h2 id="dnnPanel-SearchTargets" class="dnnFormSectionHead"><a href=""><%=LocalizeString("PanelSearchTargets")%></a></h2>
    <fieldset class="dnnClear">
    
    <div class="dnnClear dnnLeft" style="width:500px;">
    <dnn:Label ID="plSelectedSearchTargets" runat="server" ControlName="grdSelectedSearchTargets" Suffix=":"  cssclass="dnnLeft" /> 
    </div>
    <div class="dnnClear dnnLeft">
    <dnn:DnnListBox runat="server" ID="lstSelectedSearchTargets" CheckBoxes="True" Width="500px" Height="200px" />
    <ul class="dnnActions">
        <li>
            <input type="button" id="cmdDeleteItems" name="cmdDeleteItems" onclick="deleteItems()" class="dnnSecondaryAction" />        
        </li>
    </ul>
    </div>
    
    <div class="dnnClear dnnLeft" style="width:500px;margin-top:30px;">
    <dnn:Label ID="plAvailableSearchTargets" runat="server" ControlName="grdAvailableSearchTargets" Suffix=":" cssclass="dnnLeft" /> 
    </div>
    <div class="dnnClear dnnLeft">
    <dnn:DnnGrid ID="grdAvailableSearchTargets" runat="server" EnableViewState="True" AutoGenerateColumns="False" Width="700px"
        AllowPaging="True" PageSize="10" AllowSorting="True" AllowFilteringByColumn="True" AllowMultiRowSelection="True" 
        OnNeedDataSource="OnGrdAvailableSearchTargetsNeedDataSource" >
        <ClientSettings><Selecting AllowRowSelect="True" UseClientSelectColumnOnly="True"/> <ClientEvents OnRowSelected="rowSelected" /></ClientSettings>
        <MasterTableView ClientDataKeyNames="TableName,ColumnName,ColumnType,ColumnLenght">
            <Columns>
                <telerik:GridClientSelectColumn UniqueName="ClientSelectColumn"  />
                <dnn:DnnGridBoundColumn UniqueName="TableName" DataField="TableName" HeaderText="Table" MaxLength="50" ShowFilterIcon="True" />
                <dnn:DnnGridBoundColumn UniqueName="ColumnName" DataField="ColumnName" HeaderText="Column" MaxLength="50"  ShowFilterIcon="True" />
                <dnn:DnnGridBoundColumn UniqueName="ColumnType" DataField="ColumnType" HeaderText="Type" MaxLength="10" AllowFiltering="False" />
                <dnn:DnnGridBoundColumn UniqueName="ColumnLenght" DataField="ColumnLenght" HeaderText="Lenght" MaxLength="5" AllowFiltering="False" />
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

<script type="text/javascript">

    /* global jQuery, window, Sys */
    (function ($, Sys) {

        function setupSearchSettingsForm() {
            $('#divSearchSettingsForm').dnnPanels();
            $('#cmdDeleteItems').val('<%= LocalizeString("cmdDeleteItems.Text") %>');
        }

        $(document).ready(function () {
            setupSearchSettingsForm();
            Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function () {
                setupSearchSettingsForm();
            });
        });

    } (jQuery, window.Sys));

    function rowSelected(sender, args) {

        var separator = "!";
        var indicator = " -> ";

        var item = new window.Telerik.Web.UI.RadListBoxItem();
        item.set_value(args.getDataKeyValue("TableName") + separator + args.getDataKeyValue("ColumnName"));
        item.set_text(args.getDataKeyValue("TableName") + indicator + args.getDataKeyValue("ColumnName"));

        var exists = false;
        var listBox = window.$find("<%= lstSelectedSearchTargets.ClientID %>");
        var itemsCount = listBox.get_items().get_count();
        if (itemsCount > 0) {            
            for (var i = 0; i < itemsCount; i++) {
                var citem = listBox.getItem(i);
                if (citem.get_value() == item.get_value()) {
                    exists = true;
                    break;
                }
            }
        }

        if (!exists) {
            listBox.trackChanges();
            item.set_selected(true);
            listBox.get_items().add(item);
            item.scrollIntoView();
            listBox.commitChanges();
        } else {
            alert('<%= Localization.GetSafeJSString(LocalizeString("ItemAlreadyExists.Text")) %>');
        }

    }

    function deleteItems() {

        var listBox = window.$find("<%= lstSelectedSearchTargets.ClientID %>");

        var selectedItems = listBox.get_checkedItems().length;

        if (selectedItems > 0) {
            if (!confirm('<%= Localization.GetSafeJSString("Confirm.Text", Localization.SharedResourceFile) %>'))
                return;
        }

        if (selectedItems == 0) {
            alert('<%= Localization.GetSafeJSString(LocalizeString("NoItemsSelected.Text")) %>');
            return;
        }

        listBox.trackChanges();
        for (var i = 0; i < selectedItems; i++) {
            var item = listBox.get_checkedItems()[0];
            listBox.deleteItem(item);
        }
        listBox.commitChanges();
    }
        
</script>
import $ from "jquery";
import data from "./data";

var appSettings = {
    appName: 'Evotiva.DnnSearchAndReplace',
    useDebugData: (window.dnn == undefined || window.dnn.utility == undefined),
};
if (!appSettings.useDebugData) { //window.dnn != undefined && window.dnn.utility != undefined && window.dnn.utility.sf != undefined) {
    appSettings.sf = window.dnn.utility.sf;
}
else {
    appSettings.sf = { setHeaders: function () { } };
}

var servicesBase = window.location.origin;
if (!appSettings.useDebugData) {
    servicesBase += window.dnn.getVar("sf_siteRoot", "/");
}
else {
    servicesBase += '/';
}
servicesBase += 'DesktopModules/Evotiva.DNNSearchAndReplace/API/Search/';

appSettings.serviceUrl = {
    isAuthorized: servicesBase + 'IsAuthorized',
    getSettings: servicesBase + 'GetSettings',
    saveSettings: servicesBase + 'SaveSettings',
    getAllTargets: servicesBase + 'GetAllTargets',
    performSearch: servicesBase + 'PerformSearch',
};

var appLocalization;
if (!appSettings.useDebugData) { //(window.dnn != undefined && window.dnn.utility != undefined && window.dnn.utility.resx != undefined && window.dnn.utility.resx.DNNSearchAndReplace != undefined) {
    appLocalization = window.dnn.utility.resx.DNNSearchAndReplace;
}
else {
    appLocalization = data.testLocalization;
}
appLocalization.aboutTitle = 'About';
appLocalization.aboutInfo = 'This module (<a href="https://www.evotiva.com/products/dnn-search-and-replace" target="_blank">DNN Search and Replace</a>) was created by <a href="https://www.evotiva.com" target="_blank">Evotiva</a>, makers of DNN\'s premier backup/restore/clone module <a href="https://www.evotiva.com/products/dnn-backup" target="_blank">DNNBackup</a>, and its perfect companion <a href="https://www.evotiva.com/products/dnn-upgrade" target="_blank">DNNUpgrade</a>, DNN\'s best extended storage provider (UNC, FTP, Azure, Amazon S3, DropBox. Box, OneDrive, Google Drive, Sharepoint, etc.) <a href="https://www.evotiva.com/products/dnn-global-storage" target="_blank">DNN GlobalStorage</a>, A flexible Documents and Files Manager for DNN with many unique and powerful options <a href="https://www.evotiva.com/products/dnn-user-files" target="_blank">DNN UserFiles</a>, and a simple (yet powerful) gallery for your local or off-site media files <a href="https://www.evotiva.com/products/dnn-global-gallery" target="_blank">DNN GlobalGallery</a>.';

//TODO: Vue: Why in DNN $buefy.dialog.confirm() does not work?
// self.$buefy.dialog.confirm({
//   message: util.appLocalization.confirm,
//   type: "is-danger",
//   hasIcon: false,
//   onConfirm: () => removeCheckedSelectedTargets(self),
// });
var dialog = {};
if (!appSettings.useDebugData) {
    dialog.confirm = function (caller, onConfirm, param, message) {
        if (message == undefined) { message = appLocalization.confirm; }
        window.dnn.utility.confirm(
            message,
            appLocalization.ok,
            appLocalization.cancel,
            () => onConfirm(caller, param),
            null
        );
    };
}
else {
    dialog.confirm = function (caller, onConfirm, param, message) {
        if (message == undefined) { message = appLocalization.confirm; }
        caller.$buefy.dialog.confirm({
            message: message,
            onConfirm: () => onConfirm(caller, param)
        });
    };
}

var getSettings = function () {
    return $.ajax({
        url: appSettings.serviceUrl.getSettings,
        beforeSend: appSettings.sf.setHeaders,
        dataType: "json",
    })
        .done(function (data) {
            return data;
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            if (!appSettings.useDebugData) {
                console.error(
                    `${appSettings.appName}: Request ${appSettings.serviceUrl.getSettings} failed. ${textStatus} ${errorThrown}`
                );
            }
        });
};

var isAuthorized = function () {
    return $.ajax({
        url: appSettings.serviceUrl.isAuthorized,
        beforeSend: appSettings.sf.setHeaders,
        dataType: "json",
    })
        .done(function (data) {
            return data == "true";
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            if (!appSettings.useDebugData) {
                console.error(
                    `${appSettings.appName}: Request ${appSettings.serviceUrl.isAuthorized} failed. ${textStatus} ${errorThrown}`
                );
            }
            return false;
        });
};

export default { appSettings, appLocalization, dialog, getSettings, isAuthorized }

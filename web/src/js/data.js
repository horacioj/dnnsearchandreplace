
const testLocalization = {
    cmdSearch: 'Search',
    cmdReplace: 'Search & Replace',
    selectedTargets: 'Selected Targets',
    total: 'Total:',
    totalChecked: 'Checked:',
    availableTargets: 'Available Targets',
    removeCheckedTargets: 'Remove Checked',
    saveSettings: 'Save Configuration',
    saveSettingsTooltip: 'Use "Save Configuration" to persist your current selection for a future session.',
    settingsSaved: 'The configuration was saved.',
    settingsNotSaved: 'ERROR: The configuration was NOT saved.',
    addCheckedTargets: 'Add Checked',
    tableNameHeader: 'Table',
    columnNameHeader: 'Column',
    columnTypeHeader: 'Type',
    columnLenghtHeader: 'Lenght',
    mainTab: 'Main',
    settingsTab: 'Configurtion',
    searchOptions: 'Search Options',
    configurationOptions: 'Configuration',
    confirmSearch: 'Do you conform the Search (search only) operation?',
    confirmReplace: 'Do you conform the Search and Replace operation?',
    confirm: 'Confirm?',
    ok: 'OK',
    cancel: 'Cancel',
    removedChecked: 'The selected items were removed from the selected search targets list.',
    addedChecked: 'The selected items were added to the selected search targets list.',
    accessDenied: 'You must be a Super User (a.k.a. "Host") to use this module.',
    searchFor: 'Search For',
    searchForTooltip: 'Text to search. Tip: sometimes in the database you have to search for the "html encoded" version of a given text. Otherwise it will be not found.',
    replaceWith: 'Replace With',
    replaceWithTooltip: 'Replacement Text. An empty (blank) value will be accepted. This allows you to "delete" text. Tip: Use the "html encoded" version of the text if it is needed.',
    htmlEncode: 'HTML Encode',
    htmlEncodeTooltip: '"HTML encode" the search and replacement text before interacting with the database. Note: Some modules saves the "html encoded" version of the text the user will see when interacting with the module.',
    hitsCount: 'Hits',
    searchResults: 'Search Results',
    searchResultsNotFound: 'Can you guess how many results your query yielded? Spoiler alert: None.',
    searchIn: 'Search In',
    searchInTargets: ' configured selected targets',
    wait: 'Please wait...',
};

const testData = {
    getSettingsResult: {
        "SearchTargts": [
            {
                "TableName": "dbo.[HtmlText]",
                "ColumnName": "[Content]",
                "ColumnType": "ntext",
                "ColumnLenght": "n/a",
                "Id": "dbo.[HtmlText]![Content]",
                "Description": "dbo.[HtmlText] -> [Content]"
            },
            {
                "TableName": "dbo.[HtmlText]",
                "ColumnName": "[Summary]",
                "ColumnType": "ntext",
                "ColumnLenght": "n/a",
                "Id": "dbo.[HtmlText]![Summary]",
                "Description": "dbo.[HtmlText] -> [Summary]"
            },
            {
                "TableName": "dbo.[HtmlTextLog]",
                "ColumnName": "[Comment]",
                "ColumnType": "nvarchar",
                "ColumnLenght": "4000",
                "Id": "dbo.[HtmlTextLog]![Comment]",
                "Description": "dbo.[HtmlTextLog] -> [Comment]"
            },
            {
                "TableName": "dbo.[TabModuleSettings]",
                "ColumnName": "[SettingValue]",
                "ColumnType": "nvarchar",
                "ColumnLenght": "MAX",
                "Id": "dbo.[TabModuleSettings]![SettingValue]",
                "Description": "dbo.[TabModuleSettings] -> [SettingValue]"
            }
        ]
    },
    getAllTargetsResult: [
        {
            "TableName": "dbo.[aspnet_Applications]",
            "ColumnName": "[ApplicationName]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[aspnet_Applications]![ApplicationName]",
            "Description": "dbo.[aspnet_Applications] -> [ApplicationName]"
        },
        {
            "TableName": "dbo.[aspnet_Applications]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[aspnet_Applications]![Description]",
            "Description": "dbo.[aspnet_Applications] -> [Description]"
        },
        {
            "TableName": "dbo.[aspnet_Applications]",
            "ColumnName": "[LoweredApplicationName]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[aspnet_Applications]![LoweredApplicationName]",
            "Description": "dbo.[aspnet_Applications] -> [LoweredApplicationName]"
        },
        {
            "TableName": "dbo.[aspnet_Membership]",
            "ColumnName": "[Comment]",
            "ColumnType": "ntext",
            "ColumnLenght": "n/a",
            "Id": "dbo.[aspnet_Membership]![Comment]",
            "Description": "dbo.[aspnet_Membership] -> [Comment]"
        },
        {
            "TableName": "dbo.[aspnet_Membership]",
            "ColumnName": "[Email]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[aspnet_Membership]![Email]",
            "Description": "dbo.[aspnet_Membership] -> [Email]"
        },
        {
            "TableName": "dbo.[aspnet_Membership]",
            "ColumnName": "[LoweredEmail]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[aspnet_Membership]![LoweredEmail]",
            "Description": "dbo.[aspnet_Membership] -> [LoweredEmail]"
        },
        {
            "TableName": "dbo.[aspnet_Membership]",
            "ColumnName": "[PasswordQuestion]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[aspnet_Membership]![PasswordQuestion]",
            "Description": "dbo.[aspnet_Membership] -> [PasswordQuestion]"
        },
        {
            "TableName": "dbo.[aspnet_Users]",
            "ColumnName": "[LoweredUserName]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[aspnet_Users]![LoweredUserName]",
            "Description": "dbo.[aspnet_Users] -> [LoweredUserName]"
        },
        {
            "TableName": "dbo.[aspnet_Users]",
            "ColumnName": "[UserName]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[aspnet_Users]![UserName]",
            "Description": "dbo.[aspnet_Users] -> [UserName]"
        },
        {
            "TableName": "dbo.[Assemblies]",
            "ColumnName": "[AssemblyName]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[Assemblies]![AssemblyName]",
            "Description": "dbo.[Assemblies] -> [AssemblyName]"
        },
        {
            "TableName": "dbo.[ATable1]",
            "ColumnName": "[otracolumn]",
            "ColumnType": "xml",
            "ColumnLenght": "n/a",
            "Id": "dbo.[ATable1]![otracolumn]",
            "Description": "dbo.[ATable1] -> [otracolumn]"
        },
        {
            "TableName": "dbo.[Authentication]",
            "ColumnName": "[LoginControlSrc]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[Authentication]![LoginControlSrc]",
            "Description": "dbo.[Authentication] -> [LoginControlSrc]"
        },
        {
            "TableName": "dbo.[Authentication]",
            "ColumnName": "[LogoffControlSrc]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[Authentication]![LogoffControlSrc]",
            "Description": "dbo.[Authentication] -> [LogoffControlSrc]"
        },
        {
            "TableName": "dbo.[Authentication]",
            "ColumnName": "[SettingsControlSrc]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[Authentication]![SettingsControlSrc]",
            "Description": "dbo.[Authentication] -> [SettingsControlSrc]"
        },
        {
            "TableName": "dbo.[CKE_Settings]",
            "ColumnName": "[SettingName]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "300",
            "Id": "dbo.[CKE_Settings]![SettingName]",
            "Description": "dbo.[CKE_Settings] -> [SettingName]"
        },
        {
            "TableName": "dbo.[CKE_Settings]",
            "ColumnName": "[SettingValue]",
            "ColumnType": "ntext",
            "ColumnLenght": "n/a",
            "Id": "dbo.[CKE_Settings]![SettingValue]",
            "Description": "dbo.[CKE_Settings] -> [SettingValue]"
        },
        {
            "TableName": "dbo.[ContentItems]",
            "ColumnName": "[Content]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[ContentItems]![Content]",
            "Description": "dbo.[ContentItems] -> [Content]"
        },
        {
            "TableName": "dbo.[ContentItems]",
            "ColumnName": "[ContentKey]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[ContentItems]![ContentKey]",
            "Description": "dbo.[ContentItems] -> [ContentKey]"
        },
        {
            "TableName": "dbo.[ContentItems_MetaData]",
            "ColumnName": "[MetaDataValue]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[ContentItems_MetaData]![MetaDataValue]",
            "Description": "dbo.[ContentItems_MetaData] -> [MetaDataValue]"
        },
        {
            "TableName": "dbo.[ContentWorkflowActions]",
            "ColumnName": "[ActionSource]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[ContentWorkflowActions]![ActionSource]",
            "Description": "dbo.[ContentWorkflowActions] -> [ActionSource]"
        },
        {
            "TableName": "dbo.[ContentWorkflowLogs]",
            "ColumnName": "[Comment]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[ContentWorkflowLogs]![Comment]",
            "Description": "dbo.[ContentWorkflowLogs] -> [Comment]"
        },
        {
            "TableName": "dbo.[ContentWorkflows]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[ContentWorkflows]![Description]",
            "Description": "dbo.[ContentWorkflows] -> [Description]"
        },
        {
            "TableName": "dbo.[ContentWorkflowSources]",
            "ColumnName": "[SourceType]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[ContentWorkflowSources]![SourceType]",
            "Description": "dbo.[ContentWorkflowSources] -> [SourceType]"
        },
        {
            "TableName": "dbo.[ContentWorkflowStates]",
            "ColumnName": "[OnCompleteMessageBody]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "1024",
            "Id": "dbo.[ContentWorkflowStates]![OnCompleteMessageBody]",
            "Description": "dbo.[ContentWorkflowStates] -> [OnCompleteMessageBody]"
        },
        {
            "TableName": "dbo.[ContentWorkflowStates]",
            "ColumnName": "[OnCompleteMessageSubject]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[ContentWorkflowStates]![OnCompleteMessageSubject]",
            "Description": "dbo.[ContentWorkflowStates] -> [OnCompleteMessageSubject]"
        },
        {
            "TableName": "dbo.[ContentWorkflowStates]",
            "ColumnName": "[OnDiscardMessageBody]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "1024",
            "Id": "dbo.[ContentWorkflowStates]![OnDiscardMessageBody]",
            "Description": "dbo.[ContentWorkflowStates] -> [OnDiscardMessageBody]"
        },
        {
            "TableName": "dbo.[ContentWorkflowStates]",
            "ColumnName": "[OnDiscardMessageSubject]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[ContentWorkflowStates]![OnDiscardMessageSubject]",
            "Description": "dbo.[ContentWorkflowStates] -> [OnDiscardMessageSubject]"
        },
        {
            "TableName": "dbo.[CoreMessaging_Messages]",
            "ColumnName": "[Body]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[CoreMessaging_Messages]![Body]",
            "Description": "dbo.[CoreMessaging_Messages] -> [Body]"
        },
        {
            "TableName": "dbo.[CoreMessaging_Messages]",
            "ColumnName": "[Subject]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "400",
            "Id": "dbo.[CoreMessaging_Messages]![Subject]",
            "Description": "dbo.[CoreMessaging_Messages] -> [Subject]"
        },
        {
            "TableName": "dbo.[CoreMessaging_Messages]",
            "ColumnName": "[To]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "2000",
            "Id": "dbo.[CoreMessaging_Messages]![To]",
            "Description": "dbo.[CoreMessaging_Messages] -> [To]"
        },
        {
            "TableName": "dbo.[CoreMessaging_NotificationTypeActions]",
            "ColumnName": "[APICall]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "500",
            "Id": "dbo.[CoreMessaging_NotificationTypeActions]![APICall]",
            "Description": "dbo.[CoreMessaging_NotificationTypeActions] -> [APICall]"
        },
        {
            "TableName": "dbo.[CoreMessaging_NotificationTypes]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "2000",
            "Id": "dbo.[CoreMessaging_NotificationTypes]![Description]",
            "Description": "dbo.[CoreMessaging_NotificationTypes] -> [Description]"
        },
        {
            "TableName": "dbo.[CoreMessaging_Subscriptions]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[CoreMessaging_Subscriptions]![Description]",
            "Description": "dbo.[CoreMessaging_Subscriptions] -> [Description]"
        },
        {
            "TableName": "dbo.[CoreMessaging_Subscriptions]",
            "ColumnName": "[ObjectData]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[CoreMessaging_Subscriptions]![ObjectData]",
            "Description": "dbo.[CoreMessaging_Subscriptions] -> [ObjectData]"
        },
        {
            "TableName": "dbo.[CoreMessaging_Subscriptions]",
            "ColumnName": "[ObjectKey]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[CoreMessaging_Subscriptions]![ObjectKey]",
            "Description": "dbo.[CoreMessaging_Subscriptions] -> [ObjectKey]"
        },
        {
            "TableName": "dbo.[DesktopModules]",
            "ColumnName": "[CompatibleVersions]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "500",
            "Id": "dbo.[DesktopModules]![CompatibleVersions]",
            "Description": "dbo.[DesktopModules] -> [CompatibleVersions]"
        },
        {
            "TableName": "dbo.[DesktopModules]",
            "ColumnName": "[Dependencies]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "400",
            "Id": "dbo.[DesktopModules]![Dependencies]",
            "Description": "dbo.[DesktopModules] -> [Dependencies]"
        },
        {
            "TableName": "dbo.[DesktopModules]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "2000",
            "Id": "dbo.[DesktopModules]![Description]",
            "Description": "dbo.[DesktopModules] -> [Description]"
        },
        {
            "TableName": "dbo.[DesktopModules]",
            "ColumnName": "[Permissions]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "400",
            "Id": "dbo.[DesktopModules]![Permissions]",
            "Description": "dbo.[DesktopModules] -> [Permissions]"
        },
        {
            "TableName": "dbo.[EventLog]",
            "ColumnName": "[LogProperties]",
            "ColumnType": "xml",
            "ColumnLenght": "n/a",
            "Id": "dbo.[EventLog]![LogProperties]",
            "Description": "dbo.[EventLog] -> [LogProperties]"
        },
        {
            "TableName": "dbo.[EventQueue]",
            "ColumnName": "[Attributes]",
            "ColumnType": "ntext",
            "ColumnLenght": "n/a",
            "Id": "dbo.[EventQueue]![Attributes]",
            "Description": "dbo.[EventQueue] -> [Attributes]"
        },
        {
            "TableName": "dbo.[EventQueue]",
            "ColumnName": "[AuthorizedRoles]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[EventQueue]![AuthorizedRoles]",
            "Description": "dbo.[EventQueue] -> [AuthorizedRoles]"
        },
        {
            "TableName": "dbo.[EventQueue]",
            "ColumnName": "[Body]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[EventQueue]![Body]",
            "Description": "dbo.[EventQueue] -> [Body]"
        },
        {
            "TableName": "dbo.[EventQueue]",
            "ColumnName": "[ExceptionMessage]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[EventQueue]![ExceptionMessage]",
            "Description": "dbo.[EventQueue] -> [ExceptionMessage]"
        },
        {
            "TableName": "dbo.[EventQueue]",
            "ColumnName": "[ProcessorCommand]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[EventQueue]![ProcessorCommand]",
            "Description": "dbo.[EventQueue] -> [ProcessorCommand]"
        },
        {
            "TableName": "dbo.[EventQueue]",
            "ColumnName": "[ProcessorType]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[EventQueue]![ProcessorType]",
            "Description": "dbo.[EventQueue] -> [ProcessorType]"
        },
        {
            "TableName": "dbo.[EventQueue]",
            "ColumnName": "[Sender]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[EventQueue]![Sender]",
            "Description": "dbo.[EventQueue] -> [Sender]"
        },
        {
            "TableName": "dbo.[ExceptionEvents]",
            "ColumnName": "[RawUrl]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "260",
            "Id": "dbo.[ExceptionEvents]![RawUrl]",
            "Description": "dbo.[ExceptionEvents] -> [RawUrl]"
        },
        {
            "TableName": "dbo.[ExceptionEvents]",
            "ColumnName": "[Referrer]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "260",
            "Id": "dbo.[ExceptionEvents]![Referrer]",
            "Description": "dbo.[ExceptionEvents] -> [Referrer]"
        },
        {
            "TableName": "dbo.[ExceptionEvents]",
            "ColumnName": "[UserAgent]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "260",
            "Id": "dbo.[ExceptionEvents]![UserAgent]",
            "Description": "dbo.[ExceptionEvents] -> [UserAgent]"
        },
        {
            "TableName": "dbo.[Exceptions]",
            "ColumnName": "[InnerMessage]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "500",
            "Id": "dbo.[Exceptions]![InnerMessage]",
            "Description": "dbo.[Exceptions] -> [InnerMessage]"
        },
        {
            "TableName": "dbo.[Exceptions]",
            "ColumnName": "[InnerStackTrace]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[Exceptions]![InnerStackTrace]",
            "Description": "dbo.[Exceptions] -> [InnerStackTrace]"
        },
        {
            "TableName": "dbo.[Exceptions]",
            "ColumnName": "[Message]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "500",
            "Id": "dbo.[Exceptions]![Message]",
            "Description": "dbo.[Exceptions] -> [Message]"
        },
        {
            "TableName": "dbo.[Exceptions]",
            "ColumnName": "[Source]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "500",
            "Id": "dbo.[Exceptions]![Source]",
            "Description": "dbo.[Exceptions] -> [Source]"
        },
        {
            "TableName": "dbo.[Exceptions]",
            "ColumnName": "[StackTrace]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[Exceptions]![StackTrace]",
            "Description": "dbo.[Exceptions] -> [StackTrace]"
        },
        {
            "TableName": "dbo.[ExportImportCheckpoints]",
            "ColumnName": "[StageData]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[ExportImportCheckpoints]![StageData]",
            "Description": "dbo.[ExportImportCheckpoints] -> [StageData]"
        },
        {
            "TableName": "dbo.[ExportImportJobLogs]",
            "ColumnName": "[Name]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[ExportImportJobLogs]![Name]",
            "Description": "dbo.[ExportImportJobLogs] -> [Name]"
        },
        {
            "TableName": "dbo.[ExportImportJobLogs]",
            "ColumnName": "[Value]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[ExportImportJobLogs]![Value]",
            "Description": "dbo.[ExportImportJobLogs] -> [Value]"
        },
        {
            "TableName": "dbo.[ExportImportJobs]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[ExportImportJobs]![Description]",
            "Description": "dbo.[ExportImportJobs] -> [Description]"
        },
        {
            "TableName": "dbo.[ExportImportJobs]",
            "ColumnName": "[JobObject]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[ExportImportJobs]![JobObject]",
            "Description": "dbo.[ExportImportJobs] -> [JobObject]"
        },
        {
            "TableName": "dbo.[ExportImportSettings]",
            "ColumnName": "[SettingValue]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[ExportImportSettings]![SettingValue]",
            "Description": "dbo.[ExportImportSettings] -> [SettingValue]"
        },
        {
            "TableName": "dbo.[ExtensionUrlProviders]",
            "ColumnName": "[ProviderType]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "1000",
            "Id": "dbo.[ExtensionUrlProviders]![ProviderType]",
            "Description": "dbo.[ExtensionUrlProviders] -> [ProviderType]"
        },
        {
            "TableName": "dbo.[ExtensionUrlProviders]",
            "ColumnName": "[SettingsControlSrc]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "1000",
            "Id": "dbo.[ExtensionUrlProviders]![SettingsControlSrc]",
            "Description": "dbo.[ExtensionUrlProviders] -> [SettingsControlSrc]"
        },
        {
            "TableName": "dbo.[ExtensionUrlProviderSetting]",
            "ColumnName": "[SettingValue]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "2000",
            "Id": "dbo.[ExtensionUrlProviderSetting]![SettingValue]",
            "Description": "dbo.[ExtensionUrlProviderSetting] -> [SettingValue]"
        },
        {
            "TableName": "dbo.[Files]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "500",
            "Id": "dbo.[Files]![Description]",
            "Description": "dbo.[Files] -> [Description]"
        },
        {
            "TableName": "dbo.[Files]",
            "ColumnName": "[Title]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[Files]![Title]",
            "Description": "dbo.[Files] -> [Title]"
        },
        {
            "TableName": "dbo.[FolderMappingsSettings]",
            "ColumnName": "[SettingValue]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "2000",
            "Id": "dbo.[FolderMappingsSettings]![SettingValue]",
            "Description": "dbo.[FolderMappingsSettings] -> [SettingValue]"
        },
        {
            "TableName": "dbo.[Folders]",
            "ColumnName": "[FolderPath]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "300",
            "Id": "dbo.[Folders]![FolderPath]",
            "Description": "dbo.[Folders] -> [FolderPath]"
        },
        {
            "TableName": "dbo.[Folders]",
            "ColumnName": "[MappedPath]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "300",
            "Id": "dbo.[Folders]![MappedPath]",
            "Description": "dbo.[Folders] -> [MappedPath]"
        },
        {
            "TableName": "dbo.[HostSettings]",
            "ColumnName": "[SettingValue]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[HostSettings]![SettingValue]",
            "Description": "dbo.[HostSettings] -> [SettingValue]"
        },
        {
            "TableName": "dbo.[HtmlText]",
            "ColumnName": "[Content]",
            "ColumnType": "ntext",
            "ColumnLenght": "n/a",
            "Id": "dbo.[HtmlText]![Content]",
            "Description": "dbo.[HtmlText] -> [Content]"
        },
        {
            "TableName": "dbo.[HtmlText]",
            "ColumnName": "[Summary]",
            "ColumnType": "ntext",
            "ColumnLenght": "n/a",
            "Id": "dbo.[HtmlText]![Summary]",
            "Description": "dbo.[HtmlText] -> [Summary]"
        },
        {
            "TableName": "dbo.[HtmlTextLog]",
            "ColumnName": "[Comment]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "4000",
            "Id": "dbo.[HtmlTextLog]![Comment]",
            "Description": "dbo.[HtmlTextLog] -> [Comment]"
        },
        {
            "TableName": "dbo.[JavaScriptLibraries]",
            "ColumnName": "[CDNPath]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[JavaScriptLibraries]![CDNPath]",
            "Description": "dbo.[JavaScriptLibraries] -> [CDNPath]"
        },
        {
            "TableName": "dbo.[Journal]",
            "ColumnName": "[ImageURL]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[Journal]![ImageURL]",
            "Description": "dbo.[Journal] -> [ImageURL]"
        },
        {
            "TableName": "dbo.[Journal]",
            "ColumnName": "[ItemData]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "2000",
            "Id": "dbo.[Journal]![ItemData]",
            "Description": "dbo.[Journal] -> [ItemData]"
        },
        {
            "TableName": "dbo.[Journal]",
            "ColumnName": "[ObjectKey]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[Journal]![ObjectKey]",
            "Description": "dbo.[Journal] -> [ObjectKey]"
        },
        {
            "TableName": "dbo.[Journal]",
            "ColumnName": "[Summary]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "2000",
            "Id": "dbo.[Journal]![Summary]",
            "Description": "dbo.[Journal] -> [Summary]"
        },
        {
            "TableName": "dbo.[Journal]",
            "ColumnName": "[Title]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[Journal]![Title]",
            "Description": "dbo.[Journal] -> [Title]"
        },
        {
            "TableName": "dbo.[Journal_Comments]",
            "ColumnName": "[Comment]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "2000",
            "Id": "dbo.[Journal_Comments]![Comment]",
            "Description": "dbo.[Journal_Comments] -> [Comment]"
        },
        {
            "TableName": "dbo.[Journal_Comments]",
            "ColumnName": "[CommentXML]",
            "ColumnType": "xml",
            "ColumnLenght": "n/a",
            "Id": "dbo.[Journal_Comments]![CommentXML]",
            "Description": "dbo.[Journal_Comments] -> [CommentXML]"
        },
        {
            "TableName": "dbo.[Journal_Data]",
            "ColumnName": "[JournalXML]",
            "ColumnType": "xml",
            "ColumnLenght": "n/a",
            "Id": "dbo.[Journal_Data]![JournalXML]",
            "Description": "dbo.[Journal_Data] -> [JournalXML]"
        },
        {
            "TableName": "dbo.[Journal_Types]",
            "ColumnName": "[Options]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[Journal_Types]![Options]",
            "Description": "dbo.[Journal_Types] -> [Options]"
        },
        {
            "TableName": "dbo.[Lists]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "500",
            "Id": "dbo.[Lists]![Description]",
            "Description": "dbo.[Lists] -> [Description]"
        },
        {
            "TableName": "dbo.[Messaging_Messages]",
            "ColumnName": "[Body]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[Messaging_Messages]![Body]",
            "Description": "dbo.[Messaging_Messages] -> [Body]"
        },
        {
            "TableName": "dbo.[Messaging_Messages]",
            "ColumnName": "[Subject]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[Messaging_Messages]![Subject]",
            "Description": "dbo.[Messaging_Messages] -> [Subject]"
        },
        {
            "TableName": "dbo.[MetaData]",
            "ColumnName": "[MetaDataDescription]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "2500",
            "Id": "dbo.[MetaData]![MetaDataDescription]",
            "Description": "dbo.[MetaData] -> [MetaDataDescription]"
        },
        {
            "TableName": "dbo.[Mobile_PreviewProfiles]",
            "ColumnName": "[UserAgent]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "260",
            "Id": "dbo.[Mobile_PreviewProfiles]![UserAgent]",
            "Description": "dbo.[Mobile_PreviewProfiles] -> [UserAgent]"
        },
        {
            "TableName": "dbo.[Mobile_Redirections]",
            "ColumnName": "[TargetValue]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "260",
            "Id": "dbo.[Mobile_Redirections]![TargetValue]",
            "Description": "dbo.[Mobile_Redirections] -> [TargetValue]"
        },
        {
            "TableName": "dbo.[ModuleControls]",
            "ColumnName": "[ControlSrc]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[ModuleControls]![ControlSrc]",
            "Description": "dbo.[ModuleControls] -> [ControlSrc]"
        },
        {
            "TableName": "dbo.[ModuleSettings]",
            "ColumnName": "[SettingValue]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[ModuleSettings]![SettingValue]",
            "Description": "dbo.[ModuleSettings] -> [SettingValue]"
        },
        {
            "TableName": "dbo.[OutputCache]",
            "ColumnName": "[Data]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[OutputCache]![Data]",
            "Description": "dbo.[OutputCache] -> [Data]"
        },
        {
            "TableName": "dbo.[Packages]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "2000",
            "Id": "dbo.[Packages]![Description]",
            "Description": "dbo.[Packages] -> [Description]"
        },
        {
            "TableName": "dbo.[Packages]",
            "ColumnName": "[FriendlyName]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[Packages]![FriendlyName]",
            "Description": "dbo.[Packages] -> [FriendlyName]"
        },
        {
            "TableName": "dbo.[Packages]",
            "ColumnName": "[License]",
            "ColumnType": "ntext",
            "ColumnLenght": "n/a",
            "Id": "dbo.[Packages]![License]",
            "Description": "dbo.[Packages] -> [License]"
        },
        {
            "TableName": "dbo.[Packages]",
            "ColumnName": "[Manifest]",
            "ColumnType": "ntext",
            "ColumnLenght": "n/a",
            "Id": "dbo.[Packages]![Manifest]",
            "Description": "dbo.[Packages] -> [Manifest]"
        },
        {
            "TableName": "dbo.[Packages]",
            "ColumnName": "[ReleaseNotes]",
            "ColumnType": "ntext",
            "ColumnLenght": "n/a",
            "Id": "dbo.[Packages]![ReleaseNotes]",
            "Description": "dbo.[Packages] -> [ReleaseNotes]"
        },
        {
            "TableName": "dbo.[Packages]",
            "ColumnName": "[Url]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[Packages]![Url]",
            "Description": "dbo.[Packages] -> [Url]"
        },
        {
            "TableName": "dbo.[PackageTypes]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "500",
            "Id": "dbo.[PackageTypes]![Description]",
            "Description": "dbo.[PackageTypes] -> [Description]"
        },
        {
            "TableName": "dbo.[PackageTypes]",
            "ColumnName": "[EditorControlSrc]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[PackageTypes]![EditorControlSrc]",
            "Description": "dbo.[PackageTypes] -> [EditorControlSrc]"
        },
        {
            "TableName": "dbo.[PersonaBarExtensions]",
            "ColumnName": "[Controller]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "260",
            "Id": "dbo.[PersonaBarExtensions]![Controller]",
            "Description": "dbo.[PersonaBarExtensions] -> [Controller]"
        },
        {
            "TableName": "dbo.[PersonaBarExtensions]",
            "ColumnName": "[Path]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "260",
            "Id": "dbo.[PersonaBarExtensions]![Path]",
            "Description": "dbo.[PersonaBarExtensions] -> [Path]"
        },
        {
            "TableName": "dbo.[PersonaBarMenu]",
            "ColumnName": "[Controller]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "260",
            "Id": "dbo.[PersonaBarMenu]![Controller]",
            "Description": "dbo.[PersonaBarMenu] -> [Controller]"
        },
        {
            "TableName": "dbo.[PersonaBarMenu]",
            "ColumnName": "[IconFile]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "260",
            "Id": "dbo.[PersonaBarMenu]![IconFile]",
            "Description": "dbo.[PersonaBarMenu] -> [IconFile]"
        },
        {
            "TableName": "dbo.[PersonaBarMenu]",
            "ColumnName": "[Link]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "260",
            "Id": "dbo.[PersonaBarMenu]![Link]",
            "Description": "dbo.[PersonaBarMenu] -> [Link]"
        },
        {
            "TableName": "dbo.[PersonaBarMenu]",
            "ColumnName": "[Path]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "260",
            "Id": "dbo.[PersonaBarMenu]![Path]",
            "Description": "dbo.[PersonaBarMenu] -> [Path]"
        },
        {
            "TableName": "dbo.[PersonaBarMenuDefaultPermissions]",
            "ColumnName": "[RoleNames]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "1024",
            "Id": "dbo.[PersonaBarMenuDefaultPermissions]![RoleNames]",
            "Description": "dbo.[PersonaBarMenuDefaultPermissions] -> [RoleNames]"
        },
        {
            "TableName": "dbo.[PortalGroups]",
            "ColumnName": "[PortalGroupDescription]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "2000",
            "Id": "dbo.[PortalGroups]![PortalGroupDescription]",
            "Description": "dbo.[PortalGroups] -> [PortalGroupDescription]"
        },
        {
            "TableName": "dbo.[PortalLocalization]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "500",
            "Id": "dbo.[PortalLocalization]![Description]",
            "Description": "dbo.[PortalLocalization] -> [Description]"
        },
        {
            "TableName": "dbo.[PortalLocalization]",
            "ColumnName": "[KeyWords]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "500",
            "Id": "dbo.[PortalLocalization]![KeyWords]",
            "Description": "dbo.[PortalLocalization] -> [KeyWords]"
        },
        {
            "TableName": "dbo.[PortalSettings]",
            "ColumnName": "[SettingValue]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[PortalSettings]![SettingValue]",
            "Description": "dbo.[PortalSettings] -> [SettingValue]"
        },
        {
            "TableName": "dbo.[Profile]",
            "ColumnName": "[ProfileData]",
            "ColumnType": "ntext",
            "ColumnLenght": "n/a",
            "Id": "dbo.[Profile]![ProfileData]",
            "Description": "dbo.[Profile] -> [ProfileData]"
        },
        {
            "TableName": "dbo.[ProfilePropertyDefinition]",
            "ColumnName": "[DefaultValue]",
            "ColumnType": "ntext",
            "ColumnLenght": "n/a",
            "Id": "dbo.[ProfilePropertyDefinition]![DefaultValue]",
            "Description": "dbo.[ProfilePropertyDefinition] -> [DefaultValue]"
        },
        {
            "TableName": "dbo.[ProfilePropertyDefinition]",
            "ColumnName": "[ValidationExpression]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "2000",
            "Id": "dbo.[ProfilePropertyDefinition]![ValidationExpression]",
            "Description": "dbo.[ProfilePropertyDefinition] -> [ValidationExpression]"
        },
        {
            "TableName": "dbo.[RedirectMessages]",
            "ColumnName": "[MessageText]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[RedirectMessages]![MessageText]",
            "Description": "dbo.[RedirectMessages] -> [MessageText]"
        },
        {
            "TableName": "dbo.[Relationships]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "500",
            "Id": "dbo.[Relationships]![Description]",
            "Description": "dbo.[Relationships] -> [Description]"
        },
        {
            "TableName": "dbo.[RelationshipTypes]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "500",
            "Id": "dbo.[RelationshipTypes]![Description]",
            "Description": "dbo.[RelationshipTypes] -> [Description]"
        },
        {
            "TableName": "dbo.[RoleGroups]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "1000",
            "Id": "dbo.[RoleGroups]![Description]",
            "Description": "dbo.[RoleGroups] -> [Description]"
        },
        {
            "TableName": "dbo.[Roles]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "1000",
            "Id": "dbo.[Roles]![Description]",
            "Description": "dbo.[Roles] -> [Description]"
        },
        {
            "TableName": "dbo.[RoleSettings]",
            "ColumnName": "[SettingValue]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[RoleSettings]![SettingValue]",
            "Description": "dbo.[RoleSettings] -> [SettingValue]"
        },
        {
            "TableName": "dbo.[Schedule]",
            "ColumnName": "[ObjectDependencies]",
            "ColumnType": "varchar",
            "ColumnLenght": "300",
            "Id": "dbo.[Schedule]![ObjectDependencies]",
            "Description": "dbo.[Schedule] -> [ObjectDependencies]"
        },
        {
            "TableName": "dbo.[Schedule]",
            "ColumnName": "[Servers]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "2000",
            "Id": "dbo.[Schedule]![Servers]",
            "Description": "dbo.[Schedule] -> [Servers]"
        },
        {
            "TableName": "dbo.[ScheduleHistory]",
            "ColumnName": "[LogNotes]",
            "ColumnType": "ntext",
            "ColumnLenght": "n/a",
            "Id": "dbo.[ScheduleHistory]![LogNotes]",
            "Description": "dbo.[ScheduleHistory] -> [LogNotes]"
        },
        {
            "TableName": "dbo.[ScheduleItemSettings]",
            "ColumnName": "[SettingValue]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[ScheduleItemSettings]![SettingValue]",
            "Description": "dbo.[ScheduleItemSettings] -> [SettingValue]"
        },
        {
            "TableName": "dbo.[SearchCommonWords]",
            "ColumnName": "[CommonWord]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[SearchCommonWords]![CommonWord]",
            "Description": "dbo.[SearchCommonWords] -> [CommonWord]"
        },
        {
            "TableName": "dbo.[SearchDeletedItems]",
            "ColumnName": "[Document]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[SearchDeletedItems]![Document]",
            "Description": "dbo.[SearchDeletedItems] -> [Document]"
        },
        {
            "TableName": "dbo.[SearchStopWords]",
            "ColumnName": "[StopWords]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[SearchStopWords]![StopWords]",
            "Description": "dbo.[SearchStopWords] -> [StopWords]"
        },
        {
            "TableName": "dbo.[SearchTypes]",
            "ColumnName": "[SearchResultClass]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[SearchTypes]![SearchResultClass]",
            "Description": "dbo.[SearchTypes] -> [SearchResultClass]"
        },
        {
            "TableName": "dbo.[SiteLog]",
            "ColumnName": "[Referrer]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[SiteLog]![Referrer]",
            "Description": "dbo.[SiteLog] -> [Referrer]"
        },
        {
            "TableName": "dbo.[SiteLog]",
            "ColumnName": "[Url]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[SiteLog]![Url]",
            "Description": "dbo.[SiteLog] -> [Url]"
        },
        {
            "TableName": "dbo.[SiteLog]",
            "ColumnName": "[UserAgent]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[SiteLog]![UserAgent]",
            "Description": "dbo.[SiteLog] -> [UserAgent]"
        },
        {
            "TableName": "dbo.[SiteLog]",
            "ColumnName": "[UserHostAddress]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[SiteLog]![UserHostAddress]",
            "Description": "dbo.[SiteLog] -> [UserHostAddress]"
        },
        {
            "TableName": "dbo.[SiteLog]",
            "ColumnName": "[UserHostName]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[SiteLog]![UserHostName]",
            "Description": "dbo.[SiteLog] -> [UserHostName]"
        },
        {
            "TableName": "dbo.[SkinControls]",
            "ColumnName": "[ControlSrc]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[SkinControls]![ControlSrc]",
            "Description": "dbo.[SkinControls] -> [ControlSrc]"
        },
        {
            "TableName": "dbo.[Skins]",
            "ColumnName": "[SkinSrc]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[Skins]![SkinSrc]",
            "Description": "dbo.[Skins] -> [SkinSrc]"
        },
        {
            "TableName": "dbo.[SQLQueries]",
            "ColumnName": "[Query]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[SQLQueries]![Query]",
            "Description": "dbo.[SQLQueries] -> [Query]"
        },
        {
            "TableName": "dbo.[SynonymsGroups]",
            "ColumnName": "[SynonymsTags]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[SynonymsGroups]![SynonymsTags]",
            "Description": "dbo.[SynonymsGroups] -> [SynonymsTags]"
        },
        {
            "TableName": "dbo.[SystemMessages]",
            "ColumnName": "[MessageValue]",
            "ColumnType": "ntext",
            "ColumnLenght": "n/a",
            "Id": "dbo.[SystemMessages]![MessageValue]",
            "Description": "dbo.[SystemMessages] -> [MessageValue]"
        },
        {
            "TableName": "dbo.[TabModules]",
            "ColumnName": "[Footer]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[TabModules]![Footer]",
            "Description": "dbo.[TabModules] -> [Footer]"
        },
        {
            "TableName": "dbo.[TabModules]",
            "ColumnName": "[Header]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[TabModules]![Header]",
            "Description": "dbo.[TabModules] -> [Header]"
        },
        {
            "TableName": "dbo.[TabModules]",
            "ColumnName": "[ModuleTitle]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[TabModules]![ModuleTitle]",
            "Description": "dbo.[TabModules] -> [ModuleTitle]"
        },
        {
            "TableName": "dbo.[TabModules]",
            "ColumnName": "[WebSliceTitle]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[TabModules]![WebSliceTitle]",
            "Description": "dbo.[TabModules] -> [WebSliceTitle]"
        },
        {
            "TableName": "dbo.[TabModuleSettings]",
            "ColumnName": "[SettingValue]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[TabModuleSettings]![SettingValue]",
            "Description": "dbo.[TabModuleSettings] -> [SettingValue]"
        },
        {
            "TableName": "dbo.[Tabs]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "500",
            "Id": "dbo.[Tabs]![Description]",
            "Description": "dbo.[Tabs] -> [Description]"
        },
        {
            "TableName": "dbo.[Tabs]",
            "ColumnName": "[IconFile]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[Tabs]![IconFile]",
            "Description": "dbo.[Tabs] -> [IconFile]"
        },
        {
            "TableName": "dbo.[Tabs]",
            "ColumnName": "[IconFileLarge]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[Tabs]![IconFileLarge]",
            "Description": "dbo.[Tabs] -> [IconFileLarge]"
        },
        {
            "TableName": "dbo.[Tabs]",
            "ColumnName": "[KeyWords]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "500",
            "Id": "dbo.[Tabs]![KeyWords]",
            "Description": "dbo.[Tabs] -> [KeyWords]"
        },
        {
            "TableName": "dbo.[Tabs]",
            "ColumnName": "[PageHeadText]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[Tabs]![PageHeadText]",
            "Description": "dbo.[Tabs] -> [PageHeadText]"
        },
        {
            "TableName": "dbo.[Tabs]",
            "ColumnName": "[TabPath]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[Tabs]![TabPath]",
            "Description": "dbo.[Tabs] -> [TabPath]"
        },
        {
            "TableName": "dbo.[Tabs]",
            "ColumnName": "[Url]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[Tabs]![Url]",
            "Description": "dbo.[Tabs] -> [Url]"
        },
        {
            "TableName": "dbo.[TabSettings]",
            "ColumnName": "[SettingValue]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[TabSettings]![SettingValue]",
            "Description": "dbo.[TabSettings] -> [SettingValue]"
        },
        {
            "TableName": "dbo.[Taxonomy_ScopeTypes]",
            "ColumnName": "[ScopeType]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[Taxonomy_ScopeTypes]![ScopeType]",
            "Description": "dbo.[Taxonomy_ScopeTypes] -> [ScopeType]"
        },
        {
            "TableName": "dbo.[Taxonomy_Terms]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "2500",
            "Id": "dbo.[Taxonomy_Terms]![Description]",
            "Description": "dbo.[Taxonomy_Terms] -> [Description]"
        },
        {
            "TableName": "dbo.[Taxonomy_Terms]",
            "ColumnName": "[Name]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[Taxonomy_Terms]![Name]",
            "Description": "dbo.[Taxonomy_Terms] -> [Name]"
        },
        {
            "TableName": "dbo.[Taxonomy_Vocabularies]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "2500",
            "Id": "dbo.[Taxonomy_Vocabularies]![Description]",
            "Description": "dbo.[Taxonomy_Vocabularies] -> [Description]"
        },
        {
            "TableName": "dbo.[Taxonomy_Vocabularies]",
            "ColumnName": "[Name]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "250",
            "Id": "dbo.[Taxonomy_Vocabularies]![Name]",
            "Description": "dbo.[Taxonomy_Vocabularies] -> [Name]"
        },
        {
            "TableName": "dbo.[Urls]",
            "ColumnName": "[Url]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[Urls]![Url]",
            "Description": "dbo.[Urls] -> [Url]"
        },
        {
            "TableName": "dbo.[UrlTracking]",
            "ColumnName": "[Url]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[UrlTracking]![Url]",
            "Description": "dbo.[UrlTracking] -> [Url]"
        },
        {
            "TableName": "dbo.[UserAuthentication]",
            "ColumnName": "[AuthenticationToken]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "1000",
            "Id": "dbo.[UserAuthentication]![AuthenticationToken]",
            "Description": "dbo.[UserAuthentication] -> [AuthenticationToken]"
        },
        {
            "TableName": "dbo.[UserProfile]",
            "ColumnName": "[ExtendedVisibility]",
            "ColumnType": "varchar",
            "ColumnLenght": "400",
            "Id": "dbo.[UserProfile]![ExtendedVisibility]",
            "Description": "dbo.[UserProfile] -> [ExtendedVisibility]"
        },
        {
            "TableName": "dbo.[UserProfile]",
            "ColumnName": "[PropertyText]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "MAX",
            "Id": "dbo.[UserProfile]![PropertyText]",
            "Description": "dbo.[UserProfile] -> [PropertyText]"
        },
        {
            "TableName": "dbo.[UserProfile]",
            "ColumnName": "[PropertyValue]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "3750",
            "Id": "dbo.[UserProfile]![PropertyValue]",
            "Description": "dbo.[UserProfile] -> [PropertyValue]"
        },
        {
            "TableName": "dbo.[Users]",
            "ColumnName": "[Email]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "256",
            "Id": "dbo.[Users]![Email]",
            "Description": "dbo.[Users] -> [Email]"
        },
        {
            "TableName": "dbo.[WebServers]",
            "ColumnName": "[URL]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "255",
            "Id": "dbo.[WebServers]![URL]",
            "Description": "dbo.[WebServers] -> [URL]"
        },
        {
            "TableName": "dbo.[Workflow]",
            "ColumnName": "[Description]",
            "ColumnType": "nvarchar",
            "ColumnLenght": "2000",
            "Id": "dbo.[Workflow]![Description]",
            "Description": "dbo.[Workflow] -> [Description]"
        }
    ],
    searchResults: [
        {
            "Id": "dbo.[HtmlText][Content]",
            "TableName": "dbo.[HtmlText]",
            "ColumnName": "[Content]",
            "ColumnsList": "[{\"field\": \"[ItemID]\",\"label\": \"[ItemID]\",\"sortable\": true,\"searchable\": true},{\"field\": \"[Content]\",\"label\": \"[Content]\",\"sortable\": false,\"searchable\": true}]",
            "Results": "[{\"[ItemID]\":1,\"[Content]\":\"&lt;div class=&quot;intro-container row&quot;&gt;\\r\\n    &lt;div class=&quot;main col-md-12&quot;&gt;\\r\\n        &lt;h2&gt;CONNECT and PARTICIPATE&lt;/h2&gt;\\r\\n        &lt;ul class=&quot;row&quot;&gt;\\r\\n            &lt;li class=&quot;docs col-md-4 col-sm-6&quot;&gt;\\r\\n                &lt;a href=&quot;https://dnndocs.com&quot; target=&quot;_blank&quot; rel=&quot;nofollow&quot;&gt;\\r\\n                    &lt;span class=&quot;overlay&quot;&gt;\\r\\n                        &lt;p&gt;DNN Docs is open source too! Learn how to get started with DNN, follow step-by-step tutorials, and even dig through the API documentation.&lt;/p&gt;\\r\\n                        &lt;label&gt;Visit DNN Docs&lt;/label&gt;\\r\\n                    &lt;/span&gt; \\r\\n                    &lt;span class=&quot;text&quot;&gt;Docs&lt;/span&gt; \\r\\n                &lt;/a&gt;\\r\\n            &lt;/li&gt;\\r\\n            &lt;li class=&quot;community col-md-4 col-sm-6&quot;&gt;\\r\\n                &lt;a href=&quot;https://dnncommunity.org&quot; target=&quot;_blank&quot; rel=&quot;nofollow&quot;&gt;\\r\\n                    &lt;span class=&quot;overlay&quot;&gt;\\r\\n                        &lt;p&gt;The XXX Xommunity is active and vibrant. Visit us and join in on the activities. Get help, discuss projects, and keep up with all the great things others are doing.&lt;/p&gt;\\r\\n                        &lt;label&gt;Visit XXX Xommunity&lt;/label&gt;\\r\\n                    &lt;/span&gt; \\r\\n                    &lt;span class=&quot;text&quot;&gt;Community&lt;/span&gt; \\r\\n                &lt;/a&gt;\\r\\n            &lt;/li&gt;\\r\\n            &lt;li class=&quot;code col-md-4 col-sm-6&quot;&gt;\\r\\n                &lt;a href=&quot;https://github.com/dnnsoftware/Dnn.Platform&quot; target=&quot;_blank&quot; rel=&quot;nofollow&quot;&gt;\\r\\n                    &lt;span class=&quot;overlay&quot;&gt;\\r\\n                        &lt;p&gt;The open source DNN Platform project is managed on GitHub. Visit us there and get involved. Report issues, provide valuable feedback, and contribute.&lt;/p&gt;\\r\\n                        &lt;label&gt;Visit DNN GitHub&lt;/label&gt;\\r\\n                    &lt;/span&gt;\\r\\n                    &lt;span class=&quot;text&quot;&gt;Code&lt;/span&gt;\\r\\n                &lt;/a&gt;\\r\\n            &lt;/li&gt;\\r\\n            &lt;li class=&quot;forums col-md-4 col-sm-6&quot;&gt;\\r\\n                &lt;a href=&quot;https://dnncommunity.org/forums&quot; target=&quot;_blank&quot; rel=&quot;nofollow&quot;&gt;\\r\\n                    &lt;span class=&quot;overlay&quot;&gt;\\r\\n                        &lt;p&gt;Whether you have questions, need answers, or just want to help others, the community forums is the place for you.&lt;/p&gt;\\r\\n                        &lt;label&gt;Visit DNN Forums&lt;/label&gt;\\r\\n                    &lt;/span&gt; \\r\\n                    &lt;span class=&quot;text&quot;&gt;Forums&lt;/span&gt; \\r\\n                &lt;/a&gt;\\r\\n            &lt;/li&gt;\\r\\n            &lt;li class=&quot;blogs col-md-4 col-sm-6&quot;&gt;\\r\\n                &lt;a href=&quot;https://dnncommunity.org/blogs&quot; target=&quot;_blank&quot; rel=&quot;nofollow&quot;&gt;\\r\\n                    &lt;span class=&quot;overlay&quot;&gt;\\r\\n                        &lt;p&gt;Informative and entertaining, challenging and educational, the XXX Xommunity Blogs always have fresh content, fresh ideas and new opinions. Dive right in.&lt;/p&gt;\\r\\n                        &lt;label&gt;Visit DNN Blogs&lt;/label&gt;\\r\\n                    &lt;/span&gt; \\r\\n                    &lt;span class=&quot;text&quot;&gt;Blogs&lt;/span&gt; \\r\\n                &lt;/a&gt;\\r\\n            &lt;/li&gt;\\r\\n            &lt;li class=&quot;extensions col-md-4 col-sm-6&quot;&gt;\\r\\n                &lt;a href=&quot;https://dnncommunity.org/Forge&quot; target=&quot;_blank&quot; rel=&quot;nofollow&quot;&gt;\\r\\n                    &lt;span class=&quot;overlay&quot;&gt;\\r\\n                        &lt;p&gt;DNN can be extended in many ways. There are many free, open source, and commercial themes, modules, libraries, providers, and more.&lt;/p&gt;\\r\\n                        &lt;label&gt;Visit DNN Extensions&lt;/label&gt;\\r\\n                    &lt;/span&gt; \\r\\n                    &lt;span class=&quot;text&quot;&gt;Extensions&lt;/span&gt; \\r\\n                &lt;/a&gt;\\r\\n            &lt;/li&gt;\\r\\n        &lt;/ul&gt;\\r\\n        &lt;div class=&quot;row&quot;&gt;\\r\\n            &lt;div class=&quot;col-md-12&quot;&gt;\\r\\n                &lt;div class=&quot;col-md-12 platform-intro&quot;&gt;\\r\\n                    &lt;p&gt;DNN Platform (formerly DotNetNuke) is an open source, scalable, extensible and secure framework for creating rich, rewarding online experiences for a diverse user base. DNN Platform is the foundation for over 750,000 websites worldwide. Your XXX Xommunity is the faithful steward of the DNN Platform open source project.&lt;/p&gt;\\r\\n                &lt;/div&gt;\\r\\n            &lt;/div&gt;\\r\\n        &lt;/div&gt;\\r\\n        &lt;div class=&quot;row social&quot;&gt;\\r\\n            &lt;div class=&quot;col-md-12 social-links text-center&quot;&gt;\\r\\n                &lt;h3&gt;XXX Xommunity Social Channels&lt;/h3&gt;\\r\\n                &lt;ul class=&quot;row&quot;&gt;\\r\\n                    &lt;li class=&quot;twitter col-xs-2&quot;&gt;\\r\\n                        &lt;a href=&quot;https://twitter.com/DNNAwareness&quot; target=&quot;_blank&quot; aria-label=&quot;Twitter&quot;&gt;&lt;/a&gt;\\r\\n                    &lt;/li&gt;\\r\\n                    &lt;li class=&quot;facebook col-xs-2&quot;&gt;\\r\\n                        &lt;a href=&quot;https://www.facebook.com/groups/dnnconnect/&quot; target=&quot;_blank&quot; aria-label=&quot;Facebook&quot;&gt;&lt;/a&gt;\\r\\n                    &lt;/li&gt;\\r\\n                    &lt;li class=&quot;youtube col-xs-2&quot;&gt;\\r\\n                        &lt;a href=&quot;https://www.youtube.com/user/dotnetnuke&quot; target=&quot;_blank&quot; aria-label=&quot;Youtube&quot;&gt;&lt;/a&gt;\\r\\n                    &lt;/li&gt;\\r\\n                &lt;/ul&gt;\\r\\n            &lt;/div&gt;\\r\\n        &lt;/div&gt;\\r\\n    &lt;/div&gt;\\r\\n&lt;/div&gt;\"},{\"[ItemID]\":2,\"[Content]\":\"&lt;div class=&quot;banner-container row-fluid&quot;&gt;\\r\\n&lt;div class=&quot;col-md-7 col-md-offset-1&quot;&gt;\\r\\n&lt;h2&gt;Every journey begins with the first step. &lt;/h2&gt;\\r\\n&lt;span&gt;Welcome to your new DNN<sup>®</sup> installation! DNN<sup>®</sup> makes it easy for you to install and use the DNN<sup>®</sup> Platform.  We have multiple options to suit your needs, whether you want to try the CMS out in the cloud, install it on your own server, or use it on your desktop for development.  You are just a click away from getting started with DNN<sup>®</sup>.&lt;/span&gt;&lt;/div&gt;\\r\\n\\r\\n&lt;div class=&quot;col-md-3&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;hidden-phone&quot; src=&quot;/Portals/0/Images/logo2.png&quot; /&gt;&lt;/div&gt;\\r\\n&lt;/div&gt;\\r\\n\"}]",
            "Count": 2
        },
        {
            "Id": "dbo.[TabModuleSettings][SettingValue]",
            "TableName": "dbo.[TabModuleSettings]",
            "ColumnName": "[SettingValue]",
            "ColumnsList": "[{\"field\": \"[TabModuleID]\",\"label\": \"[TabModuleID]\",\"sortable\": true,\"searchable\": true},{\"field\": \"[SettingName]\",\"label\": \"[SettingName]\",\"sortable\": true,\"searchable\": true},{\"field\": \"[SettingValue]\",\"label\": \"[SettingValue]\",\"sortable\": false,\"searchable\": true}]",
            "Results": "[{\"[TabModuleID]\":56,\"[SettingName]\":\"ProfileTemplate\",\"[SettingValue]\":\"\\r\\n                    <div class=\\\"pBio\\\">\\r\\n                    <h3 data-bind=\\\"text: AboutMeText\\\"></h3>\\r\\n                    <span data-bind=\\\"text: EmptyAboutMeText, visible: Biography().length==0\\\"></span>\\r\\n                    <p data-bind=\\\"html: Biography\\\"></p>\\r\\n                    </div>\\r\\n                    <div class=\\\"pAddress\\\">\\r\\n                    <h3 data-bind=\\\"text: LocationText\\\"></h3>\\r\\n                    <span data-bind=\\\"text: EmptyLocationText, visible: Street().length==0 && Location().length==0 && Country().length==0 && PostalCode().length==0\\\"></span>\\r\\n                    <p><span data-bind=\\\"text: Street()\\\"></span><span data-bind=\\\"visible: Street().length > 0\\\"><br/></span>\\r\\n                    <span data-bind=\\\"text: Location()\\\"></span><span data-bind=\\\"visible: Location().length > 0\\\"><br/></span>\\r\\n                    <span data-bind=\\\"text: Country()\\\"></span><span data-bind=\\\"visible: Country().length > 0\\\"><br/></span>\\r\\n                    <span data-bind=\\\"text: PostalCode()\\\"></span>\\r\\n                    </p>\\r\\n                    </div>\\r\\n                    <div class=\\\"pContact\\\">\\r\\n                    <h3 data-bind=\\\"text: GetInTouchText\\\"></h3>\\r\\n                    <span data-bind=\\\"text: EmptyGetInTouchText, visible: Telephone().length==0 && Email().length==0 && Website().length==0 && IM().length==0\\\"></span>\\r\\n                    <ul>\\r\\n                    <li data-bind=\\\"visible: Telephone().length > 0\\\"><strong><span data-bind=\\\"text: TelephoneText\\\">:</span></strong> <span data-bind=\\\"text: Telephone()\\\"></span></li>\\r\\n                    <li data-bind=\\\"visible: Email().length > 0\\\"><strong><span data-bind=\\\"text: EmailText\\\">:</span></strong> <span data-bind=\\\"text: Email()\\\"></span></li>\\r\\n                    <li data-bind=\\\"visible: Website().length > 0\\\"><strong><span data-bind=\\\"text: WebsiteText\\\">:</span></strong> <span data-bind=\\\"text: Website()\\\"></span></li>\\r\\n                    <li data-bind=\\\"visible: IM().length > 0\\\"><strong><span data-bind=\\\"text: IMText\\\">:</span></strong> <span data-bind=\\\"text: IM()\\\"></span></li>\\r\\n                    </ul>\\r\\n                    </div>\\r\\n                    <div class=\\\"dnnClear\\\"></div>\\r\\n                  \"}]",
            "Count": 1
        },
        {
            "Id": "dbo.[Packages][Description]",
            "TableName": "dbo.[Packages]",
            "ColumnName": "[Description]",
            "ColumnsList": "[{\"field\": \"[PackageID]\",\"label\": \"[PackageID]\",\"sortable\": true,\"searchable\": true},{\"field\": \"[Description]\",\"label\": \"[Description]\",\"sortable\": false,\"searchable\": true}]",
            "Results": "[{\"[PackageID]\":103,\"[Description]\":\"DNN Deprecated Web Controls library for legacy Telerik depepndency\"},{\"[PackageID]\":104,\"[Description]\":\"DNN Deprecated Website Codebehind files for backward compability.\"},{\"[PackageID]\":115,\"[Description]\":\"A new default DNN skin\"},{\"[PackageID]\":116,\"[Description]\":\"DNN container\"},{\"[PackageID]\":128,\"[Description]\":\"CKEditor Provider by DNN Connect for DNN\"},{\"[PackageID]\":136,\"[Description]\":\"Evotiva.DNNSearchAndReplace is a DNN Search and Replace DNN Persona Bar extension.\"}]",
            "Count": 6
        },
        {
            "Id": "dbo.[Packages][FriendlyName]",
            "TableName": "dbo.[Packages]",
            "ColumnName": "[FriendlyName]",
            "ColumnsList": "[{\"field\": \"[PackageID]\",\"label\": \"[PackageID]\",\"sortable\": true,\"searchable\": true},{\"field\": \"[FriendlyName]\",\"label\": \"[FriendlyName]\",\"sortable\": false,\"searchable\": true}]",
            "Results": "[{\"[PackageID]\":98,\"[FriendlyName]\":\"DNNCSSINCLUDE SkinObject\"},{\"[PackageID]\":99,\"[FriendlyName]\":\"DNNCSSEXCLUDE SkinObject\"},{\"[PackageID]\":100,\"[FriendlyName]\":\"DNNJSINCLUDE SkinObject\"},{\"[PackageID]\":101,\"[FriendlyName]\":\"DNNJSEXCLUDE SkinObject\"},{\"[PackageID]\":103,\"[FriendlyName]\":\"DNN Deprecated Web Controls Library\"},{\"[PackageID]\":104,\"[FriendlyName]\":\"DNN Deprecated Website Codebehind files\"},{\"[PackageID]\":105,\"[FriendlyName]\":\"Dnn.EditBar.UI\"},{\"[PackageID]\":107,\"[FriendlyName]\":\"Dnn.PersonaBar.UI\"},{\"[PackageID]\":108,\"[FriendlyName]\":\"Dnn Azure Connector\"},{\"[PackageID]\":128,\"[FriendlyName]\":\"DNN Connect CKEditor Provider\"},{\"[PackageID]\":129,\"[FriendlyName]\":\"Dnn.PersonaBar.Extensions\"},{\"[PackageID]\":136,\"[FriendlyName]\":\"Evotiva DNN Search and Replace\"}]",
            "Count": 12
        },
        {
            "Id": "dbo.[Packages][License]",
            "TableName": "dbo.[Packages]",
            "ColumnName": "[License]",
            "ColumnsList": "[{\"field\": \"[PackageID]\",\"label\": \"[PackageID]\",\"sortable\": true,\"searchable\": true},{\"field\": \"[License]\",\"label\": \"[License]\",\"sortable\": false,\"searchable\": true}]",
            "Results": "[{\"[PackageID]\":67,\"[License]\":\"DotNetNuke® - https://www.dnnsoftware.com<br/>\\r\\nCopyright (c) 2002-2018<br/>\\r\\nby DotNetNuke Corporation\\r\\n<br/><br/>\\r\\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated \\r\\ndocumentation files (the \\\"Software\\\"), to deal in the Software without restriction, including without limitation \\r\\nthe rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and \\r\\nto permit persons to whom the Software is furnished to do so, subject to the following conditions:\\r\\n<br/><br/>\\r\\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions \\r\\nof the Software.\\r\\n<br/><br/>\\r\\nTHE SOFTWARE IS PROVIDED \\\"AS IS\\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED \\r\\nTO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL \\r\\nTHE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF \\r\\nCONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER \\r\\nDEALINGS IN THE SOFTWARE.\"},{\"[PackageID]\":71,\"[License]\":\"DotNetNuke® - https://www.dnnsoftware.com<br/>\\r\\nCopyright (c) 2002-2018<br/>\\r\\nby DotNetNuke Corporation\\r\\n<br/><br/>\\r\\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated \\r\\ndocumentation files (the \\\"Software\\\"), to deal in the Software without restriction, including without limitation \\r\\nthe rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and \\r\\nto permit persons to whom the Software is furnished to do so, subject to the following conditions:\\r\\n<br/><br/>\\r\\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions \\r\\nof the Software.\\r\\n<br/><br/>\\r\\nTHE SOFTWARE IS PROVIDED \\\"AS IS\\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED \\r\\nTO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL \\r\\nTHE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF \\r\\nCONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER \\r\\nDEALINGS IN THE SOFTWARE.\"},{\"[PackageID]\":106,\"[License]\":\"<div class=\\\"License\\\">\\r\\n\\t<h3>License</h3>\\r\\n\\t<p class=\\\"Owner\\\">\\r\\n\\t\\tDotNetNuke Corporation  <a href=http://www.dnnsoftware.com>http://www.dnnsoftware.com</a></br>\\r\\n\\t\\tCopyright (c) 2002-2018</br>\\t\\r\\n\\t\\tby DNN Corporation</br>\\r\\n\\t</p>\\r\\n    <p>\\r\\n        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated \\r\\n        documentation files (the \\\"Software\\\"), to deal in the Software without restriction, including without limitation \\r\\n        the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and \\r\\n        to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\r\\n    </p>\\r\\n    <p>\\r\\n        The above copyright notice and this permission notice shall be included in all copies or substantial portions \\r\\n        of the Software.\\r\\n    </p>\\r\\n    <p>\\r\\n        THE SOFTWARE IS PROVIDED \\\"AS IS\\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\r\\n    </p>\\r\\n</div>\"},{\"[PackageID]\":112,\"[License]\":\"<div class=\\\"License\\\">\\r\\n\\t<h3>License</h3>\\r\\n\\t<p class=\\\"Owner\\\">\\r\\n\\t\\tDotNetNuke Corporation  <a href=http://www.dnnsoftware.com>http://www.dnnsoftware.com</a></br>\\r\\n\\t\\tCopyright (c) 2002-2018</br>\\t\\r\\n\\t\\tby DNN Corporation</br>\\r\\n\\t</p>\\r\\n    <p>\\r\\n        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated \\r\\n        documentation files (the \\\"Software\\\"), to deal in the Software without restriction, including without limitation \\r\\n        the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and \\r\\n        to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\r\\n    </p>\\r\\n    <p>\\r\\n        The above copyright notice and this permission notice shall be included in all copies or substantial portions \\r\\n        of the Software.\\r\\n    </p>\\r\\n    <p>\\r\\n        THE SOFTWARE IS PROVIDED \\\"AS IS\\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\r\\n    </p>\\r\\n</div>\"},{\"[PackageID]\":117,\"[License]\":\"<div class=\\\"License\\\">\\r\\n\\t<h3>License</h3>\\r\\n\\t<p class=\\\"Owner\\\">\\r\\n\\t\\tDotNetNuke Corporation  <a href=http://www.dnnsoftware.com>http://www.dnnsoftware.com</a></br>\\r\\n\\t\\tCopyright (c) 2002-2018</br>\\t\\r\\n\\t\\tby DNN Corporation</br>\\r\\n\\t</p>\\r\\n    <p>\\r\\n        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated \\r\\n        documentation files (the \\\"Software\\\"), to deal in the Software without restriction, including without limitation \\r\\n        the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and \\r\\n        to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\r\\n    </p>\\r\\n    <p>\\r\\n        The above copyright notice and this permission notice shall be included in all copies or substantial portions \\r\\n        of the Software.\\r\\n    </p>\\r\\n    <p>\\r\\n        THE SOFTWARE IS PROVIDED \\\"AS IS\\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\r\\n    </p>\\r\\n</div>\"},{\"[PackageID]\":118,\"[License]\":\"DotNetNuke - http://www.dnnsoftware.com<br/>\\r\\nCopyright (c) 2002-2018<br/>\\r\\nby DNN Corporation\\r\\n<br/><br/>\\r\\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated \\r\\ndocumentation files (the \\\"Software\\\"), to deal in the Software without restriction, including without limitation \\r\\nthe rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and \\r\\nto permit persons to whom the Software is furnished to do so, subject to the following conditions:\\r\\n<br/><br/>\\r\\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions \\r\\nof the Software.\\r\\n<br/><br/>\\r\\nTHE SOFTWARE IS PROVIDED \\\"AS IS\\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED \\r\\nTO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL \\r\\nTHE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF \\r\\nCONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER \\r\\nDEALINGS IN THE SOFTWARE.\\r\\n\"},{\"[PackageID]\":125,\"[License]\":\"DotNetNuke - http://www.dnnsoftware.com<br/>\\r\\nCopyright (c) 2002-2018<br/>\\r\\nby DNN Corporation\\r\\n<br/><br/>\\r\\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated\\r\\ndocumentation files (the \\\"Software\\\"), to deal in the Software without restriction, including without limitation\\r\\nthe rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and\\r\\nto permit persons to whom the Software is furnished to do so, subject to the following conditions:\\r\\n<br/><br/>\\r\\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions\\r\\nof the Software.\\r\\n<br/><br/>\\r\\nTHE SOFTWARE IS PROVIDED \\\"AS IS\\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED\\r\\nTO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\\r\\nTHE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF\\r\\nCONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\\r\\nDEALINGS IN THE SOFTWARE.\\r\\n\"},{\"[PackageID]\":129,\"[License]\":\"DotNetNuke® - http://www.dnnsoftware.com<br/>\\r\\nCopyright (c) 2002-2018<br/>\\r\\nby DNN Corporation<br/>\\r\\nAll Rights Reserved<br/>\"},{\"[PackageID]\":130,\"[License]\":\"<div class=\\\"License\\\">\\r\\n\\t<h3>License</h3>\\r\\n\\t<p class=\\\"Owner\\\">\\r\\n\\t\\tDotNetNuke Corporation  <a href=http://www.dnnsoftware.com>http://www.dnnsoftware.com</a></br>\\r\\n\\t\\tCopyright (c) 2002-2018</br>\\t\\r\\n\\t\\tby DNN Corporation</br>\\r\\n\\t</p>\\r\\n    <p>\\r\\n        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated \\r\\n        documentation files (the \\\"Software\\\"), to deal in the Software without restriction, including without limitation \\r\\n        the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and \\r\\n        to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\r\\n    </p>\\r\\n    <p>\\r\\n        The above copyright notice and this permission notice shall be included in all copies or substantial portions \\r\\n        of the Software.\\r\\n    </p>\\r\\n    <p>\\r\\n        THE SOFTWARE IS PROVIDED \\\"AS IS\\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\r\\n    </p>\\r\\n</div>\"},{\"[PackageID]\":136,\"[License]\":\"<div class=\\\"License\\\">\\n\\t<h3>License</h3>\\n\\t<p class=\\\"Owner\\\">\\n\\t\\tHoracio Judeikin  <a href=https://www.evotiva.com/>https://www.evotiva.com/</a></br>\\n\\t\\tCopyright (c) 2013-Present</br>\\t\\n\\t\\tby Horacio Judeikin</br>\\n\\t</p>\\n    <p>\\n        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated \\n        documentation files (the \\\"Software\\\"), to deal in the Software without restriction, including without limitation \\n        the rights to use, copy, modify, merge, publish, distribute, sub-license, and/or sell copies of the Software, and \\n        to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n    </p>\\n    <p>\\n        The above copyright notice and this permission notice shall be included in all copies or substantial portions \\n        of the Software.\\n    </p>\\n    <p>\\n        THE SOFTWARE IS PROVIDED \\\"AS IS\\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n    </p>\\n    <p>\\n        <br /><br />\\n        Please review the <a target=\\\"_blank\\\" href=\\\"http://www.evotiva.com/Products/DNN-Search-And-Replace/Licensing\\\">DNN Search and Replace EULA</a> (opens in new window) for more information.\\n    </p>\\t\\n</div>\"}]",
            "Count": 10
        },
        {
            "Id": "dbo.[Packages][Manifest]",
            "TableName": "dbo.[Packages]",
            "ColumnName": "[Manifest]",
            "ColumnsList": "[{\"field\": \"[PackageID]\",\"label\": \"[PackageID]\",\"sortable\": true,\"searchable\": true},{\"field\": \"[Manifest]\",\"label\": \"[Manifest]\",\"sortable\": false,\"searchable\": true}]",
            "Results": "[{\"[PackageID]\":65,\"[Manifest]\":\"<package name=\\\"DotNetNuke.Console\\\" type=\\\"Module\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>Console</friendlyName>\\r\\n  <description>Display children pages as icon links for navigation.</description>\\r\\n  <iconFile>~/DesktopModules/Admin/Console/console.png</iconFile>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"license.txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <components>\\r\\n    <component type=\\\"Module\\\">\\r\\n      <desktopModule>\\r\\n        <moduleName>Console</moduleName>\\r\\n        <foldername>Admin/Console</foldername>\\r\\n        <businessControllerClass>Dnn.Modules.Console.Components.BusinessController</businessControllerClass>\\r\\n        <supportedFeatures>\\r\\n          <supportedFeature type=\\\"Upgradeable\\\" />\\r\\n        </supportedFeatures>\\r\\n        <moduleDefinitions>\\r\\n          <moduleDefinition>\\r\\n            <friendlyName>Console</friendlyName>\\r\\n            <moduleControls>\\r\\n              <moduleControl>\\r\\n                <controlKey />\\r\\n                <controlSrc>DesktopModules/Admin/Console/ViewConsole.ascx</controlSrc>\\r\\n                <controlTitle>Console</controlTitle>\\r\\n                <controlType>View</controlType>\\r\\n                <iconFile></iconFile>\\r\\n                <helpUrl>http://help.dotnetnuke.com/070100/default.htm#Documentation/Building Your Site/Installed Modules/Console/About the Console Module.htm</helpUrl>\\r\\n                <viewOrder>0</viewOrder>\\r\\n                <supportsPartialRendering>True</supportsPartialRendering>\\r\\n                <supportsPopUps>True</supportsPopUps>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>Settings</controlKey>\\r\\n                <controlSrc>DesktopModules/Admin/Console/Settings.ascx</controlSrc>\\r\\n                <controlTitle>Console Settings</controlTitle>\\r\\n                <controlType>Admin</controlType>\\r\\n                <iconFile></iconFile>\\r\\n                <helpUrl></helpUrl>\\r\\n                <viewOrder>0</viewOrder>\\r\\n                <supportsPartialRendering>True</supportsPartialRendering>\\r\\n                <supportsPopUps>True</supportsPopUps>\\r\\n              </moduleControl>\\r\\n            </moduleControls>\\r\\n          </moduleDefinition>\\r\\n        </moduleDefinitions>\\r\\n      </desktopModule>\\r\\n      <eventMessage>\\r\\n        <processorType>DotNetNuke.Entities.Modules.EventMessageProcessor, DotNetNuke</processorType>\\r\\n        <processorCommand>UpgradeModule</processorCommand>\\r\\n        <attributes>\\r\\n          <businessControllerClass>Dnn.Modules.Console.Components.BusinessController</businessControllerClass>\\r\\n          <desktopModuleID>[DESKTOPMODULEID]</desktopModuleID>\\r\\n          <upgradeVersionsList>08.00.00</upgradeVersionsList>\\r\\n        </attributes>\\r\\n      </eventMessage>\\r\\n    </component>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>Dnn.Modules.Console.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>DesktopModules/Admin/Console</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"08.00.00\\\" fileName=\\\"08.00.00.txt\\\" />\\r\\n    <component type=\\\"File\\\">\\r\\n      <files>\\r\\n        <basePath>DesktopModules\\\\Admin\\\\Console</basePath>\\r\\n        <file>\\r\\n          <name>08.00.00.txt</name>\\r\\n        </file>\\r\\n      </files>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":102,\"[Manifest]\":\"<package name=\\\"DotNetNuke.Module Creator\\\" type=\\\"Module\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>Module Creator</friendlyName>\\r\\n  <description>Development of modules.</description>\\r\\n  <iconFile>~/Icons/Sigma/ModuleCreator_32x32.png</iconFile>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"license.txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <components>\\r\\n    <component type=\\\"Module\\\">\\r\\n      <desktopModule>\\r\\n        <moduleName>ModuleCreator</moduleName>\\r\\n        <foldername>Admin/ModuleCreator</foldername>\\r\\n        <businessControllerClass>Dnn.Modules.ModuleCreator.Components.BusinessController</businessControllerClass>\\r\\n        <supportedFeatures>\\r\\n          <supportedFeature type=\\\"Upgradeable\\\" />\\r\\n        </supportedFeatures>\\r\\n        <moduleDefinitions>\\r\\n          <moduleDefinition>\\r\\n            <friendlyName>Module Creator</friendlyName>\\r\\n            <moduleControls>\\r\\n              <moduleControl>\\r\\n                <controlKey />\\r\\n                <controlSrc>DesktopModules/Admin/ModuleCreator/CreateModule.ascx</controlSrc>\\r\\n                <controlTitle></controlTitle>\\r\\n                <controlType>Host</controlType>\\r\\n                <iconFile></iconFile>\\r\\n                <helpUrl></helpUrl>\\r\\n                <viewOrder>0</viewOrder>\\r\\n                <supportsPartialRendering>False</supportsPartialRendering>\\r\\n                <supportsPopUps>False</supportsPopUps>\\r\\n              </moduleControl>\\r\\n            </moduleControls>\\r\\n          </moduleDefinition>\\r\\n        </moduleDefinitions>\\r\\n      </desktopModule>\\r\\n      <eventMessage>\\r\\n        <processorType>DotNetNuke.Entities.Modules.EventMessageProcessor, DotNetNuke</processorType>\\r\\n        <processorCommand>UpgradeModule</processorCommand>\\r\\n        <attributes>\\r\\n          <businessControllerClass>Dnn.Modules.ModuleCreator.Components.BusinessController</businessControllerClass>\\r\\n          <desktopModuleID>[DESKTOPMODULEID]</desktopModuleID>\\r\\n          <upgradeVersionsList>08.00.00</upgradeVersionsList>\\r\\n        </attributes>\\r\\n      </eventMessage>\\r\\n    </component>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>Dnn.Modules.ModuleCreator.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>DesktopModules/Admin/ModuleCreator</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"08.00.00\\\" fileName=\\\"08.00.00.txt\\\" />\\r\\n    <component type=\\\"File\\\">\\r\\n      <files>\\r\\n        <basePath>DesktopModules\\\\Admin\\\\ModuleCreator</basePath>\\r\\n        <file>\\r\\n          <name>08.00.00.txt</name>\\r\\n        </file>\\r\\n      </files>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":103,\"[Manifest]\":\"<package name=\\\"DotNetNuke.Web.Deprecated\\\" type=\\\"Library\\\" isSystem=\\\"true\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>DNN Deprecated Web Controls Library</friendlyName>\\r\\n  <description>DNN Deprecated Web Controls library for legacy Telerik depepndency</description>\\r\\n  <dependencies />\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"license.txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"CoreVersion\\\">09.01.00</dependency>\\r\\n  </dependencies>\\r\\n  <components>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>DotNetNuke.Web.Deprecated.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":104,\"[Manifest]\":\"<package name=\\\"DotNetNuke.Website.Deprecated\\\" type=\\\"Library\\\" isSystem=\\\"true\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>DNN Deprecated Website Codebehind files</friendlyName>\\r\\n  <description>DNN Deprecated Website Codebehind files for backward compability.</description>\\r\\n  <dependencies />\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"license.txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"CoreVersion\\\">09.01.00</dependency>\\r\\n  </dependencies>\\r\\n  <components>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>DotNetNuke.Website.Deprecated.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":105,\"[Manifest]\":\"<package name=\\\"Dnn.EditBar.UI\\\" type=\\\"Library\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>Dnn.EditBar.UI</friendlyName>\\r\\n  <description></description>\\r\\n  <dependencies />\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"license.txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <components>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>Dnn.EditBar.UI.dll</name>\\r\\n        </assembly>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>Dnn.EditBar.Library.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"Config\\\">\\r\\n      <config>\\r\\n        <configFile>web.config</configFile>\\r\\n        <install>\\r\\n          <configuration>\\r\\n            <nodes>\\r\\n              <node path=\\\"/configuration/system.webServer/modules/add[@name='EditBarModule']\\\" action=\\\"remove\\\" />\\r\\n              <node path=\\\"/configuration/system.webServer/modules\\\" action=\\\"update\\\" key=\\\"name\\\" collision=\\\"overwrite\\\">\\r\\n                <add name=\\\"EditBarModule\\\" type=\\\"Dnn.EditBar.UI.HttpModules.EditBarModule, Dnn.EditBar.UI\\\" preCondition=\\\"managedHandler\\\" />\\r\\n              </node>\\r\\n            </nodes>\\r\\n          </configuration>\\r\\n        </install>\\r\\n        <uninstall>\\r\\n          <configuration>\\r\\n            <nodes>\\r\\n              <node path=\\\"/configuration/system.webServer/modules/add[@name='EditBarModule']\\\" action=\\\"remove\\\" />\\r\\n            </nodes>\\r\\n          </configuration>\\r\\n        </uninstall>\\r\\n      </config>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>DesktopModules\\\\admin\\\\Dnn.EditBar</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"01.05.00\\\" fileName=\\\"01.05.00.txt\\\" />\\r\\n    <component type=\\\"File\\\">\\r\\n      <files>\\r\\n        <basePath>DesktopModules\\\\admin\\\\Dnn.EditBar</basePath>\\r\\n        <file>\\r\\n          <name>01.05.00.txt</name>\\r\\n          <sourceFileName>01.05.00.txt</sourceFileName>\\r\\n        </file>\\r\\n      </files>\\r\\n    </component>\\r\\n  </components>\\r\\n  <eventMessage>\\r\\n    <processorType>DotNetNuke.Entities.Modules.EventMessageProcessor, DotNetNuke</processorType>\\r\\n    <processorCommand>UpgradeModule</processorCommand>\\r\\n    <attributes>\\r\\n      <businessControllerClass>Dnn.EditBar.UI.Components.BusinessController, Dnn.EditBar.UI</businessControllerClass>\\r\\n      <desktopModuleID>[DESKTOPMODULEID]</desktopModuleID>\\r\\n      <upgradeVersionsList>01.00.00</upgradeVersionsList>\\r\\n    </attributes>\\r\\n  </eventMessage>\\r\\n</package>\"},{\"[PackageID]\":106,\"[Manifest]\":\"<package name=\\\"DDRMenu\\\" type=\\\"Module\\\" isSystem=\\\"true\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>DDR Menu</friendlyName>\\r\\n  <description>DotNetNuke Navigation Provider.</description>\\r\\n  <owner>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"License.txt\\\" />\\r\\n  <releaseNotes src=\\\"ReleaseNotes.txt\\\" />\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"CoreVersion\\\">07.00.00</dependency>\\r\\n  </dependencies>\\r\\n  <components>\\r\\n    <component type=\\\"Cleanup\\\" fileName=\\\"02.00.03.txt\\\" version=\\\"02.00.03\\\" />\\r\\n    <component type=\\\"Module\\\">\\r\\n      <desktopModule>\\r\\n        <moduleName>DDRMenu</moduleName>\\r\\n        <foldername>DDRMenu</foldername>\\r\\n        <businessControllerClass>DotNetNuke.Web.DDRMenu.Controller,DotNetNuke.Web.DDRMenu</businessControllerClass>\\r\\n        <supportedFeatures>\\r\\n          <supportedFeature type=\\\"Portable\\\" />\\r\\n          <supportedFeature type=\\\"Upgradeable\\\" />\\r\\n        </supportedFeatures>\\r\\n        <moduleDefinitions>\\r\\n          <moduleDefinition>\\r\\n            <friendlyName>DDR Menu</friendlyName>\\r\\n            <defaultCacheTime>0</defaultCacheTime>\\r\\n            <moduleControls>\\r\\n              <moduleControl>\\r\\n                <controlKey />\\r\\n                <controlSrc>DesktopModules/DDRMenu/MenuView.ascx</controlSrc>\\r\\n                <supportsPartialRendering>False</supportsPartialRendering>\\r\\n                <controlTitle>DDR menu</controlTitle>\\r\\n                <controlType>View</controlType>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>Settings</controlKey>\\r\\n                <controlSrc>DesktopModules/DDRMenu/MenuSettings.ascx</controlSrc>\\r\\n                <supportsPartialRendering>False</supportsPartialRendering>\\r\\n                <supportsPopUps>True</supportsPopUps>\\r\\n                <controlTitle>DDR menu settings</controlTitle>\\r\\n                <controlType>Edit</controlType>\\r\\n              </moduleControl>\\r\\n            </moduleControls>\\r\\n          </moduleDefinition>\\r\\n        </moduleDefinitions>\\r\\n      </desktopModule>\\r\\n      <eventMessage>\\r\\n        <processorType>DotNetNuke.Entities.Modules.EventMessageProcessor, DotNetNuke</processorType>\\r\\n        <processorCommand>UpgradeModule</processorCommand>\\r\\n        <attributes>\\r\\n          <businessControllerClass>DotNetNuke.Web.DDRMenu.Controller,DotNetNuke.Web.DDRMenu</businessControllerClass>\\r\\n          <desktopModuleID>[DESKTOPMODULEID]</desktopModuleID>\\r\\n          <upgradeVersionsList>00.00.01</upgradeVersionsList>\\r\\n        </attributes>\\r\\n      </eventMessage>\\r\\n    </component>\\r\\n    <component type=\\\"SkinObject\\\">\\r\\n      <moduleControl>\\r\\n        <controlKey>DDRMENU</controlKey>\\r\\n        <controlSrc>DesktopModules/DDRMenu/Menu.ascx</controlSrc>\\r\\n      </moduleControl>\\r\\n    </component>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <basePath>bin</basePath>\\r\\n        <assembly>\\r\\n          <name>DotNetNuke.Web.DDRMenu.dll</name>\\r\\n          <sourceFileName>bin\\\\DotNetNuke.Web.DDRMenu.dll</sourceFileName>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>DesktopModules\\\\DDRMenu</basePath>\\r\\n        <resourceFile>\\r\\n          <name>resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n    <component type=\\\"Config\\\">\\r\\n      <config>\\r\\n        <configFile>web.config</configFile>\\r\\n        <install>\\r\\n          <configuration>\\r\\n            <nodes>\\r\\n              <node path=\\\"/configuration/dotnetnuke/navigationControl/providers\\\" action=\\\"update\\\" key=\\\"name\\\" collision=\\\"overwrite\\\">\\r\\n                <add name=\\\"DDRMenuNavigationProvider\\\" type=\\\"DotNetNuke.Web.DDRMenu.DDRMenuNavigationProvider, DotNetNuke.Web.DDRMenu\\\" />\\r\\n              </node>\\r\\n            </nodes>\\r\\n          </configuration>\\r\\n        </install>\\r\\n        <uninstall>\\r\\n          <configuration>\\r\\n            <nodes>\\r\\n              <node path=\\\"/configuration/dotnetnuke/navigationControl/providers/add[@name='DDRMenuNavigationProvider']\\\" action=\\\"remove\\\" />\\r\\n            </nodes>\\r\\n          </configuration>\\r\\n        </uninstall>\\r\\n      </config>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":107,\"[Manifest]\":\"<package name=\\\"Dnn.PersonaBar.UI\\\" type=\\\"Library\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>Dnn.PersonaBar.UI</friendlyName>\\r\\n  <description></description>\\r\\n  <dependencies />\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"license.txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <components>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>Dnn.PersonaBar.UI.dll</name>\\r\\n        </assembly>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>Dnn.PersonaBar.Library.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>DesktopModules\\\\admin\\\\Dnn.PersonaBar</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n    <component type=\\\"File\\\">\\r\\n      <files>\\r\\n        <basePath>Images</basePath>\\r\\n        <file>\\r\\n          <name>icon-personabarapp-16px.png</name>\\r\\n          <sourceFileName>Images/icon-personabarapp-16px.png</sourceFileName>\\r\\n        </file>\\r\\n        <file>\\r\\n          <name>icon-personabarapp-32px.png</name>\\r\\n          <sourceFileName>Images/icon-personabarapp-32px.png</sourceFileName>\\r\\n        </file>\\r\\n      </files>\\r\\n    </component>\\r\\n    <component type=\\\"File\\\">\\r\\n      <files>\\r\\n        <basePath>Licenses</basePath>\\r\\n        <file>\\r\\n          <name>Admin Persona Bar Referenced Licences.txt</name>\\r\\n          <sourceFileName>Licenses/Admin Persona Bar Referenced Licences.txt</sourceFileName>\\r\\n        </file>\\r\\n        <file>\\r\\n          <name>Admin Persona Bar Referenced Licences.zip</name>\\r\\n          <sourceFileName>Licenses/Admin Persona Bar Referenced Licences.zip</sourceFileName>\\r\\n        </file>\\r\\n      </files>\\r\\n    </component>\\r\\n    <component type=\\\"Config\\\">\\r\\n      <config>\\r\\n        <configFile>web.config</configFile>\\r\\n        <install>\\r\\n          <configuration>\\r\\n            <nodes>\\r\\n              <node path=\\\"/configuration/system.webServer\\\" action=\\\"update\\\" targetpath=\\\"/configuration/system.webServer/staticContent\\\" collision=\\\"ignore\\\">\\r\\n                <staticContent>\\r\\n                  <remove fileExtension=\\\".svg\\\" />\\r\\n                  <remove fileExtension=\\\".woff\\\" />\\r\\n                  <mimeMap fileExtension=\\\".svg\\\" mimeType=\\\"image/svg+xml\\\" />\\r\\n                  <mimeMap fileExtension=\\\".woff\\\" mimeType=\\\"font/x-woff\\\" />\\r\\n                </staticContent>\\r\\n              </node>\\r\\n              <node path=\\\"/configuration/system.webServer/staticContent/remove[@fileExtension='.svg']\\\" action=\\\"remove\\\" />\\r\\n              <node path=\\\"/configuration/system.webServer/staticContent\\\" action=\\\"add\\\" key=\\\"remove\\\" collision=\\\"overwrite\\\">\\r\\n                <remove fileExtension=\\\".svg\\\" />\\r\\n              </node>\\r\\n              <node path=\\\"/configuration/system.webServer/staticContent/mimeMap[@fileExtension='.svg']\\\" action=\\\"remove\\\" />\\r\\n              <node path=\\\"/configuration/system.webServer/staticContent\\\" action=\\\"add\\\" key=\\\"mimeMap\\\" collision=\\\"overwrite\\\">\\r\\n                <mimeMap fileExtension=\\\".svg\\\" mimeType=\\\"image/svg+xml\\\" />\\r\\n              </node>\\r\\n              <node path=\\\"/configuration/system.webServer/staticContent/remove[@fileExtension='.woff']\\\" action=\\\"remove\\\" />\\r\\n              <node path=\\\"/configuration/system.webServer/staticContent\\\" action=\\\"add\\\" key=\\\"remove\\\" collision=\\\"overwrite\\\">\\r\\n                <remove fileExtension=\\\".woff\\\" />\\r\\n              </node>\\r\\n              <node path=\\\"/configuration/system.webServer/staticContent/mimeMap[@fileExtension='.woff']\\\" action=\\\"remove\\\" />\\r\\n              <node path=\\\"/configuration/system.webServer/staticContent\\\" action=\\\"add\\\" key=\\\"mimeMap\\\" collision=\\\"overwrite\\\">\\r\\n                <mimeMap fileExtension=\\\".woff\\\" mimeType=\\\"font/x-woff\\\" />\\r\\n              </node>\\r\\n              <node path=\\\"/configuration/system.webServer/modules/add[@name='PersonaBarModule']\\\" action=\\\"remove\\\" />\\r\\n              <node path=\\\"/configuration/system.webServer/modules\\\" action=\\\"update\\\" key=\\\"name\\\" collision=\\\"overwrite\\\">\\r\\n                <add name=\\\"PersonaBarModule\\\" type=\\\"Dnn.PersonaBar.UI.HttpModules.PersonaBarModule, Dnn.PersonaBar.UI\\\" preCondition=\\\"managedHandler\\\" />\\r\\n              </node>\\r\\n            </nodes>\\r\\n          </configuration>\\r\\n        </install>\\r\\n        <uninstall>\\r\\n          <configuration>\\r\\n            <nodes>\\r\\n              <node path=\\\"/configuration/system.webServer/modules/add[@name='PersonaBarModule']\\\" action=\\\"remove\\\" />\\r\\n            </nodes>\\r\\n          </configuration>\\r\\n        </uninstall>\\r\\n      </config>\\r\\n    </component>\\r\\n    <component type=\\\"Script\\\">\\r\\n      <scripts>\\r\\n        <basePath>DesktopModules\\\\admin\\\\Dnn.PersonaBar</basePath>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>SqlDataProvider</path>\\r\\n          <name>Install.SqlDataProvider</name>\\r\\n          <version>01.00.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>SqlDataProvider</path>\\r\\n          <name>01.01.00.SqlDataProvider</name>\\r\\n          <version>01.01.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>SqlDataProvider</path>\\r\\n          <name>01.03.00.SqlDataProvider</name>\\r\\n          <version>01.03.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>SqlDataProvider</path>\\r\\n          <name>01.04.00.SqlDataProvider</name>\\r\\n          <version>01.04.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>SqlDataProvider</path>\\r\\n          <name>01.05.00.SqlDataProvider</name>\\r\\n          <version>01.05.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>SqlDataProvider</path>\\r\\n          <name>09.04.01.SqlDataProvider</name>\\r\\n          <version>09.04.01</version>\\r\\n        </script>\\r\\n        <script type=\\\"UnInstall\\\">\\r\\n          <path>SqlDataProvider</path>\\r\\n          <name>Uninstall.SqlDataProvider</name>\\r\\n          <version>09.04.01</version>\\r\\n        </script>\\r\\n      </scripts>\\r\\n    </component>\\r\\n    <component type=\\\"File\\\">\\r\\n      <files>\\r\\n        <basePath>DesktopModules\\\\admin\\\\Dnn.PersonaBar</basePath>\\r\\n        <file>\\r\\n          <name>01.03.00.txt</name>\\r\\n          <sourceFileName>01.03.00.txt</sourceFileName>\\r\\n        </file>\\r\\n      </files>\\r\\n    </component>\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"01.03.00\\\" fileName=\\\"01.03.00.txt\\\" />\\r\\n    <component type=\\\"File\\\">\\r\\n      <files>\\r\\n        <basePath>DesktopModules\\\\admin\\\\Dnn.PersonaBar</basePath>\\r\\n        <file>\\r\\n          <name>03.00.00.txt</name>\\r\\n          <sourceFileName>03.00.00.txt</sourceFileName>\\r\\n        </file>\\r\\n      </files>\\r\\n    </component>\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"03.00.00\\\" fileName=\\\"03.00.00.txt\\\" />\\r\\n  </components>\\r\\n  <eventMessage>\\r\\n    <processorType>DotNetNuke.Entities.Modules.EventMessageProcessor, DotNetNuke</processorType>\\r\\n    <processorCommand>UpgradeModule</processorCommand>\\r\\n    <attributes>\\r\\n      <businessControllerClass>Dnn.PersonaBar.UI.Components.BusinessController, Dnn.PersonaBar.UI</businessControllerClass>\\r\\n      <desktopModuleID>[DESKTOPMODULEID]</desktopModuleID>\\r\\n      <upgradeVersionsList>01.00.00,01.04.00,03.00.00</upgradeVersionsList>\\r\\n    </attributes>\\r\\n  </eventMessage>\\r\\n</package>\"},{\"[PackageID]\":108,\"[Manifest]\":\"<package name=\\\"Dnn.AzureConnector\\\" type=\\\"Connector\\\" isSystem=\\\"false\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>Dnn Azure Connector</friendlyName>\\r\\n  <description>The Azure Connector allows you to integrate Azure as your commenting solution with the Publisher module.</description>\\r\\n  <iconFile>~/DesktopModules/Connectors/Azure/Images/icon-azure-32px.png</iconFile>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"CoreVersion\\\">09.02.00</dependency>\\r\\n  </dependencies>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"license.txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <components>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>Dnn.AzureConnector.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>DesktopModules\\\\Connectors\\\\Azure</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":109,\"[Manifest]\":\"<package name=\\\"DotNetNuke.Modules.CoreMessaging\\\" type=\\\"Module\\\" isSystem=\\\"true\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>Message Center</friendlyName>\\r\\n  <description>Core Messaging module allows users to message each other.</description>\\r\\n  <iconFile>~/DesktopModules/CoreMessaging/Images/messaging_32X32.png</iconFile>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"License.txt\\\"></license>\\r\\n  <releaseNotes src=\\\"ReleaseNotes.txt\\\"></releaseNotes>\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"CoreVersion\\\">07.00.00</dependency>\\r\\n  </dependencies>\\r\\n  <components>\\r\\n    <component type=\\\"Module\\\">\\r\\n      <desktopModule>\\r\\n        <moduleName>DotNetNuke.Modules.CoreMessaging</moduleName>\\r\\n        <foldername>CoreMessaging</foldername>\\r\\n        <businessControllerClass>DotNetNuke.Modules.CoreMessaging.Components.CoreMessagingBusinessController, DotNetNuke.Modules.CoreMessaging</businessControllerClass>\\r\\n        <supportedFeatures />\\r\\n        <moduleDefinitions>\\r\\n          <moduleDefinition>\\r\\n            <friendlyName>Message Center</friendlyName>\\r\\n            <defaultCacheTime>0</defaultCacheTime>\\r\\n            <moduleControls>\\r\\n              <moduleControl>\\r\\n                <controlKey />\\r\\n                <controlSrc>DesktopModules/CoreMessaging/View.ascx</controlSrc>\\r\\n                <supportsPopUps>True</supportsPopUps>\\r\\n                <supportsPartialRendering>True</supportsPartialRendering>\\r\\n                <controlTitle>Core Messaging View</controlTitle>\\r\\n                <controlType>View</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl>https://dnndocs.com</helpUrl>\\r\\n                <viewOrder>0</viewOrder>\\r\\n              </moduleControl>\\r\\n            </moduleControls>\\r\\n          </moduleDefinition>\\r\\n        </moduleDefinitions>\\r\\n      </desktopModule>\\r\\n      <eventMessage>\\r\\n        <processorType>DotNetNuke.Entities.Modules.EventMessageProcessor, DotNetNuke</processorType>\\r\\n        <processorCommand>UpgradeModule</processorCommand>\\r\\n        <attributes>\\r\\n          <businessControllerClass>DotNetNuke.Modules.CoreMessaging.Components.CoreMessagingBusinessController, DotNetNuke.Modules.CoreMessaging</businessControllerClass>\\r\\n          <desktopModuleID>[DESKTOPMODULEID]</desktopModuleID>\\r\\n          <upgradeVersionsList>06.02.00</upgradeVersionsList>\\r\\n        </attributes>\\r\\n      </eventMessage>\\r\\n    </component>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>DotNetNuke.Modules.CoreMessaging.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"File\\\">\\r\\n      <files>\\r\\n        <basePath>DesktopModules/CoreMessaging</basePath>\\r\\n        <file>\\r\\n          <name>View.ascx</name>\\r\\n          <sourceFileName>View.ascx</sourceFileName>\\r\\n        </file>\\r\\n      </files>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>DesktopModules/CoreMessaging</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":110,\"[Manifest]\":\"<package name=\\\"DNN_HTML\\\" type=\\\"Module\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>HTML</friendlyName>\\r\\n  <description>This module renders a block of HTML or Text content. The Html/Text module allows authorized users to edit the content either inline or in a separate administration page. Optional tokens can be used that get replaced dynamically during display. All versions of content are stored in the database including the ability to rollback to an older version.</description>\\r\\n  <iconFile>DesktopModules\\\\HTML\\\\Images\\\\html.png</iconFile>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"license.txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"CoreVersion\\\">09.01.00</dependency>\\r\\n  </dependencies>\\r\\n  <components>\\r\\n    <component type=\\\"Script\\\">\\r\\n      <scripts>\\r\\n        <basePath>DesktopModules\\\\HTML</basePath>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>03.00.00.SqlDataProvider</name>\\r\\n          <version>03.00.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>03.01.00.SqlDataProvider</name>\\r\\n          <version>03.01.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>04.05.00.SqlDataProvider</name>\\r\\n          <version>04.05.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>04.06.00.SqlDataProvider</name>\\r\\n          <version>04.06.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>04.06.01.SqlDataProvider</name>\\r\\n          <version>04.06.01</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>04.07.00.SqlDataProvider</name>\\r\\n          <version>04.07.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>04.08.01.SqlDataProvider</name>\\r\\n          <version>04.08.01</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>05.01.00.SqlDataProvider</name>\\r\\n          <version>05.01.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>05.01.02.SqlDataProvider</name>\\r\\n          <version>05.01.02</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>05.01.03.SqlDataProvider</name>\\r\\n          <version>05.01.03</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>05.01.04.SqlDataProvider</name>\\r\\n          <version>05.01.04</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>05.02.00.SqlDataProvider</name>\\r\\n          <version>05.02.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>05.05.00.SqlDataProvider</name>\\r\\n          <version>05.05.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>06.01.00.SqlDataProvider</name>\\r\\n          <version>06.01.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>07.02.01.SqlDataProvider</name>\\r\\n          <version>07.02.01</version>\\r\\n        </script>\\r\\n        <script type=\\\"UnInstall\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>Uninstall.SqlDataProvider</name>\\r\\n          <version>05.01.04</version>\\r\\n        </script>\\r\\n      </scripts>\\r\\n    </component>\\r\\n    <component type=\\\"Module\\\">\\r\\n      <desktopModule>\\r\\n        <moduleName>DNN_HTML</moduleName>\\r\\n        <foldername>HTML</foldername>\\r\\n        <shareable>Supported</shareable>\\r\\n        <businessControllerClass>DotNetNuke.Modules.Html.HtmlTextController, DotNetNuke.Modules.Html</businessControllerClass>\\r\\n        <supportedFeatures>\\r\\n          <supportedFeature type=\\\"Portable\\\" />\\r\\n          <supportedFeature type=\\\"Searchable\\\" />\\r\\n          <supportedFeature type=\\\"Upgradeable\\\" />\\r\\n        </supportedFeatures>\\r\\n        <moduleDefinitions>\\r\\n          <moduleDefinition>\\r\\n            <friendlyName>Text/HTML</friendlyName>\\r\\n            <defaultCacheTime>1200</defaultCacheTime>\\r\\n            <moduleControls>\\r\\n              <moduleControl>\\r\\n                <controlKey />\\r\\n                <controlSrc>DesktopModules/HTML/HtmlModule.ascx</controlSrc>\\r\\n                <supportsPartialRendering>False</supportsPartialRendering>\\r\\n                <controlTitle />\\r\\n                <controlType>View</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl>https://dnndocs.com</helpUrl>\\r\\n                <viewOrder>0</viewOrder>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>Edit</controlKey>\\r\\n                <controlSrc>DesktopModules/HTML/EditHTML.ascx</controlSrc>\\r\\n                <supportsPartialRendering>True</supportsPartialRendering>\\r\\n                <controlTitle>Edit Content</controlTitle>\\r\\n                <controlType>Edit</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl>https://dnndocs.com</helpUrl>\\r\\n                <viewOrder>0</viewOrder>\\r\\n                <supportsPopUps>True</supportsPopUps>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>MyWork</controlKey>\\r\\n                <controlSrc>DesktopModules/HTML/MyWork.ascx</controlSrc>\\r\\n                <supportsPartialRendering>True</supportsPartialRendering>\\r\\n                <controlTitle>My Work</controlTitle>\\r\\n                <controlType>View</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl>https://dnndocs.com</helpUrl>\\r\\n                <viewOrder>0</viewOrder>\\r\\n                <supportsPopUps>True</supportsPopUps>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>Settings</controlKey>\\r\\n                <controlSrc>DesktopModules/HTML/Settings.ascx</controlSrc>\\r\\n                <supportsPartialRendering>True</supportsPartialRendering>\\r\\n                <controlTitle>Settings</controlTitle>\\r\\n                <controlType>Edit</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl>https://dnndocs.com</helpUrl>\\r\\n                <viewOrder>0</viewOrder>\\r\\n              </moduleControl>\\r\\n            </moduleControls>\\r\\n          </moduleDefinition>\\r\\n        </moduleDefinitions>\\r\\n      </desktopModule>\\r\\n      <eventMessage>\\r\\n        <processorType>DotNetNuke.Entities.Modules.EventMessageProcessor, DotNetNuke</processorType>\\r\\n        <processorCommand>UpgradeModule</processorCommand>\\r\\n        <attributes>\\r\\n          <businessControllerClass>DotNetNuke.Modules.Html.HtmlTextController</businessControllerClass>\\r\\n          <desktopModuleID>[DESKTOPMODULEID]</desktopModuleID>\\r\\n          <upgradeVersionsList>05.01.02,06.00.00,06.02.00</upgradeVersionsList>\\r\\n        </attributes>\\r\\n      </eventMessage>\\r\\n    </component>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>DotNetNuke.Modules.Html.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>DesktopModules/HTML</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"04.05.00\\\" fileName=\\\"04.05.00.txt\\\" />\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"04.06.00\\\" fileName=\\\"04.06.00.txt\\\" />\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"04.06.01\\\" fileName=\\\"04.06.01.txt\\\" />\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"04.07.00\\\" fileName=\\\"04.07.00.txt\\\" />\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"04.08.01\\\" fileName=\\\"04.08.01.txt\\\" />\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"05.01.00\\\" fileName=\\\"05.01.00.txt\\\" />\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"05.01.02\\\" fileName=\\\"05.01.02.txt\\\" />\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"05.01.03\\\" fileName=\\\"05.01.03.txt\\\" />\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"05.01.04\\\" fileName=\\\"05.01.04.txt\\\" />\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"05.02.00\\\" fileName=\\\"05.02.00.txt\\\" />\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"05.04.03\\\" fileName=\\\"05.04.03.txt\\\" />\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"07.03.00\\\" fileName=\\\"07.03.00.txt\\\" />\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":111,\"[Manifest]\":\"<package name=\\\"DotNetNuke.HtmlEditorManager\\\" type=\\\"Module\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>Html Editor Management</friendlyName>\\r\\n  <iconFile>Images/HtmlEditorManager_Standard_32x32.png</iconFile>\\r\\n  <description>A module used to configure toolbar items, behavior, and other options used in the DotNetNuke HtmlEditor Provider.</description>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"CoreVersion\\\">09.01.00</dependency>\\r\\n  </dependencies>\\r\\n  <components>\\r\\n    <component type=\\\"Module\\\">\\r\\n      <desktopModule>\\r\\n        <moduleName>DotNetNuke.HtmlEditorManager</moduleName>\\r\\n        <foldername>Admin/HtmlEditorManager</foldername>\\r\\n        <businessControllerClass>DotNetNuke.Modules.HtmlEditorManager.Components.UpgradeController, DotNetNuke.Modules.HtmlEditorManager</businessControllerClass>\\r\\n        <supportedFeatures />\\r\\n        <isPremium>false</isPremium>\\r\\n        <isAdmin>true</isAdmin>\\r\\n        <moduleDefinitions>\\r\\n          <moduleDefinition>\\r\\n            <friendlyName>Html Editor Management</friendlyName>\\r\\n            <defaultCacheTime>0</defaultCacheTime>\\r\\n            <moduleControls>\\r\\n              <moduleControl>\\r\\n                <controlKey />\\r\\n                <controlSrc>DesktopModules/Admin/HtmlEditorManager/Views/ProviderConfiguration.ascx</controlSrc>\\r\\n                <supportsPopUps>True</supportsPopUps>\\r\\n                <supportsPartialRendering>True</supportsPartialRendering>\\r\\n                <controlTitle>Html Editor Management</controlTitle>\\r\\n                <controlType>View</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl>https://dnndocs.com</helpUrl>\\r\\n                <viewOrder>0</viewOrder>\\r\\n              </moduleControl>\\r\\n            </moduleControls>\\r\\n          </moduleDefinition>\\r\\n        </moduleDefinitions>\\r\\n      </desktopModule>\\r\\n      <eventMessage>\\r\\n        <processorType>DotNetNuke.Entities.Modules.EventMessageProcessor, DotNetNuke</processorType>\\r\\n        <processorCommand>UpgradeModule</processorCommand>\\r\\n        <attributes>\\r\\n          <businessControllerClass>DotNetNuke.Modules.HtmlEditorManager.Components.UpgradeController, DotNetNuke.Modules.HtmlEditorManager</businessControllerClass>\\r\\n          <desktopModuleID>[DESKTOPMODULEID]</desktopModuleID>\\r\\n          <upgradeVersionsList>07.04.00,09.01.01,09.02.00,09.02.01</upgradeVersionsList>\\r\\n        </attributes>\\r\\n      </eventMessage>\\r\\n    </component>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>DotNetNuke.Modules.HtmlEditorManager.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>DesktopModules\\\\Admin\\\\HtmlEditorManager</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":112,\"[Manifest]\":\"<package name=\\\"Journal\\\" type=\\\"Module\\\" isSystem=\\\"true\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>Journal</friendlyName>\\r\\n  <description>DotNetNuke Corporation Journal module</description>\\r\\n  <iconFile>DesktopModules/Journal/Images/journal_32X32.png</iconFile>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"License.txt\\\"></license>\\r\\n  <releaseNotes src=\\\"ReleaseNotes.txt\\\"></releaseNotes>\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"CoreVersion\\\">07.00.00</dependency>\\r\\n  </dependencies>\\r\\n  <components>\\r\\n    <component type=\\\"Module\\\">\\r\\n      <desktopModule>\\r\\n        <moduleName>Journal</moduleName>\\r\\n        <foldername>Journal</foldername>\\r\\n        <shareable>Supported</shareable>\\r\\n        <businessControllerClass>DotNetNuke.Modules.Journal.Components.FeatureController</businessControllerClass>\\r\\n        <supportedFeatures />\\r\\n        <moduleDefinitions>\\r\\n          <moduleDefinition>\\r\\n            <friendlyName>Journal</friendlyName>\\r\\n            <defaultCacheTime>0</defaultCacheTime>\\r\\n            <moduleControls>\\r\\n              <moduleControl>\\r\\n                <controlKey />\\r\\n                <controlSrc>DesktopModules/Journal/View.ascx</controlSrc>\\r\\n                <supportsPartialRendering>False</supportsPartialRendering>\\r\\n                <controlTitle />\\r\\n                <controlType>View</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl>https://dnndocs.com</helpUrl>\\r\\n                <viewOrder>0</viewOrder>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>Settings</controlKey>\\r\\n                <controlSrc>DesktopModules/Journal/Settings.ascx</controlSrc>\\r\\n                <supportsPartialRendering>False</supportsPartialRendering>\\r\\n                <controlTitle>Journal Settings</controlTitle>\\r\\n                <controlType>Edit</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl>https://dnndocs.com</helpUrl>\\r\\n                <viewOrder>0</viewOrder>\\r\\n              </moduleControl>\\r\\n            </moduleControls>\\r\\n          </moduleDefinition>\\r\\n        </moduleDefinitions>\\r\\n      </desktopModule>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>DesktopModules/Journal</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>DotNetNuke.Modules.Journal.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"Script\\\">\\r\\n      <scripts>\\r\\n        <basePath>DesktopModules\\\\Journal</basePath>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>07.03.00.SqlDataProvider</name>\\r\\n          <version>07.03.00</version>\\r\\n        </script>\\r\\n      </scripts>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":113,\"[Manifest]\":\"<package name=\\\"DotNetNuke.Modules.MemberDirectory\\\" type=\\\"Module\\\" isSystem=\\\"true\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>Member Directory</friendlyName>\\r\\n  <description>The Member Directory module displays a list of Members based on role, profile property or relationship.</description>\\r\\n  <iconFile>~/DesktopModules/MemberDirectory/Images/member_list_32X32.png</iconFile>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"License.txt\\\"></license>\\r\\n  <releaseNotes src=\\\"ReleaseNotes.txt\\\"></releaseNotes>\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"CoreVersion\\\">07.00.00</dependency>\\r\\n  </dependencies>\\r\\n  <components>\\r\\n    <component type=\\\"Module\\\">\\r\\n      <desktopModule>\\r\\n        <moduleName>DotNetNuke.Modules.MemberDirectory</moduleName>\\r\\n        <foldername>MemberDirectory</foldername>\\r\\n        <businessControllerClass />\\r\\n        <supportedFeatures />\\r\\n        <moduleDefinitions>\\r\\n          <moduleDefinition>\\r\\n            <friendlyName>Member Directory</friendlyName>\\r\\n            <defaultCacheTime>0</defaultCacheTime>\\r\\n            <moduleControls>\\r\\n              <moduleControl>\\r\\n                <controlKey />\\r\\n                <controlSrc>DesktopModules/MemberDirectory/View.ascx</controlSrc>\\r\\n                <supportsPopUps>True</supportsPopUps>\\r\\n                <supportsPartialRendering>True</supportsPartialRendering>\\r\\n                <controlTitle>Social Messaging View</controlTitle>\\r\\n                <controlType>View</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl>https://dnndocs.com</helpUrl>\\r\\n                <viewOrder>0</viewOrder>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>Settings</controlKey>\\r\\n                <controlSrc>DesktopModules/MemberDirectory/Settings.ascx</controlSrc>\\r\\n                <supportsPopUps>True</supportsPopUps>\\r\\n                <supportsPartialRendering>True</supportsPartialRendering>\\r\\n                <controlTitle>Settings</controlTitle>\\r\\n                <controlType>Edit</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl>https://dnndocs.com</helpUrl>\\r\\n                <viewOrder>0</viewOrder>\\r\\n              </moduleControl>\\r\\n            </moduleControls>\\r\\n          </moduleDefinition>\\r\\n        </moduleDefinitions>\\r\\n      </desktopModule>\\r\\n      <eventMessage>\\r\\n        <processorType>DotNetNuke.Entities.Modules.EventMessageProcessor, DotNetNuke</processorType>\\r\\n        <processorCommand>UpgradeModule</processorCommand>\\r\\n        <attributes>\\r\\n          <businessControllerClass>DotNetNuke.Modules.MemberDirectory.Components.UpgradeController, DotNetNuke.Modules.MemberDirectory</businessControllerClass>\\r\\n          <desktopModuleID>[DESKTOPMODULEID]</desktopModuleID>\\r\\n          <upgradeVersionsList>07.00.06</upgradeVersionsList>\\r\\n        </attributes>\\r\\n      </eventMessage>\\r\\n    </component>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>DotNetNuke.Modules.MemberDirectory.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"File\\\">\\r\\n      <files>\\r\\n        <basePath>DesktopModules\\\\MemberDirectory</basePath>\\r\\n        <file>\\r\\n          <name>View.ascx</name>\\r\\n          <sourceFileName>View.ascx</sourceFileName>\\r\\n        </file>\\r\\n        <file>\\r\\n          <name>Settings.ascx</name>\\r\\n          <sourceFileName>Settings.ascx</sourceFileName>\\r\\n        </file>\\r\\n      </files>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>DesktopModules/MemberDirectory</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":114,\"[Manifest]\":\"<package name=\\\"DNNCorp.RazorHost\\\" type=\\\"Module\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>Razor Host</friendlyName>\\r\\n  <description>The Razor Host module allows developers to host Razor Scripts.</description>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"license.txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"coreversion\\\">07.00.00</dependency>\\r\\n    <dependency type=\\\"type\\\">System.Tuple</dependency>\\r\\n  </dependencies>\\r\\n  <components>\\r\\n    <component type=\\\"Module\\\">\\r\\n      <desktopModule>\\r\\n        <moduleName>DNNCorp.RazorHost</moduleName>\\r\\n        <foldername>RazorModules/RazorHost</foldername>\\r\\n        <businessControllerClass />\\r\\n        <supportedFeatures />\\r\\n        <moduleDefinitions>\\r\\n          <moduleDefinition>\\r\\n            <friendlyName>Razor Host</friendlyName>\\r\\n            <defaultCacheTime>0</defaultCacheTime>\\r\\n            <moduleControls>\\r\\n              <moduleControl>\\r\\n                <controlKey />\\r\\n                <controlSrc>DesktopModules/RazorModules/RazorHost/RazorHost.ascx</controlSrc>\\r\\n                <supportsPartialRendering>False</supportsPartialRendering>\\r\\n                <controlTitle />\\r\\n                <controlType>View</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl />\\r\\n                <viewOrder>0</viewOrder>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>Edit</controlKey>\\r\\n                <controlSrc>DesktopModules/RazorModules/RazorHost/EditScript.ascx</controlSrc>\\r\\n                <supportsPartialRendering>True</supportsPartialRendering>\\r\\n                <controlTitle>Edit Razor Script</controlTitle>\\r\\n                <controlType>Host</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl />\\r\\n                <viewOrder>0</viewOrder>\\r\\n                <supportsPopUps>True</supportsPopUps>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>Add</controlKey>\\r\\n                <controlSrc>DesktopModules/RazorModules/RazorHost/AddScript.ascx</controlSrc>\\r\\n                <supportsPartialRendering>True</supportsPartialRendering>\\r\\n                <controlTitle>Add Razor Script</controlTitle>\\r\\n                <controlType>Host</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl />\\r\\n                <viewOrder>0</viewOrder>\\r\\n                <supportsPopUps>True</supportsPopUps>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>CreateModule</controlKey>\\r\\n                <controlSrc>DesktopModules/RazorModules/RazorHost/CreateModule.ascx</controlSrc>\\r\\n                <supportsPartialRendering>False</supportsPartialRendering>\\r\\n                <controlTitle>Create Module</controlTitle>\\r\\n                <controlType>Host</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl />\\r\\n                <viewOrder>0</viewOrder>\\r\\n                <supportsPopUps>True</supportsPopUps>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>Settings</controlKey>\\r\\n                <controlSrc>DesktopModules/RazorModules/RazorHost/Settings.ascx</controlSrc>\\r\\n                <supportsPartialRendering>True</supportsPartialRendering>\\r\\n                <controlTitle>Razor Host Settings</controlTitle>\\r\\n                <controlType>Edit</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl />\\r\\n                <viewOrder>0</viewOrder>\\r\\n              </moduleControl>\\r\\n            </moduleControls>\\r\\n          </moduleDefinition>\\r\\n        </moduleDefinitions>\\r\\n      </desktopModule>\\r\\n    </component>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>DotNetNuke.Modules.RazorHost.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"File\\\">\\r\\n      <files>\\r\\n        <basePath>DesktopModules\\\\RazorModules\\\\RazorHost</basePath>\\r\\n        <file>\\r\\n          <path>App_LocalResources</path>\\r\\n          <name>AddScript.ascx.resx</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>App_LocalResources</path>\\r\\n          <name>EditScript.ascx.resx</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>App_LocalResources</path>\\r\\n          <name>CreateModule.ascx.resx</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>App_LocalResources</path>\\r\\n          <name>RazorHost.ascx.resx</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>App_LocalResources</path>\\r\\n          <name>Settings.ascx.resx</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts\\\\Shared</path>\\r\\n          <name>_Footer.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts\\\\Shared</path>\\r\\n          <name>_Header.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts\\\\Shared</path>\\r\\n          <name>_Header2.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts\\\\Shared</path>\\r\\n          <name>_Layout.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts\\\\Shared</path>\\r\\n          <name>_Layout2.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts\\\\Shared</path>\\r\\n          <name>_Layout3.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts\\\\Shared</path>\\r\\n          <name>_List.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts</path>\\r\\n          <name>_1_SampleRazorScript.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts</path>\\r\\n          <name>_2_AddNumbers.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts</path>\\r\\n          <name>_3a_RenderPage.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts</path>\\r\\n          <name>_3b_UsingLayout.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts</path>\\r\\n          <name>_3c_UsingSections.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts</path>\\r\\n          <name>_3d_PassingData.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts</path>\\r\\n          <name>_4a_SimpleFormData.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts</path>\\r\\n          <name>_4b_FormValidation.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts</path>\\r\\n          <name>_4c_FormValueRetention.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts</path>\\r\\n          <name>_ModuleInfo.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts</path>\\r\\n          <name>_PortalInfo.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts</path>\\r\\n          <name>_TabInfo.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Scripts</path>\\r\\n          <name>_UserList.cshtml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <name>AddScript.ascx</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <name>EditScript.ascx</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <name>CreateModule.ascx</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <name>RazorHost.ascx</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <name>Settings.ascx</name>\\r\\n        </file>\\r\\n      </files>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":115,\"[Manifest]\":\"<package name=\\\"Skin.Xcillion\\\" type=\\\"Skin\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>Xcillion</friendlyName>\\r\\n  <iconFile></iconFile>\\r\\n  <description>A new default DNN skin</description>\\r\\n  <owner>\\r\\n    <name>XCESS</name>\\r\\n    <organization>XCESS expertise center b.v.</organization>\\r\\n    <url>http://www.xcess.nl</url>\\r\\n    <email>info@xcess.nl</email>\\r\\n  </owner>\\r\\n  <license src=\\\"license.htm\\\" />\\r\\n  <releaseNotes src=\\\"release_notes.htm\\\" />\\r\\n  <components>\\r\\n    <component type=\\\"Skin\\\">\\r\\n      <skinFiles>\\r\\n        <skinName>Xcillion</skinName>\\r\\n        <basePath>Portals\\\\_default\\\\Skins\\\\Xcillion</basePath>\\r\\n      </skinFiles>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>Portals\\\\_default\\\\Skins\\\\Xcillion</basePath>\\r\\n        <resourceFile>\\r\\n          <name>resource-skin.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":116,\"[Manifest]\":\"<package name=\\\"Container.Xcillion\\\" type=\\\"Container\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>Xcillion</friendlyName>\\r\\n  <iconFile></iconFile>\\r\\n  <description>DNN container</description>\\r\\n  <owner>\\r\\n    <name>XCESS</name>\\r\\n    <organization>XCESS expertise center b.v.</organization>\\r\\n    <url>http://www.xcess.nl</url>\\r\\n    <email>info@xcess.nl</email>\\r\\n  </owner>\\r\\n  <license src=\\\"license.htm\\\" />\\r\\n  <releaseNotes src=\\\"release_notes.htm\\\" />\\r\\n  <components>\\r\\n    <component type=\\\"Container\\\">\\r\\n      <containerFiles>\\r\\n        <containerName>Xcillion</containerName>\\r\\n        <basePath>Portals\\\\_default\\\\Containers\\\\Xcillion</basePath>\\r\\n      </containerFiles>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>Portals\\\\_default\\\\Containers\\\\Xcillion</basePath>\\r\\n        <resourceFile>\\r\\n          <name>resource-container.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":117,\"[Manifest]\":\"<package name=\\\"SiteExportImport\\\" type=\\\"Library\\\" isSystem=\\\"false\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>Site Export Import</friendlyName>\\r\\n  <description>DotNetNuke Corporation Site Export Import Library</description>\\r\\n  <iconFile>Images/Files_32x32_Standard.png</iconFile>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"License.txt\\\"></license>\\r\\n  <releaseNotes src=\\\"ReleaseNotes.txt\\\"></releaseNotes>\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"CoreVersion\\\">09.01.00</dependency>\\r\\n  </dependencies>\\r\\n  <components>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>DotNetNuke.SiteExportImport.dll</name>\\r\\n        </assembly>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>DotNetNuke.SiteExportImport.Library.dll</name>\\r\\n        </assembly>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>LiteDB.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>DesktopModules/SiteExportImport</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n    <component type=\\\"Script\\\">\\r\\n      <scripts>\\r\\n        <basePath>DesktopModules/SiteExportImport</basePath>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>09.01.00.SqlDataProvider</name>\\r\\n          <version>09.01.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>09.01.01.SqlDataProvider</name>\\r\\n          <version>09.01.01</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>09.02.00.SqlDataProvider</name>\\r\\n          <version>09.02.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>09.03.00.SqlDataProvider</name>\\r\\n          <version>09.03.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"UnInstall\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>Uninstall.SqlDataProvider</name>\\r\\n        </script>\\r\\n      </scripts>\\r\\n    </component>\\r\\n  </components>\\r\\n  <eventMessage>\\r\\n    <processorType>DotNetNuke.Entities.Modules.EventMessageProcessor, DotNetNuke</processorType>\\r\\n    <processorCommand>UpgradeModule</processorCommand>\\r\\n    <attributes>\\r\\n      <businessControllerClass>Dnn.ExportImport.Components.Controllers.BusinessController, DotNetNuke.SiteExportImport</businessControllerClass>\\r\\n      <desktopModuleID>[DESKTOPMODULEID]</desktopModuleID>\\r\\n      <upgradeVersionsList>09.01.00</upgradeVersionsList>\\r\\n    </attributes>\\r\\n  </eventMessage>\\r\\n</package>\"},{\"[PackageID]\":118,\"[Manifest]\":\"<package name=\\\"Social Groups\\\" type=\\\"Module\\\" isSystem=\\\"true\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>Social Groups</friendlyName>\\r\\n  <description>DotNetNuke Corporation Social Groups module</description>\\r\\n  <iconFile>~/DesktopModules/SocialGroups/Images/Social_Groups_32X32.png</iconFile>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"License.txt\\\"></license>\\r\\n  <releaseNotes src=\\\"ReleaseNotes.txt\\\"></releaseNotes>\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"CoreVersion\\\">07.00.00</dependency>\\r\\n  </dependencies>\\r\\n  <components>\\r\\n    <component type=\\\"Module\\\">\\r\\n      <desktopModule>\\r\\n        <moduleName>Social Groups</moduleName>\\r\\n        <foldername>SocialGroups</foldername>\\r\\n        <businessControllerClass>DotNetNuke.Modules.Groups.Components.GroupsBusinessController, DotNetNuke.Modules.Groups</businessControllerClass>\\r\\n        <supportedFeatures />\\r\\n        <moduleDefinitions>\\r\\n          <moduleDefinition>\\r\\n            <friendlyName>Social Groups</friendlyName>\\r\\n            <defaultCacheTime>0</defaultCacheTime>\\r\\n            <moduleControls>\\r\\n              <moduleControl>\\r\\n                <controlKey />\\r\\n                <controlSrc>DesktopModules/SocialGroups/Loader.ascx</controlSrc>\\r\\n                <supportsPartialRendering>False</supportsPartialRendering>\\r\\n                <controlTitle />\\r\\n                <controlType>View</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl>https://dnndocs.com</helpUrl>\\r\\n                <supportsPopUps>False</supportsPopUps>\\r\\n                <viewOrder>0</viewOrder>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>Create</controlKey>\\r\\n                <controlSrc>DesktopModules/SocialGroups/Create.ascx</controlSrc>\\r\\n                <supportsPartialRendering>False</supportsPartialRendering>\\r\\n                <controlTitle>Create A Group</controlTitle>\\r\\n                <controlType>View</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl>https://dnndocs.com</helpUrl>\\r\\n                <supportsPopUps>True</supportsPopUps>\\r\\n                <viewOrder>0</viewOrder>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>Edit</controlKey>\\r\\n                <controlSrc>DesktopModules/SocialGroups/GroupEdit.ascx</controlSrc>\\r\\n                <supportsPartialRendering>False</supportsPartialRendering>\\r\\n                <controlTitle>Edit Group</controlTitle>\\r\\n                <controlType>View</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl />\\r\\n                <supportsPopUps>True</supportsPopUps>\\r\\n                <viewOrder>0</viewOrder>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>Settings</controlKey>\\r\\n                <controlSrc>DesktopModules/SocialGroups/ListSettings.ascx</controlSrc>\\r\\n                <supportsPartialRendering>False</supportsPartialRendering>\\r\\n                <controlTitle>Social Groups List Settings</controlTitle>\\r\\n                <controlType>Edit</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl />\\r\\n                <supportsPopUps>False</supportsPopUps>\\r\\n                <viewOrder>0</viewOrder>\\r\\n              </moduleControl>\\r\\n            </moduleControls>\\r\\n            <permissions>\\r\\n              <permission code=\\\"GROUPS_MODULE\\\" key=\\\"CREATEGROUP\\\" name=\\\"Create Groups\\\" />\\r\\n              <permission code=\\\"GROUPS_MODULE\\\" key=\\\"MODGROUP\\\" name=\\\"Group Moderators\\\" />\\r\\n            </permissions>\\r\\n          </moduleDefinition>\\r\\n        </moduleDefinitions>\\r\\n      </desktopModule>\\r\\n      <eventMessage>\\r\\n        <processorType>DotNetNuke.Entities.Modules.EventMessageProcessor, DotNetNuke</processorType>\\r\\n        <processorCommand>UpgradeModule</processorCommand>\\r\\n        <attributes>\\r\\n          <businessControllerClass>DotNetNuke.Modules.Groups.Components.GroupsBusinessController</businessControllerClass>\\r\\n          <desktopModuleID>[DESKTOPMODULEID]</desktopModuleID>\\r\\n          <upgradeVersionsList>06.02.00,06.02.04,07.00.00</upgradeVersionsList>\\r\\n        </attributes>\\r\\n      </eventMessage>\\r\\n    </component>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>DotNetNuke.Modules.Groups.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>DesktopModules/SocialGroups</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n    <component type=\\\"Script\\\">\\r\\n      <scripts>\\r\\n        <basePath>DesktopModules\\\\SocialGroups</basePath>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Providers\\\\DataProviders\\\\SqlDataProvider</path>\\r\\n          <name>09.00.00.SqlDataProvider</name>\\r\\n          <version>09.00.00</version>\\r\\n        </script>\\r\\n      </scripts>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":119,\"[Manifest]\":\"<package name=\\\"DNN.Connectors.GoogleAnalytics\\\" type=\\\"Connector\\\" isSystem=\\\"false\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>Google Analytics Connector</friendlyName>\\r\\n  <description>Configure your sites Google Analytics settings.</description>\\r\\n  <iconFile>~/DesktopModules/Connectors/GoogleAnalytics/Images/GoogleAnalytics_32X32_Standard.png</iconFile>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"CoreVersion\\\">09.02.00</dependency>\\r\\n  </dependencies>\\r\\n  <owner>\\r\\n    <name>DNN Community</name>\\r\\n    <organization>.NET Foundation and Contributors</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"license.txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <components>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>DNN.Connectors.GoogleAnalytics.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>DesktopModules\\\\Connectors\\\\GoogleAnalytics</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":120,\"[Manifest]\":\"<package name=\\\"DotNetNuke.Newtonsoft.Json\\\" type=\\\"Library\\\" version=\\\"10.00.03\\\" isSystem=\\\"true\\\">\\r\\n  <friendlyName>Newtonsoft Json Components</friendlyName>\\r\\n  <description>Provides Newtonsoft Json Components for DotNetNuke.</description>\\r\\n  <dependencies />\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license>License.txt</license>\\r\\n  <releaseNotes>\\r\\n        This package includes Newtonsoft.Json assembly version 10.0.3.\\r\\n        Please go to https://www.newtonsoft.com/json to view release notes on this particular version.</releaseNotes>\\r\\n  <components>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>Newtonsoft.Json.dll</name>\\r\\n          <version>10.0.3</version>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":121,\"[Manifest]\":\"<package name=\\\"DotNetNuke.Telerik.Web\\\" type=\\\"Library\\\" isSystem=\\\"true\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>DotNetNuke Telerik Web Components</friendlyName>\\r\\n  <description>Provides Telerik Components for DotNetNuke.</description>\\r\\n  <dependencies />\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license>Please refer to the Telerik EULA.pdf in your site's documentation folder.</license>\\r\\n  <releaseNotes>\\r\\n        This package includes Telerik.Web.UI assembly version 2013.2.717.40.\\r\\n        Please go to www.telerik.com to view release notes on this particular version.</releaseNotes>\\r\\n  <components>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>Telerik.Web.UI.dll</name>\\r\\n          <version>2013.2.717.40</version>\\r\\n        </assembly>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>Telerik.Web.UI.Skins.dll</name>\\r\\n          <version>2013.2.717.40</version>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"File\\\">\\r\\n      <files>\\r\\n        <file>\\r\\n          <path>Documentation</path>\\r\\n          <name>Telerik_EULA.pdf</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>App_Data/RadSpell</path>\\r\\n          <name>en-US.tdf</name>\\r\\n        </file>\\r\\n      </files>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":122,\"[Manifest]\":\"<package name=\\\"jQuery\\\" type=\\\"JavaScript_Library\\\" version=\\\"03.05.01\\\" isSystem=\\\"true\\\">\\r\\n  <friendlyName>jQuery JavaScript Library</friendlyName>\\r\\n  <description>jQuery is a JavaScript library that is used to manipulate the Document Object Model (DOM).</description>\\r\\n  <iconFile>Icons\\\\Sigma\\\\Extensions_32x32_Standard.png</iconFile>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"jQuery (MIT).txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <components>\\r\\n    <component type=\\\"JavaScript_Library\\\">\\r\\n      <javaScriptLibrary>\\r\\n        <libraryName>jQuery</libraryName>\\r\\n        <fileName>jquery.js</fileName>\\r\\n        <objectName>jQuery</objectName>\\r\\n        <CDNPath>https://code.jquery.com/jquery-3.5.1.min.js</CDNPath>\\r\\n      </javaScriptLibrary>\\r\\n    </component>\\r\\n    <component type=\\\"JavaScriptFile\\\">\\r\\n      <jsfiles>\\r\\n        <libraryFolderName>jQuery</libraryFolderName>\\r\\n        <jsfile>\\r\\n          <name>jquery.js</name>\\r\\n        </jsfile>\\r\\n        <jsfile>\\r\\n          <name>jquery.min.map</name>\\r\\n        </jsfile>\\r\\n      </jsfiles>\\r\\n    </component>\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"01.09.01\\\" fileName=\\\"01.09.01.txt\\\" />\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":123,\"[Manifest]\":\"<package name=\\\"Knockout\\\" type=\\\"JavaScript_Library\\\" version=\\\"03.03.00\\\">\\r\\n  <friendlyName>Knockout JavaScript Library</friendlyName>\\r\\n  <description>Knockout is an MVVM library that is used for client side databinding.</description>\\r\\n  <iconFile>Icons\\\\Sigma\\\\Extensions_32x32_Standard.png</iconFile>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"Knockout (MIT).txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <components>\\r\\n    <component type=\\\"JavaScript_Library\\\">\\r\\n      <javaScriptLibrary>\\r\\n        <libraryName>Knockout</libraryName>\\r\\n        <fileName>knockout.js</fileName>\\r\\n        <objectName>ko</objectName>\\r\\n        <CDNPath>//cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min.js</CDNPath>\\r\\n      </javaScriptLibrary>\\r\\n    </component>\\r\\n    <component type=\\\"JavaScriptFile\\\">\\r\\n      <jsfiles>\\r\\n        <libraryFolderName>Knockout</libraryFolderName>\\r\\n        <jsfile>\\r\\n          <name>knockout.js</name>\\r\\n        </jsfile>\\r\\n      </jsfiles>\\r\\n    </component>\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"02.02.01\\\" fileName=\\\"02.02.01.txt\\\" />\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":124,\"[Manifest]\":\"<package name=\\\"Selectize\\\" type=\\\"JavaScript_Library\\\" version=\\\"00.12.06\\\" isSystem=\\\"true\\\">\\r\\n  <friendlyName>Selectize JavaScript Library</friendlyName>\\r\\n  <description>Selectize is the hybrid of a textbox and select box. It's jQuery-based and it's useful for tagging, contact lists, country selectors, and so on.</description>\\r\\n  <iconFile>Icons\\\\Sigma\\\\Extensions_32x32_Standard.png</iconFile>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"Selectize (Apache).txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <components>\\r\\n    <component type=\\\"JavaScript_Library\\\">\\r\\n      <javaScriptLibrary>\\r\\n        <libraryName>Selectize</libraryName>\\r\\n        <fileName>selectize.min.js</fileName>\\r\\n        <objectName>Selectize</objectName>\\r\\n        <CDNPath>https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/js/standalone/selectize.min.js</CDNPath>\\r\\n      </javaScriptLibrary>\\r\\n    </component>\\r\\n    <component type=\\\"JavaScriptFile\\\">\\r\\n      <jsfiles>\\r\\n        <libraryFolderName>Selectize</libraryFolderName>\\r\\n        <jsfile>\\r\\n          <name>selectize.min.js</name>\\r\\n        </jsfile>\\r\\n      </jsfiles>\\r\\n    </component>\\r\\n    <component type=\\\"File\\\">\\r\\n      <files>\\r\\n        <basePath>Resources\\\\Libraries\\\\Selectize\\\\00_12_06</basePath>\\r\\n        <file>\\r\\n          <name>selectize.css</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <name>selectize.default.css</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <name>dnn.combobox.js</name>\\r\\n        </file>\\r\\n      </files>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":125,\"[Manifest]\":\"<package name=\\\"AspNetClientCapabilityProvider\\\" type=\\\"Provider\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>DotNetNuke ASP.NET Client Capability Provider</friendlyName>\\r\\n  <description>ASP.NET Device Detection / Client Capability Provider</description>\\r\\n  <iconFile>~/Providers/ClientCapabilityProviders/AspNetClientCapabilityProvider/Images/mobiledevicedet_32X32.png</iconFile>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"License.txt\\\"></license>\\r\\n  <releaseNotes src=\\\"ReleaseNotes.txt\\\"></releaseNotes>\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"CoreVersion\\\">09.02.00</dependency>\\r\\n  </dependencies>\\r\\n  <components>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>Providers/ClientCapabilityProviders/AspNetClientCapabilityProvider\\\\</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n    <eventMessage>\\r\\n      <processorType>DotNetNuke.Entities.Modules.EventMessageProcessor, DotNetNuke</processorType>\\r\\n      <processorCommand>UpgradeModule</processorCommand>\\r\\n      <attributes>\\r\\n        <businessControllerClass>DotNetNuke.Providers.AspNetClientCapabilityProvider.Components.FeatureController, DotNetNuke.Providers.AspNetClientCapabilityProvider</businessControllerClass>\\r\\n        <desktopModuleID>[DESKTOPMODULEID]</desktopModuleID>\\r\\n        <upgradeVersionsList>08.03.00</upgradeVersionsList>\\r\\n      </attributes>\\r\\n    </eventMessage>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <basePath>bin\\\\Providers</basePath>\\r\\n        <assembly>\\r\\n          <path>bin\\\\Providers</path>\\r\\n          <name>DotNetNuke.Providers.AspNetClientCapabilityProvider.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"Config\\\">\\r\\n      <config>\\r\\n        <configFile>web.config</configFile>\\r\\n        <install>\\r\\n          <configuration>\\r\\n            <nodes>\\r\\n              <node path=\\\"/configuration/configSections/sectionGroup[@name='dotnetnuke']\\\" action=\\\"update\\\" key=\\\"name\\\" collision=\\\"ignore\\\">\\r\\n                <section name=\\\"clientcapability\\\" requirePermission=\\\"false\\\" type=\\\"DotNetNuke.Framework.Providers.ProviderConfigurationHandler, DotNetNuke\\\" />\\r\\n              </node>\\r\\n              <node path=\\\"/configuration/dotnetnuke\\\" action=\\\"update\\\" targetpath=\\\"/configuration/dotnetnuke/clientcapability\\\" collision=\\\"ignore\\\">\\r\\n                <clientcapability defaultProvider=\\\"AspNetClientCapabilityProvider\\\">\\r\\n                  <providers>\\r\\n                    <clear />\\r\\n                  </providers>\\r\\n                </clientcapability>\\r\\n              </node>\\r\\n              <node path=\\\"/configuration/dotnetnuke/clientcapability/providers\\\" action=\\\"update\\\" key=\\\"name\\\" collision=\\\"overwrite\\\">\\r\\n                <add name=\\\"AspNetClientCapabilityProvider\\\" type=\\\"DotNetNuke.Providers.AspNetClientCapabilityProvider.AspNetClientCapabilityProvider, DotNetNuke.Providers.AspNetClientCapabilityProvider\\\" providerPath=\\\"~\\\\Providers\\\\ClientCapabilityProviders\\\\AspNetClientCapabilityProvider\\\\\\\" />\\r\\n              </node>\\r\\n            </nodes>\\r\\n          </configuration>\\r\\n        </install>\\r\\n        <uninstall>\\r\\n          <configuration>\\r\\n            <nodes>\\r\\n              <node path=\\\"/configuration/dotnetnuke/clientcapability/providers/add[@name='AspNetClientCapabilityProvider']\\\" action=\\\"remove\\\" />\\r\\n            </nodes>\\r\\n          </configuration>\\r\\n        </uninstall>\\r\\n      </config>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":126,\"[Manifest]\":\"<package name=\\\"DotNetNuke.Providers.Caching.SimpleWebFarmCachingProvider\\\" type=\\\"Provider\\\" isSystem=\\\"true\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>DotNetNuke Simple Web Farm Caching Provider</friendlyName>\\r\\n  <description>DotNetNuke Simple Web Farm Caching Provider</description>\\r\\n  <dependencies />\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"license.txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <components>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin\\\\Providers</path>\\r\\n          <name>DotNetNuke.Providers.Caching.SimpleWebFarmCachingProvider.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"Config\\\">\\r\\n      <config>\\r\\n        <configFile>web.config</configFile>\\r\\n        <install>\\r\\n          <configuration>\\r\\n            <nodes>\\r\\n              <node path=\\\"/configuration/dotnetnuke/caching/providers\\\" action=\\\"update\\\" key=\\\"name\\\" collision=\\\"overwrite\\\">\\r\\n                <add name=\\\"SimpleWebFarmCachingProvider\\\" type=\\\"DotNetNuke.Providers.Caching.SimpleWebFarmCachingProvider.SimpleWebFarmCachingProvider, DotNetNuke.Providers.Caching.SimpleWebFarmCachingProvider\\\" providerPath=\\\"~\\\\Providers\\\\CachingProviders\\\\SimpleWebFarmCachingProvider\\\\\\\" />\\r\\n              </node>\\r\\n              <node path=\\\"/configuration/system.webServer/handlers\\\" action=\\\"update\\\" key=\\\"name\\\" collision=\\\"overwrite\\\">\\r\\n                <add name=\\\"SimpleWebFarmSynchronizationHandler\\\" verb=\\\"*\\\" path=\\\"SimpleWebFarmSync.aspx\\\" type=\\\"DotNetNuke.Providers.Caching.SimpleWebFarmCachingProvider.SimpleWebFarmSynchronizationHandler, DotNetNuke.Providers.Caching.SimpleWebFarmCachingProvider\\\" preCondition=\\\"integratedMode\\\" />\\r\\n              </node>\\r\\n              <node path=\\\"/configuration/system.web/httpHandlers\\\" action=\\\"update\\\" key=\\\"path\\\" collision=\\\"overwrite\\\">\\r\\n                <add verb=\\\"*\\\" path=\\\"SimpleWebFarmSync.aspx\\\" type=\\\"DotNetNuke.Providers.Caching.SimpleWebFarmCachingProvider.SimpleWebFarmSynchronizationHandler, DotNetNuke.Providers.Caching.SimpleWebFarmCachingProvider\\\" />\\r\\n              </node>\\r\\n            </nodes>\\r\\n          </configuration>\\r\\n        </install>\\r\\n        <uninstall>\\r\\n          <configuration>\\r\\n            <nodes>\\r\\n              <node path=\\\"/configuration/dotnetnuke/caching/providers/add[@name='SimpleWebFarmCachingProvider']\\\" action=\\\"remove\\\" />\\r\\n              <node path=\\\"/configuration/system.webServer/handlers/add[@name='SimpleWebFarmSynchronizationHandler']\\\" action=\\\"remove\\\" />\\r\\n              <node path=\\\"/configuration/system.web/httpHandlers/add[@path='SimpleWebFarmSync.aspx']\\\" action=\\\"remove\\\" />\\r\\n              <!-- Clear any default to prevent issues loading the site -->\\r\\n              <node path=\\\"/configuration/dotnetnuke/caching\\\" action=\\\"updateattribute\\\" name=\\\"defaultProvider\\\" value=\\\"\\\" />\\r\\n            </nodes>\\r\\n          </configuration>\\r\\n        </uninstall>\\r\\n      </config>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":127,\"[Manifest]\":\"<package name=\\\"DotNetNuke.Providers.FolderProviders\\\" type=\\\"Provider\\\" isSystem=\\\"true\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>DotNetNuke Folder Providers</friendlyName>\\r\\n  <description>Azure Folder Providers for DotNetNuke.</description>\\r\\n  <dependencies />\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"license.txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <components>\\r\\n    <component type=\\\"Provider\\\" />\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin\\\\Providers</path>\\r\\n          <name>DotNetNuke.Providers.FolderProviders.dll</name>\\r\\n        </assembly>\\r\\n        <assembly>\\r\\n          <path>bin\\\\Providers</path>\\r\\n          <name>Microsoft.WindowsAzure.Storage.dll</name>\\r\\n          <version>8.3.0</version>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>Providers\\\\FolderProviders</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n    <component type=\\\"Config\\\">\\r\\n      <config>\\r\\n        <configFile>web.config</configFile>\\r\\n        <install>\\r\\n          <configuration>\\r\\n            <nodes>\\r\\n              <node path=\\\"/configuration/dotnetnuke/folder/providers\\\" action=\\\"update\\\" key=\\\"name\\\" collision=\\\"save\\\">\\r\\n                <add name=\\\"AzureFolderProvider\\\" type=\\\"DotNetNuke.Providers.FolderProviders.AzureFolderProvider.AzureFolderProvider, DotNetNuke.Providers.FolderProviders\\\" providerPath=\\\"~/Providers/FolderProviders/AzureFolderProvider/\\\" />\\r\\n              </node>\\r\\n            </nodes>\\r\\n          </configuration>\\r\\n        </install>\\r\\n        <uninstall>\\r\\n          <configuration>\\r\\n            <nodes>\\r\\n              <node path=\\\"/configuration/dotnetnuke/folder/providers/add[@name='AzureFolderProvider']\\\" action=\\\"remove\\\" />\\r\\n            </nodes>\\r\\n          </configuration>\\r\\n        </uninstall>\\r\\n      </config>\\r\\n    </component>\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"09.02.01\\\" fileName=\\\"09.02.00.txt\\\" />\\r\\n    <component type=\\\"File\\\">\\r\\n      <files>\\r\\n        <basePath>Providers\\\\FolderProviders\\\\AzureFolderProvider</basePath>\\r\\n        <file>\\r\\n          <name>09.02.00.txt</name>\\r\\n        </file>\\r\\n      </files>\\r\\n    </component>\\r\\n  </components>\\r\\n  <eventMessage>\\r\\n    <processorType>DotNetNuke.Entities.Modules.EventMessageProcessor, DotNetNuke</processorType>\\r\\n    <processorCommand>UpgradeModule</processorCommand>\\r\\n    <attributes>\\r\\n      <businessControllerClass>DotNetNuke.Providers.FolderProviders.Components.BusinessController, DotNetNuke.Providers.FolderProviders</businessControllerClass>\\r\\n      <upgradeVersionsList>09.02.00</upgradeVersionsList>\\r\\n    </attributes>\\r\\n  </eventMessage>\\r\\n</package>\"},{\"[PackageID]\":128,\"[Manifest]\":\"<package name=\\\"DNNConnect.CKEditorProvider\\\" type=\\\"Provider\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>DNN Connect CKEditor Provider</friendlyName>\\r\\n  <description>CKEditor Provider by DNN Connect for DNN</description>\\r\\n  <iconFile>~/Providers/HtmlEditorProviders/DNNConnect.CKE/LogoCKEditor.png</iconFile>\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <owner>\\r\\n    <name></name>\\r\\n    <organization>DNN Connect</organization>\\r\\n    <url>http://dnn-connect.org/</url>\\r\\n    <email></email>\\r\\n  </owner>\\r\\n  <license src=\\\"license.txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <components>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>DNNConnect.CKEditorProvider.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>Providers\\\\HtmlEditorProviders\\\\DNNConnect.CKE</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n    <component type=\\\"Script\\\">\\r\\n      <scripts>\\r\\n        <basePath>Providers\\\\HtmlEditorProviders\\\\DNNConnect.CKE\\\\</basePath>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Install</path>\\r\\n          <name>01.00.00.SqlDataProvider</name>\\r\\n          <version>01.00.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>Install</path>\\r\\n          <name>01.00.02.SqlDataProvider</name>\\r\\n          <version>01.00.02</version>\\r\\n        </script>\\r\\n        <script type=\\\"UnInstall\\\">\\r\\n          <path>Install</path>\\r\\n          <name>Uninstall.SqlDataProvider</name>\\r\\n        </script>\\r\\n      </scripts>\\r\\n    </component>\\r\\n    <component type=\\\"File\\\">\\r\\n      <files>\\r\\n        <basePath>Portals\\\\_default</basePath>\\r\\n        <file>\\r\\n          <path>Install</path>\\r\\n          <name>Dnn.CKEditorDefaultSettings.xml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Install</path>\\r\\n          <name>Dnn.CKToolbarButtons.xml</name>\\r\\n        </file>\\r\\n        <file>\\r\\n          <path>Install</path>\\r\\n          <name>Dnn.CKToolbarSets.xml</name>\\r\\n        </file>\\r\\n      </files>\\r\\n    </component>\\r\\n    <component type=\\\"File\\\">\\r\\n      <files>\\r\\n        <basePath>Providers\\\\HtmlEditorProviders\\\\DNNConnect.CKE</basePath>\\r\\n        <file>\\r\\n          <name>LogoCKEditor.png</name>\\r\\n          <sourceFileName>LogoCKEditor.png</sourceFileName>\\r\\n        </file>\\r\\n      </files>\\r\\n    </component>\\r\\n    <component type=\\\"Config\\\">\\r\\n      <config>\\r\\n        <configFile>web.config</configFile>\\r\\n        <install>\\r\\n          <configuration>\\r\\n            <nodes>\\r\\n              <node path=\\\"/configuration/dotnetnuke/htmlEditor[@defaultProvider='' or @defaultProvider='DotNetNuke.RadEditorProvider']\\\" action=\\\"updateattribute\\\" name=\\\"defaultProvider\\\" value=\\\"DNNConnect.CKE\\\" />\\r\\n              <node path=\\\"/configuration/dotnetnuke/htmlEditor/providers\\\" action=\\\"update\\\" key=\\\"name\\\" collision=\\\"ignore\\\">\\r\\n                <add name=\\\"DNNConnect.CKE\\\" type=\\\"DNNConnect.CKEditorProvider.CKHtmlEditorProvider, DNNConnect.CKEditorProvider\\\" providerPath=\\\"~/Providers/HtmlEditorProviders/DNNConnect.CKE/\\\" settingsControlPath=\\\"~/Providers/HtmlEditorProviders/DNNConnect.CKE/Module/EditorConfigManager.ascx\\\" />\\r\\n              </node>\\r\\n            </nodes>\\r\\n          </configuration>\\r\\n        </install>\\r\\n        <uninstall>\\r\\n          <configuration>\\r\\n            <nodes>\\r\\n              <node path=\\\"/configuration/dotnetnuke/htmlEditor[@defaultProvider='DNNConnect.CKE']\\\" action=\\\"updateattribute\\\" name=\\\"defaultProvider\\\" value=\\\"DotNetNuke.RadEditorProvider\\\" />\\r\\n              <node path=\\\"/configuration/dotnetnuke/htmlEditor/providers/add[@name='DNNConnect.CKE']\\\" action=\\\"remove\\\" />\\r\\n            </nodes>\\r\\n          </configuration>\\r\\n        </uninstall>\\r\\n      </config>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":129,\"[Manifest]\":\"<package name=\\\"Dnn.PersonaBar.Extensions\\\" type=\\\"PersonaBar\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>Dnn.PersonaBar.Extensions</friendlyName>\\r\\n  <description></description>\\r\\n  <iconFile>~/Images/icon-personabarapp-32px.png</iconFile>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"License.txt\\\"></license>\\r\\n  <releaseNotes src=\\\"ReleaseNotes.txt\\\"></releaseNotes>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"CoreVersion\\\">09.03.00</dependency>\\r\\n    <dependency type=\\\"ManagedPackage\\\" version=\\\"01.00.00\\\">Dnn.PersonaBar.UI</dependency>\\r\\n  </dependencies>\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <eventMessage>\\r\\n    <processorType>DotNetNuke.Entities.Modules.EventMessageProcessor, DotNetNuke</processorType>\\r\\n    <processorCommand>UpgradeModule</processorCommand>\\r\\n    <attributes>\\r\\n      <businessControllerClass>Dnn.PersonaBar.Extensions.Components.BusinessController, Dnn.PersonaBar.Extensions</businessControllerClass>\\r\\n      <desktopModuleID>[DESKTOPMODULEID]</desktopModuleID>\\r\\n      <upgradeVersionsList>01.04.00,01.05.00</upgradeVersionsList>\\r\\n    </attributes>\\r\\n  </eventMessage>\\r\\n  <components>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>DesktopModules/admin/Dnn.PersonaBar/Modules</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <name>Dnn.PersonaBar.Extensions.dll</name>\\r\\n          <path>bin</path>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"Script\\\">\\r\\n      <scripts>\\r\\n        <basePath>DesktopModules\\\\admin\\\\Dnn.PersonaBar\\\\Modules\\\\Sql</basePath>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>SqlDataProvider</path>\\r\\n          <name>01.00.00.SqlDataProvider</name>\\r\\n          <version>01.00.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>SqlDataProvider</path>\\r\\n          <name>01.01.00.SqlDataProvider</name>\\r\\n          <version>01.01.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>SqlDataProvider</path>\\r\\n          <name>01.02.00.SqlDataProvider</name>\\r\\n          <version>01.02.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>SqlDataProvider</path>\\r\\n          <name>01.03.00.SqlDataProvider</name>\\r\\n          <version>01.03.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>SqlDataProvider</path>\\r\\n          <name>01.05.00.SqlDataProvider</name>\\r\\n          <version>01.05.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>SqlDataProvider</path>\\r\\n          <name>03.00.00.SqlDataProvider</name>\\r\\n          <version>03.00.00</version>\\r\\n        </script>\\r\\n        <script type=\\\"Install\\\">\\r\\n          <path>SqlDataProvider</path>\\r\\n          <name>09.04.01.SqlDataProvider</name>\\r\\n          <version>09.04.01</version>\\r\\n        </script>\\r\\n        <script type=\\\"UnInstall\\\">\\r\\n          <path>SqlDataProvider</path>\\r\\n          <name>Uninstall.SqlDataProvider</name>\\r\\n          <version>09.04.01</version>\\r\\n        </script>\\r\\n      </scripts>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.AdminLogs</identifier>\\r\\n        <moduleName>AdminLogs</moduleName>\\r\\n        <controller>Dnn.PersonaBar.AdminLogs.MenuControllers.AdminLogsMenuController, Dnn.PersonaBar.Extensions</controller>\\r\\n        <resourceKey>nav_AdminLogs</resourceKey>\\r\\n        <path>AdminLogs</path>\\r\\n        <parent>Manage</parent>\\r\\n        <order>50</order>\\r\\n        <defaultPermissions>Administrators|ADMIN_LOGS_VIEW</defaultPermissions>\\r\\n      </menu>\\r\\n      <permission>\\r\\n        <key>ADMIN_LOGS_VIEW</key>\\r\\n        <name>Admin Logs View</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>ADMIN_LOGS_EDIT</key>\\r\\n        <name>Admin Logs Edit</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>LOG_SETTINGS_VIEW</key>\\r\\n        <name>Log Settings View</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>LOG_SETTINGS_EDIT</key>\\r\\n        <name>Log Settings Edit</name>\\r\\n      </permission>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.ConfigConsole</identifier>\\r\\n        <moduleName>ConfigConsole</moduleName>\\r\\n        <controller>Dnn.PersonaBar.ConfigConsole.MenuControllers.ConfigConsoleMenuController, Dnn.PersonaBar.Extensions</controller>\\r\\n        <resourceKey>nav_ConfigConsole</resourceKey>\\r\\n        <path>ConfigConsole</path>\\r\\n        <parent>Settings</parent>\\r\\n        <order>90</order>\\r\\n      </menu>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.Connectors</identifier>\\r\\n        <moduleName>Connectors</moduleName>\\r\\n        <resourceKey>nav_Connectors</resourceKey>\\r\\n        <path>Connectors</path>\\r\\n        <parent>Settings</parent>\\r\\n        <order>43</order>\\r\\n        <defaultPermissions>Administrators</defaultPermissions>\\r\\n      </menu>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.CssEditor</identifier>\\r\\n        <moduleName>CssEditor</moduleName>\\r\\n        <controller>Dnn.PersonaBar.CssEditor.MenuControllers.CssEditorMenuController, Dnn.PersonaBar.Extensions</controller>\\r\\n        <resourceKey>nav_CssEditor</resourceKey>\\r\\n        <path>CssEditor</path>\\r\\n        <parent>Settings</parent>\\r\\n        <order>70</order>\\r\\n        <defaultPermissions>Administrators</defaultPermissions>\\r\\n      </menu>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.Licensing</identifier>\\r\\n        <moduleName>Licensing</moduleName>\\r\\n        <controller>Dnn.PersonaBar.Licensing.MenuControllers.LicensingMenuController, Dnn.PersonaBar.Extensions</controller>\\r\\n        <resourceKey>nav_Licensing</resourceKey>\\r\\n        <path>Licensing</path>\\r\\n        <parent>Settings</parent>\\r\\n        <order>100</order>\\r\\n      </menu>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.Extensions</identifier>\\r\\n        <moduleName>Extensions</moduleName>\\r\\n        <controller>Dnn.PersonaBar.Extensions.MenuControllers.ExtensionMenuController, Dnn.PersonaBar.Extensions</controller>\\r\\n        <resourceKey>nav_Extensions</resourceKey>\\r\\n        <path>extensions</path>\\r\\n        <parent>Settings</parent>\\r\\n        <order>47</order>\\r\\n        <defaultPermissions>Administrators</defaultPermissions>\\r\\n      </menu>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.Pages</identifier>\\r\\n        <moduleName>Pages</moduleName>\\r\\n        <controller>Dnn.PersonaBar.Pages.MenuControllers.PagesMenuController, Dnn.PersonaBar.Extensions</controller>\\r\\n        <resourceKey>nav_Pages</resourceKey>\\r\\n        <path>Pages</path>\\r\\n        <parent>Content</parent>\\r\\n        <order>20</order>\\r\\n        <defaultPermissions>Registered Users, Administrators</defaultPermissions>\\r\\n      </menu>\\r\\n      <permission>\\r\\n        <key>VIEW_PAGE_LIST</key>\\r\\n        <name>View Page List</name>\\r\\n      </permission>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.Prompt</identifier>\\r\\n        <moduleName>Prompt</moduleName>\\r\\n        <controller>Dnn.PersonaBar.Prompt.MenuControllers.PromptMenuController, Dnn.PersonaBar.Extensions</controller>\\r\\n        <resourceKey>nav_Prompt</resourceKey>\\r\\n        <path>Prompt</path>\\r\\n        <parent>Settings</parent>\\r\\n        <order>95</order>\\r\\n      </menu>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.Recyclebin</identifier>\\r\\n        <moduleName>Recyclebin</moduleName>\\r\\n        <resourceKey>nav_Recyclebin</resourceKey>\\r\\n        <path>Recyclebin</path>\\r\\n        <parent>Content</parent>\\r\\n        <order>30</order>\\r\\n        <defaultPermissions>Administrators</defaultPermissions>\\r\\n      </menu>\\r\\n      <permission>\\r\\n        <key>RECYCLEBIN_PAGES_VIEW</key>\\r\\n        <name>Pages View</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>RECYCLEBIN_PAGES_EDIT</key>\\r\\n        <name>Pages Edit</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>RECYCLEBIN_MODULES_VIEW</key>\\r\\n        <name>Modules View</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>RECYCLEBIN_MODULES_EDIT</key>\\r\\n        <name>Modules Edit</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>RECYCLEBIN_USERS_VIEW</key>\\r\\n        <name>Users View</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>RECYCLEBIN_USERS_EDIT</key>\\r\\n        <name>Users Edit</name>\\r\\n      </permission>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.Roles</identifier>\\r\\n        <moduleName>Roles</moduleName>\\r\\n        <resourceKey>nav_Roles</resourceKey>\\r\\n        <path>Roles</path>\\r\\n        <parent>Manage</parent>\\r\\n        <order>20</order>\\r\\n        <defaultPermissions>Administrators</defaultPermissions>\\r\\n      </menu>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.Security</identifier>\\r\\n        <moduleName>Security</moduleName>\\r\\n        <controller>Dnn.PersonaBar.Security.MenuControllers.SecurityMenuController, Dnn.PersonaBar.Extensions</controller>\\r\\n        <resourceKey>nav_Security</resourceKey>\\r\\n        <path>Security</path>\\r\\n        <parent>Settings</parent>\\r\\n        <order>20</order>\\r\\n        <defaultPermissions>Administrators</defaultPermissions>\\r\\n      </menu>\\r\\n      <permission>\\r\\n        <key>BASIC_LOGIN_SETTINGS_VIEW</key>\\r\\n        <name>Basic Login Settings View</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>BASIC_LOGIN_SETTINGS_EDIT</key>\\r\\n        <name>Basic Login Settings Edit</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>REGISTRATION_SETTINGS_VIEW</key>\\r\\n        <name>Registration Settings View</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>REGISTRATION_SETTINGS_EDIT</key>\\r\\n        <name>Registration Settings Edit</name>\\r\\n      </permission>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.Sites</identifier>\\r\\n        <moduleName>Sites</moduleName>\\r\\n        <controller>Dnn.PersonaBar.Sites.MenuControllers.SitesMenuController, Dnn.PersonaBar.Extensions</controller>\\r\\n        <resourceKey>nav_Sites</resourceKey>\\r\\n        <path>Sites</path>\\r\\n        <parent>Manage</parent>\\r\\n        <order>40</order>\\r\\n      </menu>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.SiteGroups</identifier>\\r\\n        <moduleName>SiteGroups</moduleName>\\r\\n        <controller>Dnn.PersonaBar.Sites.MenuControllers.SitesMenuController, Dnn.PersonaBar.Extensions</controller>\\r\\n        <resourceKey>nav_SiteGroups</resourceKey>\\r\\n        <path>SiteGroups</path>\\r\\n        <parent>Manage</parent>\\r\\n        <order>45</order>\\r\\n      </menu>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.Seo</identifier>\\r\\n        <moduleName>Seo</moduleName>\\r\\n        <controller>Dnn.PersonaBar.Seo.Components.ExtensionMenuController, Dnn.PersonaBar.Extensions</controller>\\r\\n        <resourceKey>nav_Seo</resourceKey>\\r\\n        <path>Seo</path>\\r\\n        <parent>Settings</parent>\\r\\n        <order>30</order>\\r\\n        <defaultPermissions>Administrators</defaultPermissions>\\r\\n      </menu>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.Servers</identifier>\\r\\n        <moduleName>Servers</moduleName>\\r\\n        <controller>Dnn.PersonaBar.Servers.MenuControllers.ServersMenuController, Dnn.PersonaBar.Extensions</controller>\\r\\n        <resourceKey>nav_Servers</resourceKey>\\r\\n        <path>Servers</path>\\r\\n        <parent>Settings</parent>\\r\\n        <order>50</order>\\r\\n        <defaultPermissions>Administrators</defaultPermissions>\\r\\n      </menu>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.SiteImportExport</identifier>\\r\\n        <moduleName>SiteImportExport</moduleName>\\r\\n        <controller>Dnn.PersonaBar.SiteImportExport.MenuControllers.SiteImportExportMenuController, Dnn.PersonaBar.Extensions</controller>\\r\\n        <resourceKey>nav_SiteImportExport</resourceKey>\\r\\n        <path>SiteImportExport</path>\\r\\n        <parent>Settings</parent>\\r\\n        <order>50</order>\\r\\n        <defaultPermissions>Administrators</defaultPermissions>\\r\\n      </menu>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.SiteSettings</identifier>\\r\\n        <moduleName>SiteSettings</moduleName>\\r\\n        <controller>Dnn.PersonaBar.SiteSettings.MenuControllers.SiteSettingsMenuController, Dnn.PersonaBar.Extensions</controller>\\r\\n        <resourceKey>nav_SiteSettings</resourceKey>\\r\\n        <path>SiteSettings</path>\\r\\n        <parent>Settings</parent>\\r\\n        <order>10</order>\\r\\n        <defaultPermissions>Administrators</defaultPermissions>\\r\\n      </menu>\\r\\n      <permission>\\r\\n        <key>SITE_INFO_VIEW</key>\\r\\n        <name>Site Info View</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>SITE_INFO_EDIT</key>\\r\\n        <name>Site Info Edit</name>\\r\\n      </permission>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.SqlConsole</identifier>\\r\\n        <moduleName>SqlConsole</moduleName>\\r\\n        <controller>Dnn.PersonaBar.SqlConsole.MenuControllers.SqlConsoleMenuController, Dnn.PersonaBar.Extensions</controller>\\r\\n        <resourceKey>nav_SqlConsole</resourceKey>\\r\\n        <path>SqlConsole</path>\\r\\n        <parent>Settings</parent>\\r\\n        <order>80</order>\\r\\n      </menu>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.TaskScheduler</identifier>\\r\\n        <moduleName>TaskScheduler</moduleName>\\r\\n        <controller>Dnn.PersonaBar.TaskScheduler.MenuControllers.TaskSchedulerMenuController, Dnn.PersonaBar.Extensions</controller>\\r\\n        <resourceKey>nav_TaskScheduler</resourceKey>\\r\\n        <path>TaskScheduler</path>\\r\\n        <parent>Settings</parent>\\r\\n        <order>60</order>\\r\\n      </menu>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.Themes</identifier>\\r\\n        <moduleName>Themes</moduleName>\\r\\n        <controller>Dnn.PersonaBar.Themes.MenuControllers.ThemeMenuController, Dnn.PersonaBar.Extensions</controller>\\r\\n        <resourceKey>nav_Themes</resourceKey>\\r\\n        <path>Themes</path>\\r\\n        <parent>Manage</parent>\\r\\n        <order>30</order>\\r\\n        <defaultPermissions>Administrators</defaultPermissions>\\r\\n      </menu>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.Users</identifier>\\r\\n        <moduleName>Users</moduleName>\\r\\n        <controller>Dnn.PersonaBar.Users.Components.UsersMenuController, Dnn.PersonaBar.Extensions</controller>\\r\\n        <resourceKey>nav_Users</resourceKey>\\r\\n        <path>Users</path>\\r\\n        <parent>Manage</parent>\\r\\n        <order>10</order>\\r\\n        <defaultPermissions>Administrators</defaultPermissions>\\r\\n      </menu>\\r\\n      <permission>\\r\\n        <key>ADD_USER</key>\\r\\n        <name>Add User</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>MANAGE_ROLES</key>\\r\\n        <name>Manage Roles</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>MANAGE_PROFILE</key>\\r\\n        <name>Manage Profile</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>VIEW_SETTINGS</key>\\r\\n        <name>View Settings</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>EDIT_SETTINGS</key>\\r\\n        <name>Edit Settings</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>DELETE_USER</key>\\r\\n        <name>Delete User</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>AUTHORIZE_UNAUTHORIZE_USER</key>\\r\\n        <name>Authorize/Unauthorize User</name>\\r\\n      </permission>\\r\\n      <permission>\\r\\n        <key>MANAGE_PASSWORD</key>\\r\\n        <name>Manage Password</name>\\r\\n      </permission>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Dnn.Vocabularies</identifier>\\r\\n        <moduleName>Vocabularies</moduleName>\\r\\n        <controller></controller>\\r\\n        <resourceKey>nav_Vocabularies</resourceKey>\\r\\n        <path>vocabularies</path>\\r\\n        <parent>Settings</parent>\\r\\n        <order>40</order>\\r\\n        <defaultPermissions>Administrators</defaultPermissions>\\r\\n      </menu>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":130,\"[Manifest]\":\"<package name=\\\"DigitalAssetsManagement\\\" type=\\\"Module\\\" isSystem=\\\"true\\\" version=\\\"09.08.00\\\">\\r\\n  <friendlyName>Digital Asset Management</friendlyName>\\r\\n  <description>DotNetNuke Corporation Digital Asset Management module</description>\\r\\n  <iconFile>Images/Files_32x32_Standard.png</iconFile>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"License.txt\\\"></license>\\r\\n  <releaseNotes src=\\\"ReleaseNotes.txt\\\"></releaseNotes>\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"CoreVersion\\\">09.01.00</dependency>\\r\\n    <dependency type=\\\"ManagedPackage\\\" version=\\\"09.01.00\\\">DotNetNuke.Web.Deprecated</dependency>\\r\\n  </dependencies>\\r\\n  <components>\\r\\n    <component type=\\\"Module\\\">\\r\\n      <desktopModule>\\r\\n        <moduleName>DotNetNuke.Modules.DigitalAssets</moduleName>\\r\\n        <foldername>DigitalAssets</foldername>\\r\\n        <businessControllerClass>DotNetNuke.Modules.DigitalAssets.Components.Controllers.DigitalAssetsController, DotNetNuke.Modules.DigitalAssets</businessControllerClass>\\r\\n        <supportedFeatures>\\r\\n          <supportedFeature type=\\\"Upgradeable\\\" />\\r\\n        </supportedFeatures>\\r\\n        <moduleDefinitions>\\r\\n          <moduleDefinition>\\r\\n            <friendlyName>Digital Asset Management</friendlyName>\\r\\n            <defaultCacheTime>0</defaultCacheTime>\\r\\n            <moduleControls>\\r\\n              <moduleControl>\\r\\n                <controlKey />\\r\\n                <controlSrc>DesktopModules/DigitalAssets/View.ascx</controlSrc>\\r\\n                <supportsPartialRendering>False</supportsPartialRendering>\\r\\n                <controlTitle />\\r\\n                <controlType>View</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl>https://dnndocs.com</helpUrl>\\r\\n                <viewOrder>0</viewOrder>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>Settings</controlKey>\\r\\n                <controlSrc>DesktopModules/DigitalAssets/Settings.ascx</controlSrc>\\r\\n                <supportsPartialRendering>False</supportsPartialRendering>\\r\\n                <controlTitle>Digital Asset Management Settings</controlTitle>\\r\\n                <controlType>Edit</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl />\\r\\n                <viewOrder>0</viewOrder>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>FolderProperties</controlKey>\\r\\n                <controlSrc>DesktopModules/DigitalAssets/FolderProperties.ascx</controlSrc>\\r\\n                <supportsPartialRendering>False</supportsPartialRendering>\\r\\n                <controlTitle>Folder Info</controlTitle>\\r\\n                <controlType>View</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl />\\r\\n                <viewOrder>0</viewOrder>\\r\\n                <supportsPopUps>True</supportsPopUps>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>FileProperties</controlKey>\\r\\n                <controlSrc>DesktopModules/DigitalAssets/FileProperties.ascx</controlSrc>\\r\\n                <supportsPartialRendering>False</supportsPartialRendering>\\r\\n                <controlTitle>File Info</controlTitle>\\r\\n                <controlType>View</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl />\\r\\n                <viewOrder>0</viewOrder>\\r\\n                <supportsPopUps>True</supportsPopUps>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>FolderMappings</controlKey>\\r\\n                <controlSrc>DesktopModules/DigitalAssets/FolderMappings.ascx</controlSrc>\\r\\n                <supportsPartialRendering>False</supportsPartialRendering>\\r\\n                <controlTitle>Folder Mappings</controlTitle>\\r\\n                <controlType>Edit</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl />\\r\\n                <viewOrder>0</viewOrder>\\r\\n                <supportsPopUps>True</supportsPopUps>\\r\\n              </moduleControl>\\r\\n              <moduleControl>\\r\\n                <controlKey>EditFolderMapping</controlKey>\\r\\n                <controlSrc>DesktopModules/DigitalAssets/EditFolderMapping.ascx</controlSrc>\\r\\n                <supportsPartialRendering>True</supportsPartialRendering>\\r\\n                <controlTitle>Edit Folder Mapping</controlTitle>\\r\\n                <controlType>Edit</controlType>\\r\\n                <iconFile />\\r\\n                <helpUrl />\\r\\n                <viewOrder>0</viewOrder>\\r\\n                <supportsPopUps>True</supportsPopUps>\\r\\n              </moduleControl>\\r\\n            </moduleControls>\\r\\n          </moduleDefinition>\\r\\n        </moduleDefinitions>\\r\\n      </desktopModule>\\r\\n      <eventMessage>\\r\\n        <processorType>DotNetNuke.Entities.Modules.EventMessageProcessor, DotNetNuke</processorType>\\r\\n        <processorCommand>UpgradeModule</processorCommand>\\r\\n        <attributes>\\r\\n          <businessControllerClass>DotNetNuke.Modules.DigitalAssets.Components.Controllers.DigitalAssetsController</businessControllerClass>\\r\\n          <desktopModuleID>[DESKTOPMODULEID]</desktopModuleID>\\r\\n          <upgradeVersionsList>07.01.00</upgradeVersionsList>\\r\\n        </attributes>\\r\\n      </eventMessage>\\r\\n    </component>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <path>bin</path>\\r\\n          <name>DotNetNuke.Modules.DigitalAssets.dll</name>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"File\\\">\\r\\n      <files>\\r\\n        <basePath>DesktopModules/DigitalAssets</basePath>\\r\\n        <file>\\r\\n          <name>View.ascx</name>\\r\\n          <sourceFileName>View.ascx</sourceFileName>\\r\\n        </file>\\r\\n        <file>\\r\\n          <name>Settings.ascx</name>\\r\\n          <sourceFileName>Settings.ascx</sourceFileName>\\r\\n        </file>\\r\\n        <file>\\r\\n          <name>FolderProperties.ascx</name>\\r\\n          <sourceFileName>FolderProperties.ascx</sourceFileName>\\r\\n        </file>\\r\\n        <file>\\r\\n          <name>FileProperties.ascx</name>\\r\\n          <sourceFileName>FileProperties.ascx</sourceFileName>\\r\\n        </file>\\r\\n        <file>\\r\\n          <name>FolderMappings.ascx</name>\\r\\n          <sourceFileName>FolderMappings.ascx</sourceFileName>\\r\\n        </file>\\r\\n        <file>\\r\\n          <name>EditFolderMapping.ascx</name>\\r\\n          <sourceFileName>EditFolderMapping.ascx</sourceFileName>\\r\\n        </file>\\r\\n      </files>\\r\\n    </component>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>DesktopModules/DigitalAssets</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":131,\"[Manifest]\":\"<package name=\\\"jQuery-Migrate\\\" type=\\\"JavaScript_Library\\\" version=\\\"03.02.00\\\" isSystem=\\\"true\\\">\\r\\n  <friendlyName>jQuery Migrate JavaScript Library</friendlyName>\\r\\n  <description>A development tool to help migrate away from APIs and features that have been or will be removed from jQuery core</description>\\r\\n  <iconFile>Icons\\\\Sigma\\\\Extensions_32x32_Standard.png</iconFile>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"jQuery (MIT).txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"managedPackage\\\" version=\\\"1.6.4\\\">jQuery</dependency>\\r\\n  </dependencies>\\r\\n  <components>\\r\\n    <component type=\\\"JavaScript_Library\\\">\\r\\n      <javaScriptLibrary>\\r\\n        <libraryName>jQuery-Migrate</libraryName>\\r\\n        <fileName>jquery-migrate.js</fileName>\\r\\n        <CDNPath>https://code.jquery.com/jquery-migrate-3.2.0.min.js</CDNPath>\\r\\n      </javaScriptLibrary>\\r\\n    </component>\\r\\n    <component type=\\\"JavaScriptFile\\\">\\r\\n      <jsfiles>\\r\\n        <libraryFolderName>jQuery-Migrate</libraryFolderName>\\r\\n        <jsfile>\\r\\n          <name>jquery-migrate.js</name>\\r\\n        </jsfile>\\r\\n      </jsfiles>\\r\\n    </component>\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"01.02.01\\\" fileName=\\\"01.02.01.txt\\\" />\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":132,\"[Manifest]\":\"<package name=\\\"jQuery-UI\\\" type=\\\"JavaScript_Library\\\" version=\\\"01.12.01\\\" isSystem=\\\"true\\\">\\r\\n  <friendlyName>jQueryUI JavaScript Library</friendlyName>\\r\\n  <description>jQueryUI is a JavaScript library that is used to extend jQuery to provide UI widgets.</description>\\r\\n  <iconFile>Icons\\\\Sigma\\\\Extensions_32x32_Standard.png</iconFile>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"jQuery UI (MIT).txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"managedPackage\\\" version=\\\"1.6.4\\\">jQuery</dependency>\\r\\n  </dependencies>\\r\\n  <components>\\r\\n    <component type=\\\"JavaScript_Library\\\">\\r\\n      <javaScriptLibrary>\\r\\n        <libraryName>jQuery-UI</libraryName>\\r\\n        <fileName>jquery-ui.js</fileName>\\r\\n        <CDNPath>//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js</CDNPath>\\r\\n      </javaScriptLibrary>\\r\\n    </component>\\r\\n    <component type=\\\"JavaScriptFile\\\">\\r\\n      <jsfiles>\\r\\n        <libraryFolderName>jQuery-UI</libraryFolderName>\\r\\n        <jsfile>\\r\\n          <name>jquery-ui.js</name>\\r\\n        </jsfile>\\r\\n      </jsfiles>\\r\\n    </component>\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"01.10.03\\\" fileName=\\\"01.10.03.txt\\\" />\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"01.11.03\\\" fileName=\\\"01.11.03.txt\\\" />\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":133,\"[Manifest]\":\"<package name=\\\"Knockout.Mapping\\\" type=\\\"JavaScript_Library\\\" version=\\\"02.04.01\\\">\\r\\n  <friendlyName>Knockout Mapping JavaScript Library</friendlyName>\\r\\n  <description>Knockout Mapping is a plugin for Knockout that adds the ability for JSON documents to be automatically mapped to\\r\\n      Knockout ViewModels.</description>\\r\\n  <iconFile>Icons\\\\Sigma\\\\Extensions_32x32_Standard.png</iconFile>\\r\\n  <owner>\\r\\n    <name>DNN</name>\\r\\n    <organization>.NET Foundation</organization>\\r\\n    <url>https://dnncommunity.org</url>\\r\\n    <email>info@dnncommunity.org</email>\\r\\n  </owner>\\r\\n  <license src=\\\"Knockout Mapping (MIT).txt\\\" />\\r\\n  <releaseNotes src=\\\"releaseNotes.txt\\\" />\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"managedPackage\\\" version=\\\"2.2.1\\\">Knockout</dependency>\\r\\n  </dependencies>\\r\\n  <components>\\r\\n    <component type=\\\"JavaScript_Library\\\">\\r\\n      <javaScriptLibrary>\\r\\n        <libraryName>Knockout.Mapping</libraryName>\\r\\n        <fileName>knockout.mapping.js</fileName>\\r\\n        <preferredScriptLocation>BodyBottom</preferredScriptLocation>\\r\\n        <CDNPath></CDNPath>\\r\\n      </javaScriptLibrary>\\r\\n    </component>\\r\\n    <component type=\\\"JavaScriptFile\\\">\\r\\n      <jsfiles>\\r\\n        <libraryFolderName>Knockout.Mapping</libraryFolderName>\\r\\n        <jsfile>\\r\\n          <name>knockout.mapping.js</name>\\r\\n        </jsfile>\\r\\n      </jsfiles>\\r\\n    </component>\\r\\n    <component type=\\\"Cleanup\\\" version=\\\"02.04.01\\\" fileName=\\\"02.04.01.txt\\\" />\\r\\n  </components>\\r\\n</package>\"},{\"[PackageID]\":136,\"[Manifest]\":\"<package name=\\\"Evotiva.DNNSearchAndReplace\\\" type=\\\"PersonaBar\\\" version=\\\"01.00.00\\\">\\r\\n  <friendlyName>Evotiva DNN Search and Replace</friendlyName>\\r\\n  <description>Evotiva.DNNSearchAndReplace is a DNN Search and Replace DNN Persona Bar extension.</description>\\r\\n  <iconFile>~/Images/icon-personabarapp-32px.png</iconFile>\\r\\n  <owner>\\r\\n    <name>Horacio Judeikin</name>\\r\\n    <organization>Evotiva</organization>\\r\\n    <url>www.evotiva.com</url>\\r\\n    <email>support@evotiva.com</email>\\r\\n  </owner>\\r\\n  <license src=\\\"License.txt\\\"></license>\\r\\n  <releaseNotes src=\\\"ReleaseNotes.txt\\\"></releaseNotes>\\r\\n  <dependencies>\\r\\n    <dependency type=\\\"CoreVersion\\\">09.08.00</dependency>\\r\\n    <dependency type=\\\"ManagedPackage\\\" version=\\\"01.00.00\\\">Dnn.PersonaBar.UI</dependency>\\r\\n  </dependencies>\\r\\n  <azureCompatible>true</azureCompatible>\\r\\n  <components>\\r\\n    <component type=\\\"ResourceFile\\\">\\r\\n      <resourceFiles>\\r\\n        <basePath>DesktopModules/admin/Dnn.PersonaBar/Modules/Evotiva.DNNSearchAndReplace</basePath>\\r\\n        <resourceFile>\\r\\n          <name>Resources.zip</name>\\r\\n        </resourceFile>\\r\\n      </resourceFiles>\\r\\n    </component>\\r\\n    <component type=\\\"Assembly\\\">\\r\\n      <assemblies>\\r\\n        <assembly>\\r\\n          <name>Evotiva.DNNSearchAndReplace.dll</name>\\r\\n          <path>bin</path>\\r\\n        </assembly>\\r\\n      </assemblies>\\r\\n    </component>\\r\\n    <component type=\\\"PersonaBarMenu\\\">\\r\\n      <menu>\\r\\n        <identifier>Evotiva.DNNSearchAndReplace</identifier>\\r\\n        <moduleName>DNNSearchAndReplace</moduleName>\\r\\n        <resourceKey>nav_DNNSearchAndReplace</resourceKey>\\r\\n        <path>DNNSearchAndReplace</path>\\r\\n        <mobileSupport>true</mobileSupport>\\r\\n        <parent>Settings</parent>\\r\\n        <order>1</order>\\r\\n      </menu>\\r\\n    </component>\\r\\n  </components>\\r\\n</package>\"}]",
            "Count": 34
        },
        {
            "Id": "dbo.[Packages][ReleaseNotes]",
            "TableName": "dbo.[Packages]",
            "ColumnName": "[ReleaseNotes]",
            "ColumnsList": "[{\"field\": \"[PackageID]\",\"label\": \"[PackageID]\",\"sortable\": true,\"searchable\": true},{\"field\": \"[ReleaseNotes]\",\"label\": \"[ReleaseNotes]\",\"sortable\": false,\"searchable\": true}]",
            "Results": "[{\"[PackageID]\":105,\"[ReleaseNotes]\":\"There are no release notes for this version of DNN Platform.\\r\\n\"},{\"[PackageID]\":106,\"[ReleaseNotes]\":\"<h1>DDRMenu Release Notes</h1>\\r\\n<p>\\r\\nDDRMenu - DotNetNuke navigation provider.\\r\\n</p>\\r\\n<h2>Change list</h2>\\r\\n<h3>02.01.00 (2014-02-28)</h3>\\r\\n<ul>\\r\\n<li>fixed exception if template wasn't xslt</li>\\r\\n<li>fixed all build warnings for obsolute calls</li>\\r\\n<li>updated to 7.2+</li>\\r\\n<li>added to dnn platform solution and git</li>\\r\\n</ul>\\r\\n<h3>02.00.03 (2013-02-22)</h3>\\r\\n<ul>\\r\\n<li>Fixed rendering of Razor Templates</li>\\r\\n<li>Added [=TARGET] token to allow opening of menu links in new window</li>\\r\\n    <li>DDRMenu only supports DotNetNuke 7+ from now on</li>\\r\\n</ul>\\r\\n<h3>02.00.01 (2011-07-31)</h3>\\r\\n<ul>\\r\\n<li>Fix for exception caused by duplicate action menu items.</li>\\r\\n<li>Page title returned when no localisation present.</li>\\r\\n</ul>\\r\\n<h3>02.00.00 (2011-07-18)</h3>\\r\\n<ul>\\r\\n<li>Razor model object is now an expando to allow easy global variables.</li>\\r\\n<li>Razor compilation errors returned in exception detail.</li>\\r\\n<li>Page description and keywords returned when no localisation present.</li>\\r\\n<li>Fix for blank script paths in manifest.</li>\\r\\n<li>Fix for concurrency issue creating XML serialisers.</li>\\r\\n<li>Fix for problem passing through ClientOptions.</li>\\r\\n</ul>\\r\\n<h3>01.99.04 (DNN 6 beta 1, 2011-06-22)</h3>\\r\\n<ul>\\r\\n<li>Fixed concurrency issue with ClientOptions.</li>\\r\\n<li>Page icon paths corrected when not in dnn:NAV control.</li>\\r\\n<li>Token templates now recognise template arguments.</li>\\r\\n<li>Check added for duplicate script blocks.</li>\\r\\n<li>Localisation performance improvements (host pages now cached correctly, action menu not localised).</li>\\r\\n<li>Action menu command name and argument made available.</li>\\r\\n<li>Navigation provider added to web.config via manifest in DNN 5 onwards.</li>\\r\\n</ul>\\r\\n<h3>01.99.03 (aka 2.0 RC1) (2011-05-17)</h3>\\r\\n<ul>\\r\\n<li>DNN 6.0.0 version added with support for including hidden nodes.</li>\\r\\n<li>Added support for DNN 6 pages with associated large images.</li>\\r\\n<li>Support for Razor dynamically detected, allowing single install to support both .NET 3.5 and .NET 4.0.</li>\\r\\n<li>Added aliases to token parser - PAGE for NODE and NAME for TEXT.</li>\\r\\n<li>Added aliases to NodeSelector - RootOnly, RootChildren and CurrentChildren.</li>\\r\\n<li>On versions of DNN that support it, uses the DNN API to instantiate jQuery.</li>\\r\\n<li>GetString method added to XSL extension functions for localisation.</li>\\r\\n<li>Fixed bug resulting in blank path parameters being provided to XSL templates.</li>\\r\\n<li>On upgrade, tidies up old assemblies and updates namespace and assembly references in skin ASCX files.</li>\\r\\n</ul>\\r\\n<h3>01.99.02 (aka 2.0 beta 3) (2011-04-04)</h3>\\r\\n<ul>\\r\\n<li>Sub-templates added to token based template parser.</li>\\r\\n</ul>\\r\\n<h3>01.99.01 (aka 2.0 beta 2) (2011-04-01)</h3>\\r\\n<ul>\\r\\n<li>Token based template parser added.</li>\\r\\n<li>DNN 5.6.0 version added with Razor template parser.</li>\\r\\n<li>Namespace changed from DNNGarden to DotNetNuke.Web.</li>\\r\\n<li>License and attribution changed to DotNetNuke Corporation.</li>\\r\\n</ul>\\r\\n<h3>01.99.00 (aka 2.0 beta 1) (2011-03-03)</h3>\\r\\n<ul>\\r\\n<li>Namespace changed from DNNDoneRight to DNNGarden.</li>\\r\\n<li>Fixed problem with Ealo internationalisation.</li>\\r\\n<li>Internationalisation providers can add hooks to their own assemblies.</li>\\r\\n<li>Templating updated to allow alternatives to XSLT (e.g. tokens, Razor).</li>\\r\\n</ul>\\r\\n<h3>01.02.02 (2010-09-16)</h3>\\r\\n<ul>\\r\\n<li>Skin objects added to manifests for use by HTML skins.</li>\\r\\n<li>Fixed loss of defaultClientOptions in some templates.</li>\\r\\n</ul>\\r\\n<h3>01.02.01 (2010-08-12)</h3>\\r\\n<ul>\\r\\n<li>Templates can now be located in the container folder for action menus.</li>\\r\\n<li>Workround for WebKit bug when using SolPart template.</li>\\r\\n</ul>\\r\\n<h3>01.02.00 (2010-08-04)</h3>\\r\\n<ul>\\r\\n<li>IPortable interface supported.</li>\\r\\n<li>Loading jQuery from Google CDN uses same protocol as hosting page (http/https).</li>\\r\\n<li>More tolerant parsing of XML supplied via NodeXMLPath.</li>\\r\\n<li>New XSLT library functions for provision of login and register links in a menu.</li>\\r\\n<li>Fix for text encoding in DumpXML template.</li>\\r\\n<li>Fixes for DNNMenu/Solpart in Webkit.</li>\\r\\n</ul>\\r\\n<h3>01.01.01 (2010-07-04)</h3>\\r\\n<ul>\\r\\n<li>Page title now available in XML.</li>\\r\\n<li>Fixed another bug in DNNMenu and SolPart menus when browser window resized.</li>\\r\\n</ul>\\r\\n<h3>01.01.00 (2010-06-23)</h3>\\r\\n<ul>\\r\\n<li>Can now be used for module actions menu.</li>\\r\\n<li>Significant performance improvements in DNNMenu and SolPart templates.</li>\\r\\n<li>Fixed bug in DNNMenu and SolPart menus when browser window resized.</li>\\r\\n<li>DumpXML template layout improved, now included in core distribution.</li>\\r\\n<li>Script instantiation changed to get round bug in XHTML validator.</li>\\r\\n<li>User information now optionally available in XML (use IncludeContext=\\\"true\\\").</li>\\r\\n<li>XSLT updated to work when user information is included.</li>\\r\\n<li>CLSCompliant attribute added to avoid warnings when using INodeManipulator.</li>\\r\\n<li>XSLT function library introduced, initially with only UserIsInRole method.</li>\\r\\n</ul>\\r\\n<h3>01.00.06 (2009-12-14)</h3>\\r\\n<ul>\\r\\n<li>Fixed problem working with DNN 4.x language packs.</li>\\r\\n<li>Module settings now takes multiple template arguments and client options split one per line in multi-line text box.</li>\\r\\n</ul>\\r\\n<h3>01.00.05 (2009-12-10)</h3>\\r\\n<ul>\\r\\n<li>Viewstate disabled since not used.</li>\\r\\n<li>Fixed problem with SolPart hover classes.</li>\\r\\n<li>Fixed issue with IDs when menu embedded inside another control.</li>\\r\\n</ul>\\r\\n<h3>01.00.04 (2009-12-05)</h3>\\r\\n<ul>\\r\\n<li>Uses Adequation localisation extensions if installed.</li>\\r\\n<li>Added new DNNMenu classes icn, txt, mi[n], id[n], m[n] and mid[n].</li>\\r\\n<li>IncludeNodes and ExcludeNodes can now filter by role, e.g. IncludeNodes=\\\"[All users]\\\" only shows those pages visible to all users.</li>\\r\\n<li>Fixed issue with vertical SolPart menus.</li>\\r\\n<li>Fixed issue using NodeSelector with page IDs.</li>\\r\\n</ul>\\r\\n<h3>01.00.03 (2009-12-02)</h3>\\r\\n<ul>\\r\\n<li>Uses Ealo page localisation if installed.</li>\\r\\n<li>Uses localised page names from language settings if DNN version supports it.</li>\\r\\n</ul>\\r\\n<h3>01.00.02 (2009-12-01)</h3>\\r\\n<ul>\\r\\n<li>Changed shim ClientOption from \\\"noShim\\\" to \\\"shim\\\" (thus defaulting to no shimming unless required).</li>\\r\\n<li>Upgrade cleanup code modified to retain existing modules.</li>\\r\\n</ul>\\r\\n<h3>01.00.01 (2009-11-23)</h3>\\r\\n<ul>\\r\\n<li>When adding as a module, now lets user choose style.</li>\\r\\n<li>Issue fixed with MenuAlignment in SolPart template.</li>\\r\\n<li>Fixed errors when adding ClientOptions to ddr:MENU skinobject.</li>\\r\\n<li>Missing text added to module resource files.</li>\\r\\n<li>Fixed DNN 5 installation package - module now installed correctly.</li>\\r\\n</ul>\\r\\n<h3>01.00.00 (2009-11-18)</h3>\\r\\n<ul>\\r\\n<li>Uses Apollo page localisation if installed.</li>\\r\\n<li>True hyperlinks added to DNNMenu and SolPart templates.</li>\\r\\n<li>NodeSelector now processed before IncludeNodes and ExcludeNodes.</li>\\r\\n<li>Settings in module version now processed correctly.</li>\\r\\n<li>Separator HTML fixed in DNNMenu template.</li>\\r\\n<li>SolPart spacer images in FireFox should now always show.</li>\\r\\n<li>Menu alignment fixed for DNNMenu with zero-height container.</li>\\r\\n<li>Scripts added to head rather than registered with script manager to prevent conflicts with ClientAPI.</li>\\r\\n<li>Fixed problem with indication of active nodes in SolPart template.</li>\\r\\n<li>Fixed submenu positioning problem in Opera.</li>\\r\\n<li>Improved chances of peaceful coexistence with other modules also loading jQuery.</li>\\r\\n<li>Menus appear over windowed objects in IE (but not necessarily in other browsers, so beware!).</li>\\r\\n<li>Floating menus relocate, shrink and scroll as appropriate when screen estate is low.</li>\\r\\n<li>Added IncludeNodes etc to SolPartMenu.ascx.</li>\\r\\n</ul>\\r\\n<h3>0.9.03 (2009-06-28)</h3>\\r\\n<ul>\\r\\n<li>Changed node XML format to include more page information, e.g. description.</li>\\r\\n<li>Changed INodeManipulator to use custom node type rather than DNNNode, to include page details.</li>\\r\\n<li>New templating system, now used for all menu types.</li>\\r\\n<li>Minor threading and caching fixes.</li>\\r\\n<li>Added \\\"first\\\", \\\"last\\\" and \\\"only\\\" CSS classes to Classic and Mega1 menus.</li>\\r\\n<li>Added keyboard support to Classic and Mega1 menus (using tab key).</li>\\r\\n<li>Added \\\"IncludeNodes\\\" and \\\"ExcludeNodes\\\" options to select which pages to show.</li>\\r\\n</ul>\\r\\n<h3>0.9.02 (2009-06-12)</h3>\\r\\n<ul>\\r\\n<li>Changed Snapsis templates to use breadcrumb for IsActive token.</li>\\r\\n<li>Fixed HTML encoding issue in non-templated menus.</li>\\r\\n</ul>\\r\\n<h3>0.9.01 (2009-06-11)</h3>\\r\\n<ul>\\r\\n<li>First beta release.</li>\\r\\n</ul>\"},{\"[PackageID]\":107,\"[ReleaseNotes]\":\"There are no release notes for this version of DNN Platform.\\r\\n\"},{\"[PackageID]\":112,\"[ReleaseNotes]\":\"<h3>Journal</h3>\\r\\n<p class=\\\"Contributor\\\">\\r\\n\\tDotNetNuke Corporation <br />\\r\\n\\t<a href=\\\"mailto:training@dotnetnuke.com\\\">training@dotnetnuke.com</a><br />\\r\\n\\t<a href=https://www.dnnsoftware.com>https://www.dnnsoftware.com</a><br />\\r\\n</p>\\r\\n<hr/>\\r\\n<div class=\\\"License\\\">\\r\\n\\t<h3>About the Journal</h3>\\r\\n\\t<p class=\\\"Owner\\\">\\r\\n\\t\\t<b>Version CHANGEME</b><br /><br />\\r\\n\\t</p>\\r\\n\\t<p>Description about version.</p>\\r\\n\\t\\r\\n\\t<h4>Bug Fixes</h4>\\r\\n\\t<ul>\\r\\n\\t\\t\\t<li>List</li>\\r\\n\\t\\t\\t<li>of</li>\\r\\n\\t\\t\\t<li>bug</li>\\r\\n\\t\\t\\t<li>fixes</li>\\r\\n\\t</ul>\\r\\n\\t\\r\\n</div>\"},{\"[PackageID]\":115,\"[ReleaseNotes]\":\"<div>\\r\\n    <div class=\\\"dnnFormMessage dnnFormInfo\\\">\\r\\n        ﻿<h3>HammerFlex</h3>\\r\\n        xcess.nl<br />\\r\\n\\t    <a href=\\\"mailto:support@xcess.nl\\\">support@xcess.nl</a><br />\\r\\n\\t    <a href=http://www.christoc.com>http://www.xcess.nl</a><br />\\r\\n\\t</div>\\r\\n    <h5>Version 01.00.00</h5>\\r\\n\\t<ul>\\r\\n\\t\\t<li>Initial release</li>\\r\\n\\t</ul>\\r\\n</div>\"},{\"[PackageID]\":116,\"[ReleaseNotes]\":\"<div>\\r\\n    <div class=\\\"dnnFormMessage dnnFormInfo\\\">\\r\\n        ﻿<h3>HammerFlex</h3>\\r\\n        xcess.nl<br />\\r\\n\\t    <a href=\\\"mailto:support@xcess.nl\\\">support@xcess.nl</a><br />\\r\\n\\t    <a href=http://www.christoc.com>http://www.xcess.nl</a><br />\\r\\n\\t</div>\\r\\n    <h5>Version 01.00.00</h5>\\r\\n\\t<ul>\\r\\n\\t\\t<li>Initial release</li>\\r\\n\\t</ul>\\r\\n</div>\"},{\"[PackageID]\":117,\"[ReleaseNotes]\":\"<h3>SiteExportImport</h3>\\r\\n<p class=\\\"Contributor\\\">\\r\\n\\tDotNetNuke Corporation <br />\\r\\n\\t<a href=\\\"mailto:support@dnnsoftware.com\\\">support@dnnsoftware.com</a><br />\\r\\n\\t<a href=https://www.dnnsoftware.com>www.dnnsoftware.com</a><br />\\r\\n</p>\\r\\n<hr/>\\r\\n<div class=\\\"License\\\">\\r\\n\\t<h3>About the SiteExportImport</h3>\\r\\n\\t<p class=\\\"Owner\\\">\\r\\n\\t\\t<b>Version 09.01.00</b><br /><br />\\r\\n\\t</p>\\r\\n</div>\"},{\"[PackageID]\":130,\"[ReleaseNotes]\":\"<h3>DigitalAssets</h3>\\r\\n<p class=\\\"Contributor\\\">\\r\\n\\tDotNetNuke Corporation <br />\\r\\n\\t<a href=\\\"mailto:support@dnnsoftware.com\\\">support@dnnsoftware.com</a><br />\\r\\n\\t<a href=https://www.dnnsoftware.com>www.dnnsoftware.com</a><br />\\r\\n</p>\\r\\n<hr/>\\r\\n<div class=\\\"License\\\">\\r\\n\\t<h3>About the DigitalAssets</h3>\\r\\n\\t<p class=\\\"Owner\\\">\\r\\n\\t\\t<b>Version 09.01.00</b><br /><br />\\r\\n\\t</p>\\r\\n\\t<p>This version is dependent now on the DotNetNuke.Web.Deprecated installable library.</p>\\r\\n</div>\"},{\"[PackageID]\":136,\"[ReleaseNotes]\":\"<h3>Evotiva DNNSearchAndReplace</h3>\\r\\n<p class=\\\"Contributor\\\">\\r\\n\\tHoracio Judeikin <br />\\r\\n\\t<a href=\\\"mailto:support@evotiva.com\\\">support@evotiva.com</a><br />\\r\\n\\t<a href=https://www.evotiva.com/>https://www.evotiva.com/</a><br />\\r\\n</p>\\r\\n<br />\\r\\n<hr/>\\r\\n<br />\\r\\n<div class=\\\"License\\\">\\r\\n\\t<h3>About Evotiva DNN Search and Replace</h3>\\r\\n\\t<br /><br />\\r\\n\\t<p>Please review the <a target=\\\"_blank\\\" href=\\\"https://www.evotiva.com/products/dnn-search-and-replace\\\">DNN Search and Replace Release Notes</a> (opens in new window)</p>\\t\\r\\n</div>\"}]",
            "Count": 9
        },
        {
            "Id": "dbo.[Packages][Url]",
            "TableName": "dbo.[Packages]",
            "ColumnName": "[Url]",
            "ColumnsList": "[{\"field\": \"[PackageID]\",\"label\": \"[PackageID]\",\"sortable\": true,\"searchable\": true},{\"field\": \"[Url]\",\"label\": \"[Url]\",\"sortable\": false,\"searchable\": true}]",
            "Results": "[{\"[PackageID]\":1,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":16,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":17,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":23,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":24,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":25,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":26,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":27,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":28,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":29,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":30,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":31,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":32,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":33,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":34,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":35,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":36,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":37,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":38,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":39,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":40,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":41,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":42,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":43,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":44,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":47,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":48,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":49,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":50,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":51,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":55,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":57,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":58,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":59,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":60,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":65,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":67,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":69,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":71,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":81,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":82,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":96,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":97,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":98,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":99,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":100,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":101,\"[Url]\":\"http://www.dnnsoftware.com\"},{\"[PackageID]\":102,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":103,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":104,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":105,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":106,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":107,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":108,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":109,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":110,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":111,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":112,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":113,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":114,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":117,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":118,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":119,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":120,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":121,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":122,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":123,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":124,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":125,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":126,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":127,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":128,\"[Url]\":\"http://dnn-connect.org/\"},{\"[PackageID]\":129,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":130,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":131,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":132,\"[Url]\":\"https://dnncommunity.org\"},{\"[PackageID]\":133,\"[Url]\":\"https://dnncommunity.org\"}]",
            "Count": 77
        }
    ]
};

export default { testLocalization, testData }

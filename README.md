# Evotiva - DNN Search and Replace Tool
## DNN (DotNetNuke) Text Search and Replace module


## Description (2.0+ version)
A DNN (DotNetNuke) Search and Replace module.

Please find more information, screenshots, etc. at http://www.evotiva.com/Products/DNN-Search-And-Replace

This tool allows you to search (and optionally replace) text within any table in the DNN database.

Given the nature of this tool, only super (a.k.a. 'host') users are allowed to access its functionality.

You can perform search and replace operation in one or many of the configured targets. A 'target' is a database table/column pair.

A typical usage of this module is to update legacy Urls (or any text) embed in HTML modules or DNN Url's references. For example, after moving a DNN web site to a different URL.

The search will be case sensitive depending on your database configuration (the database collation). Typically (by default), it is case-insensitive.

The search will look for the given string on the select table/column, and will match with a 'contains...' criteria.

An empty 'Replace With' is valid. Therefore, you can 'delete' text.

## Project Sponsor

![Evotiva](https://www.evotiva.com/Portals/0/images/Logo-Evotiva-wbg.png "Evotiva")

This project was donated by [Evotiva](https://www.evotiva.com), makers of [DNN Backup](https://www.evotiva.com/Products/DNNBackup) DNN's premier backup/clone module, [DNN Upgrade](https://www.evotiva.com/Products/DNNUpgrade) accelerator tool, [DNN Global Storage](https://www.evotiva.com/Products/DNNGlobalStorage) (file system providers); which allows you to easily tie-in cloud-based external and local file systems, [DNN GlobalGallery](https://www.evotiva.com/Products/DNNGlobalGallery) The best way to create galleries of media you already have in your web site or favorite cloud storage provider, and [DNN UserFiles](https://www.evotiva.com/Products/DNN-User-Files), a flexible (template-based) Files and Documents manager with many unique and powerful options powered by DNN Global Storage or any other DNN folder provider, including DNN's default built-in providers: standard, secure and database.

## Release Notes

### 3.0.0 (Feb 4, 2018)

ENH - Updated for DNN 8 and DNN 9 (up to at least 9.2.0)

### 2.0.0 (Jun 3, 2013)

ENH - Rebuilt as a DNN module (for DNN 7.0.5+). Note: Not yet for DNN 8+ (version 1 will work, though).

ENH - Option to bulk search or replace many table/column pairs.

ENH - On screen search and replace results.

ENH - Option to search for the html encoded version of the typed text.

ENH - Settings: Easy configuration of the search targets (table/column pairs. Just point and click to add/remove items. The 'Available Targets' can be sorted, filtered, and by default all 'textual' columns of 250 characters or more are included as possible targets. It features the same defaults the 1.x version has (if they are available on the current database).

CHG - Download it from CodePlex: http://dnnsearchandreplace.codeplex.com    

### 1.x (ASPX) Version

#### Description (1.x version)

A generic DNN Search and Replace tool (virtually any table; e.g. "HtmlText"   , "Links" , "ModuleSettings", "TabModuleSettings", "DnnForge_NewsArticles_Page", "Tabs',  etc. (you can add yours).

This ASPX page is self-contained. To work, it does not need any external stored procedure, DLL, vb or cs file. No module to install/register.

Just upload the ASPX page to your site (in any folder, even the root) and browse to it.
Before browsing to this page, you must be logged in as a super user (host).

Select the table (tablesList) where you want to search and/or replace data on the configured column (columnsList).

You can enter a term to search, and once you click on **search** a grid will display the results (may be in the future paging/sorting could be implemented).

The search  will look for the given string on the select table/column. The search will match 'contains...'

The search  will be case sensitive depending on your database configuration (the database collation). Typically (by default), the search is case-insensitive.

Clicking on <Search & Replace> will replace every instance of the search string with the defined 'Replace With' string.

An empty 'Replace With' is valid. Therefore, you can 'delete' text.

The replace operation is case-insensitive.

More details/usage information within the file itself.

**Updated Jan 6 2009**: faster, cleaner, no need to define PK and supporting any column ([n}text, [n]varchar,..) size (even > 8000 chars)

We plan to pack this utility as a DNN Module, and we will add additional features.

#### v. 1.7 (Oct 1, 2011)

ENH - Updated UI.

ENH - Simplified the way to configure the table-row pairs where to perform the search and/or replace operations

ENH - You can 'bulk' replace all the configured table-row pairs with a single click

ENH - It now supports defining more than one column to search and replace for the same table.

#### v. 1.5 (Apr 26, 2011)

CHG - Updated to support a htmltext table column change in the dnn core.

ENH - Enhanced built-in tables list for s&r operations, including core (HtmlText, ModuleSettings, TabModuleSettings, Tabs, Urls, Links, EventsCalendar) and 3rd party modules (Ventrian NewsArticles, Activeforums)

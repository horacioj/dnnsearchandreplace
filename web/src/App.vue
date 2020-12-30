<template>
  <section>
    <div v-if="isWorking" class="block">
      <p>{{ appLocalization.wait }}</p>
    </div>

    <div v-if="useDebugData && !isWorking" class="block">
      <b-message
        >NOTE: *** DEBUG MODE *** Not connected to DNN and using debug
        data.</b-message
      >
    </div>

    <div v-if="!accessGranted && !isWorking" class="block">
      <b-message type="is-danger">{{ appLocalization.accessDenied }}</b-message>
    </div>

    <div v-if="accessGranted && !isWorking" class="block">
      <b-tabs>
        <b-tab-item :label="appLocalization.mainTab">
          <!-- SEARCH UI -->
          <b-loading
            v-model="operationResultsLoading"
            :is-full-page="false"
          ></b-loading>

          <b-collapse class="card">
            <div
              slot="trigger"
              slot-scope="props"
              class="card-header"
              role="button"
            >
              <p class="card-header-title">
                {{ appLocalization.searchOptions }}
              </p>
              <a class="card-header-icon">
                <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
              </a>
            </div>
            <div class="card-content">
              <div class="block">
                <b-field horizontal>
                  <template slot="label">
                    {{ appLocalization.searchIn }}
                  </template>
                  <b-input
                    disabled
                    v-model="searchIn"
                    maxlength="150"
                  ></b-input>
                </b-field>

                <b-field horizontal>
                  <template slot="label">
                    {{ appLocalization.searchFor }}
                    <b-tooltip
                      position="is-bottom"
                      multilined
                      :label="appLocalization.searchForTooltip"
                    >
                      <b-icon
                        size="is-small"
                        icon="help-circle-outline"
                      ></b-icon>
                    </b-tooltip>
                  </template>
                  <b-input v-model="searchFor" maxlength="150"></b-input>
                </b-field>

                <b-field horizontal>
                  <template slot="label">
                    {{ appLocalization.replaceWith }}
                    <b-tooltip
                      position="is-bottom"
                      multilined
                      :label="appLocalization.replaceWithTooltip"
                    >
                      <b-icon
                        size="is-small"
                        icon="help-circle-outline"
                      ></b-icon>
                    </b-tooltip>
                  </template>
                  <b-input v-model="replaceWith" maxlength="150"></b-input>
                </b-field>

                <b-field horizontal>
                  <template slot="label">
                    {{ appLocalization.htmlEncode }}
                    <b-tooltip
                      position="is-bottom"
                      multilined
                      :label="appLocalization.htmlEncodeTooltip"
                    >
                      <b-icon
                        size="is-small"
                        icon="help-circle-outline"
                      ></b-icon>
                    </b-tooltip>
                  </template>
                  <b-checkbox
                    v-model="doHtmlEncode"
                    maxlength="150"
                  ></b-checkbox>
                </b-field>
              </div>
              <div class="buttons">
                <b-button
                  type="is-primary is-light"
                  icon-left="find-replace"
                  :disabled="actionDisabled"
                  @click="confirmReplace"
                  >{{ appLocalization.cmdReplace }}</b-button
                >
                <b-button
                  type="is-primary"
                  icon-left="file-find"
                  :disabled="actionDisabled"
                  @click="confirmSearch"
                  >{{ appLocalization.cmdSearch }}</b-button
                >
              </div>
            </div>
          </b-collapse>

          <!-- SEARCH RESULTS -->
          <SearchResults
            :operationResults="operationResults"
            :operationResultsLoading="operationResultsLoading"
          ></SearchResults>
        </b-tab-item>

        <b-tab-item :label="appLocalization.settingsTab">
          <Configuration
            :settings="settings"
            @settingsUpdated="onSettingsUpdated"
          ></Configuration>
        </b-tab-item>
      </b-tabs>
    </div>

    <b-collapse class="card">
      <div slot="trigger" slot-scope="props" class="card-header" role="button">
        <p class="card-header-title">
          {{ appLocalization.aboutTitle }}
        </p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
        </a>
      </div>
      <div class="card-content">
        <b-message type="is-info" has-icon>
          <span v-html="appLocalization.aboutInfo"></span>
        </b-message>
      </div>
    </b-collapse>
  </section>
</template>

<script>
import $ from "jquery";
import util from "./js/util";
import data from "./js/data";
import Configuration from "./components/Configuration";
import SearchResults from "./components/SearchResults";

var performSearch = function (self, doReplace) {
  self.operationResultsLoading = true;
  $.ajax({
    method: "POST",
    url: util.appSettings.serviceUrl.performSearch,
    beforeSend: util.appSettings.sf.setHeaders,
    dataType: "json",
    data: {
      searchTargets: self.settings.SearchTargts,
      searchText: self.searchFor,
      replaceText: self.replaceWith,
      htmlEncode: self.doHtmlEncode,
      doReplace: doReplace,
    },
  })
    .done(function (data) {
      self.operationResults = data;
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      if (!util.appSettings.useDebugData) {
        console.error(
          `${util.appSettings.appName}: Request ${util.appSettings.serviceUrl.performSearch} failed. ${textStatus} ${errorThrown}`
        );
      }
    })
    .always(function () {
      if (util.appSettings.useDebugData) {
        self.operationResults = data.testData.searchResults;
      }
      self.operationResultsLoading = false;
    });
};

export default {
  components: {
    Configuration,
    SearchResults,
  },
  computed: {
    selectedTargetsTotalCount() {
      return this.settings.SearchTargts.length;
    },
    searchIn() {
      return (
        this.selectedTargetsTotalCount + util.appLocalization.searchInTargets
      );
    },
    noSearchTargets() {
      return this.selectedTargetsTotalCount <= 0;
    },
    noSearchTerm() {
      return this.searchFor.length <= 0;
    },
    actionDisabled() {
      return (
        this.noSearchTerm ||
        this.noSearchTargets ||
        this.operationResultsLoading
      );
    },
  },
  data() {
    return {
      accessGranted: false,
      isWorking: true,
      useDebugData: util.appSettings.useDebugData,
      appLocalization: util.appLocalization,
      settings: { SearchTargts: [] },
      searchFor: "",
      replaceWith: "",
      doHtmlEncode: false,
      operationResults: null,
      operationResultsLoading: false,
    };
  },
  methods: {
    loadSettings() {
      var self = this;
      self.selectedTargetsLoading = true;
      $.when(util.getSettings())
        .done(function (data) {
          //}, textStatus, jqXHR) {
          self.settings = data;
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
          if (!util.appSettings.useDebugData) {
            console.error(
              `${util.appSettings.appName}: loadSettings failed. ${textStatus} ${errorThrown}`
            );
          }
        })
        .always(function () {
          if (util.appSettings.useDebugData) {
            self.settings = data.testData.getSettingsResult;
          }
          self.selectedTargetsLoading = false;
        });
    },
    onSettingsUpdated(newSettings) {
      self.settings = newSettings;
    },
    confirmSearch() {
      var self = this;
      self.operationResults = null;
      util.dialog.confirm(self, performSearch, false);
    },
    confirmReplace() {
      var self = this;
      self.operationResults = null;
      util.dialog.confirm(self, performSearch, true);
    },
  },
  mounted: function () {
    var self = this;
    if (util.appSettings.useDebugData) {
      self.accessGranted = true;
      self.loadSettings();
      self.isWorking = false;
    } else {
      $.when(util.isAuthorized())
        .done(function (ok) {
          self.accessGranted = ok;
          if (ok) {
            self.loadSettings();
          }
        })
        .fail(function () {
          self.accessGranted = false;
        })
        .always(function () {
          self.isWorking = false;
        });
    }
  },
};
</script>

<template>
  <div>
    <!-- Selected targets -->
    <h3 class="subtitle">{{ appLocalization.configurationOptions }}</h3>
    <b-tabs>
      <b-tab-item
        :label="appLocalization.selectedTargets"
        icon="check-box-outline"
      >
        <div class="buttons">
          <b-button
            type="is-danger"
            size="is-small"
            icon-left="close"
            :disabled="selectedTargetsCheckedCount <= 0"
            @click="removeCheckedSelectedTargets"
            >{{ appLocalization.removeCheckedTargets }}</b-button
          >

          <b-tooltip
            position="is-bottom"
            :label="appLocalization.saveSettingsTooltip"
          >
            <b-button
              type="is-primary"
              size="is-small"
              icon-left="content-save"
              :disabled="selectedTargetsTotalCount <= 0"
              @click="saveSettings"
              >{{ appLocalization.saveSettings }}</b-button
            >
          </b-tooltip>
        </div>

        <b-table
          :data="settings.SearchTargts"
          :columns="selectedTargetsColumns"
          :loading="selectedTargetsLoading"
          :checked-rows.sync="selectedTargetsCheckedRows"
          :hoverable="true"
          checkable
          :per-page="10"
          paginated
        >
          <template slot="bottom-left">
            <strong>{{ appLocalization.total }}</strong>
            <span class="mx-1"> {{ selectedTargetsTotalCount }}</span>
            <strong class="mr-1"> / </strong>
            <strong>{{ appLocalization.totalChecked }}</strong>
            <span class="mx-1"> {{ selectedTargetsCheckedCount }}</span>
          </template>
        </b-table>
      </b-tab-item>
      <!-- Available targets -->
      <b-tab-item
        :label="appLocalization.availableTargets"
        icon="checkbox-blank-outline"
      >
        <div>
          <b-button
            type="is-primary"
            size="is-small"
            icon-left="plus"
            :disabled="availableTargetsCheckedCount <= 0"
            @click="addCheckedSelectedTargets"
            >{{ appLocalization.addCheckedTargets }}</b-button
          >
        </div>
        <b-table
          :data="availableTargets"
          :columns="availableTargetsColumns"
          :loading="availableTargetsLoading"
          :checked-rows.sync="availableTargetsCheckedRows"
          checkable
          :hoverable="true"
          :per-page="10"
          paginated
        >
          <template slot="bottom-left">
            <strong>{{ appLocalization.total }}</strong>
            <span class="mx-1"> {{ availableTargetsTotalCount }}</span>
            <strong class="mr-1"> / </strong>
            <strong>{{ appLocalization.totalChecked }}</strong>
            <span class="mx-1"> {{ availableTargetsCheckedCount }}</span>
          </template>
        </b-table>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import $ from "jquery";
import util from "../js/util";
import data from "../js/data";

const columns = {
  selectedTargetsColumns: [
    {
      field: "TableName",
      label: util.appLocalization.tableNameHeader,
      sortable: true,
    },
    {
      field: "ColumnName",
      label: util.appLocalization.columnNameHeader,
      sortable: true,
    },
  ],
  availableTargetsColumns: [
    {
      field: "TableName",
      label: util.appLocalization.tableNameHeader,
      sortable: true,
      searchable: true,
    },
    {
      field: "ColumnName",
      label: util.appLocalization.columnNameHeader,
      sortable: true,
      searchable: true,
    },
    {
      field: "ColumnType",
      label: util.appLocalization.columnTypeHeader,
      sortable: true,
      searchable: true,
    },
    {
      field: "ColumnLenght",
      label: util.appLocalization.columnLenghtHeader,
      sortable: false,
      searchable: false,
    },
  ],
};

var saveSettings = function (util, settings) {
  return $.ajax({
    method: "POST",
    url: util.appSettings.serviceUrl.saveSettings,
    beforeSend: util.appSettings.sf.setHeaders,
    dataType: "json",
    data: settings,
  })
    .done(function (data) {
      return data;
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      if (!util.appSettings.useDebugData) {
        console.error(
          `${util.appSettings.appName}: Request ${util.appSettings.serviceUrl.saveSettings} failed. ${textStatus} ${errorThrown}`
        );
      }
    });
};

var getAllTargets = function (util) {
  return $.ajax({
    url: util.appSettings.serviceUrl.getAllTargets,
    beforeSend: util.appSettings.sf.setHeaders,
    dataType: "json",
  })
    .done(function (data) {
      return data;
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      if (!util.appSettings.useDebugData) {
        console.error(
          `${util.appSettings.appName}: Request ${util.appSettings.serviceUrl.getAllTargets} failed. ${textStatus} ${errorThrown}`
        );
      }
    });
};

var removeCheckedSelectedTargets = (self) => {
  var removedCount = 0;
  $.each(self.selectedTargetsCheckedRows, function (i, currentItem) {
    var pos = self.settings.SearchTargts.findIndex(
      (obj) => obj.Id === currentItem.Id
    );
    if (pos >= 0) {
      self.settings.SearchTargts.splice(pos, 1);
      removedCount++;
    }
  });
  self.selectedTargetsCheckedRows = [];
  self.$buefy.toast.open(
    `${util.appLocalization.removedChecked} (${removedCount})`
  );
  self.$emit("settingsUpdated", self.settings);
};

var addCheckedSelectedTargets = function (self) {
  var addedCount = 0;
  $.each(self.availableTargetsCheckedRows, function (i, currentItem) {
    var exists =
      self.settings.SearchTargts.find((obj) => obj.Id === currentItem.Id) !==
      undefined;
    if (!exists) {
      self.settings.SearchTargts.push(currentItem);
      addedCount++;
    }
  });
  self.availableTargetsCheckedRows = [];
  self.$buefy.toast.open(
    `${util.appLocalization.addedChecked} (${addedCount})`
  );
  self.$emit("settingsUpdated", self.settings);
};

export default {
  name: "Configuration",
  props: ["settings"],
  computed: {
    selectedTargetsTotalCount() {
      return this.settings.SearchTargts.length;
    },
    selectedTargetsCheckedCount() {
      return this.selectedTargetsCheckedRows.length;
    },
    availableTargetsTotalCount() {
      return this.availableTargets.length;
    },
    availableTargetsCheckedCount() {
      return this.availableTargetsCheckedRows.length;
    },
  },
  data() {
    return {
      useDebugData: util.appSettings.useDebugData,
      appLocalization: util.appLocalization,
      selectedTargetsLoading: false,
      selectedTargetsColumns: columns.selectedTargetsColumns,
      selectedTargetsCheckedRows: [],
      availableTargetsLoading: false,
      availableTargets: [],
      availableTargetsColumns: columns.availableTargetsColumns,
      availableTargetsCheckedRows: [],
    };
  },
  methods: {
    saveSettings() {
      var self = this;

      var doSaveSettings = function (self) {
        self.selectedTargetsLoading = true;
        self.availableTargetsLoading = true;
        $.when(saveSettings(util, self.settings))
          .done(function () {
            self.$buefy.toast.open(util.appLocalization.settingsSaved);
          })
          .fail(function (jqXHR, textStatus, errorThrown) {
            if (!util.appSettings.useDebugData) {
              console.error(
                `${util.appSettings.appName}: saveSettings failed. ${textStatus} ${errorThrown}`
              );
            }
            self.$buefy.toast.open(util.appLocalization.settingsNotSaved);
          })
          .always(function () {
            self.selectedTargetsLoading = false;
            self.availableTargetsLoading = false;
          });
      };

      util.dialog.confirm(self, doSaveSettings);
    },
    loadAllTargets() {
      var self = this;
      self.availableTargetsLoading = true;
      $.when(getAllTargets(util))
        .done(function (data) {
          //}, textStatus, jqXHR) {
          self.availableTargets = data;
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
          if (!util.appSettings.useDebugData) {
            console.error(
              `${util.appSettings.appName}: loadAllTargets failed. ${textStatus} ${errorThrown}`
            );
          }
        })
        .always(function () {
          if (util.appSettings.useDebugData) {
            self.availableTargets = data.testData.getAllTargetsResult;
          }
          self.availableTargetsLoading = false;
        });
    },
    removeCheckedSelectedTargets() {
      try {
        var self = this;
        util.dialog.confirm(self, removeCheckedSelectedTargets);
      } catch (error) {
        console.error(
          `${util.appSettings.appName}: Request removeCheckedSelectedTargets() failed`,
          error
        );
      }
    },
    addCheckedSelectedTargets() {
      var self = this;
      util.dialog.confirm(self, addCheckedSelectedTargets);
    },
  },
  mounted: function () {
    var self = this;
    if (util.appSettings.useDebugData) {
      self.loadAllTargets();
    } else {
      $.when(util.isAuthorized())
        .done(function (ok) {
          if (ok) {
            self.loadAllTargets();
          }
        })
        .fail(function () {})
        .always(function () {});
    }
  },
};
</script>
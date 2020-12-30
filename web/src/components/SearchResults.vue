<template>
  <div>
    <div v-if="hasResults" class="block">
      <b-collapse class="card">
        <div
          slot="trigger"
          slot-scope="props"
          class="card-header"
          role="button"
        >
          <p class="card-header-title">{{ appLocalization.searchResults }}</p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
          </a>
        </div>

        <div class="card-content">
          <b-table
            :data="operationResults"
            :columns="operationResultsColumns"
            :loading="operationResultsLoading"
            :hoverable="true"
            :sticky-header="false"
            :per-page="10"
            paginated
            detailed
            detail-key="Id"
          >
            <template slot="detail" slot-scope="props">
              <article>
                <b-table
                  :data="JSON.parse(props.row.Results)"
                  :columns="JSON.parse(props.row.ColumnsList)"
                  :loading="operationResultsLoading"
                  :hoverable="true"
                  :sticky-header="false"
                  :per-page="5"
                  paginated
                >
                </b-table>
              </article>
            </template>
          </b-table>
        </div>
      </b-collapse>
    </div>

    <div v-if="hasNoResults" class="block">
      <b-collapse class="card">
        <div
          slot="trigger"
          slot-scope="props"
          class="card-header"
          role="button"
        >
          <p class="card-header-title">{{ appLocalization.searchResults }}</p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
          </a>
        </div>

        <div class="card-content">
          <p>{{ appLocalization.searchResultsNotFound }}</p>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import util from "../js/util";

const columns = {
  operationResultsColumns: [
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
    {
      field: "Count",
      label: util.appLocalization.hitsCount,
      sortable: true,
    },
  ],
};

export default {
  name: "SearchResults",
  props: ["operationResults", "operationResultsLoading"],
  computed: {
    hasResults() {
      return this.operationResults !== null && this.operationResults.length > 0;
    },
    hasNoResults() {
      return (
        this.operationResults !== null && this.operationResults.length === 0
      );
    },
  },
  data() {
    return {
      useDebugData: util.appSettings.useDebugData,
      appLocalization: util.appLocalization,
      operationResultsColumns: columns.operationResultsColumns,
    };
  },
};
</script>
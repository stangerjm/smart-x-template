<template>
    <div>
        <smart-search class="layout-main--search"
                      route-name="PeopleCreate"
                      form-title="People"
                      method="get">
        </smart-search>
        <smart-table v-if="getPeople.length > 0"
                     default-context="person"
                     :sortMethod="this.getDataSortedBy"
                     :table-data="getPeople"
                     :props-to-link="propsToLink">
        </smart-table>
        <p v-else>Nothing to see here!</p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { createLinkToRecord } from "smart-x-vue";

import { SmartTable, SmartSearch } from "smart-x-vue";

export default {
  name: "people",
  components: {
    SmartTable,
    SmartSearch
  },
  computed: {
    ...mapGetters("people", ["getPeople", "getDataSortedBy"]),
    ...mapGetters("regions", ["getRegions"]),
    propsToLink() {
      return {
        address: createLinkToRecord({
          linkContext: "Region",
          linkAction: "Details",
          destinationLookupKey: "name",
          destinationTable: this.getRegions,
          destinationIdKey: "_id"
        })
      };
    }
  }
};
</script>

<style scoped>
</style>

<template>
    <div>
        <smart-search route-name="RegionCreate"
                      method="get"
                      form-title="Region">
        </smart-search>
        <smart-table :table-data="getRegions"
                     default-context="region"
                     v-if="getRegions.length > 0"
                     :sort-method="getDataSortedBy"
                     :props-to-link="{}">
        </smart-table>
        <p v-else>No regions yet. Let's add one!</p>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { SmartSearch, SmartTable } from "smart-x-vue";

const { mapGetters } = createNamespacedHelpers("regions");

export default {
  components: {
    SmartSearch,
    SmartTable
  },
  name: "region",
  computed: {
    ...mapGetters(["getRegions", "getDataSortedBy"])
  }
};
</script>

<style scoped>
</style>

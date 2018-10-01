<template>
  <div>
    <stack-searchable-table route-name="RegionCreate"
                            form-title="Region"
                            :search-model="searchModel"
                            :table-data="getRegions"
                            default-context="region">
    </stack-searchable-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers("regions");

export default {
  components: {
    StackSearchableTable: () =>
      import("smart-x-vue/src/components/stack-searchableTable")
  },
  name: "region",
  computed: {
    ...mapGetters(["getRegions"])
  },
  data() {
    return {
      searchModel: {
        name: String,
        code: String
      }
    };
  }
};
</script>

<style scoped>
</style>

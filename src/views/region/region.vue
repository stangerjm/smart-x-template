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
import { StackSearchableTable } from "smart-x-vue";

const { mapGetters } = createNamespacedHelpers("regions");

export default {
  components: {
    StackSearchableTable
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

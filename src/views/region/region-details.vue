<template>
    <div class="layout-subsection">
        <smart-details class="layout-subsection--main"
                       v-if="region"
                       :detail-data="region">
        </smart-details>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers("regions");

export default {
  components: {
    SmartDetails: () => import("smart-x-vue/src/components/smart-details")
  },
  name: "region-details",
  computed: {
    ...mapGetters(["getRegionSingle"]),
    region() {
      return this.getRegionSingle(this.$route.params.id);
    }
  }
};
</script>

<style scoped lang="scss">
/*@import "../../../styles/sass/layout/subsection/subsection";*/
</style>

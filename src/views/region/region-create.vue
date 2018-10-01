<template>
    <div>
        <smart-form :on-submit="submit" form-title="Edit" :form-data="formData"></smart-form>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapActions } = createNamespacedHelpers("regions");

export default {
  components: {
    SmartForm: () => import("smart-x-vue/src/components/smart-form")
  },
  name: "region-create",
  data() {
    return {
      formData: {
        name: String,
        code: String
      }
    };
  },
  methods: {
    ...mapActions(["addRegion"]),
    async submit(submittedData) {
      await this.addRegion(submittedData);
      this.$router.push("/region");
    }
  }
};
</script>

<style scoped>
</style>

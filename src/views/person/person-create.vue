<template>
    <smart-form :form-data="formData"
                :on-submit="submit">
    </smart-form>
</template>

<script>
import { createNamespacedHelpers, mapGetters } from "vuex";

const { mapActions } = createNamespacedHelpers("people");

let regionNames = ["ANOTHER REGION", "Northeast Washington"];

export default {
  name: "person-create",
  components: {
    SmartForm: () => import("smart-x-vue/src/components/smart-form")
  },
  data() {
    return {
      formData: {
        name: String,
        age: Number,
        birthday: Date,
        isEmployee: Boolean,
        address: regionNames
      }
    };
  },
  computed: {
    ...mapGetters("regions", ["getRegions"])
  },
  methods: {
    ...mapActions(["addPerson"]),
    submit: async function(submittedData) {
      await this.addPerson(submittedData);
      this.$router.push("/person");
    }
  }
};
</script>

<style scoped>
</style>

<template>
    <div>
        <smart-form form-title="Edit"
                    :form-data="getPersonSingle($route.params.id)"
                    :on-submit="submit"></smart-form>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { SmartForm } from "smart-x-vue";

const { mapGetters, mapActions } = createNamespacedHelpers("people");

export default {
  name: "person-edit",
  components: {
    SmartForm
  },
  computed: {
    ...mapGetters(["getPersonSingle"])
  },
  methods: {
    ...mapActions(["editPerson"]),
    async submit(formData) {
      await this.editPerson({ person: formData, id: this.$route.params.id });
      this.$router.push("/person");
    }
  }
};
</script>

<style scoped>
</style>

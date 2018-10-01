<template>
    <div class="layout-subsection">
        <smart-details class="layout-subsection--main"
                       v-if="person"
                       :detail-data="person">
        </smart-details>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers("people");

export default {
  name: "person-details",
  components: {
    SmartDetails: () => import("smart-x-vue/src/components/smart-details")
  },
  data() {
    return {
      friends: {
        james: {
          friends: [{ id: 1, name: "James" }, { id: 2, name: "Jenna" }]
        },
        joel: {
          friends: [{ id: 3, name: "Joel" }, { id: 4, name: "Joseph" }]
        },
        jacquie: {
          friends: [{ id: 5, name: "Jacquie" }, { id: 6, name: "Jessica" }]
        },
        jacob: {
          friends: [{ id: 7, name: "Jacob" }, { id: 8, name: "Jared" }]
        },
        random: {
          friends: [{ id: 9, name: "Random" }, { id: 10, name: "Person" }]
        },
        another: {
          friends: [{ id: 11, name: "Another" }, { id: 12, name: "Person" }]
        },
        more: {
          friends: [{ id: 13, name: "More" }, { id: 14, name: "People" }]
        }
      }
    };
  },
  computed: {
    ...mapGetters(["getPersonSingle"]),
    person() {
      return this.getPersonSingle(this.$route.params.id);
    }
  }
};
</script>

<style scoped lang="scss">
/*@import "../../../styles/sass/layout/subsection/subsection";*/
</style>

<template>
    <div>
        <stack-searchable-table form-title="People"
                                route-name="PeopleCreate"
                                :table-data="getPeople"
                                :props-to-link="propsToLink"
                                :search-model="searchModel"
                                default-context="person">
        </stack-searchable-table>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { createLinkToRecord } from "smart-x-vue";

export default {
  name: "people",
  components: {
    StackSearchableTable: () =>
      import("smart-x-vue/src/components/stack-searchableTable")
  },
  computed: {
    ...mapGetters("people", ["getPeople"]),
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
  },
  data() {
    return {
      searchModel: {
        name: String,
        age: Number,
        birthday: Date
      }
    };
  }
};
</script>

<style scoped>
</style>

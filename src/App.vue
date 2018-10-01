<template>
  <div id="app">

    <layout-main>

      <template slot="header">

        <smart-nav :nav-items="nav"
                   nav-title="Admin"
                   usr="JMST225">
        </smart-nav>

      </template>

      <template slot="content">

        <router-view></router-view>

      </template>

      <template slot="footer">

        <smart-footer></smart-footer>

      </template>

    </layout-main>
  </div>
</template>

<script>
import { config } from "../app.config.js";

export default {
  name: "app",
  components: {
    SmartNav: () => import("smart-x-vue/src/components/smart-nav"),
    SmartFooter: () => import("smart-x-vue/src/components/smart-footer"),
    LayoutMain: () => import("smart-x-vue/src/components/layout-main")
  },
  data() {
    return {
      nav: config.nav
    };
  }
};
</script>

<style lang="scss">
</style>

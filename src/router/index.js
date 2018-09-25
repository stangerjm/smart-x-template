import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      name: "Home",
      component: () => import("../views/home")
    },
    /***********************************
     * PERSON ROUTES
     **********************************/
    {
      path: "/person",
      name: "People",
      component: () => import("../views/person/people")
    },
    {
      path: "/person/create",
      name: "PeopleCreate",
      component: () => import("../views/person/person-create")
    },
    {
      path: "/person/delete/:id",
      name: "PeopleDelete",
      component: () => import("../views/person/person-delete")
    },
    {
      path: "/person/edit/:id",
      name: "PersonEdit",
      component: () => import("../views/person/person-edit")
    },
    {
      path: "/person/details/:id",
      name: "PersonDetails",
      component: () => import("../views/person/person-details")
    },
    /***********************************
     * REGION ROUTES
     **********************************/
    {
      path: "/region",
      name: "Region",
      component: () => import("../views/region/region")
    },
    {
      path: "/region/create",
      name: "RegionCreate",
      component: import("../views/region/region-create")
    },
    {
      path: "/region/edit/:id",
      name: "RegionEdit",
      component: () => import("../views/region/region-edit")
    },
    {
      path: "/region/delete/:id",
      name: "RegionDelete",
      component: () => import("../views/region/region-delete")
    },
    {
      path: "/region/details/:id",
      name: "RegionDetails",
      component: () => import("../views/region/region-details")
    }
  ]
});

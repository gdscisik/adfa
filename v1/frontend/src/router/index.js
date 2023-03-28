import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import AccountPage from "../views/AccountPage.vue";
import DonatePage from "../views/DonatePage.vue";
import ForumPage from "../views/ForumPage.vue";
import RequestDetailPage from "../views/RequestDetailPage.vue";
import CampaignDetailPage from "../views/CampaignDetailPage.vue";
import CampaignsPage from "../views/CampaignsPage.vue";
import CategoriesPage from "../views/CategoriesPage.vue";
import OpenNewDonateRequestPage from "../views/OpenNewDonateRequestPage.vue";
//import store from "../store";
const routes = [
  {
    path: "/",
    name: "Main",
    component: HomePage,
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
  {
    path: "/account",
    name: "Account",
    component: AccountPage,
  },
  {
    path: "/campaigns",
    name: "Campaigns",
    component: CampaignsPage,
  },
  {
    path: "/campaigns/:id",
    name: "CampaignDetail",
    component: CampaignDetailPage,
  },
  {
    path: "/categories",
    name: "Categories",
    component: CategoriesPage,
  },
  /* {
    path: "/reports",
    name: "Reports",
    component: ReportsPage,
  }, */
  {
    path: "/requests",
    name: "Forum",
    component: ForumPage,
  },
  {
    path: "/requests/:id",
    name: "RequestDetail",
    component: RequestDetailPage,
  },
  {
    path: "/donate",
    name: "Donate",
    /*meta: {
      componentName: "AppBookmarkListComponent",
    },*/
    component: DonatePage,
  },
  {
    path: "/requests/new-request",
    name: "OpenNewDonateRequest",
    component: OpenNewDonateRequestPage,
  },
];

const router = createRouter({
  //history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
});

/* router.beforeEach((to, _, next) => {
  const authRequiredRoutes = ["Home"];
  const authNotRequiredRoutes = ["Login", "Register"];
  const _isAuthenticated = store.getters._isAuthenticated;

  if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated)
    next(false);
  if (authRequiredRoutes.indexOf(to.name) > -1) {
    if (_isAuthenticated) next();
    else next({ name: "Login" });
  } else {
    next();
  }
}); */
export default router;

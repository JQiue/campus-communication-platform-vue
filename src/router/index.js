import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Edit from "../views/Edit.vue";
import Userinfo from "../views/Userinfo.vue";
import Test from "../components/Test.vue";
import Transaction from "../components/Transaction.vue";
import Article from "../components/Article.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
      { path: "/home", redirect: "article" },
      { path: "test", component: Test },
      { path: "transaction", component: Transaction },
      { path: "article", component: Article },
      { path: "edit", component: Edit },
      { path: "userinfo", component: Userinfo },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;

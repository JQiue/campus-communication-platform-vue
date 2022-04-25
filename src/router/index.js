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
import AuditCenter from "../components/AuditCenter.vue";

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
      { path: "auditcenter", component: AuditCenter },
      { path: "chat", component: Test },
    ],
  },
];

const router = new VueRouter({
  routes,
});

const originPush = VueRouter.prototype.push;

VueRouter.prototype.push = function (location) {
  return originPush.call(this, location).catch((err) => err);
};

router.beforeEach((to, from, next) => {
  if (to.fullPath == from.fullPath) {
    return false;
  }
  next();
});

export default router;

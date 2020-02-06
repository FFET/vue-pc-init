import Vue from "vue";
import Home from "@/views/Home";
import Main from "@/views/Main";
import App from "./App";
import About from "@/views/About";
import Login from "@/views/Login";
import NotFound from "@/views/notFound";
import "@/styles/index.less";

import { Button, Menu, Icon } from "ant-design-vue";
Vue.component(Button.name, Button);

import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: __dirname,
  routes: [
    { path: "/login", component: Login },
    {
      path: "/",
      meta: {
        auth: true
      },
      component: Main,
      children: [
        {
          path: "",
          component: Home,
          meta: {
            auth: true
          }
        },
        {
          path: "about",
          component: About,
          meta: {
            auth: true
          }
        }
      ]
    },
    { path: "*", component: NotFound }
  ]
});

router.beforeEach((to, from, next) => {
  let validator =
    typeof to.meta.auth == "undefined" || !to.meta.auth || sessionStorage.getItem("token");
  let result = validator
    ? {}
    : {
        path: "login" // 跳转到命名路由
        // query: {
        //   url: to.fullPath // 做一个来源页面，用于登陆成功之后跳转
        // }
      };
  next(result);
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
  // template: `
  //   <div id="app">
  //     <router-view class="view"></router-view>
  //   </div>`
}).$mount("#app");

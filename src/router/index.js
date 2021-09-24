/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2021-09-22 18:30:53
 * @LastEditTime: 2021-09-24 12:19:51
 * @Email: str-liang@outlook.com
 * @FilePath: \demo\src\router\index.js
 * @Environment: Win 10 Python 3.8
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";

import { getToken } from "@/utils/auth.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "Login"
    }
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404.vue")
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    redirect: {
      name: "HomePage1"
    },
    children: [
      {
        path: "/HomePage1",
        name: "HomePage1",
        component: () => import("../views/homePage/HomePage1.vue"),
        meta: {
          isRouter: true
        }
      },
      {
        path: "/HomePage2",
        name: "HomePage2",
        component: () => import("../views/homePage/HomePage2.vue"),
        meta: {
          isRouter: true,
          isTab: true
        }
      }
    ]
  },
  {
    path: "/About",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/Goods",
    name: "Goods",
    component: () => import("../views/Goods.vue")
  },
  {
    path: "*",
    redirect: {
      name: "404"
    }
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  if (to.meta.isRouter) {
    let token = getToken();
    if (!token || !/\S/.test(token)) {
      next({
        name: "Login"
      });
    }
  }
  next();
});

export default router;

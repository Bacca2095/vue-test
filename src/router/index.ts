import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { AuthActions } from "../enums/auth-actions.enum";
import AppLayout from "../layouts/AppLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import store from "../store";

export enum RoutesName {
  AUTH = "auth",
  HOME = "home",
  NOT_FOUND = "not-found",
}

const routes: RouteRecordRaw[] = [
  {
    path: `/${RoutesName.HOME}`,
    name: RoutesName.HOME,
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/Home.vue"),
    redirect: "",
    meta: {
      layout: AppLayout,
      requireAuth: true,
    },
  },
  {
    path: `/${RoutesName.AUTH}/:action`,
    name: RoutesName.AUTH,
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/auth/Auth.vue"),
    redirect: "",
    meta: {
      layout: AuthLayout,
      noRequireAuth: true,
    },
  },
  {
    path: `/${RoutesName.NOT_FOUND}`,
    name: RoutesName.NOT_FOUND,
    component: () =>
      import(
        /* webpackChunkName: "not-found" */ "../views/not-found/NotFound.vue"
      ),
    meta: {
      requireAuth: true,
      noRequireAuth: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/not-found",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const validateSession = (): boolean => !!store().getToken;
router.beforeEach((to, from, next) => {
  if (
    to.name !== RoutesName.AUTH &&
    !validateSession() &&
    to.matched.some((record) => record.meta.requireAuth)
  ) {
    next({ name: RoutesName.AUTH, params: { action: AuthActions.SIGN_IN } });
  } else if (
    validateSession() &&
    to.matched.some((record) => record.meta.noRequireAuth)
  ) {
    next({ name: RoutesName.HOME });
  } else next();
});

export default router;

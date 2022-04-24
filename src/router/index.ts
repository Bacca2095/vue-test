import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { AuthActions } from "../enums/auth-actions.enum";
import AppLayout from "@/layouts/AppLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import { useDefaultStore } from "../store/default-store";
import { RoutesName } from "../enums/routes-name.enum";

const routes: RouteRecordRaw[] = [
  {
    path: `/`,
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
      requireAuth: false,
      noRequireAuth: false,
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

const validateSession = (): boolean => !!useDefaultStore().getUserEmail;
router.beforeEach((to, from, next) => {
  const redirectToAuth: boolean =
    to.name !== RoutesName.AUTH &&
    !validateSession() &&
    to.matched.some((record) => record.meta.requireAuth);

  const redirectToHome: boolean =
    validateSession() && to.matched.some((record) => record.meta.noRequireAuth);

  if (!redirectToAuth && !redirectToHome) {
    next();
  }

  if (redirectToAuth) {
    next({ name: RoutesName.AUTH, params: { action: AuthActions.SIGN_IN } });
  }
  if (redirectToHome) {
    next({ name: RoutesName.HOME });
  }
});

export default router;

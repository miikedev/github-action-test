import { createRouter, createWebHistory, useRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import CvForm from "../views/CvForm.vue";
import CheckCvinfo from "../views/CheckCvinfo.vue";
import DoeView from "../views/DoeView.vue";
import RegisterNewWorker from "../views/RegisterNewWorker.vue";
import ReviewCv from "../views/ReviewCv.vue";
import ReviewWorker from "../views/ReviewWorkerinterview.vue";
import ReviewMedical from "../views/ReviewWorkerMedical.vue";
import ReturnWorker from "../views/RenewReturningWorker.vue";
import CheckPrimaryInfo from "../views/CheckPrimaryInfo.vue";
import SurveyForm from "../views/SurveyForm.vue";
import SurveyPage from "../views/SurveyPage.vue";
import SearchPage from "../views/SearchPage.vue";
import WorkerHome from "../views/WorkerHome.vue";
// import ChatView from "../views/ChatView.vue";
import Contract from "../views/ContractView.vue";
import OwicView from "../views/OwicView.vue";
import PassportView from "../views/PassportView.vue";
import ChatAdminView from "../views/ChatAdminView";
import store from "../store/auth";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/",
    name: "login",
    component: LoginPage,
    meta: { requiresAuth: false },
  },
  {
    path: "/checkprimaryinfo",
    name: "checkprimaryinfo",
    component: CheckPrimaryInfo,
    meta: { requiresAuth: true },
  },
  {
    path: "/cvform",
    name: "cvform",
    component: CvForm,
    meta: { requiresAuth: true },
  },
  {
    path: "/checkcvinfo",
    name: "checkcvinfo",
    component: CheckCvinfo,
    meta: { requiresAuth: true },
  },
  {
    path: "/surveyform",
    name: "surveyform",
    component: SurveyForm,
    meta: { requiresAuth: true },
  },
  {
    path: "/surveypage",
    name: "surveypage",
    component: SurveyPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/searchpage",
    name: "searchpage",
    component: SearchPage,
  },
  {
    path: "/doe",
    name: "doe",
    component: DoeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterNewWorker,
    meta: { requiresAuth: true },
  },
  {
    path: "/reviewcv",
    name: "reviewcv",
    component: ReviewCv,
    meta: { requiresAuth: true },
  },
  {
    path: "/reviewworker",
    name: "reviewworker",
    component: ReviewWorker,
    meta: { requiresAuth: true },
  },
  {
    path: "/reviewmedical",
    name: "reviewmedical",
    component: ReviewMedical,
    meta: { requiresAuth: true },
  },
  {
    path: "/returnworker",
    name: "returnworker",
    component: ReturnWorker,
    meta: { requiresAuth: true },
  },
  {
    path: "/workerhome",
    name: "workerhome",
    component: WorkerHome,
    meta: { requiresAuth: true },
  },
  // {
  //   path: "/chat",
  //   name: "chat",
  //   component: ChatView,
  //   meta: { requiresAuth: true },
  // },
  {
    path: "/contract",
    name: "contract",
    component: Contract,
    meta: { requiresAuth: true },
  },
  {
    path: "/owic",
    name: "owic",
    component: OwicView,
    meta: { requiresAuth: true },
  },
  {
    path: "/passport",
    name: "passport",
    component: PassportView,
    meta: { requiresAuth: true },
  },
  {
    path: "/chatadminview",
    name: "chatadminview",
    component: ChatAdminView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  const isUser = localStorage.getItem('role') === 'employee';
  const isAdmin = localStorage.getItem('role') === 'admin';

  if (to.meta.requiresAuth && !isAuthenticated) {
    if (to.path !== '/') {
      next('/');
    } else {
      next();
    }
  } else if (!to.meta.requiresAuth && isAuthenticated && isAdmin) {
    if (to.path !== '/home') {
      next('/home');
    } else {
      next();
    }
  } else if(!to.meta.requiresAuth && isAuthenticated && isUser) {
    if(to.path !== '/'){
      next('/workerhome');
    }else{
      next();
    }
  } else {
    next();
  }
});
// router.beforeEach((to, from, next) => {
//   const isAuthenticated = localStorage.getItem("token") !== null;
//   const isUser = localStorage.getItem("role") === "employee";
//   const isAdmin = localStorage.getItem("role") === "admin";

//   if (to.meta.requiresAuth && !isAuthenticated) {
//     if (to.path !== "/") {
//       next("/");
//     } else {
//       next();
//     }
//   } else if (!to.meta.requiresAuth && isAuthenticated && isAdmin) {
//     if (to.path !== "/home") {
//       next("/home");
//     } else {
//       next();
//     }
//   } else if (!to.meta.requiresAuth && isAuthenticated && isUser) {
//     if (to.path !== "/") {
//       next("/workerhome");
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;

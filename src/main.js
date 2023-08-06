import { createApp } from "vue";
import App from "./App.vue";
// import SocketIOPlugin from './plugins/socket.io';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/js/bootstrap.js";
import router from "./router";
import store from "./store";
import "./config/axios";
import "@/assets/css/global.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import {
  faUserSecret,
  faMagnifyingGlass,
  faCircleUser,
  faUsers,
  faFile,
  faCheck,
  faArrowUpRightFromSquare,
  faArrowDown,
  faAngleDown,
  faEye,
  faEyeSlash,
  faTimes,
  faPlus,
  faPersonWalkingArrowLoopLeft,
  faUserPlus,
  faUserCheck,
  faListCheck,
  faHouseMedicalCircleCheck,
  faPaperPlane,
  faXmark,
  faTrash,
  faFileContract,
  faPassport,
  faArrowRight,
  faFileExport,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(
  faUserSecret,
  faCircleUser,
  faUsers,
  faMagnifyingGlass,
  faFile,
  faCheck,
  faArrowUpRightFromSquare,
  faArrowDown,
  faAngleDown,
  faEye,
  faEyeSlash,
  faTimes,
  faPlus,
  faPersonWalkingArrowLoopLeft,
  faUserPlus,
  faUserCheck,
  faListCheck,
  faHouseMedicalCircleCheck,
  faPaperPlane,
  faCheck,
  faXmark,
  faTrash,
  faFileContract,
  faPassport,
  faArrowRight,
  faFileExport,
  faAddressCard
);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

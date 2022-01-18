import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import Toaster from "@incuca/vue3-toaster";
import Toaster from "@meforma/vue-toaster";

createApp(App).use(router).use(Toaster).mount("#app");

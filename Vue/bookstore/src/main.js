import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";

import SimpleTypeahead from "vue3-simple-typeahead";
import "vue3-simple-typeahead/dist/vue3-simple-typeahead.css";

createApp(App).use(SimpleTypeahead).mount("#app");

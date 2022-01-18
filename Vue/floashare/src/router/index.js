import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import HowWeHelp from "@/components/HowWeHelp";
import ContactSupport from "@/components/ContactSupport";
import ContactUs from "@/components/ContactUs";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact-support",
    name: "ContactSupport",
    component: ContactSupport,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/help",
    name: "HowWeHelp",
    component: HowWeHelp,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;

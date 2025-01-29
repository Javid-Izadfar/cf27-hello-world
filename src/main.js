import "./assets/main.css";

import App from "./App.vue";

import routes from "./routes.js";

// npm install pinia

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const store = createPinia();

createApp(App).use(router).use(store).mount("#app");

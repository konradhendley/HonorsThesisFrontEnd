import VueApexCharts from 'vue3-apexcharts';
import { createApp } from 'vue';
import App from './App.vue';
import axios from "axios";

import myRouter from "./routes.js";
import theStore from "./store.js";

axios.defaults.baseURL = "https://honorsthesis-api.azurewebsites.net"

const myApp = createApp(App)
myApp.use(myRouter);
myApp.use(theStore);
myApp.mount('#app');
myApp.use(VueApexCharts);



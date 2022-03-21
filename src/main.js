import { createApp } from 'vue';
import App from './App.vue';
import axios from "axios";

import myRouter from "./routes.js";
import theStore from "./store.js";

axios.defaults.baseURL = "http://localhost:8000/"

const myApp = createApp(App)
myApp.use(myRouter);
myApp.use(theStore);
myApp.mount('#app');



import { createApp } from 'vue'
import App from './App.vue'

import myRouter from "./routes.js";

const myApp = createApp(App)
myApp.use(myRouter);
myApp.mount('#app');



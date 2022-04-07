import {createRouter, createWebHistory} from 'vue-router';

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import CollegeDetail from "./components/CollegeDetail.vue";
import Colleges from "./components/Colleges.vue";
import ScholarshipDetail from "./components/ScholarshipDetail.vue";
import Scholarships from "./components/Scholarships.vue";
import NotFound from "./components/NotFound.vue";
import PlansCreate from "./components/PlansCreate.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue";
import AccountEdit from "./components/AccountEdit.vue";
import PlansEdit from "./components/PlansEdit";
import PlansDashboard from "./components/PlansDashboard"
import myStore from "./store.js"

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {path: "/", component: Home},
        {path: "/account", component: Account, beforeEnter(to,from,next){
            if(myStore.state.token){next();}else{
                next("/login")
            }
        }},
        {path: "/login", component: Login},
        {path: "/colleges", component: Colleges},
        {path: "/colleges/:pk", component: CollegeDetail, 
            children: [{path: "plans", component: PlansCreate}]},
        {path: "/scholarships", component: Scholarships},
        {path: "/scholarships/:pk", component: ScholarshipDetail},
        {path: "/signup", component: Signup},
        {path: "/invalidroute(.*)", component: NotFound},
        {path: "/accountEdit", component: AccountEdit},
        {path: "/plans/:pk", component: PlansEdit},
        {path: "/plans/:pk/dashboard", component: PlansDashboard},
    ],
});

export default router;
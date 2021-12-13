import {createRouter, createWebHistory} from 'vue-router';

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import ShoeDetail from "./components/ShoeDetail.vue";
import Shoes from "./components/Shoes.vue";
import NotFound from "./components/NotFound.vue";
import RatingCreate from "./components/RatingCreate.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue";
import AccountEdit from "./components/AccountEdit.vue";
import RatingEdit from "./components/RatingEdit";
import Admin from "./components/Admin";
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
        {path: "/shoes", component: Shoes},
        {path: "/shoes/:pk", component: ShoeDetail, 
            children: [{path: "rating", component: RatingCreate}]},
        {path: "/signup", component: Signup},
        {path: "/invalidroute(.*)", component: NotFound},
        {path: "/accountEdit", component: AccountEdit},
        {path: "/ratings/:pk", component: RatingEdit},
        {path: "/admin", component: Admin},
    ],
});

export default router;
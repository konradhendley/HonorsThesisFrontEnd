import{createStore} from  'vuex';
import axios from 'axios';
import myRoutes from "./routes";


export default createStore({
    state: {
        token: null,
        user: null,
        plans: [],
        colleges: [],
        scholarships: []
    },
    mutations:{
        storeTokenInApp(state, myToken){
            state.token = myToken
        },
        storeUserInApp(state, theUser){
            state.user = theUser
        },
        storePlans(state, plans){
            state.plans = plans;
        },
        storeColleges(state, colleges){
            state.colleges = colleges;
        },
        storeScholarships(state, scholarships){
            state.scholarships = scholarships;
        },
        clearAuthData(state){
            state.token = null;
            state.user =null;
        },
    },
    actions:{
        getColleges({commit}){
            axios.get("/colleges").then((aResponse)=>{
                //console.log("response in /colleges", aResponse);
                commit("storeColleges", aResponse.data)
            });
        },
        getScholarships({commit}){
            axios.get("/scholarships").then((aResponse)=>{
                console.log("response in /scholarships", aResponse);
                commit("storeScholarships", aResponse.data)
            });
        },
        getPlans({commit}){
            axios.get("/plans").then((aResponse)=>{
                commit("storePlans", aResponse.data)
            });
        },
        logout({commit, state}){
            axios.post("/user/logout",null,{
                headers:{ Authorization: `Bearer ${state.token}`}
            }).then(()=>{
                commit("clearAuthData");
                myRoutes.replace("/");
            }).catch(()=>{console.log("error in logging out")})
        }
    },
});
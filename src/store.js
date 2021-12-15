import{createStore} from  'vuex';
import axios from 'axios';
import myRoutes from "./routes";


export default createStore({
    state: {
        token: null,
        user: null,
        shoes: []
    },
    mutations:{
        storeTokenInApp(state, myToken){
            state.token = myToken
        },
        storeUserInApp(state, theUser){
            state.user = theUser
        },
        storeShoes(state, shoes){
            state.shoes = shoes;
        },
        clearAuthData(state){
            state.token = null;
            state.user =null;
        },
    },
    actions:{
        getShoes({commit}){
            axios.get("/shoes").then((aResponse)=>{
                //console.log("response in /shoes", aResponse);
                commit("storeShoes", aResponse.data)
            });
        },
        logout({commit, state}){
            axios.post("/member/logout",null,{
                headers:{ Authorization: `Bearer ${state.token}`}
            }).then(()=>{
                commit("clearAuthData");
                myRoutes.replace("/");
            }).catch(()=>{console.log("error in logging out")})
        }
    },
});
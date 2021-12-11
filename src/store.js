import{createStore} from  'vuex';
import axios from 'axios';
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
        }
    },
    actions:{
        getShoes({commit}){
            axios.get("/shoes").then((aResponse)=>{
                console.log("response in /movies", aResponse);
                commit("storeShoes", aResponse.data)
            });
        },
    },
});
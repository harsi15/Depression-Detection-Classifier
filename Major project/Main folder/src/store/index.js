/*import Vue from "vue";
import Vuex from "vuex";
import Api from "@/services/api";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        users: [],
        currentUser: {name:"Test"}

    },
    
    mutations:{
        SET_USERS(state,users){
            state.users=users;
        },
        LOGOUT_USER(state){
            state.currentUser={}
            window.localStorage.currentUser=JSON.stringify({});
        },
        SET_CURRENT_USER(state,user){
            state.currentUser=user;
            window.localStorage.currentUser=JSON.stringify(user);
        },
    },

    actions:{
        async loadUsers({commit}){
            let response = await Api().get('http://localhost:3000/api/users');
            let users= response.data.data;
            commit('SET_USERS',users.map(u => u.attributes));
            console.log(users.name)
            
            // user =JSON.parse(window.localStorage,currentUser);
            //commit('SET_CURRENT_USER',user);
        },
        logoutUser({commit}){
            commit('LOGOUT_USER');        
        },
        LoginUser({commit},user){
            commit('SET_CURRENT_USER',user);
        }
    },
});
*/
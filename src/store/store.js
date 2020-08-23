import Vuex from 'vuex'
import Vue from 'vue'
import Axios from 'axios';



Vue.use(Vuex);

export const store = new Vuex.Store({
    namespaced:true,
    state :{
         Projects:[] ,
         //Blogs:[]  
    },
    actions :{
        async fetchProject({commit}){
            var response = await Axios.post("/project");
            commit('setProject',response.data);
        }
    },  
    mutations: {
        setProject: (state,data) =>{
            state.Projects = data
        }
    },
    getters :{
        allProject: state => state.Projects,
    }
});

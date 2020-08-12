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
            var response = await Axios.get('http://localhost:5000/project');
            commit('setProject',response.data);
        },
       /* async fetchBlog({commit}){
            var response = await Axios.get('http://localhost:5000/blog');
            console.log(response.data);
            commit('setBlog',response.data);
        }*/
    },
        
    mutations: {
        setProject: (state,data) =>{
            state.Projects = data
        },
       /* setBlog: (state,data) =>{
            state.Blogs = data
        }*/

    },
    getters :{
        allProject: state => state.Projects,
        //allBlog: state=> state.Blogs

    }
});
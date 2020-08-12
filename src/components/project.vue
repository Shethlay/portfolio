<template>
  <div id="project">
        <div class="row">
            <div class="row row1">
                <div class="col-md-9 col-xl-9"></div>
                <div class="col-xs-12 col-sm-12 col-md-3 col-xl-3">My Project</div>
            </div>
            
            <div class="row">
              <div class="col-xs-3 col-sm-3 col-md-9 col-xl-9"><hr></div>
            </div>
            
            <div class="row showcase">
                <div class="col-md-9 col-xl-9"></div>
                <div class="col-xs-12 col-sm-12 col-md-3 col-xl-3">Showcasing some of my best work</div>
            </div>
            
            <div class="row outer">
                <div class="inner">
                    <div v-for="proj in fetchProject1.slice(0,fetchProject1.length)" :key='proj.id' class="main">
                        <div class="row title"><p><b><u>{{proj.title}}</u></b></p></div>
                        <div class="row TT">Tools and Technology:</div>
                        <div class="row "><p>{{proj.tat}}</p></div>
                        <div class="row DES">Description:</div>
                        <div class="row description"><p>{{proj.description}}</p></div>
                        <div class="btn btn-info"  @click="showModal" v-bind:proid='proj.id'>Know more!</div>
                    </div> 
                    <model v-show="isModalVisible" @close="closeModal" v-bind:id="proid" />
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import model from './model.vue'
export default {
    name:'project',
    components:{
        model
    },
    data () {
      return {
        isModalVisible: false,
        proid:''
      };
    },
    computed:{
        fetchProject1(){
            return this.$store.getters.allProject;
        }
    },
    methods:{
        ...mapActions(['fetchProject']),
        showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
    created(){
        this.fetchProject()
    }
    
}
</script>

<style scoped>
#project{
    width: 100%;
    background-color: #f7f7f7;
    
}
.row{
    width: inherit;
}
.row1{
    font-size: 40px;
    font-weight: bolder;
    padding-left: 10%;
    padding-top: 40px;
}
.showcase{
    padding-left: 10%;
}

.outer{
     
    margin: auto 6% 80px 8%; 
}
.inner{
    padding-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(320px, 1fr));
    grid-gap: 3rem;
    width: 100%;
    
}
.main{
    padding-left:25px;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    margin-top: 80px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
    overflow: hidden;

}
.title{
    width: 100%;
    font-size: 22px;

}
.description{
    width: 100%;
    overflow: hidden;
    height: 99px;
     
}
.more{
    width: 100%;
    height: 15%;   
    
}
.title p{
    font-weight: 350;
}
.btn{
    margin-top:20px;
    margin-bottom:20px;
    margin-left: 0px;
}
</style>









<!--
    <div >
        <div v-for="proj in fetchProject1" :key='proj.id'  >
                  
        </div>
    </div>
-->
<template>
  <div id="blog">
      <div class="row">
          <div class="row row1">
              <div class="col-3">My Blogs</div>
              <div class="col-9"></div>
          </div>
          <div class="row">
              <div class="col-3"></div>
              <div class="col-9">
                <hr></div>
          </div>
          <div class="row showcase">
              <div class="col-3">Check out my latest blog posts</div>
              <div class="col-9"></div>
          </div>
        <!--  <div class="shows">
            <div v-for="blo in allBlog" :key='blo.id' class="show" >
            </div>
          </div>-->
          <div class="row raw3">
              <div class="shows">
              <div v-for="proj in fetchBlogs1" :key='proj.id' class="show" >
                    <img src="https://unsplash.it/600/400" alt="image" height="40%" width="100%" >
                    <h5 class="card-header">
                        {{proj.title}}
                    </h5>
                    <div class="card-body show1">
                        <p class="card-text" >{{proj.description}}</p>
                    </div>
                    <div class="more">  
                            <a href="#" class="card-link text-danger">Know More</a>
                    </div>
                    </div>
          </div>


          </div>
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:'Blog',
     computed:{
        fetchBlogs1(){
            return this.$store.getters.allBlog;
        }
    },
    methods:{
        ...mapActions(['fetchBlog'])
    },
    created(){
        this.fetchBlog()
    }

}
</script>

<style scoped>
#blog{
     width: 100%;
     
}
.row{
    width: inherit;
}
.row1{
    font-size: 40px;
    font-weight: bolder;
    padding-left: 65px;
    padding-top: 40px;
}
.showcase{
    padding-left: 65px;
}

.shows{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    width: 100%; 
    padding-top: 80px;
    line-height: 1.5;
    margin-bottom: 80px;
    padding-left: 65px;
}
.show1{
    overflow: hidden;
     width: 100%;
     height: 130px;
}
.show{
    width: 100%;
    height: inherit;
}
.row3{
    width: 100%;
}
.more{
    padding-left: 20px;
    padding-top: 10px;
}





</style>
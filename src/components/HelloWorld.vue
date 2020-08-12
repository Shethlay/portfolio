<template>
  <div class="hello" id="home">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark " v-bind:class=" { 'navbarOpen': show }">
       
  <a class="navbar-brand"><mark>LS</mark></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" @click.stop="toggleNavbar()" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse justify-content-end" v-bind:class="{ 'show': show }" id="navbarSupportedContent">
     
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#home" >Home</a>
      </li>
      <li class="nav-item ">
         <a class="nav-link" href="#about" >About Me</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#project">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#contact">Contact</a>
      </li>
    </ul>
 
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-dark{
  background-color: rgb(49, 47, 47)  !important;
}

.navbar-brand{
font-weight: bold;
font-family: monospace;
font-size: 28px;
color: white !important;
}
.navbar-dark .navbar-nav .nav-link{
  font-weight: 700;
  font-size:14px;
  text-transform: uppercase;
}
.navbar-dark .navbar-nav .nav-item{
  margin: 0 15px;
}


</style>

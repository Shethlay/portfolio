<template>
  <div id="app">
    <HelloWorld/>
    <Home/>
    <AboutMe/>
    <!--<project/>-->
    <contact/>
    <footer1/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import AboutMe from './components/AboutMe.vue'
//import project from './components/project.vue'
import contact from './components/contact.vue'
import footer1 from './components/footer.vue'
//import dp from './components/dp.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Home,
    AboutMe,
   // project,
    contact,
    footer1,
   // dp
    
  }
}
</script>

<style>
</style>

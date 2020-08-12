<template>
  <div class="home">
    <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-xl-6"></div>
        <div class="col-xs-12 col-sm-12 col-md-6 con-xl-6"> <div class="name">Lay <span class="text-danger">Sheth</span></div></div>
        </div>
         <div class="row">
           <div class="col-md-6 col-xl-6"></div>
        <div class="col-xs-12 col-sm-12 col-md-6 con-xl-6"> <div class="tw">I am a Developer.</div></div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
name:'Home'
}
</script>

<style scoped>
.home{
    background: url('home.jpg') no-repeat center center scroll;
    height: 42em;
    color: white;
  -webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
}
.row:first-of-type{
    padding-top: 134px;
    
}
.row:nth-child(2){
  font-size: 30px;
  font-weight:600;
}
.container-fluid{
     height: inherit;
}
.name{
    font-weight:650;
    font-size: 68px;
}
.tw{
  overflow: hidden;
  border-right: .15em solid white;
  white-space: nowrap;
  animation: typing 3.5s steps(15,end), blink-caret .5s infinite;
  width: 15ch;
}
@keyframes typing{
  from{width: 0ch}
  to{width: 15ch}
}
@keyframes blink-caret{
  from ,to {border-color:transparent}
    50%{border-color: white}
}




</style>



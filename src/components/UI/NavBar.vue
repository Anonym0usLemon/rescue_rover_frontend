<template>
   <nav class="orange-gradient">

   </nav>
 </template>
 
 <script>
export default {
  name: 'NavBar',
}
 </script>
 
 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
 .orange-gradient {
   background: #FFB75E;
   background: linear-gradient(
     to right,
     #FFB75E,#ED8F03); 
 }
 
 nav {
   height: 70px;
   width: 100%;
   -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.37);
   -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.37);
   box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.37);
 }
 </style>
 
<template>
  <v-app>
    <router-view :key="$route.fullPath"  />
  </v-app>
</template>
<script>

import { defineComponent } from "vue"; 

/* import axios from 'axios' */


export default defineComponent({

  name: "AppView",


})

</script>
<style>

#building{
width:100%;			
height:100%;			
position:fixed;
background-size:100% 100%;}

.button_offer {
  padding: 0 !important;
  margin: 0 !important;
}

</style>
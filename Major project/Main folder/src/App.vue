<template>
  <div id="app">
    <Header />
    <hr>
    <router-view ></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
//import { onBeforeMount } from 'vue';
//import {useRouter, useRoute } from 'vue-router';
//import firebase from 'firebase';

export default {
  name: 'App',
/* setup(){
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(()=>{
      firebase.auth().onAuthStateChanged((user)=>{
        if(!user){
          router.replace('/login');
        }else if ( route.path == "/login" || route.path == "/User"){ 
          router.replace('/Home');
        }
      });
    });
  }
*/
  components: {
    Header,
    Footer
  },
}
</script>

<style>
#app {
  font-family:Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration-color: rgb(5, 7, 7);
  -webkit-margin-collapse: inherit;
  text-align: center;
  color: #33516e;
}
*, *:before, *:after{
  box-sizing: inherit;
}

*{
  -webkit-font-smoothing: antialiased;
}

body{
  background-image: radial-gradient(#84ceeb,#c1c8e4);
  background-color: white;
  height:fit-content;
  min-height: 1000px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

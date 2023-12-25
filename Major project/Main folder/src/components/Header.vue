<template>
<div class="container-header">
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand href="/Home">Depression Classifier <font-awesome-icon icon="stethoscope"/> </b-navbar-brand>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown right>
          <template #button-content>
            Depression
          </template>
          <b-dropdown-item href="/Depression">Depression</b-dropdown-item>
          <b-dropdown-item href="/Symptoms">Symptoms</b-dropdown-item>
          <b-dropdown-item href="/Causes">Causes</b-dropdown-item>
          <b-dropdown-item href="/Types">Types</b-dropdown-item>
          <b-dropdown-item href="/Treatment">Consultation</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="/PHQ">Let's test</b-nav-item>
        <b-nav-item href="/Helpline">Helpline Number</b-nav-item>
        <b-nav-item href="/About">About</b-nav-item>
        <div v-for="user in users" :key="user.name">
          <div v-if="currentUser == user">
          <b-nav-item href="/Admin">Admin</b-nav-item>
          </div>
        </div>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>            
            <div>
            <em v-if="currentUser">{{currentUser}}</em>
            <em v-else>login</em>
            </div>
          </template>
          <!--b-dropdown-item href="/Profile">Profile</b-dropdown-item-->
            <div v-if="currentUser">
            <b-dropdown-item v-on:click="logout()">Logout</b-dropdown-item>
            </div>
            <div v-else>
            <b-dropdown-item href='/login'>Login</b-dropdown-item>
            </div>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
//import {ref, onBeforeMount} from 'vue';
//import firebase from 'firebase';


export default {
    name: 'Header',
    async created(){
      this.currentUser= localStorage.getItem('token')
          
        },
      data(){  
        return{
            users:["harsimran@gmail.com"],
        }        
      },
    methods:{
      logout(){
        this.currentUser=localStorage.removeItem('token')
        this.$router.push('/login')
  
      }
    }
}
/*  setup (){
    const name = ref("");

    onBeforeMount(()=>{
      const user = firebase.auth().currentUser;
      if(user){
        name.value = user.email.split('@')[0];
      }
    });
  }
};
*/
</script>
<style scoped>
.container-header{
  background-blend-mode:screen;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
}
*, *:before, *:after {
  box-sizing:border-box;
}

</style>
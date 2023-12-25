import Vue from 'vue'
import VueRouter from 'vue-router'
import  {BootstrapVue,IconsPlugin}  from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faVenusMars } from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faStethoscope} from '@fortawesome/free-solid-svg-icons';
import { faJs, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUser, faJs, faVuejs);
library.add(faVenusMars,faJs,faVuejs);
library.add(faHeart,faJs,faVuejs);
library.add(faStethoscope,faJs,faVuejs);
library.add(faEnvelope,faJs,faVuejs);

import App from './App.vue'
import PHQ from './components/PHQ.vue'
import User from './components/User.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Helpline from './components/Helpline.vue'
import Camera from './components/Camera.vue'
import Symptoms from './components/Symptoms.vue'
import Causes from './components/Causes.vue'
import PHQ1 from './components/PHQ1.vue'
import login from './components/login.vue'
import Types from './components/Types.vue'
import Admin from './components/Admin.vue'
import User1 from './components/User1.vue'
import Depression from './components/Depression.vue'
import Treatment from './components/Treatment.vue'
import Prevention from './components/Prevention.vue'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes=[
  {path:'/PHQ', component: PHQ},
  {path:'/User', component: User},
  {path:'/Home', component: Home},
  {path:'/About', component: About},
  {path:'/Contact', component: Contact},
  {path:'/Helpline', component: Helpline},
  {path:'/Camera', component: Camera},
  {path:'/', component: Home},
  {path:'/Symptoms',component:Symptoms},
  {path:'/Causes',component:Causes},
  {path:'/PHQ1',component:PHQ1},
  {path:'/login',component:login},
  {path:'/Types',component:Types},
  {path:'/Admin',component:Admin},
  {path:'/User1',component:User1},
  {path:'/Depression',component:Depression},
  {path:'/Treatment',component:Treatment},
  {path:'/Prevention',component:Prevention}
]


const router= new VueRouter({
  routes:routes,
  mode:"history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

<template>
<div class="wrapper">
    <div class="h3 font-weight-bold text-center mb-3">Login <font-awesome-icon icon="user" /></div>
    <b-form @submit.prevent="login()"> 
        <b-input-group class="mail" size="md">
            <b-input-group-prepend is-text>
                <font-awesome-icon icon="envelope" class="m1" size="lg"/>
            </b-input-group-prepend>
                        <b-form-input
                        id="input-1"
                        v-model="email"
                        placeholder="Email "
                        required
                        ></b-form-input>
        </b-input-group>
        <br>
        <b-input-group class="mail" >
            <b-input-group-prepend is-text>
                <b-icon icon="key-fill"></b-icon>
            </b-input-group-prepend>
                        <b-form-input
                        id="input-2"
                        type="password"
                        v-model="password"
                        placeholder="Password "
                        required
                        
                        ></b-form-input>
        </b-input-group>   
        <div class="mb-2"> <label class="option">Remember me <input type="checkbox" checked> <span class="checkmark"></span> </label> </div>
        <b-button  type="submit" value="Login" v-on:click="login();"><h5><b>Log In</b></h5></b-button>
        <br><p>Don't have account?<router-link to="/User" >Sign Up</router-link></p>
    </b-form>
</div>
</template>

<script>
/*import {ref} from 'vue';
import firebase from 'firebase';
*/
//import axios from 'axios';
export default {
    data(){
      return {
          email:'',
          password:''
      }
    },
    methods: {
    async login(){
        var fd = new FormData();

        fd.append("email",this.email);
        fd.append("password",this.password);
        var res=await fetch("http://localhost:3000/api/signin",{
            method:'POST',
            body:fd
        });
        var resdata= await res.json();
        console.log(resdata);
        if(resdata=='Login Successfull')
        {
            var currentUser=this.email;
            localStorage.setItem('token',currentUser);
            this.$router.push('/Home');
        }
        else if(resdata=='incorrect password')
        {
            alert("Invalid Password");
        }
        
    }
/*async created(){
    const response = await axios.get(baseURL,{
      headers:{
        Authorization :'Bearer' + localStorage.getItem('token')
      }
    });
    console.log(response);
    this.users = response.data;
  },*/
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
     max-width: 450px;
     margin: 50px auto;
     padding: 30px 30px;
     min-height: 300px;
     background-color: #ffffff27;
     border-top: 1px solid #ffffff6e;
     border-left: 1px solid #ffffff6e;
     border-radius: 15px
 }

 .wrapper .h3 {
     color: #33516e;
 }

 .wrapper .form-control{
     background: inherit;
     border:none;
     border-bottom: 1px solid rgb(1, 114, 99) ;
     margin-bottom: 1.5rem;
 }

.wrapper .form-control:hover{
    border-bottom: 1px solid #eee;
}

 .wrapper .input-group-text{
     background: inherit;
     border:none;
     margin-bottom: 1.5rem;
 }

 .wrapper .form-group {
     border-bottom: 1px solid rgb(1, 114, 99);
     margin-bottom: 1.5rem
 }

 .wrapper .form-group:hover {
     border-bottom: 1px solid #eee
 }

 .wrapper .form-group .icon {
     color: #33516e;
 }

 .wrapper .form-group .form-control {
     background: inherit;
     border: none;
     border-radius: 0px;
     box-shadow: none;
     color: #33516e
 }

 .wrapper .form-group input::placeholder {
     color: #5f5f5d;
 }

 .wrapper .form-group input:focus::placeholder {
     opacity: 0;
 }

 .wrapper .form-group .fa-phone {
     transform: rotate(90deg)
 }

 .wrapper .option {
     color: #33516e;
     display: block;
     position: relative;
     margin-bottom: 12px;
     cursor: pointer;
     user-select: none
 }

 .wrapper .option:hover {
     color: #33516e;
 }

 .wrapper .option input {
     position: absolute;
     opacity: 0;
     cursor: pointer;
     height: 0;
     width: 0
 }

 .wrapper .checkmark {
     position: absolute;
     top: 1px;
     left: 135px;
     height: 18px;
     width: 18px;
     background-color: inherit;
     border: 2px solid #ced4da;
     border-radius: 2px
 }

 .wrapper .option input:checked~.checkmark {
     transition: 300ms ease-in-out all
 }

 .wrapper .checkmark:after {
     content: "\2713";
     position: absolute;
     display: none;
     font-weight: 600;
     color: #33516e;
     font-size: 1.1rem
 }

 .wrapper .option input:checked~.checkmark:after {
     display: block
 }

 .wrapper .option .checkmark:after {
     left: 3px;
     top: -4px;
     width: 5px;
     height: 10px
 }

 .wrapper .btn.btn-primary {
     position: relative;
     color: #33516e;
     padding: 0.3rem 2rem;
     padding-top: 5px;
     border: 1px solid #33516e;
     border-radius: 20px;
     background-color: inherit;
     box-shadow: none;
     overflow: hidden
 }

 .wrapper .terms {
     color: #bbb;
     font-size: 0.85rem;
     text-align: center
 }

 .wrapper .terms a {
     text-decoration: none;
     color: #eee
 }

 .wrapper .terms a:hover {
     color: #fff
 }

 .wrapper .connect {
     position: relative
 }

 .wrapper .connect::after {
     content: "or";
     position: absolute;
     top: -12px;
     width: 80px;
     left: 39%;
     text-align: center;
     color: #eee;
     z-index: 100;
     background-color: rgba(255, 255, 255, 0.315);
     background-color: #1f5588
 }

 .wrapper .social-links {
     margin-top: 50px;
     position: relative;
     list-style: none;
     display: flex;
     justify-content: space-around
 }

 .wrapper .social-links li a {
     font-size: 1.2rem;
     width: 50px;
     height: 50px;
     background-color: #ffffff17;
     border: 1px solid #ffffff66;
     border-right: 1px solid #ffffff33;
     border-bottom: 1px solid #ffffff33;
     display: flex;
     text-decoration: none;
     justify-content: center;
     align-items: center;
     color: #fff;
     border-radius: 6px;
     box-shadow: 0 5px 30px #004683e0;
     transition: 0.5s;
     overflow: hidden
 }

 .wrapper .social-links li a:hover {
     transform: translateY(-20px)
 }

 .wrapper .social-links li a::before,
 .wrapper .btn.btn-primary::before {
     content: "";
     position: absolute;
     top: 0;
     left: 0;
     width: 25px;
     height: 100%;
     background-color: rgba(255, 255, 255, 0.6);
     transform: skew(45deg) translateX(130px);
     transition: .5s;
     opacity: 0
 }

 .wrapper .social-links li a:hover:before,
 .wrapper .btn.btn-primary:hover::before {
     opacity: 1;
     transform: skew(45deg) translateX(-130px)
 }

 @media(max-width: 460px) {
     .wrapper {
         margin: 15px;
         padding: 20px
     }

     .wrapper .connect::after {
         left: 38%
     }
 }

 @media(max-width: 345px) {
     .wrapper .connect::after {
         left: 32%
     }
 }
</style>



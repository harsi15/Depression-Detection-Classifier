<template>
    <div class="wrapper">
                <div>
                    <h2><b>Sign Up 11</b></h2>
                    <p>We will never share your details with anyone else</p>
                    <br>
                    <form @submit.prevent="reg()">
                    
                    <div class="form-group">
                        <label>Name</label>
                        <input
                        type="text"
                        class="form-control"
                        v-model="name"
                        placeholder="Name"
                        >
                    </div>
                    
                    <div class="form-group">
                        <label>Email</label>
                        <input
                        type="email"
                        class="form-control"
                        v-model="email"
                        placeholder="email"
                        >
                    </div>

                    <div class="form-group">
                        <label>Phone</label>
                        <input
                        type="number"
                        class="form-control"
                        v-model="phone"
                        placeholder="number"
                        >
                    </div>

                    <div class="form-group">
                        <label>Age</label>
                        <input
                        type="number"
                        class="form-control"
                        v-model="age"
                        placeholder="Age"
                        >
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input
                        type="password"
                        class="form-control"
                        v-model="password"
                        placeholder="Password"
                        >
                    </div>
                    <b-button type="submit" variant="primary" v-on:click="reg()">Submit</b-button>
                    <b-button type="reset" variant="primary">Reset</b-button>
                    </form>
                    <p>Already registered?<a href="/login">Log In</a></p>
                </div>
    </div>
</template>

<script>

export default {
    data(){
      return {
          id:'',
          name: '',
          email: '',
          phone:'',
          gender:null,
          age:'',
          password:'',
        users:[],
        sex:[{text:"Gender", value:null}, 'Male', 'Female', 'Other'],
        show:true
      }
    },
    methods: {
        async reg(){
            var fd=new FormData();
            fd.append("name",this.name);
            fd.append("email",this.email);
            fd.append("phone",this.phone);
            fd.append("gender",this.gender);
            fd.append("age",this.age);
            fd.append("password",this.password);
            var res= await fetch("http://localhost:3000/api/users",{
                method:'POST',
                body:fd
            });
            var resdata= await res.json();

            console.log(resdata);
        }
    
    }
}
</script>

<style>
.wrapper {
     max-width: 450px;
     margin: 50px auto;
     padding: 20px 30px;
     min-height: 300px;
     background-color: #ffffff27;
     border-top: 1px solid #ffffff6e;
     border-left: 1px solid #ffffff6e;
     border-radius: 15px
 }
    .btn.btn.btn-primary{
      background-color:rgba(17, 37, 22, 0) ;
      padding-top:10px;
    }
.wrapper .option input {
     position: absolute;
     opacity: 0;
     cursor: pointer;
     height: 0;
     width: 0
 }
.wrapper .svg-inline--fa .fa-venus-mars .fa-w-18{
    width: 20px;
    height: 20px;
}


 .wrapper .input-group .custom-select {
     background: inherit;
     border: none;
     border-bottom: 1px solid rgb(1, 114, 99);
     border-radius: 0px;
     box-shadow: none;
     color: #33516e
 }
 .wrapper .form-control{
     background: inherit;
     border:none;
     border-bottom: 1px solid rgb(1, 114, 99) ;
     margin-bottom: 1.5rem;
 }
.wrapper .g1{
    padding-top: 10px;
}

 .wrapper .form-control:hover{
    border-bottom: 1px solid #eee;
}
 .wrapper .input-group-text{
     background: inherit;
     border:none;
     margin-bottom: 1.5rem;
     padding-right: 10px;
 }
 .wrapper .form-group .form-control {
     background: inherit;
     border: none;
     border-radius: 0px;
     box-shadow: none;
     color: #33516e
 }

 .wrapper .form-group .custom-select {
     background: inherit;
     border: none;
     border-radius: 0px;
     box-shadow: none;
     color: #33516e
 }
  .wrapper .form-group {
     border-bottom: 1px solid rgb(1, 114, 99);
     margin-bottom: 1.5rem
 }
  .wrapper .form-group:hover {
     border-bottom: 1px solid #eee
 }
  .wrapper .option:hover {
     color: #33516e;
 }
</style>
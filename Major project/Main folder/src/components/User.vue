<template>
    <div class="wrapper">
                <div>
                    <h2><b>Sign Up</b></h2>
                    <p>We will never share your details with anyone else</p>
                    <br>
                    <b-form @submit.prevent="reg()" @reset="onReset" >
                    <b-input-group
                        id="input-group-1"
                        label-for="input-1"
                        class="mail"
                        size="md"
                    >
                    <b-input-group-prepend is-text>
                      <font-awesome-icon icon="user" class="u1" size="lg"/>
                    </b-input-group-prepend>
                    <span class="text-danger">*</span>
                        <b-form-input
                        id="input-1"
                        v-model="name"
                        type="text"
                        placeholder="Name(Required)"
                        required
                        ></b-form-input>
                    </b-input-group>
                    <div v-if="name.length >1 && name.length <3" class="text-danger">Name is too small</div>
                    <div v-if="name.length >12" class="text-danger">Name is too big</div>
                    
                    <b-input-group id="input-group-2" label-for="input-1" class="mail" size="md">
                      <b-input-group-prepend is-text>
                        <font-awesome-icon icon="envelope" class="m1" size="lg"/>
                      </b-input-group-prepend>
                      <span class="text-danger">*</span>
                        <b-form-input
                        id="input-2"
                        type="email"
                        v-model="email"
                        placeholder="Email(Required)"
                        required
                        ></b-form-input>
                    </b-input-group>

                    <b-input-group id="input-group-3" label-for="input-3" class="tele" size="md">
                        <b-input-group-prepend is-text>
                          <b-icon icon="telephone-fill"></b-icon>
                        </b-input-group-prepend>
                        <b-form-input
                        id="input-3"
                        type="number"
                        v-model="phone"
                        placeholder="Phone(Optional)"
                        ></b-form-input>
                    </b-input-group>
                    <div v-if="phone.length >10 || phone.length <10 && phone.length" class="text-danger">Number is not valid</div>

                    <b-input-group id="input-group-4" class="mail" label-for="input-4">
                      <b-input-group-prepend is-text>
                        <font-awesome-icon icon="venus-mars" class="g1" size="lg"/>
                      </b-input-group-prepend>
                      <span class="text-danger">*</span>
                        <b-form-select
                        id="input-4"
                        type="text"
                        v-model="gender"
                        :options="sex"
                        required>
                        </b-form-select>
                    </b-input-group>

                    <b-input-group id="input-group-5" label-for="input-5">
                      <b-input-group-prepend is-text>
                        <font-awesome-icon icon="heart" size="lg"/>
                      </b-input-group-prepend>
                      <span class="text-danger">*</span> 
                        <b-form-input
                        id="input-5"
                        type="number"
                        v-model="age"
                        placeholder="Enter age(Required)"
                        required>
                        </b-form-input>
                    </b-input-group>
                    <div v-if="age < 0 " class="text-danger">Invalid age</div>

                    <b-input-group id="input-group-5" label-for="input-5">
                      <b-input-group-prepend is-text>
                        <b-icon icon="key-fill" size='lg'></b-icon>
                      </b-input-group-prepend>
                      <span class="text-danger">*</span>
                        <b-form-input
                        id="input-6"
                        type=password
                        v-model="password"
                        placeholder="Password"
                        required>
                        </b-form-input>
                    </b-input-group>
                    <div v-if="password.length > 1 && password.length < 6" class="text-danger">Password length should be greater than 6</div>

                    <b-input-group id="input-group-6" label-for="input-6">
                      <b-input-group-prepend is-text>
                        <b-icon icon="key-fill" size='lg'></b-icon>
                      </b-input-group-prepend>
                      <span class="text-danger">*</span>
                        <b-form-input
                        id="input-7"
                        type=password
                        v-model="repassword"
                        placeholder="Re enter password"
                        required>
                        </b-form-input>
                    </b-input-group>
                    <div v-if="password != repassword" class="text-danger">Passwords don't match</div>
                    <b-button type="submit" variant="primary" v-on:click="reg()">Submit</b-button>
                    <b-button type="reset" variant="primary">Reset</b-button>
                    </b-form>
                    <p>Already registered?<a href="/login">Log In</a></p>
                </div>
    </div>
</template>

<script>

  export default {
    data() {
      return {
          id:'',
          name: '',
          email: '',
          phone:'',
          gender:null,
          age:'',
          password:'',
          repassword:'',
        users:[],
        sex:[{text:"Gender", value:null}, 'Male', 'Female', 'Other'],
        show:true
      }
    },   
    methods: {
    async reg(){

        alert(JSON.stringify(this.form))

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
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.email = ''
        this.name = ''
        this.gender = null
        this.number1=''
        this.age=''
        this.password=''
        this.show = false
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
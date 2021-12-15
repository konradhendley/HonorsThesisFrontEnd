<template>
  <div>
      <h1>Update Account</h1>
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="fname-input" class="form-label">First name</label>
          <input type="text" class="form-control" id="fname-input" required="" :placeholder="[[ theUsers.firstName ]]" v-model="firstName"></div>
          <div class="mb-3">
            <label for="lname-input" class="form-label">Last name</label>
            <input type="text" class="form-control" id="lname-input" required="" :placeholder="[[ theUsers.lastName ]]" v-model="lastName">
          </div>
          <div class="mb-3"><label for="email-input" class="form-label">Email</label>
          <input type="email" class="form-control" id="email-input" required="" :placeholder="[[ theUsers.email ]]" v-model="email">

          <small v-if="dupEmail" class ="text-danger">please choose a different email</small></div>

        <div class="mb-3"><label for="password-input" class="form-label">Password</label>
          <input type="password" class="form-control" id="password-input" placeholder="Password" required="" v-model="password">
          </div>
          <button type="submit" class="btn btn-primary">Update</button>
          <p id="error-signup" class="text-danger">{{errorMessage}}</p>
          </form>
      </div>
</template>


<script>
import axios from "axios";
export default {

computed:{
  theUsers(){
    console.log("the user", this.$store.state.user);
    return this.$store.state.user;
  }
},

  data(){
    return{
      firstName: "",
      lastName:"",
      email:"",
      password:"",
      errorMessage:"",
      dupEmail: false,
    };
  },
  methods:{
    onSubmit(){
     const myFormData={
       firstName: this.firstName,
       lastName: this.lastName,
       email: this.email,
       password: this.password
     }
     //console.log(myformData);
     axios.patch("/member/me", myFormData, {
        headers: {Authorization: `Bearer ${this.$store.state.token}`}})
     .then((myResponse)=>{
       console.log("the response", myResponse);
       this.$router.replace("/login?updatesuccess=true");
     })
     .catch((myError)=>{
       if(myError.response.status === 409){
         this.dupEmail = true;
       }else{this.errorMessage = "cannot update your account information, please try again later"}
     });
    },
  },
};
</script>

<style>

</style>
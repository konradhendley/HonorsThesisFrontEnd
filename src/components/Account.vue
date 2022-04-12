<template>
  <div>
      <h1> {{ firstName }}'s Account</h1>
      <br/>
      <router-link :to="`/accountEdit`"><button class = "btn btn-outline-primary">Edit Account</button></router-link>
      <br/><br/>
      <h3> My Plans</h3>
      <br/>
<p v-if="accountError" class="text-danger">Cannot get your account information, please try again later.</p>
      <table v-if="plansByUser" class ="table">
        <thead>
          <th>Plan Name</th>
          <th>College</th>
        </thead>
        <tbody>
          <tr v-for="thisPlan in plansByUser" :key="thisPlan.planID">
            <th><router-link :to='`/plans/${thisPlan.planID}/dashboard`'>{{thisPlan.planName}}</router-link></th>
            <th>{{thisPlan.name}}</th>
            <th><router-link :to='`/plans/${thisPlan.planID}?collegeID=${thisPlan.collegeID}`'>
             <button class="btn btn-primary"> Edit</button> </router-link></th>
          </tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </table>
      </div>

<div>
      <br/>
      <br/><br/>
      <h3> My Scholarships</h3>
      <br/>
      <table v-if="plansByUser" class ="table">
        <thead>
          <th>Scholarship</th>
          <th>College</th>
        </thead>
        <tbody>
          <tr v-for="thisScholarship in userScholarships" :key="thisScholarship.userID">
            <th><router-link :to='`/scholarships/${thisScholarship.scholarshipID}`'>{{thisScholarship.name[1]}}</router-link></th>
            <th>{{thisScholarship.name[0]}}</th>
            <th><router-link :to='`/scholarships/${thisScholarship.scholarshipID}`'>
             <button class="btn btn-primary"> Link</button> </router-link></th>
          </tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </table>
      </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      plansByUser: null,
      userScholarships: null,
      accountError: false
    }
  },
  computed:{
    firstName(){
     // console.log("here is the store so far", this.$store.state)  
  return this.$store.state.user.firstName;
    },
  },
  created(){
    axios.get("/plans/me",{
      headers: {
        Authorization: `Bearer ${this.$store.state.token}`,
      }
    }).then((theResponse)=>{
        this.plansByUser = theResponse.data;
    }).catch(()=>{this.accountError=true});
  },
  mounted(){
    axios.get("/userScholarships/me",{
      headers: {
        Authorization: `Bearer ${this.$store.state.token}`,
      }
    }).then((theResponse)=>{
        this.userScholarships = theResponse.data;
    }).catch(()=>{this.accountError=true});
  }
};
</script>

<style>
.btn{
  outline-color: #228B22;
}
</style>
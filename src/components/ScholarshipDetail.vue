<template>
<br/><br/>
  <div>
      <div class="card"> 
        <div class="card-body bg-transparent" >
          <h2 class ="text-black">{{ scholarship.name }}</h2>
          <br/>
    <p><strong>College: </strong><br/>{{scholarship.college}}</p>
    <p><strong>Amount: </strong><br/>${{scholarship.amount}}</p>
    <p><strong>Award Frequency: </strong><br/>{{scholarship.frequency}}</p>
    <p><strong>Description: </strong><br/>{{scholarship.description}}</p>
    <p><strong>Deadline: </strong><br/>{{dateTime(scholarship.deadline)}}</p>
    <p><strong>Application Link: </strong><br/><a :href = "scholarship.link">{{scholarship.link}}</a></p>
          </div>
        </div>
        <br/>

        <router-link v-if="auth" v-on:click="addScholarship" :to="`/account`" ><button class = "btn btn-primary">Save this scholarship</button></router-link> 
        <router-link v-else :to="`/login`"><button class = "btn btn-outline-primary">Sign in to save this scholarship</button></router-link>
        <small v-if="dupRecord" class ="text-danger">You have already saved this scholarship</small>
        <br/>  <br/>
     </div>
     <br/><br/>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {

data(){
    return{
      scholarshipID: null,
      collegeID: null,
      errorMessage:"",
      dupRecord: false,
    }
  },

methods: {
    dateTime(value) {
      return moment(value).format('MMMM Do YYYY');
    },

    addScholarship(){
    let myScholarships = {
      
      scholarshipID: this.scholarship.scholarshipID,
      collegeID: this.scholarship.collegeID
    }

    axios.post("/userScholarships/me", myScholarships, {
        headers: {Authorization: `Bearer ${this.$store.state.token}`}
      }).then(()=>{this.$router.replace("/account");
        }).catch((myError)=>{
       if(myError.response.status === 409){
         this.dupRecord = true;
       }else{this.errorMessage = "cannot sign you up, please try again later"}
     })
    },
  },

computed:{
  scholarship(){
    let allscholarships = this.$store.state.scholarships;
    let thisScholarship = allscholarships.find((aScholarship)=>{return aScholarship.scholarshipID == this.$route.params.pk});
  
    return thisScholarship;
  },



  auth(){
    return this.$store.state.token
        }
    }
}
</script>

<style>

</style>
<template>
<br/><br/>
  <div>
      <div class="card"> 
        <div class="card-body bg-transparent" >
          <h2 class ="text-black">{{ scholarship.name }}</h2>
          <br/>
    <p><strong>Amount: </strong><br/>${{scholarship.amount}}</p>
    <p><strong>Award Frequency: </strong><br/>{{scholarship.frequency}}</p>
    <p><strong>Description: </strong><br/>{{scholarship.description}}</p>
    <p><strong>Deadline: </strong><br/>{{dateTime(scholarship.deadline)}}</p>
          </div>
        </div>
        <br/>

        <router-link v-if="auth" :to="`${this.$route.params.link}`"><button class = "btn btn-success">Apply for this scholarship</button></router-link> 
        <router-link v-else :to="`/login`"><button class = "btn btn-outline-success">Sign in to apply for this scholarship</button></router-link>
        <br/>  <br/>
      <router-view />
     </div>
     <br/><br/>
</template>

<script>
import moment from 'moment';

export default {

methods: {
    dateTime(value) {
      return moment(value).format('MMMM Do YYYY');
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
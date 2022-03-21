<template>
  <div>
      <div class="card"> 
        <div class="card-body">
          <h2 class ="text-primary">{{ scholarship.name }}</h2>
          <br/>


    <p><strong>Amount: </strong><br/>${{scholarship.amount}}</p>
    <p><strong>Description: </strong><br/>{{scholarship.description}}</p>
    <p><strong>Deadline: </strong><br/>{{scholarship.deadline}}</p>
          </div>
        </div>
        <br/>

        <router-link v-if="auth" :to="`/scholarships/${this.$route.params.pk}/plans`"><button class = "btn btn-success">Apply for this scholarship</button></router-link> 
        <router-link v-else :to="`/login`"><button class = "btn btn-outline-success">Sign in to apply for this scholarship</button></router-link>
        <br/>  <br/>
      <router-view />
     </div>
</template>

<script>


export default {

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
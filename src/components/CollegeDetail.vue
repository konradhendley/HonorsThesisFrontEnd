<template>
  <div>
      <div class="card"> 
        <div class="card-body">
          <h2 class ="text-primary">{{ college.name }}</h2>
          <br/>


    <p>City: <br/><strong>{{college.city}}</strong></p>
    <p>State: <br/><strong>{{college.state}}</strong></p>
    <p>Type: <br/><strong>{{college.type}}</strong></p>
    <p>Population: <br/><strong>{{college.population}}</strong></p>
    <p>Acceptance Rate: <br/><strong>{{college.acceptanceRate}}%</strong></p>
    <p>Average SAT: <br/><strong>{{college.averageSAT}}</strong></p>
    <p>Average ACT: <br/><strong>{{college.averageACT}}</strong></p>
    <p>Average GPA: <br/><strong>{{college.averageGPA}}</strong></p>
    <p>In-State Tuition:<br/><strong>{{formattedPriceIST}}</strong></p>
    <p>Out of State Tuition:<br/><strong>{{formattedPriceOST}}</strong></p>
          </div>
        </div>
        <br/>

        <router-link v-if="auth" :to="`/colleges/${this.$route.params.pk}/plans`"><button class = "btn btn-success">Create a financial plan</button></router-link> 
        <router-link v-else :to="`/login`"><button class = "btn btn-outline-success">Sign in to create a plan</button></router-link>
        <br/>  <br/>
      <router-view />
     </div>
</template>

<script>
export default {

computed:{
  college(){
    let allColleges = this.$store.state.colleges;

    let thisCollege = allColleges.find((aCollege)=>{return aCollege.collegeID == this.$route.params.pk});

    return thisCollege;
  },
  formattedPriceIST(){
    return new Intl.NumberFormat("en-US",{
      style: "currency",
      currency: "USD"
    }).format(this.college.in_state_tuition)
  },
  formattedPriceOST(){
    return new Intl.NumberFormat("en-US",{
      style: "currency",
      currency: "USD"
    }).format(this.college.out_state_tuition)
  },
  auth(){
    return this.$store.state.token
  }
}

}
</script>

<style>

</style>
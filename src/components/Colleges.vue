<template>
  <div>
      <h1>Colleges</h1>
      <hr/>
      <table  class ="table">
        <thead>
          <th>Name</th>
          <th>Type</th>
          <th>State</th>
          <th>City</th>
          <th></th>
        </thead>

        <tbody>
          <tr v-for="aCollege in theColleges" :key="aCollege.collegeID">
            <th>{{aCollege.name}}</th>
            <th>{{aCollege.type}}</th>
            <th>{{aCollege.state}}</th>
            <th>{{aCollege.city}}</th>
            <th><router-link :to='`/colleges/${aCollege.collegeID}`'> <button class="btn btn-primary"> Details</button> </router-link></th>
          </tr>
          <tr></tr>
          <tr></tr>

        </tbody>


      </table>
      </div>
</template>

<script>
export default {
computed:{
  theColleges(){
    return this.$store.state.colleges;
  }
}
}
</script>

<style>

</style>
<template>
  <div>
      <h1>Scholarships</h1>
      <hr/>
      <table  class ="table">
        <thead>
          <th>Name</th>
          <th>Amount</th>
          <th></th>
        </thead>

        <tbody>
          <tr v-for="ascholarship in theScholarships" :key="ascholarship.scholarshipID">
            <th>{{ascholarship.name}}</th>
            <th>${{ascholarship.amount}}</th>
            <th><router-link :to='`/scholarships/${ascholarship.scholarshipID}`'> <button class="btn btn-primary"> Details</button> </router-link></th>
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
  theScholarships(){
    return this.$store.state.scholarships;
  }
}
}
</script>

<style>

</style>
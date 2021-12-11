<template>
  <div>
      <h1>Account</h1>
      <hr/>
      <h3>{{ firstName }}'s ratings</h3>


<p v-if="accountError" class="text-danger">Cannot get your account information, please try again later.</p>
      <table v-if="ratingsByUser" class ="table">
        <thead>
          <th>Review</th>
          <th>Score</th>
          <th>Shoe</th>
        </thead>

        <tbody>
          <tr v-for="thisRating in ratingsByUser" :key="thisRating.postID">
            <th>{{thisRating.review}}</th>
            <th>{{thisRating.score}}</th>
            <th><router-link :to='`/shoes/${thisRating.shoeFK}`'>{{thisRating.shoeFK}}</router-link></th>
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
      ratingsByUser: null,
      accountError: false
    }
  },
  computed:{
    firstName(){
      console.log("here is the store so far", this.$store.state)
  return this.$store.state.user.firstName;
    },
  },
  created(){
    axios.get("/ratings/me",{
      headers: {
        Authorization: `Bearer ${this.$store.state.token}`,
      }
    }).then((theResponse)=>{
        console.log("here is the response", theResponse);
        this.ratingsByUser = theResponse.data;
    }).catch(()=>{this.accountError=true});
  }
};
</script>

<style>

</style>
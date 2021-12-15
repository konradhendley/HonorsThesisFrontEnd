<template>
  <div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="card">
            <div class="card-body"  >
              <h4  >Update Rating</h4>
              <form id="review-form" @submit.prevent="updateRating">
                <div class="mb-3"  >
                  <label for="rating-input" class="form-label">Score</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10" v-model="score">
                  </div>
                  <div class="mb-3"  >
                    <label for="review-input" class="form-label">Rating</label>
                    <input type="text" row="3" class="form-control" id="summary-input" required="" v-model="review">
                    </div><button type="submit" class="btn btn-primary" >Update Rating</button>
                    <button v-on:click="cancelRating" type="clear" class="btn btn-outline-danger" > Cancel </button>
                    <p  v-if="errorMessage" class ="form-text text-danger">{{ errorMessage }}</p>
                    </form>
                </div>
              </div>
            </div>
          </div>
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
      score: null,
      review: "",
      errorMessage: null,
    }
  },
methods:{
  updateRating(){
    const myRating = {
      score: this.score,
      review: this.review,
      shoeFK: this.$route.query.shoeFK,
    }

    axios.patch(`/ratings/${this.$route.params.pk}`, myRating, {
        headers: {Authorization: `Bearer ${this.$store.state.token}`}
      }).then(()=>{this.$router.replace("/account");
      }).catch(()=>{
        this.errorMessage = "unable to edit this rating, please try again later"
      })
    },
    cancelRating(){
      this.$router.go(-1);
    }
  }
};
</script>

<style>
button{
  margin-right: 5px;
}
</style>
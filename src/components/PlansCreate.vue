<template>
  <div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="card">
            <div class="card-body"  >
              <h4  >Create a Plan</h4>
              <form id="review-form" @submit.prevent="submitPlan">
                <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Plan Name</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10" v-model="score">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Tuition</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10" v-model="score">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Books</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10" v-model="score">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Supplies</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10" v-model="score">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Miscleaneious</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10" v-model="score">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Rent</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10" v-model="score">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Groceries</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10" v-model="score">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Utilities</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10" v-model="score">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Phone Bill</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10" v-model="score">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Insurance</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10" v-model="score">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Transportation</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10" v-model="score">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Miscelaneous</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10" v-model="score">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Entertainment</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10" v-model="score">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Shopping</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10" v-model="score">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Food</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10" v-model="score">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Savings</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10" v-model="score">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Miscelaneous</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10" v-model="score">
                  </div>
                    <button type="submit" class="btn btn-primary" >Create Plan</button>
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
  submitPlan(){
    let myPlan = {
      score: this.score,
      review: this.review,
      collegeID: this.$route.params.pk
    }

    axios.post("/plans", myPlan, {
        headers: {Authorization: `Bearer ${this.$store.state.token}`}
      }).then(()=>{this.$router.replace("/account");
      }).catch(()=>{
        this.errorMessage = "unable to create a rating, please try again later"
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
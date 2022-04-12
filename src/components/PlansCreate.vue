<template>
  <div>
      <div class="row justify-content-center">
        <div>
          <div class="plan">
            <div class="card-body"  >
              <h4  style="text-align:center">Create a Plan</h4>
              <form id="review-form" @submit.prevent="submitPlan">
                <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Plan Name</label>
                  <input type="text" class="form-control" id="score-input" required=""  v-model="name">
                  </div>
                  <br/>
                  <h5  >Academic Expenses</h5>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Tuition</label>
                  <input type="number" class="form-control" id="score-input"   v-model="tuition">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Books</label>
                  <input type="number" class="form-control" id="score-input"   v-model="books">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Supplies</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="supplies">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Miscellaneous Academic Expenses</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="academicMisc">
                  </div>
                  <h5  >Living Expenses</h5>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Rent</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="rent">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Groceries</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="groceries">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Utilities</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="utilities">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Phone Bill</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="phone">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Insurance</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="insurance">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Transportation</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="transportation">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Miscellaneous Living Expenses</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="livingMisc">
                  </div>
                  <h5  >Personal Expenses</h5>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Entertainment</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="entertainment">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Shopping</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="shopping">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Food</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="food">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Savings</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="savings">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Miscelaneous Personal Expenses</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="personalMisc">
                  </div>
                  <h5  >Income</h5>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Job</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="job">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Scholarships</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="scholarships">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Grants</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="grants">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Contributions</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="contributions">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Miscellaneous Income</label>
                  <input type="number" class="form-control" id="score-input" required=""  v-model="incomeMisc">
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
      name: "",
      tuition: null,
      books: null,
      supplies: null,
      academicMisc: null,
      rent: null,
      groceries: null,
      utilities: null,
      phone: null,
      insurance: null,
      transportation: null,
      livingMisc: null,
      entertainment: null,
      shopping: null,
      food: null,
      savings: null,
      personalMisc: null,
      expenses_total: null,
      job: null,
      scholarships: null,
      grants: null,
      contributions: null,
      incomeMisc: null,
      income_total: null,
      collegeID: this.$route.params.pk,


      errorMessage: null,
    }
  },
methods:{
  submitPlan(){
    let myPlan = {
      planName: this.name,
      tuition: this.tuition,
      books: this.books,
      supplies: this.supplies,
      academic_misc: this.academicMisc,
      academic_total: this.tuition + this.books + this.supplies + this.academicMisc,
      rent: this.rent,
      groceries: this.groceries,
      utilities: this.utilities,
      phone: this.phone,
      insurance: this.insurance,
      transportation: this.transportation,
      living_misc: this.livingMisc,
      living_total: this.rent + this.groceries + this.utilities + this.phone + this.insurance + this.transportation + this.livingMisc,
      entertainment: this.entertainment,
      shopping: this.shopping,
      food: this.food,
      savings: this.savings,
      personal_misc: this.personalMisc,
      personal_total: this.entertainment + this.shopping + this.food + this.savings + this.personalMisc,
      expenses_total: this.tuition + this.books + this.supplies + this.academicMisc + this.rent + this.groceries + this.utilities + this.phone + this.insurance + this.transportation + this.livingMisc + this.entertainment + this.shopping + this.food + this.savings + this.personalMisc,
      job: this.job,
      scholarships: this.scholarships,
      grants: this.grants,
      contributions: this.contributions,
      income_misc: this.incomeMisc,
      income_total: this.job + this.scholarships + this.grants + this.contributions + this.incomeMisc,
      collegeID: this.$route.params.pk
    }

    axios.post("/plans", myPlan, {
        headers: {Authorization: `Bearer ${this.$store.state.token}`}
      }).then(()=>{this.$router.replace("/account");
      }).catch(()=>{
        this.errorMessage = "unable to create a plan, please try again later"
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
 .plan{
    background-image: linear-gradient(#87ceeb,#87ceeb );
}
</style>
<template>
<br/><br/>
  <div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="plan">
            <div class="card-body"  >
              <h4  >Edit your plan </h4>
              <form id="review-form" @submit.prevent="updatePlan">
                <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Plan Name</label>
                  <input type="text" class="form-control" id="score-input" required="" :placeholder="[[ plan.planName ]]" v-model="name">
                  </div>
                  <br/>
                  <h5>Academic Expenses</h5>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Tuition</label>
                  <input type="number" class="form-control" id="score-input" :placeholder="[[ plan.tuition]]"  v-model="tuition">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Books</label>
                  <input type="number" class="form-control" id="score-input"   :placeholder="[[ plan.books]]" v-model="books">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Supplies</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.supplies]]" v-model="supplies">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Miscellaneous Academic Expenses</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.academic_misc]]" v-model="academicMisc">
                  </div>
                  <br/>
                  <h5  >Living Expenses</h5>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Rent</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.rent]]" v-model="rent">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Groceries</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.groceries]]" v-model="groceries">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Utilities</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.utilities]]" v-model="utilities">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Phone Bill</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.phone]]" v-model="phone">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Insurance</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.insurance]]" v-model="insurance">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Transportation</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.transportation]]" v-model="transportation">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Miscellaneous Living Expenses</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.living_misc]]" v-model="livingMisc">
                  </div>
                  <br/>
                  <h5  >Personal Expenses</h5>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Entertainment</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.entertainment]]" v-model="entertainment">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Shopping</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.shopping]]" v-model="shopping">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Food</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.food]]" v-model="food">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Savings</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.savings]]" v-model="savings">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Miscelaneous Personal Expenses</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.tuition]]" v-model="personalMisc">
                  </div>
                  <br/>
                  <h5  >Income</h5>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Job</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.job]]" v-model="job">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Scholarships</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.scholarships]]" v-model="scholarships">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Grants</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.grants]]" v-model="grants">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Contributions</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.contributions]]" v-model="contributions">
                  </div>
                  <div class="mb-3"  >
                  <label for="rating-input" class="form-label"  >Miscellaneous Income</label>
                  <input type="number" class="form-control" id="score-input" required="" :placeholder="[[ plan.income_misc]]" v-model="incomeMisc">
                  </div>
                    <button type="submit" class="btn btn-primary" >Update Plan</button>
                    <button v-on:click="cancelRating" type="clear" class="btn btn-outline-danger" > Cancel </button>
                    <p  v-if="errorMessage" class ="form-text text-danger">{{ errorMessage }}</p>
                    </form>
                </div>
              </div>
            </div>
          </div>
      </div>
      <br/><br/>
</template>

<script>
import axios from "axios";

export default {
  computed:{
  plan(){
    let allPlans = this.$store.state.plans;

    let thisPlan = allPlans.find((aPlan)=>{return aPlan.planID == this.$route.params.pk});

    return thisPlan;
  },

  //thePlan(){
   // console.log("the plan", this.$store.state.plans);
    //return this.$store.state.plans;
  //}
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
  updatePlan(){
    const myPlan = {
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
      expenses_total: this.tution,
      job: this.job,
      scholarships: this.scholarships,
      grants: this.grants,
      contributions: this.contributions,
      income_misc: this.incomeMisc,
      income_total: this.job + this.scholarships + this.grants + this.contributions + this.incomeMisc,
    }

    axios.patch(`/plans/${this.$route.params.pk}`, myPlan, {
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
h5 {
    text-align:center;
}
</style>
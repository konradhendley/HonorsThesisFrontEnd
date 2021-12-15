<template>
  <div>
      <h1>Create a New Shoe</h1>
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="fname-input" class="form-label">Name</label>
          <input type="text" class="form-control" id="name-input" required="" placeholder="Shoe Name" v-model="name"></div>
          <div class="mb-3"  >
                  <label for="rating-input" class="form-label">Size</label>
                  <input type="number" class="form-control" id="size-input" required="" min="1" max="20" v-model="size">
                  </div>
          <div class="mb-3"  >
                  <label for="rating-input" class="form-label">Cost</label>
                  <input type="number" class="form-control" id="cost-input" required="" min="1" max="10000000" v-model="cost">
                  </div>

          <div class="mb-3">
                   <label for="style-input" class="form-label">Style</label>
                   <br/>
                   <select id = "style-input" name = "style" v-model="style">
                        <option value = ""> </option>
                        <option value = 1 >Boots</option>
                        <option value = 2 >Running Shoes</option>
                        <option value = 3 >High Tops</option>
                        <option value = 4 >Boat Shoes</option>
                        <option value = 5 >Rain Boots</option>
                   </select>
          </div>
          <button type="submit" class="btn btn-primary">Create</button>
          <p  v-if="errorMessage" id="error-signup" class="text-danger">{{errorMessage}}</p>
          </form>
      </div>
</template>


<script>
import axios from "axios";
export default {
  data(){
    return{
      name:"",
      size: null,
      cost: null,
      style: null,
      errorMessage: null,
    };
  },
  methods:{
    onSubmit(){
     // console.log("form submitted");
     const myFormData={
       name: this.name,
       size: this.size,
       cost: this.cost,
       styleFK: this.style
     }
     //console.log(myformData);
     axios.post("/shoes",myFormData, { headers: {
        Authorization: `Bearer ${this.$store.state.token}`,
      }})
     .then((myResponse)=>{
       console.log("the response", myResponse);
       this.$router.replace("/shoes?shoecreated=true");
     })
     .catch((myError)=>{
       if(myError.response.status === 401){
        this.errorMessage = "Sorry, only Admin accounts can create a new shoe"}
     });
    },
  },
};
</script>

<style>

</style>
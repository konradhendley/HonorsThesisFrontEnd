<template>
  <div>
      <div class="card"> 
        <div class="card-body">
          <h2 class ="text-primary">{{ shoe.name }}</h2>
          <br/>


    <p>Type: <br/><strong>{{shoe.type}}</strong></p>
    <p>Size: <br/><strong>{{shoe.size}}</strong></p>
    <p>Average price:<br/><strong>{{formattedPrice}}</strong></p>
          </div>
        </div>
        <br/>

        <router-link v-if="auth" :to="`/shoes/${this.$route.params.pk}/rating`"><button class = "btn btn-success">Add a Rating</button></router-link>
        <router-link v-else :to="`/login`"><button class = "btn btn-outline-success">Sign in to Add a Rating</button></router-link>
        <br/>  <br/>
      <router-view />
     </div>
</template>

<script>
export default {

computed:{
  shoe(){
    let allShoes = this.$store.state.shoes;

    let thisShoe = allShoes.find((aShoe)=>{return aShoe.shoeID == this.$route.params.pk});

    return thisShoe;
  },
  formattedPrice(){
    return new Intl.NumberFormat("en-US",{
      style: "currency",
      currency: "USD"
    }).format(this.shoe.cost)
  },
  auth(){
    return this.$store.state.token
  }
}

}
</script>

<style>

</style>
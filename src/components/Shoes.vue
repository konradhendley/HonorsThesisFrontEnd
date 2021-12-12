<template>
  <div>
      <h1>Shoes</h1>
      <hr/>
      <table  class ="table">
        <thead>
          <th>Shoe</th>
          <th>Style</th>
          <th>Cost</th>
          <th></th>
        </thead>

        <tbody>
          <tr v-for="aShoe in theShoes" :key="aShoe.shoeID">
            <th>{{aShoe.name}}</th>
            <th>{{aShoe.type}}</th>
            <th>${{aShoe.cost}}</th>
            <th><router-link :to='`/shoes/${aShoe.shoeID}`'> <button class="btn btn-primary"> Details</button> </router-link></th>
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
  theShoes(){
    return this.$store.state.shoes;
  }
}
}
</script>

<style>

</style>
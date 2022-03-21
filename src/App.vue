<template>
 <my-header />
 <div class = "container-fluid">
   <div class = "row justify-content-center">
     <div class = "col-md-10 col-lg-7">
     <router-view />
     
              </div>
          </div>
      </div> 
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: 'App',
  components: {
    "my-header": Header,
  },
  created(){
    this.$store.dispatch("getColleges");
    this.$store.dispatch("getScholarships");
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

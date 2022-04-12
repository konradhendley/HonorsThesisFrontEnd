<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-success">
  <div class="container-fluid">
    <router-link class="navbar-brand text-light" to="/">Thesis Project</router-link>
    <button 
        class="navbar-toggler" type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link active text-light" aria-current="page" to="/colleges">Colleges</router-link>
        </li>

        <li class="nav-item">
          <router-link  class="nav-link active text-light" aria-current="page" to="/scholarships">Scholarships</router-link>
        </li>

         <li v-if="auth" class="nav-item">
          <router-link class="nav-link active text-light" aria-current="page" to="/account">My Account</router-link>
        </li>

         <li  v-if="!auth" class="nav-item">
          <router-link class="nav-link active text-light" aria-current="page" to="login"><button class = "btn btn-primary">Login</button></router-link>
        </li>

          <li  v-if="!auth" class="nav-item">
          <router-link class="nav-link active text-light" aria-current="page" to="signup"><button class = "btn btn-outline-primary text-light">Signup</button></router-link>
        </li>
          <li  v-if="auth" class="nav-item"> <router-link :to='`/`'> <button class = "btn btn-primary" @click="onLogout">Logout</button></router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>  
</template>
<script>
export default{
  computed:{
    auth(){
    return this.$store.state.token
    },
  },
  methods:{
    onLogout(){
      this.$store.dispatch("logout")
    }
  }
}
</script>

<style  scoped>
.navbar-nav{
  align-items: center;
}
.navbar{
  background-image: linear-gradient(#007fff,#87ceeb );
}
</style>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Shoes.com</router-link>
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
          <router-link class="nav-link active" aria-current="page" to="movies">Movies</router-link>
        </li>

         <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="account">My Account</router-link>
        </li>

         <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="login"><button class = "btn btn-warning">Login</button></router-link>
        </li>

          <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="signup"><button class = "btn btn-outline-warning text-dark">Signup</button></router-link>
        </li>
          <li class="nav-item"> <button class = "btn btn-warning">Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>  
</template>

<style  scoped>
.navbar-nav{
  align-items: center;
}
</style>
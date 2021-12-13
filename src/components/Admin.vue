<template>
  <div>
      <h1>Create a New Shoe</h1>
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="fname-input" class="form-label">Name</label>
          <input type="text" class="form-control" id="fname-input" required="" placeholder="Shoe Name" v-model="name"></div>
          <div class="mb-3"  >
                  <label for="rating-input" class="form-label">Size</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="20" v-model="size">
                  </div>
          <div class="mb-3"  >
                  <label for="rating-input" class="form-label">Cost</label>
                  <input type="number" class="form-control" id="score-input" required="" min="1" max="10000000" v-model="cost">
                  </div>

          <div class="mb-3">
                   <label for="password-input" class="form-label">Style</label>
                   <input type="password" class="form-control" id="password-input" placeholder="Shoe Style" required="" v-model="style">
          </div>
          <button type="submit" class="btn btn-primary">Create</button>
          <p id="error-signup" class="text-danger">{{errorMessage}}</p>
          </form>
      </div>
</template>
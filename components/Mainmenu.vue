<template>
  <div class="header">
    <b-navbar 
      toggleable="md" 
      type="dark" 
      variant="info"
      class="navbar">
      <nuxt-link 
        exact 
        to="./" 
        class="header-option">Home</nuxt-link>
      <nuxt-link 
        to="./Calc" 
        class="header-option">Calculator</nuxt-link>
      <nuxt-link 
        to="./Subscription" 
        class="header-option">Subscription</nuxt-link>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header-option {
  font-family: cursive;
  margin: 5px 20px;
  text-decoration: none;
  color: blue;
}
</style>

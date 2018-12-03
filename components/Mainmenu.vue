<template>
  <div class="header">
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
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  background-color: cadetblue;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
}

.header-option {
  font-family: cursive;
  font-size: 30px;
  margin-left: 10px;
  text-decoration: underline;
  color: indigo;
}
</style>

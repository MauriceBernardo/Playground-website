<template>
  <div class="header">
    <nuxt-link 
      exact 
      to="./" 
      class="header-option">Home</nuxt-link>
    <nuxt-link 
      to="./Calculator" 
      class="header-option">Calculator</nuxt-link>
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
  background-color: bisque;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.header-option {
  font-family: cursive;
  font-size: 30px;
  margin-left: 10px;
}
</style>

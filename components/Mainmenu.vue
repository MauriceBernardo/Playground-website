<template>
  <div class="header">
    <b-navbar 
      toggleable="md" 
      type="dark" 
      variant="primary"
      class="header__navbar">
      <b-navbar-nav>
        <nuxt-link 
          exact 
          to="./" 
          class="header__option">Home</nuxt-link>
        <nuxt-link 
          to="./Calc" 
          class="header__option">Calculator</nuxt-link>
        <nuxt-link 
          to="./Subscription" 
          class="header__option">Subscription</nuxt-link>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
.header {
  &__navbar {
    position: fixed;
    width: 100%;
  }

  &__option {
    font-family: cursive;
    margin: 5px 20px;
    text-decoration: none;
    color: lightgray;
  }
}
</style>

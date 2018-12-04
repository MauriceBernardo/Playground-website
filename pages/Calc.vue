<template>
  <div class="container-fluid">
    <Calculator />
  </div>
</template>

<script>
import Calculator from './../components/Calculator.vue'
export default {
  components: {
    Calculator
  }
}
</script>

<style scoped>
.container-fluid {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #222;
  min-height: 100vh;
  width: 100%;
}
</style>

<template>
  <div class="container">
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222;
  height: 100%;
  width: 100%;
}
</style>

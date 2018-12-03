<template>
  <div class="form">
    <input 
      v-model="Name" 
      type="text" 
      placeholder="type your name here">
    <input 
      v-model="Email" 
      type="email" 
      placeholder="type your email here">
    <button 
      class="submit" 
      @click="valueInputted">Submit</button>
  </div>
</template>

<script>
import { store } from './../store/store.js'
export default {
  data() {
    return {
      Name: '',
      Email: ''
    }
  },
  methods: {
    valueInputted() {
      this.$store.name = this.Name
      this.$store.email = this.Email
      this.$emit('valueInputted')
    }
  }
}
</script>

<style scoped>
.form {
  margin: 40px 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-items: space-evenly;
  font-family: monospace;
  font-size: 32px;
}
</style>

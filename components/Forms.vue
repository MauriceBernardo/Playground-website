<template>
  <div class="form">
    <input 
      v-model="Name" 
      type="form__text" 
      placeholder="type your name here">
    <input 
      v-model="Email" 
      type="form__email" 
      placeholder="type your email here">
    <button 
      class="form__submit" 
      @click.prevent="valueInputted">Submit</button>
    <label 
      v-show="invalid"
      for = "form__submit" 
      class="form__error">
      Please type input in a correct format
    </label>
  </div>
</template>

<script>
import { store } from './../store/store.js'
export default {
  data() {
    return {
      Name: '',
      Email: '',
      invalid: false
    }
  },
  methods: {
    valueInputted() {
      let emailChecker = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      if (!this.Email.match(emailChecker)) {
        this.invalid = true
      } else {
        this.$store.name = this.Name
        this.$store.email = this.Email
        this.invalid = false
        this.$emit('valueInputted')
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.form {
  margin: 40px 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-items: space-evenly;
  font-family: monospace;
  font-size: 32px;

  &__error {
    color: red;
    font-size: 12px;
  }
}
</style>

<template>
  <div>
    <b-form class="form">
      <b-form-group>
        <b-form-input 
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"/>
      </b-form-group>
      <b-form-group>
        <b-form-input 
          v-model="form.name"
          type="text"
          required
          placeholder="Enter name"/>
      </b-form-group>
      <b-button 
        variant="primary"
        @click= "valueInputted">Submit</b-button>
      <b-alert
        :show = "invalid" 
        class="form__error"
        dismissible
        @dismissed="invalid=false">
        Please input in the correct format
      </b-alert>
    </b-form>
  </div>
</template>

<script>
import { store } from './../store/store.js'
export default {
  data() {
    return {
      form: {
        name: '',
        email: ''
      },
      invalid: false
    }
  },
  methods: {
    valueInputted() {
      let emailChecker = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      if (!this.form.email.match(emailChecker)) {
        this.invalid = true
      } else {
        this.$store.name = this.form.name
        this.$store.email = this.form.email
        this.invalid = false
        this.$emit('valueInputted')
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.form {
  display: flex;
  flex-direction: column;
  font-family: cursive;
  font-size: 23px;

  &__error {
    font-size: 12px;
    margin-top: 15px;
  }
}
</style>

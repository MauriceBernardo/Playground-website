<template>
  <div class="container">
    <forms @valueInputted = "showComment"/>
    <p 
      v-if="responded" 
      class="response">
      Hello {{ name }}, your email ({{ email }}) has subscribed to our mailing list
    </p>
  </div>
</template>

<script>
import { store } from './../store/store.js'
import forms from './../components/Forms.vue'
export default {
  components: {
    forms
  },
  data() {
    return {
      name: '',
      email: '',
      responded: false
    }
  },
  methods: {
    showComment() {
      if (this.$store.state.name === '' || this.$store.state.email === '') {
        alert('Please fill in your data before submitting')
      } else {
        this.name = this.$store.name
        this.email = this.$store.email
        this.responded = true
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222;
}

.response {
  color: aliceblue;
}
</style>

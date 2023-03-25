<template>
    <div>
      <h2>Forgot Password</h2>
      <form @submit.prevent="submitForm">
        <label>Email:</label>
        <input v-model="email" type="email" required>
        <button type="submit">Submit</button>
      </form>
      <p v-if="showSuccess">An email has been sent to {{ email }} with instructions on how to reset your password.</p>
      <p v-if="showError">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        email: '',
        showSuccess: false,
        showError: false,
        error: ''
      }
    },
    methods: {
      submitForm() {
        axios.post('/forgot-password', { email: this.email })
          .then(response => {
            this.showSuccess = true
          })
          .catch(error => {
            this.showError = true
            this.error = error.response.data.message
          })
      }
    }
  }
  </script>
  
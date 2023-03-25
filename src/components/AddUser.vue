<template>
    <div>
      <h2>Add User</h2>
      <form @submit.prevent="addUser">
        <label>Name:</label>
        <input v-model="user.name" type="text" required>
        <label>Email:</label>
        <input v-model="user.email" type="email" required>
        <label>Password:</label>
        <input v-model="user.password" type="password" required>
        <button type="submit">Add User</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        user: {
          name: 'Add_User',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      addUser() {
        axios.post('/users', this.user)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
  </script>
  
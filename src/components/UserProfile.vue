<template>
    <div>
      <h2>User Profile</h2>
      <div>
        <label>Name:</label>
        <span>{{ user.name }}</span>
      </div>
      <div>
        <label>Email:</label>
        <span>{{ user.email }}</span>
      </div>
      <div>
        <label>Address:</label>
        <span>{{ user.address }}</span>
      </div>
      <div>
        <label>Phone:</label>
        <span>{{ user.phone }}</span>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        user: {}
      }
    },
    mounted() {
      axios.get('/users/current')
        .then(response => {
          this.user = response.data.user
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
  </script>
  
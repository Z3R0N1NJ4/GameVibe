<template>
    <form @submit.prevent="updateUser(editedUser)">
      <!-- Form fields for editing user data -->
      <button type="submit">Save Changes</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        editedUser: {} // Initialize an empty object for storing the edited user data
      }
    },
    methods: {
      updateUser(user) {
        // Call the updateUser method from above with the edited user data
        // This will update the user in the database and retrieve the updated data
        this.$root.$emit('updateUser', user)
      }
    }
  }
  </script>
  
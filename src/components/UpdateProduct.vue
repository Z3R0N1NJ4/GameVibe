<template>
    <div>
      <h2>Update Product</h2>
      <form @submit.prevent="updateProduct">
        <label>Name:</label>
        <input v-model="product.name" type="text" required>
        <label>Price:</label>
        <input v-model="product.price" type="number" required>
        <button type="submit">Update Product</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    props: ['id'],
    data() {
      return {
        product: {}
      }
    },
    methods: {
      getProduct() {
        axios.get('/products/' + this.id)
          .then(response => {
            this.product = response.data.product
          })
          .catch(error => {
            console.log(error)
          })
      },
      updateProduct() {
        axios.put('/products/' + this.id, this.product)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    created() {
      this.getProduct()
    }
  }
  </script>
  
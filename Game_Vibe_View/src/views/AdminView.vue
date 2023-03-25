<template>
  <div class="admin pt-2">
    <h1>Admin</h1>
    <user_com/>
    <product_com/>
  </div>
  
  <!-- <div class="container">

<div class="admin-product-form-container">

   <form action="" method="post" enctype="multipart/form-data">
      <h4>Add a new product</h4>
      <input type="text" placeholder="enter product name" name="product_name" class="box">
      <input type="number" placeholder="enter product price" name="product_price" class="box">
      <input type="file" accept="image/png, image/jpeg, image/jpg" name="product_image" class="box">
      <input type="submit" class="btn bg-primary" name="add_product" value="add product">
      <input type="button" class="btn bg-danger" name="add_product" value="Reset to default" onclick="clearLocalStorage()">
      
   </form>

 </div>

<div class="product-display">
   <table class="table table-dark table-hover">
     <thead class="text-white">
      <tr>
         <th>product image</th>
         <th>product name</th>
         <th>product price</th>
         <th>action</th>
      </tr>
      </thead>

      <tbody class="tb">
       
      </tbody>

   </table>
 </div>
 </div> -->
</template>
<style>
table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1rem;
}

th,
td {
  text-align: left;
  padding: 0.5rem;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

</style>


<script>
// import axios from 'axios'
// import Product_CRUD from '@/components/ProductsCRUD.vue';
// import Add_Product from '@/components/AddProduct.vue';
// import Add_User from '@/components/AddUser.vue';
import user_com from '@/components/UserCRUD.vue';
import product_com from '@/components/ProductsCRUD.vue';


export default {
  components: {
   user_com, product_com
  },
}
//   data() {
//     return {
//       products: [],
//       newProduct: {
//         name: '',
//         price: ''
//       },
//       editedProduct: {
//         id: '',
//         name: '',
//         price: ''
//       },
//       editing: false
//     }
//   },
//   mounted() {
//     this.getProducts()
//   },
//   methods: {
//     getProducts() {
//       axios.get('/products')
//         .then(response => {
//           this.products = response.data.products
//         })
//         .catch(error => {
//           console.log(error)
//         })
//     },
//     createProduct() {
//       axios.post('/products', this.newProduct)
//         .then(response => {
//           this.products.push(response.data.product)
//           this.newProduct.name = ''
//           this.newProduct.price = ''
//         })
//         .catch(error => {
//           console.log(error)
//         })
//     },
//     editProduct(product) {
//       this.editedProduct.id = product.id
//       this.editedProduct.name = product.name
//       this.editedProduct.price = product.price
//       this.editing = true
//     },
//     updateProduct() {
//       axios.put(`/products/${this.editedProduct.id}`, this.editedProduct)
//         .then(() => {
//           const index = this.products.findIndex(product => product.id === this.editedProduct.id)
//           this.products.splice(index, 1, this.editedProduct)
//           this.editedProduct.id = ''
//           this.editedProduct.name = ''
//           this.editedProduct.price = ''
//         this.editing = false
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   },
//   deleteProduct(product) {
//     axios.delete(`/products/${product.id}`)
//       .then(() => {
//         const index = this.products.findIndex(p => p.id === product.id)
//         this.products.splice(index, 1)
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }
// }
// }

</script>

<template lang="">
  <div>
      <h3 class="text-bg-info-center pt-2 prodhead">Products</h3>
      <table class="table">            <thead>
            <tr>
              <th scope="col">Product ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Category</th>
              <th scope="col">Edit/Remove</th>
            </tr>
          </thead>
          <tbody v-for="product in products" :key="product">
            <tr>
              <td>{{product.prodID}}</td>
              <td>{{product.prodName}}</td>
              <td>{{product.price}}</td>
              <td>{{product.categoryID}}</td>
              <button class="edit">Edit</button>
              <button class="remove">Remove</button>
            </tr>
          </tbody>
        </table>
  </div>
</template>
<script>


import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
export default {
  setup(){
      const store = useStore();
      store.dispatch("fetchProducts");
      let products = computed(() => store.state.products)
      return{
          products,
      }
  },
    name: 'product_com'
}
</script>
<style>

.edit{
  padding: 2% !important;
  margin-right: 4% !important;
}

.remove{
  padding: 2% !important;
}
  
</style>



        
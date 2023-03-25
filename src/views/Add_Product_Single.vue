<template>
    <div>
      <h1>Products</h1>
    <div>
        <div class="card d-inline-block" style="width: 18rem; " v-for="product in product" :key="product">
            <img :src="product.imgURL" class="card-img-bottom">
            <div class="card-body ">
              <h5 class="card-title">{{product.prodName}}</h5>
              <p class="card-text">R {{product.price}}</p>
            </div>
          </div>
        </div>
      </div>
    
  </template>
  <script>
  import { useStore } from 'vuex';
  import { computed } from '@vue/runtime-core';
  export default {
    setup(){
        const store = useStore();
        store.dispatch("fetchProductById");
        let product = computed(() => store.state.product)
        return{
            product,
        }
    },
    name : 'Add_Product_Single',
    
  }
  
  </script>
  <style >
  
  .card{
    justify-content: space-around !important;
    margin: 2%;
  }
  </style>
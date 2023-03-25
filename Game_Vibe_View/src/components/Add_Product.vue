<template>
  <div>
    <h1 class="head pt-2">Products</h1>
  <div>
      <div class="card d-inline-block" style="width: 18rem; " v-for="product in products" :key="product">
          <img :src="product.imgURL" class="card-img-bottom">
          <div class="card-body ">
            <h5 class="card-title">{{product.prodName}}</h5>
            <p class="card-text">R {{product.price}}</p>
            <router-link class="submit" to="product" @click.prevent="()=>viewProduct(product)">See more ></router-link>
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
      store.dispatch("fetchProducts");
      let products = computed(() => store.state.products)
      return{
          products,
      }
  },
  name : 'Add_Product',

  methods: {
    viewProduct(product) {
      this.$store.commit('setProduct', product);
      this.$router.push("../views/Add_Product_Single.vue");
    },
    
}
}
 
</script>
<style >

.card{
  justify-content: space-around !important;
  margin: 2%;
}

.card-body, .card-title, .card-text, .submit{
  background-color: whitesmoke;
}


</style>
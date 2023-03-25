import { createStore } from 'vuex'
import {useCookies, globalCookiesConfig} from 'vue3-cookies'
import axios from 'axios'
const api = "https://game-vibe.onrender.com/"
const {cookies} = useCookies();

globalCookiesConfig({
  expireTimes: "1h",
});

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    token: null,
    showSpinner: true,
    message: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, values) {
      state.user = values
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, values) {
      state.product = values
    },
    setSpinner(state, values) {
      state.showSpinner = values
    },
    setMessage(state, values) {
      state.message = values
    },
    setToken(state, data) {
      state.token = data
    },
  },
  actions: {
    async login(context, payload) {
      const res = await axios.post(`${api}login`, payload);
      const {result, jwToken, msg, err} = await res.data;
      if(result) {
        context.commit('setUser',result);
        context.commit('setToken', jwToken);
        cookies.set('login_cookie', res.data)
        context.commit('setMessage', msg)
      } else {
        context.commit('setMessage', err);
      }
    },
    async register(context, payload) {
      const res = await axios.post(`${api}user`, payload)
      const {msg, err} = await res.data;
      if(msg) {
        context.commit('setMessage', msg);
      }else {
        context.commit('setMessage', err);
      }
    },
    async fetchUsers(context, payload) {
      const res = await axios.get(`${api}users`, payload);
      console.log(await res.data);
      if(res.data.results) {
        context.commit('setUsers', res.data.results);
      }else {
        context.commit('setSpinner', false);
      }
  },
  async fetchUserById(context, id) {
    const res = await axios.get(`${api}user/${id}`);
    const {results, err} = await res.data;
    if(results) {
      context.commit('setUsers', results);
    }else {
      context.commit('setMessage', err);
    }
},
  async updateUser(context, payload) {
    const res = await axios.post(`${api}user`, payload);
    const {msg, err} = await res.data;
    if(msg) {
      context.commit('setUser', msg);
    }else {
      context.commit('setUser', err);
    }
  },
  async fetchProducts(context){
    const res = await axios.get(`${api}products`);
    console.log(await res.data)
    if(res.data.results){
      context.commit('setProducts', res.data.results)
    } else {context.commit('showSpinner', false);}
  },
  async fetchProductById(context, id){
    const res = await axios.get(`${api}product/${id}`);
    console.log(await res.data)
    if(res.data.results){
      context.commit('setProduct', res.data.results)
    } else {context.commit('showSpinner', false);}
  },
  async addProducts(context, payload){
    const res = await axios.post(`${api}product`, payload);
    const {result, err} = await res.data;
    if(result){
      context.commit('setMessage', result)
    } else {context.commit('setMessage', err);}
  },
},
  modules: {
  }
})












  
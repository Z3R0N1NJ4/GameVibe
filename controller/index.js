const express = require('express');
// path
const path = require('path');
// body-parser
const bodyParser = require('body-parser');
// Router
const route = express.Router();
// Models
const {User, Product, Category, Order} = require('../model');
// Create a user instance
const user = new User();
// Product instance
const product = new Product();
// Category instance
const category = new Category();
// Order instance
const order = new Order();
// ^/$|/GameVibe
route.get('^/$|/GameVibe', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
});

// =========USER's Router=========
// Login
route.post('/login', bodyParser.json(), (req, res)=>{
    user.login(req, res);
});
// Retrieve all users
route.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
});
// Update
route.put('/user/:id',bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});
// Retrieve single user
route.get('/user/:id', (req, res)=>{
    user.fetchUser(req, res);
});
// Register/create user
route.post('/register', bodyParser.json(), (req, res)=>{
    user.createUser(req, res);
});
// Delete
route.delete('/user/:id', (req, res)=>{
    user.deleteUser(req, res);
});

// =====Products======
// Fetch all products
route.get('/products', (req, res)=>{
    product.fetchProducts(req, res);
});
// Fetch a single product
route.get('/product/:id', (req, res)=>{
    product.fetchProduct(req, res);
});
// Add a new product
route.post('/product', bodyParser.json(), (req, res)=>{
    product.addProduct(req, res);
});
// Update a product
route.put('/product/:id', bodyParser.json(), (req, res)=>{
    product.updateProduct(req, res);
});
// Delete a product
route.delete('/product/:id', (req, res)=>{
    product.deleteProduct(req, res);
});

// =====Categories======
// Fetch all categories
route.get('/categories', (req, res)=>{
    category.fetchCategories(req, res);
});
// Fetch a single category
route.get('/category/:id', (req, res)=>{
    category.fetchCategory(req, res);
});
// Add a new category
route.post('/category', bodyParser.json(), (req, res)=>{
    category.addCategory(req, res);
});
// Update a category
route.put('/category/:id', bodyParser.json(), (req, res)=>{
    category.updateCategory(req, res);
});
// Delete a category
route.delete('/category/:id', (req, res)=>{
    category.deleteCategory(req, res);
});

// =====Orders======
// Fetch all orders
route.get('/orders', (req, res)=>{
    order.fetchOrders(req, res);
});
// Fetch a single order
route.get('/order/:id', (req, res)=>{
    order.fetchOrder(req, res);
});
// Add a new order
route.post('/order', bodyParser.json(), (req, res)=>{
    order.addOrder(req, res);
});
// Update a order
route.put('/order/:id', bodyParser.json(), (req, res)=>{
    order.updateOrder(req, res);
});
// Delete a order
route.delete('/order/:id', (req, res)=>{
    order.deleteOrder(req, res);
});

module.exports = route;
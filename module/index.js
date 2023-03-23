// Database configuration
const db = require('../config');
// bcrypt module
const {hash, compare, hashSync } = require('bcrypt');
// Middleware for creating a token
const {createToken} = require('../middleware/AuthenticatedUser');
// User 
class User {
    login(req, res) {
        const {emailAdd, userPass} = req.body;
        const storeQuery = 
        `
        SELECT emailAdd, userPass
        WHERE emailAdd = '${emailAdd}';
        `;
        db.query(storeQuery, async (err, data)=>{
            if(err) throw err;
            if((!data.length) || (data == null)) {
                res.status(401).json({err: 
                    "You provide a wrong email address"});
            }else {
                await compare(userPass, 
                    data[0].userPass, 
                    (aErr, aResult)=> {
                        if(aErr) throw aErr;
                        // Create a token
                        const jwToken = 
                        createToken(
                            {
                                emailAdd, userPass  
                            }
                        );
                        // Saving
                        res.cookie('LegitUser',
                        jwToken, {
                            maxAge: 3600000,
                            httpOnly: true
                        })
                        if(aResult) {
                            res.status(200).json({
                                msg: 'Logged in',
                                jwToken,
                                result: data[0]
                            })
                        }else {
                            res.status(401).json({
                                err: 'You entered an invalid password or are not registered. '
                            })
                        }
                    })
            }
        })     
    }
    fetchUsers(req, res) {
        const storeQuery = 
        `
        SELECT userID, firstName, lastName, gender, cellphoneNumber, emailAdd, userRole
        FROM Users;
        `;
        //db
        db.query(storeQuery, (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })
    }
    fetchUser(req, res) {
        const storeQuery = 
        `
        SELECT userID, firstName, lastName, gender, cellphoneNumber, emailAdd, userPass, userRole, userProfile
        FROM Users
        WHERE userID = ?;
        `;
        //db
        db.query(storeQuery,[req.params.id], 
            (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })

    }
    async createUser(req, res) {
        // Payload
        let detail = req.body;
        // Hashing user password
        detail.userPass = await 
        hash(detail.userPass, 15);
        // This information will be used for authentication.
        let user = {
            emailAdd: detail.emailAdd,
            userPass: detail.userPass
        }
        // sql query
        const storeQuery =
        `INSERT INTO Users
        SET ?;`;
        db.query(storeQuery, [detail], (err)=> {
            if(err) {
                res.status(401).json({err});
            }else {
                // Create a token
                const jwToken = createToken(user);
                // This token will be saved in the cookie. 
                // The duration is in milliseconds.
                res.cookie("LegitUser", jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({msg: "A user record was saved."})
            }
        })    
    }
    updateUser(req, res) {
        let data = req.body;
        if(data.userPass !== null || 
            data.userPass !== undefined)
            data.userPass = hashSync(data.userPass, 15);
        const storeQuery = 
        `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `;
        //db
        db.query(storeQuery,[data, req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "A row was affected"} );
        })    
    }
    deleteUser(req, res) {
        const storeQuery = 
        `
        DELETE FROM Users
        WHERE userID = ?;
        `;
        //db
        db.query(storeQuery,[req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "A record was removed from a database"} );
        })    
    }
}

// Product
class Product {
    fetchProducts(req, res) {
        const storeQuery = `SELECT prodID, prodName, 
        categoryID, price
        FROM Products;`;
        db.query(storeQuery, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchProduct(req, res) {
        const storeQuery = `SELECT prodID, prodName, prodDescription, 
        categoryID, price, imgURL
        FROM Products
        WHERE prodID = ?;`;
        db.query(storeQuery, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });

    }
    addProduct(req, res) {
        const storeQuery = 
        `
        INSERT INTO Products
        SET ?;
        `;
        db.query(storeQuery,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to insert a new product."});
                }else {
                    res.status(200).json({msg: "Product saved"});
                }
            }
        );    

    }
    updateProduct(req, res) {
        const storeQuery = 
        `
        UPDATE Products
        SET ?
        WHERE prodID = ?
        `;
        db.query(storeQuery,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to update a product."});
                }else {
                    res.status(200).json({msg: "Product updated"});
                }
            }
        );    

    }
    deleteProduct(req, res) {
        const storeQuery = 
        `
        DELETE FROM Products
        WHERE prodID = ?;
        `;
        db.query(storeQuery,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "The product was not found."});
            res.status(200).json({msg: "A product was deleted."});
        })
    }

}

// Category
class Category{
    fetchCategories(req, res) {
        const storeQuery = `SELECT categoryID, category
        FROM Categories;`;
        db.query(storeQuery, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchCategory(req, res) {
        const storeQuery = `SELECT categoryID, category
        FROM Categories
        WHERE categoryID = ?;`;
        db.query(storeQuery, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });

    }
    addCategory(req, res) {
        const storeQuery = 
        `
        INSERT INTO Categories
        SET ?;
        `;
        db.query(storeQuery,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to insert a new Category."});
                }else {
                    res.status(200).json({msg: "Category saved"});
                }
            }
        );    

    }
    updateCategory(req, res) {
        const storeQuery = 
        `
        UPDATE Categories
        SET ?
        WHERE categoryID = ?
        `;
        db.query(storeQuery,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to update a category."});
                }else {
                    res.status(200).json({msg: "category updated"});
                }
            }
        );    

    }
    deleteCategory(req, res) {
        const storeQuery = 
        `
        DELETE FROM Categories
        WHERE categoryID = ?;
        `;
        db.query(storeQuery,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "The category was not found."});
            res.status(200).json({msg: "A category was deleted."});
        })
    }

}

// Orders
class Order{
    fetchOrders(req, res) {
        const storeQuery = `SELECT orderID, imgURL, productName, prodQuantity, price, userID, prodID
        FROM Orders;`;
        db.query(storeQuery, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchOrder(req, res) {
        const storeQuery = `SELECT orderID, imgURL, productName, prodQuantity, price, userID, prodID
        FROM Orders
        WHERE orderID = ?;`;
        db.query(storeQuery, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });

    }
    addOrder(req, res) {
        const storeQuery = 
        `
        INSERT INTO Orders
        SET ?;
        `;
        db.query(storeQuery,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to insert a new Orders."});
                }else {
                    res.status(200).json({msg: "Orders saved"});
                }
            }
        );    

    }
    updateOrder(req, res) {
        const storeQuery = 
        `
        UPDATE Orders
        SET ?
        WHERE orderID = ?
        `;
        db.query(storeQuery,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to update a Orders."});
                }else {
                    res.status(200).json({msg: "Orders updated"});
                }
            }
        );    

    }
    deleteOrder(req, res) {
        const storeQuery = 
        `
        DELETE FROM Orders
        WHERE orderID = ?;
        `;
        db.query(storeQuery,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "The Order was not found."});
            res.status(200).json({msg: "A Order was deleted."});
        })
    }

}
// Export User class
module.exports = {
    User, 
    Product,
    Category,
    Order
}
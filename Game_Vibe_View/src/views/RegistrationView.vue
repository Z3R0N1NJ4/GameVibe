<template>
  <br>
    <div class="register">
      <h1 class="main1"><b>Register</b></h1>
        
    
    <div class="card w-auto">
  <div class="card-header">
    <div class="text-header"><b>Register Form</b></div>
  </div>
  <div class="card-body">
    <form action="#">
      <div class="form-group">
        <label for="username"><p class="main">First Name:</p></label>
        <input required class="form-control" name="username" id="username" type="text">
      </div>
      <div class="form-group">
        <label for="email"><p class="main">Second Name:</p></label>
        <input required class="form-control" name="email" id="email" type="email">
      </div>
      <div class="form-group">
        <label for="password"><p class="main">Gender:</p></label>
        <input required class="form-control" name="password" id="password" type="password">
      </div>
      <div class="form-group">
        <label for="confirm-password"><p class="main">Cell Number:</p></label>
        <input required class="form-control" name="confirm-password" id="confirm-password" type="password">
      </div>
      <div class="form-group">
        <label for="confirm-password"><p class="main">Email:</p></label>
        <input required class="form-control" name="confirm-password" id="confirm-password" type="password">
      </div>
      <div class="form-group">
        <label for="confirm-password"><p class="main">Password:</p></label>
        <input required class="form-control" name="confirm-password" id="confirm-password" type="password">
      </div>
     <input type="submit" class="btn" value="submit">    
    </form>
  </div>
</div>
</div>

</template>
<style>
.register{
    margin-top: -2%;
}

.card {
  border: 2px solid #ccc;
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
  justify-content: center;
  margin-left: 15%;
  margin-right: 15%;
}

.card-header {
  background-color: #333;
  padding: 16px;
  text-align: center;
}

.card-header .text-header {
  margin: 0;
  font-size: 18px;
  color: rgb(255, 255, 255);
}

.card-body {
  padding: 16px;
  max-width: 100% !important;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-bottom: 1px;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="password"] {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer
}

.btn:hover {
  background-color: #ccc;
  color: #333;
}

.register{
  background-image: url(../assets/picture2.jpg);
  max-width: 100%;
  padding-bottom: 2%;
}
.main{
  color: black;
  font-weight: bold;
  font-size: large;
}
.main1{
  padding-top: 1%;
  color: white;
  font-weight: bold;
}
</style>
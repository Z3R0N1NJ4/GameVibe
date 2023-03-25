<template>
<div class="top-header">
  
      <div class="first_nav"></div>
        <i class="nav_text">
          <img class="icon_2" src="https://img.icons8.com/ios/50/null/paper-plane--v1.png"/>Free Shipping On All Orders </i> 
          <i class="nav_text_2"><b>Track Order |</b><img class="icon_2" src="https://img.icons8.com/ios/50/null/order-on-the-way.png"/></i>

          <class class="nav_text">Follow Us | <span class="icon__fallback-text">Facebook<img class="icon_2" src="https://img.icons8.com/fluency/48/null/facebook-new.png"/>

        </span>|<span class="icon__fallback-text">Instagram<img class="icon_2" src="https://img.icons8.com/color/48/null/instagram-new--v1.png"/></span></class></div>

      <h4 class="logo">Eat Sleep Game Repeat!!!</h4>

          <div class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand text-body-emphasis" href="#"><img class="icon" src="../assets/icons8-gaming-60.png"/>Game Zone</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link" href="#">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/products" class="nav-link" href="#">Products</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/admin" class="nav-link" href="#">Admin</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/login" class="nav-link" href="#">Login</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/register" class="nav-link" href="#">Register</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
</template>
<script>

export default {
  name: 'navbar_Com'
}

</script>
<style>

.nav-link{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow';
  font-size: 17px;
  font-weight: 500;
  border-radius: 12px;
  animation: color-nav 15s infinite !important;
}
@keyframes color-nav {
  20% { color: rgb(58, 232, 42); }
  
  40% { color: rgb(42, 124, 224) } 

  100% { color: rgb(236, 19, 26); }
}

.nav-link:hover{
  
  transform: scale(1.05);
  transition: transform .7s;
}

.nav-item{
  margin-left: 5%;
  margin-right: 5%;
}

.icon_2{
  width: 20px;
}

.top-header{
  font-size: 15px;
}

#navbarNav{
  margin-left: 50%;
}

.icon{
  width: 30px;
  padding-bottom: 5px;
}

.navbar-brand{
  margin-left: 1%;
  font-size: 20px;
} 

.logo{
  padding: 15px 15px;
  font-size: 20px;
  animation: color-change 15s infinite;
}

@keyframes color-change {
  20% { color: rgb(58, 232, 42); }
  
  40% { color: rgb(42, 124, 224) } 

  100% { color: rgb(236, 19, 26); }
}
</style>
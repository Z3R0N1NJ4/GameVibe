
<template>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/picture.jpg"
           class="d-block w-100" alt="">
          <div class="carousel-caption d-none d-md-block">
            <button class="button"><router-link class="route" to="/products">Shop Now</router-link></button>
            <p>Apex Legends: Revelry. Drop in and be legendary with new Team Deathmatch, remastered Legend classes, the Nemesis rifle and more!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/pxfuel4.jpg" class="d-block w-100" alt="">
          <div class="carousel-caption d-none d-md-block">
            <button class="button"><router-link class="route" to="/products">Shop Now</router-link></button>
            <p>Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/pxfuel5.jpg" class="d-block w-100" alt="">
          <div class="carousel-caption d-none d-md-block text-dark">
            <button class="button"><router-link class="route" to="/products">Shop Now</router-link></button>
            <p>FIFA Online 4 an exciting free-to-play football MMO, the sequel to 2012's FIFA Online 3.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

  </div>

  <p class="p">"Game Zone is the home of games, gadgets and everything in between, get the latest devices and games or build up your collection with with our dated titles, with many genres to choose it's hard to buy everything, enjoy shopping"</p>

</template>

<script>
export default {
  name: 'HomeView',

  methods: {
    toLogin(){
      this.$router.push("../views/LoginView.vue");
    }
  }
}


</script>

<style >
.carousel{
 height: 30%;
}

.button {
  border: none;
  color: whitesmoke;
  padding: 5px 15px;
  text-align: center;
  display: inline-block;
  font-size: 15px;
  margin-bottom: .5%;
}

.route{
  color: black;
  text-decoration: none;
}

.p{
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style:inherit;
  font-weight: 500;
  font-size: 24px;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 2%;
  margin-bottom: 2%;
  animation: color-nav 15s infinite !important;
}
@keyframes color-nav {
  20% { color: rgb(58, 232, 42); }
  
  40% { color: rgb(42, 124, 224) } 

  100% { color: rgb(236, 19, 26); }
}
</style>

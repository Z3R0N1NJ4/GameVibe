<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3>Contact Us</h3>
          <p>314 Imam Haron Rd, Lansdowne</p>
          <p>Cape Town, 7780</p>
          <p>Phone: 071 415 9017<br> 064 786 7876</p>
          <p>Email: www.breakerbreaker19@gmail.com</p>
        </div>
        
      </div>
    </div>
  

  <div id="carouselExample" class="carousel slide working">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://i.postimg.cc/C5X3rTjv/pxfuel-10.jpg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="https://i.postimg.cc/QMK0S96r/pxfuel-9.jpg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="https://i.postimg.cc/pd1yVyxy/pxfuel-8.jpg" class="d-block w-100">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer_Com',
};
</script>

<style>
.footer {
    padding: 50px 0;
    background-color: whitesmoke;
    justify-content: center;
    display: flex;
}

.footer h3 {
  margin-bottom: 20px;
  font-weight: bold;
  text-align: right;
  color: black;
}

.footer p {
  margin-bottom: 10px;
  text-align: right;
  color: black;
}

.footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: right;
}

.footer ul li {
  margin-bottom: 10px;
  text-align: right;
  color: black;
}

.footer form {
  margin-top: 20px;
  text-align: right;
}

.carousel-item{
 height: 20%;
}
</style>

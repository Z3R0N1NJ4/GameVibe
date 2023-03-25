<template>
  <form class="login">
    <div class="mb-3 w-25 text-light w-auto">
      <label for="exampleInputEmail1" class="form-label text-light mt-4">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3 w-25 text-light w-auto">
      <label for="exampleInputPassword1" class="form-label text-light">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check w-25 text-light w-auto">
      <label class="form-check-label" for="exampleCheck1"></label>
    </div>
    <button type="submit" class="btn btn-dark text-light">Submit</button>
  </form>

</template>
<style>

.mb-3{
  margin-left: 15%;
  margin-right: 15%;
}

.btn{
  margin-bottom: 2%;
}

.login{
  background-image: url(../assets/pxfuel3.jpg);
}

</style>
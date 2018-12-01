<template>
  <form class="register-form">
    <div class="form-group pull-left">
      <label for="username">User Name</label>
      <input type="text" class="form-control" id="username" placeholder="Username">
    </div>

    <div class="form-group pull-left">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <div class="form-group pull-left">
      <label for="user-password">Password</label>
      <input type="password" class="form-control" id="user-password" placeholder="Password">
    </div>

    <div class="form-group pull-left">
      <label for="confirm-password">Confirm Password</label>
      <input type="password" class="form-control" id="confirm-password" placeholder="Password">
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>

</script>

<style lang="scss" scoped>
  .register-form {
    width: 340px;
    margin: 30px auto;
  }

  .pull-left {
    text-align: start;
  }
</style>

<template>
  <div class="login-form">
    <form @submit.prevent.stop>
      <h2 class="text-center">One Team</h2>
      <div class="text-center social-btn">
        <a
          href="http://localhost:8081/auth/google"
          class="btn btn-danger btn-block"
          @click=socialLogin
        >
          <i class="fa fa-google"></i> Sign in with <b>Google</b>
        </a>
      </div>

      <div class="or-seperator"><i>or</i></div>

      <div class="form-group">
        <div class="input-group">
          <span class="input-group-addon">
            <i class="fa fa-user"></i>
          </span>
          <input
            type="text"
            class="form-control"
            v-model="username"
            name="username"
            placeholder="Username"
            required="required"
          >
        </div>
      </div>

      <div class="form-group">
        <div class="input-group">
          <span class="input-group-addon">
            <i class="fa fa-lock"></i>
          </span>
          <input
            type="password"
            class="form-control"
            v-model="password"
            name="password"
            placeholder="Password"
            required="required"
          >
        </div>
      </div>

      <div class="form-group">
        <button
          type="submit"
          class="btn btn-success btn-block login-btn"
          @click="onSignIn"
        >Sign in</button>
      </div>

    </form>

    <div class="hint-text small">
      Don't have an account?
      <a class="text-success" @click=navToRegister>Register Now!</a>
    </div>

  </div>
</template>

<script>
import _ from 'lodash';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    ...mapGetters(['users']),
  },
  methods: {
    ...mapActions([
      'socialAuth',
      'updateCurrentUser',
      'updateLoginState',
    ]),
    socialLogin() {
      this.socialAuth();
    },
    navToRegister() {
      this.$router.push({ name: 'Register' });
    },
    onSignIn() {
      const registeredUser = _.find(this.users, (user) => {
        return (
          user.username === this.username &&
          user.password === this.password
        );
      });

      if (registeredUser) {
        this.updateLoginState('NORMAL');
        this.updateCurrentUser(registeredUser);
        this.$router.push({ name: 'TaskDetails' });
      }
      else {
        alert('User does not exist, please register and sign in!');
      }
    },
  },
};
</script>

<style scoped>
  .login-form {
    width: 340px;
    margin: 30px auto;
  }
  .login-form form {
    margin-bottom: 15px;
    background: #f7f7f7;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 30px;
  }
  .login-form h2 {
    margin: 0 0 15px;
  }
  .login-form .hint-text {
    color: #777;
    padding-bottom: 15px;
    text-align: center;
  }
  .form-control, .btn {
    min-height: 38px;
    border-radius: 2px;
  }
  .login-btn {
    font-size: 15px;
    font-weight: bold;
  }
  .or-seperator {
    margin: 20px 0 10px;
    text-align: center;
    border-top: 1px solid #ccc;
  }
  .or-seperator i {
    padding: 0 10px;
    background: #f7f7f7;
    position: relative;
    top: -11px;
    z-index: 1;
  }
  .social-btn .btn {
    margin: 10px 0;
    font-size: 15px;
    text-align: left;
    line-height: 24px;
  }
  .social-btn .btn i {
    float: left;
    margin: 4px 15px  0 5px;
    min-width: 15px;
  }
  .input-group-addon .fa{
    font-size: 18px;
  }

  .text-success {
    cursor: pointer;
  }
</style>

<template>
  <nav class="navbar navbar-light bg-light">
    <a
      v-if="displayUserInfo"
      class="navbar-brand"
      href="#"
    >
      {{ userName }}
      <img
        :src="img"
        width="30"
        height="30"
        class="d-inline-block align-top user-img"
        alt=""
      >
    </a>
    <a
      v-if="displayUserInfo"
      class="navbar-brand logout"
      href="http://localhost:8081/logout"
    >Logout</a>
  </nav>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'NavBar',
  data() {
    return {
      userName: '',
      img: '',
    };
  },
  mounted() {
    const { img = '', userName = '' } = this.$route.query;
    this.updateLoginProfile({ img, userName });
  },
  computed: {
    displayUserInfo() {
      const { img = '', userName = '' } = this;
      return !_.isEmpty(userName) || !_.isEmpty(img);
    },
  },
  methods: {
    updateLoginProfile({ img, userName }) {
      this.userName = userName;
      this.img = img;
    },
  },
};
</script>

<style lang="scss" scoped>
  .navbar {
    height: 30px;
    padding: 20px 0;
    display: flex;
    justify-content: flex-end;
  }

  .user-img {
    border-radius: 50%;
  }

  .logout {
    color: #000;
    padding: 0 10px;
    &:hover {
      text-decoration: none;
      background-color: #f2f2f2;
    }
  }
</style>

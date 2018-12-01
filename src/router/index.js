import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Board from '@/components/Board';
import Posts from '@/components/Posts';
import NewPost from '@/components/NewPost';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost,
    },
    {
      path: '/board',
      name: 'Board',
      component: Board,
    },
  ],
});

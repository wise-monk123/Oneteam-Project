import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Board from '@/components/board/Board';
import NewTask from '@/components/board/NewTask';
import ManageTasks from '@/components/board/ManageTasks';
import EditTask from '@/components/board/EditTask';
import TaskDetails from '@/components/board/TaskDetails';

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
      children: [
        {
          path: '/',
          name: 'TaskDetails',
          component: TaskDetails,
        },
        {
          path: '/new',
          name: 'NewTask',
          component: NewTask,
        },
        {
          path: '/tasks',
          name: 'ManageTasks',
          component: ManageTasks,
        },
        {
          path: '/tasks/:id',
          name: 'EditTask',
          component: EditTask,
        },
      ],
    },
  ],
});

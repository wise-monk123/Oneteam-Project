import api from '@/services/api';

export default {
  fetchPosts() {
    return api.get({ url: 'posts' });
  },

  addPost(params) {
    return api.post({ url: 'posts', params });
  },
};

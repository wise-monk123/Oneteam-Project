<template>
  <div class = "managetask-view">
    <table>
      <tr>
        <td width="200">Task ID</td>
        <td width="550">Description</td>
        <td width="200">Status</td>
        <td width="100" align="center">Action</td>
      </tr>
      <tr v-for="task in items" :key="task._id">
        <td>#T{{ task.itemId }}</td>
        <td>{{ task.text }}</td>
        <td>{{ task.status }}</td>
        <td align="center">
          <router-link :to="{ name: 'EditTask', params: { id: task._id } }">Edit</router-link> |
          <a href="#" @click="onDelete(task)">Delete</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ManageTasks',
  mounted () {
    this.fetchTasks();
  },
  methods: {
    ...mapActions(['fetchTasks', 'deleteTask']),
    async onDelete(item) {
      await this.deleteTask(item);
      this.fetchTasks();
    },
  },
  computed: {
    ...mapGetters(['items']),
  },
};
</script>

<style lang="scss" scoped>
  table-wrap {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
  table {
    width: 100%;
  }
  table th, table tr {
    text-align: left;
  }
  table thead {
    background: #f2f2f2;
  }
  table tr td {
    padding: 10px;
  }
  table tr:nth-child(odd) {
    background: #f2f2f2;
  }
  table tr:nth-child(1) {
    background: #4d7ef7;
    color: #fff;
  }
  a {
    color: #4d7ef7;
    text-decoration: none;
  }
  a.add_post_link {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
</style>

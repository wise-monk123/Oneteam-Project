<template>
  <div class="tasks">
    <h1>Edit Task</h1>
    <form>
      <div class="form-group">
        <label for="taskDescription">Task Descriptions</label>
        <input
          v-model="text"
          type="text"
          class="form-control"
          id="taskDescription"
          placeholder="Enter Task Descriptions"
        >
      </div>
      <div class="form-group">
        <label for="taskStatus">Task Status</label>
        <select
          v-model="status"
          class="form-control"
          id="taskStatus"
        >
          <option value="todo">Todo</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <button class="btn btn-primary" @click="onClickUpdate">Update</button>
    </form>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'EditTask',
  data () {
    return {
      id: '',
      text: '',
      status: '',
    };
  },
  mounted() {
    this.editItem();
  },
  methods: {
    ...mapActions(['updateTask']),
    onClickUpdate() {
      this.updateTask({
        _id: this.id,
        text: this.text,
        status: this.status,
      });
      this.navToManageTask();
    },
    navToManageTask() {
      this.$router.push({ name: 'ManageTasks' });
    },
    editItem() {
      const { id } = this.$route.params;
      const target = _.find(this.items, (item) => item._id === id);

      this.text = target.text || '';
      this.status = target.status || '';
      this.id = target._id || '';
    },
  },
  computed: {
    ...mapGetters(['items']),
  },
};
</script>

<style lang="scss" scoped>
  .form input,
  .form textarea {
    width: 500px;
    padding: 10px;
    border: 1px solid #e0dede;
    outline: none;
    font-size: 12px;
  }
  .form div {
    margin: 20px;
  }
  .app_post_btn {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    width: 520px;
    border: none;
    cursor: pointer;
  }
  .tasks {
    width: 30%;
    margin: auto;
  }
</style>

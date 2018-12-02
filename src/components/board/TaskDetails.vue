<template>
  <div class="board">
    <div class="row">
      <div class="col-md">
        <task-lane id="todo" title="To-Do" :items="todoItems"></task-lane>
      </div>
      <div class="col-md">
        <task-lane id="inProgress" title="In progress" :items="inProgressItems"></task-lane>
      </div>
      <div class="col-md">
        <task-lane id="done" title="Done" :items="doneItems"></task-lane>
      </div>
    </div>
  </div>
</template>

<script>
import TaskLane from '@/components/board/TaskLane';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TaskDetails',
  components: {
    TaskLane,
  },
  mounted() {
    this.fetchTasks();
  },
  methods: {
    ...mapActions(['fetchTasks']),
  },
  computed: {
    ...mapGetters([
      'items',
      // 'todoItems',
      // 'inProgressItems',
      // 'doneItems',
    ]),
    todoItems() {
      return _.filter(this.items, item => item.status === 'todo');
    },
    inProgressItems() {
      return _.filter(this.items, item => item.status === 'inProgress');
    },
    doneItems() {
      return _.filter(this.items, item => item.status === 'done');
    },
  },
};
</script>

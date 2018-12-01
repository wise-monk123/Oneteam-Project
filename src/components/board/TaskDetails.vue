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

export default {
  name: 'TaskDetails',
  components: {
    TaskLane,
  },
  data() {
    return {
      todoItems: [
        { itemId: '1', itemText: 'item', status: 'todo' },
        { itemId: '2', itemText: 'item', status: 'todo' },
      ],
      inProgressItems: [
        { itemId: '3', itemText: 'item', status: 'inProgress' },
        { itemId: '4', itemText: 'item', status: 'inProgress' },
      ],
      doneItems: [
        { itemId: '5', itemText: 'item', status: 'done' },
        { itemId: '6', itemText: 'item', status: 'done' },
      ],
    };
  },
};
</script>

<style>

</style>

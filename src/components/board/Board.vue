<template>
  <div id="board">

    <div class="page-header">
      <h1>One Team Board</h1>
    </div>
    <menu-bar></menu-bar>

    <router-view />
  </div>
  <!-- <div class="board">
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
  </div> -->
</template>

<script>
import MenuBar from '@/components/MenuBar'
import { mapState } from 'vuex';
// import TaskLane from './TaskLane'

export default {
  name: 'Board',
  components: {
    MenuBar,
  },
  // computed: mapState({
  //   todoItems: s => s.items.todo,
  //   inProgressItems: s => s.items.inProgress,
  //   doneItems: s => s.items.done
  // }),
};
</script>

<style lang="scss" scoped>
  .page-header h1 {
    font-weight: 300;
  }

  .card {
    margin-bottom: 10px;
  }

  .card:last-child {
    margin-bottom: 25px;
  }

  .card-block {
    padding: 15px;
  }
</style>

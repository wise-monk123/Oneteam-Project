<template>
  <div class="card task-lane-item">
    <div class="card-block">
      <h5 class="card-title">
        <span class="text-muted">#T{{item.itemId}}</span>
        {{item.text}}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskLaneItem',
  props: {
    item: {
      type: Object,
      default: (() => {}),
    },
  },
};
</script>

<style>
  .card.task-lane-item {
    background: #70d662;
    margin: 10px auto;
  }
</style>

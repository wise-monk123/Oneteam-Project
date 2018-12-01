<template>
  <div class="card">
    <h3 class="card-header">{{ title }}</h3>
    <div class="card-body">
      <draggable v-model="draggables" :options="{ group: 'default' }">
        <div v-for="item in items" :key="item.id">
          <lane-item :item="item"></lane-item>
        </div>
      </draggable>
    </div>
    <div class="card-footer text-muted">
      {{ itemCount }}
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable';
import TaskLaneItem from '@/components/board/TaskLaneItem';

export default {
  name: 'TaskLane',
  props: {
    items: {
      type: Array,
      default: [],
    },
    title: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      draggables: [],
    };
  },
  components: {
    laneItem: TaskLaneItem,
    draggable: Draggable,
  },
  computed: {
    itemCount () {
      if (!this.items) return '';
      if (this.items.length === 1) return '1 task';
      return `${this.items.length} tasks`;
    },
  },
};
</script>

<style>
  .card-body > * {
    min-height: 50px
  }
</style>

<template>
  <div class="card">
    <h3 class="card-header">{{ title }}</h3>
    <div class="card-body">
      <draggable v-model="draggableItems" :options="{ group: 'default' }">
        <div v-for="item in draggableItems" :key="item.id">
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
import { mapActions } from 'vuex';
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
      draggableItems: [],
    };
  },
  components: {
    laneItem: TaskLaneItem,
    draggable: Draggable,
  },
  watch: {
    items: 'initialList',
    draggableItems: 'updateList'
  },
  methods: {
    ...mapActions(['updateItemsStatus']),
    initialList() {
      this.draggableItems = this.items;
    },
    updateList(laneItems) {
      this.updateItemsStatus({
        laneItems,
        status: this.id,
      });
    },
  },
  computed: {
    itemCount() {
      if (!this.draggableItems) return '';
      if (this.draggableItems.length === 1) return '1 task';
      return `${this.draggableItems.length} tasks`;
    },
  },
};
</script>

<style>
  .card-body > * {
    min-height: 50px
  }
</style>

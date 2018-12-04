<template>
  <div class="newtask-view">
    <new-item-form></new-item-form>
    <div class="card" v-for="item in items" :key="item.id">
      <div class="card-block">
        <h5 class="card-title">
          <span class="text-muted">#T{{ item.id }}</span>
            {{ item.itemText }}
          <span :class="badgeClass(item)">{{ badgeText(item) }}</span>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NewItemForm from '@/components/board/NewItemForm';

export default {
  name: 'NewTask',
  components: {
    NewItemForm,
  },
  computed: {
    ...mapGetters([
      'todoItems',
      'inProgressItems',
      'doneItems',
    ]),
    items() {
      const { todoItems, inProgressItems, doneItems } = this;

      return [
        ...todoItems,
        ...inProgressItems,
        ...doneItems,
      ];
    },
  },
  methods: {
    itemStatus(item) {
      if (this.items.todo.includes(item)) {
        return 'todo';
      } else if (this.items.inProgress.includes(item)) {
        return 'inProgress';
      }
      return 'done';
    },
    badgeText(item) {
      let displayText = '';
      switch (item.status) {
        case 'todo':
          displayText = 'todo';
          break;
        case 'inProgress':
          displayText = 'in progress';
          break;
        case 'done':
          displayText = 'done';
          break
        default: break;
      }

      return displayText;
    },
    badgeClass(item) {
      let className = '';
      switch (item.status) {
        case 'todo':
          className = 'badge badge-light';
          break;
        case 'inProgress':
          className = 'badge badge-info';
          break;
        case 'done':
          className = 'badge badge-success';
          break
        default: break;
      }
      return className;
    }
  }
};
</script>

<style lang="scss" scoped>
  .newtask-view {
    width: 80%;
    margin: auto;

    .card {
      margin: 10px 0;
      text-align: left;

      .card-title {
        margin: 10px;
      }
    }
  }
</style>

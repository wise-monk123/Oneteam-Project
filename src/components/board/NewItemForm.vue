<template>
  <div class="add-item">
    <form action="#" method="post" @submit.prevent="submitForm">
      <input type="text" v-model="itemText" placeholder="Add something to the task">
    </form>
  </div>
</template>
<script>
export default {
  name: 'NewItemForm',
  data () {
    return {
      itemText: ''
    };
  },
  methods: {
    submitForm () {},
  },
};
</script>

<style>
.add-item input {
  outline: none;
  border: 0;
  border-bottom: 1px solid rgba(76, 0, 255, 0.5);
  width: 100%;
  transition: all 0.25s;
  background: inherit;
  color: black;
}
.add-item input:focus {
  border-bottom-color: rgb(0, 255, 21);
}
</style>

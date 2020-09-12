<template>
  <li>
    <span v-bind:class="{done: task.completed}">
      <!-- условие добавления класса done-->
      <input type="checkbox" @change="task.completed = !task.completed" />
      <strong>{{ index + 1 }}</strong>
      {{ task.title }}
    </span>
    <button class="remove" @click="$emit('remove-task', task.id)"></button>
  </li>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: {
      type: Object,
      required: true,
    },
    index: Number,
  },
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  margin-bottom: 10px;
}

input {
  margin-right: 10px;
}

.remove {
  background-image: url(../images/delete-icon.png);
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background-color: white;
}

.done {
  text-decoration: line-through;
}
</style>
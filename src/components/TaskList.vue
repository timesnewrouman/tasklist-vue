<template>
  <div>
    <ul>
      <Task 
      v-for="(task, i) of tasks"
       v-bind:task="task" 
       v-bind:index="i" 
       @remove-task="removeTask" />
    </ul>
  </div>
</template>

<script>
import Task from "./Task";

export default {
  name: "TaskList",
  props: ["tasks"],
  components: {
    Task,
  },
  methods: {
    removeTask(id) {
      this.$emit("remove-task", id);
    },
  },
};
</script>

<style>
</style>
<template>
  <div class="main">
    <AddTask @add-task="addTask" />
    <TaskList v-bind:tasks="tasks" @remove-task="removeTask" />
  </div>
</template>

<script>
import TaskList from "@/components/TaskList";
import AddTask from "@/components/AddTask";

export default {
  name: "Home",
  data() {
    return {
      tasks: [
        { id: 1, title: "xxx", completed: false },
        { id: 2, title: "yyy", completed: false },
        { id: 3, title: "zzz", completed: false },
      ],
    };
  },
  components: {
    TaskList,
    AddTask,
  },
  methods: {
    removeTask(id) {
      this.tasks = this.tasks.filter((x) => x.id !== id);
    },
    addTask(task) {
      this.tasks.push(task);
    },
  },
};
</script>

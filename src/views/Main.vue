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
        { id: 1, title: "Сходить в магазин", completed: false },
        { id: 2, title: "Постирать джинсы", completed: false },
        { id: 3, title: "Погладить рубашку", completed: false },
        { id: 4, title: "Помыть посуду", completed: false },
        { id: 5, title: "Приготовить ужин", completed: false },
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

<template>
  <div class="main">
    <AddTask @add-task="addTask" />
    <Loader v-if="loading" />
    <TaskList v-else-if="tasks.length" v-bind:tasks="tasks" @remove-task="removeTask" />
    <p v-else>Список пуст</p>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList";
import AddTask from "@/components/AddTask";
import Loader from "@/components/Loader";

export default {
  name: "TasksForYear",
  data() {
    return {
      tasks: [],
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.tasks = [
        { id: 1, title: "Пополнить ИИС на 500000 рублей", completed: false },
        { id: 2, title: "Сделать ремонт кухни", completed: false },
        { id: 3, title: "Спланировать летнюю поездку в Барселону", completed: false },
        { id: 4, title: "Выбрать дизайн для бани на дачу", completed: false },
        { id: 5, title: "Купить новый телефон", completed: false },
        { id: 6, title: "Купить новый матрас", completed: true },
        { id: 7, title: "Поменять окна", completed: true },
      ];
      this.loading = false;
    }, 500);
  },
  components: {
    TaskList,
    AddTask,
    Loader,
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

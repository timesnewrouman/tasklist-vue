<template>
  <div class="tasksforyear">
    <AddTask @add-task="addTask" />
    <select class="select" v-model="filter">
      <option value="all">Все задачи</option>
      <option value="completed">Выполненные задачи</option>
      <option value="not-completed">Невыполненные задачи</option>
    </select>
    <Loader v-if="loading" />
    <TaskList
      v-else-if="filteredTasks.length"
      v-bind:tasks="filteredTasks"
      @remove-task="removeTask"
    />
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
      filter: "all",
    };
  },
  mounted() {
    setTimeout(() => {
      this.tasks = [
        { id: 1, title: "Пополнить ИИС на 500000 рублей", completed: false },
        { id: 2, title: "Сделать ремонт кухни", completed: false },
        {
          id: 3,
          title: "Спланировать летнюю поездку в Барселону",
          completed: false,
        },
        { id: 4, title: "Выбрать дизайн для бани на дачу", completed: false },
        { id: 5, title: "Купить новый телефон", completed: false },
        { id: 6, title: "Купить новый матрас", completed: true },
        { id: 7, title: "Поменять окна", completed: true },
      ];
      this.loading = false;
    }, 1000);
  },
  computed: {
    filteredTasks() {
      if (this.filter === "all") {
        return this.tasks;
      }

      if (this.filter === "completed") {
        return this.tasks.filter((x) => x.completed);
      }

      if (this.filter === "not-completed") {
        return this.tasks.filter((x) => !x.completed);
      }
    },
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

<style>
.tasksforyear {
  position: relative;
}

.select {
  position: absolute;
  padding: 1px;
  top: 0;
  right: 0;
}
</style>

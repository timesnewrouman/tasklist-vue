<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <button type="submit">Добавить</button>
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTask = {
          title: this.title,
          completed: false,
        };
        this.$emit("add-task", newTask);
        this.title = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input {
  width: 400px;
}
</style>
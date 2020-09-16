<template>
  <div>
    <ul>
      <li v-for="task in tasks" v-bind:task="task" v-bind:key="task.id">
        <span v-bind:class="{ done: task.completed }">
          <input
            type="checkbox"
            @change="task.completed = !task.completed"
            v-bind:checked="task.completed"
          />
          <strong>{{ task.id }}</strong>
          {{ task.title }}
        </span>
        <button class="remove" @click="$emit('remove-task', task.id)"></button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  props: {
    tasks: {
      task: {
        type: Object,
        required: true,
        id: Number,
      },
    },
  },
};
</script>

<style scoped>
ul {
  padding: 0;
}

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
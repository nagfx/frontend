<template>
  <div class="main">
    <div class="todo-container">
      <h1>My Todo List</h1>
      <ToDoControls
        @todo-item="(val) => addItem(val)"
        @select-tab="(val) => (selectedTab = val)"
      />
      <div v-for="(item, key) in todoItems" :key="key">
        <span :class="`todo-item ${item.completed ? 'line-through' : null}`">
          <input type="checkbox" v-model="item.completed" />
          {{ item.name }}
        </span>
        <i class="fa-solid fa-trash-can" @click="removeItem(item.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoControls from "@/components/ToDoControls.vue";
import { useToDoStore } from "@/stores/todo.js";
import { mapState, mapActions } from "pinia";

export default {
  components: { ToDoControls },
  data() {
    return {
      selectedTab: "all",
    };
  },
  methods: {
    ...mapActions(useToDoStore, ["addItem"]),
    ...mapActions(useToDoStore, ["removeItem"]),
  },
  computed: {
    ...mapState(useToDoStore, ["items"]),
    ...mapState(useToDoStore, ["completed"]),
    ...mapState(useToDoStore, ["uncompleted"]),
    todoItems() {
      switch (this.selectedTab) {
        case "all":
          return this.items;
        case "uncompleted":
          return this.uncompleted;
        case "completed":
          return this.completed;
      }
    },
  },
};
</script>

<style>
div.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

div.todo-container {
  background: #fff;
  border-radius: 15px;
  padding: 45px;
}

body {
  background: #eee;
}

.todo-item {
  width: 180px;
  display: inline-block;
  margin: 4px;
}
.line-through {
  text-decoration: line-through;
  color: gray;
}

h1 {
  text-align: center;
}
</style>

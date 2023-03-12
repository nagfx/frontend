import { defineStore } from "pinia";

export const useToDoStore = defineStore({
  id: "todo",
  state: () => ({
    items: [
      { id: 1, name: "Do exercise 1", completed: false },
      { id: 2, name: "Do cooking", completed: true },
      { id: 3, name: "Do work", completed: false },
    ],
  }),
  getters: {
    completed() {
      return this.items.filter((obj) => obj.completed);
    },
    uncompleted() {
      return this.items.filter((obj) => !obj.completed);
    },
  },
  actions: {
    addItem(item) {
      if (item) {
        let obj = { id: this.items.length + 1, name: item, completed: false };
        this.items.push(obj);
      }
    },
    removeItem(id) {
      this.items = this.items.filter((obj) => {
        return obj.id !== id;
      });
    },
  },
});

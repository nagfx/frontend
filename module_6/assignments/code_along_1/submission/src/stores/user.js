import { defineStore } from "pinia";

export const userStore = defineStore({
  id: "users",
  state: () => ({
    users: [
      {
        id: 1,
        name: "Naman",
        role: "Software Engineer",
      },
      {
        id: 2,
        name: "Vikram",
        role: "Web developer",
      },
      {
        id: 3,
        name: "Khezer",
        role: "Office tea boy",
      },
    ],
    permissions: [
      {
        read: true,
        write: false,
        delete: true,
      },
    ],
  }),
});

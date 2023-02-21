<script setup>
import { userStore } from "./stores/user";
const store = userStore();
console.log(userStore());
</script>

<template>
  <div v-for="(user, key) in store.users" :key="key">
    <p>Name - {{ user.name }}</p>
    <p>Role - {{ user.role }}</p>
    <br />
  </div>
  <div v-for="(permission, key) in store.permissions" :key="key">
    <p>Write permission is - {{ permission.write }}</p>
    <p>Read permission is - {{ permission.read }}</p>
    <p>Delete permission is - {{ permission.delete }}</p>
  </div>
</template>

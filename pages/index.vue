<script setup lang="ts">
import { useUserStore } from '~/store/user';

const userStore = useUserStore();

const toggleLogin = () => {
  if (userStore.user) {
    userStore.reset()
  } else {
    userStore.login()
  }
}
</script>

<template>
  <p>home page</p>

  <button @click="toggleLogin">{{ !userStore.user ? 'Login' : 'Logout' }}</button>
  <NuxtLink to="/settings">To Settings</NuxtLink>
</template>

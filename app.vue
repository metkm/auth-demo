<script setup lang="ts">
import { useUserStore } from './store/user';

const userStore = useUserStore();

if (userStore.user) {
  const { data, error } = await useAsyncData(async () => {
    return await userStore.refresh();
  });

  if (error.value) {
    userStore.reset();
  } else if (data.value) {
    userStore.user = data.value;
  }
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

import { useUserStore } from "../store/user";

export default defineNuxtRouteMiddleware(async () => {
  const userStore = useUserStore();

  const { data, error } = await useAsyncData(async () => {
    if (!userStore.user) return;
    return await userStore.refresh();
  });

  if (error.value) {
    userStore.reset();
  } else if (data.value) {
    userStore.user = data.value;
  }
});

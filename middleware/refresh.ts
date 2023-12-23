import { useUserStore } from "../store/user"

export default defineNuxtRouteMiddleware(async () => {
  const userStore = useUserStore();

  if (userStore.user) {
    const { data, error } = await useAsyncData(() => userStore.refresh());

    if (error.value) {
      userStore.reset();
    } else if (data.value) {
      userStore.user = data.value;
    }
  }
})

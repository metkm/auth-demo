import { useUserStore } from "../store/user"

export default defineNuxtRouteMiddleware(async () => {
  const userStore = useUserStore();

  if (!userStore.user) {
    return navigateTo("/login");
  }
})

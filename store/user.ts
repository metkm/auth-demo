export const useUserStore = defineStore("user", () => {
  const user = ref<{ id: number }>();

  const login = () => {
    user.value = { id: 1 };
  }

  const refresh = async () => {
    console.log("refreshing user");
    console.log("updating the store");
  }

  const reset = () => {
    user.value = undefined;
  }

  return {
    user,
    refresh,
    reset,
    login,
  }
})

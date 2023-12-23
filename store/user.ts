export const useUserStore = defineStore("user", () => {
  const user = ref<any>();

  const getUser = async () => {
    const response = await $fetch<any>("https://randomuser.me/api/");
    return response.results[0].name.first;
  }

  const login = async () => {
    user.value = await getUser();
  }

  const refresh = async () => {
    const newUser = await getUser();
    user.value = newUser;

    return newUser;
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
}, {
  persist: true
})

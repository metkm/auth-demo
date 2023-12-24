<script setup lang="ts">
import { useUserStore } from "~/store/user";
import { z } from "zod";

const userStore = useUserStore();

const toggleLogin = () => {
  if (userStore.user) {
    userStore.reset();
  } else {
    userStore.login();
  }
};

enum TestEnum {
  Admin,
  Customer,
}

const ResponseSchema = z.object({
  hello: z.string().nullable(),
  snakeCase: z.string(),
});

const snakeToCamel = (str: string) =>
  str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace("-", "").replace("_", "")
    );

const camelCase = (obj: object) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[snakeToCamel(key)] = value;
    return acc;
  }, {} as Record<string, any>);
};

const { data } = useFetch("/api/test");

if (data.value) {
  const response = ResponseSchema.parse(camelCase(data.value));
  console.log(response);
}
</script>

<template>
  <p>home page</p>
  <p>{{ userStore.user }}</p>

  <button @click="toggleLogin">
    {{ !userStore.user ? "Login" : "Logout" }}
  </button>
  <NuxtLink to="/settings">To Settings</NuxtLink>
</template>

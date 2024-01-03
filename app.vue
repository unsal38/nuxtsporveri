<template>
  <NuxtPage />
</template>

<script setup lang="ts">
//import {useUserStore} from "~~/stores/db.ts"

const { status, data, signIn, signOut } = useAuth();
$fetch("/api/antr.users.check.db").then(async (res) => {
  if (res === false) await signOut();
  if (res === true) {
    useUserStore();
    useAntrUserStore();
  }
});
</script>
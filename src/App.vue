<script setup>
import { onMounted } from "vue";
import Header from "@/components/layout/header.vue";

console.log("created App");

onMounted(() => {
  console.log("mounted App");
});
</script>
<template>
  <div>
    <Header />
    <RouterView />
  </div>
</template>

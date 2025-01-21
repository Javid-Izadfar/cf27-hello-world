<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

console.log("created Header");
onMounted(() => {
  console.log("mounted Header");
});

const goHome = () => {
  router.replace("/");

  console.log("please Go Home");
};
</script>
<template>
  <div class="flex">
    <button @click="goHome">Go Back Home</button>
    <nav>SpaceX</nav>
  </div>
</template>
<style lang="css" scoped>
.flex {
  display: flex;
}
nav {
  flex-grow: 1;
  text-align: center;
  font-weight: bold;
}
</style>

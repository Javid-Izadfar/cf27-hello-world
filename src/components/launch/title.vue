<script setup>
defineProps(["name", "logo"]);

// import useCount from "@/compositions/count";

// const { add, count } = useCount();

import useStoreCount from "@/stores/count";
import { computed } from "vue";
const { add } = useStoreCount();

const count = computed(() => useStoreCount().count);
</script>
<template>
  <button @click="add">Add</button>
  {{ count }}

  <div class="title flex">
    <img :src="logo" :alt="`Patch of Launch ${name}`" />
    <h1>
      Launch "<i>{{ name }}</i
      >"
    </h1>
  </div>
</template>

<style lang="css" scoped>
.title {
  padding: 12px;
}
.flex {
  display: flex;
  align-items: center;
}
img {
  margin-right: 10px;
  width: 70px;
}
</style>

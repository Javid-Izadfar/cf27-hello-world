<script setup>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

const name = ref("");
</script>

<template>
  <div class="hi">
    <input v-model="name" type="text" />
    <div>hi {{ name }}</div>
    <HelloWorld />
  </div>
</template>

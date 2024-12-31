<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from "vue";

onBeforeMount(() => {
  console.log("Comp C: Before Mount");
});
onMounted(() => {
  console.log("Comp C: on Mounted");
});

const counter = ref(0);
const increment = () => {
  console.log("Inside Increment Func");
  counter.value = counter.value + 1;
};

onBeforeUpdate(() => {
  console.log("Comp C: Before Update");
});
onUpdated(() => {
  console.log("Comp C: on Updated");
});

console.log("Comp C: On Created");
</script>

<template>
  <div class="border-green">
    <div>Inside Component C</div>
    <div>
      Counter: {{ counter }}
      <button @click="increment">Add</button>
    </div>
  </div>
</template>

<style scoped>
.border-green {
  border: solid 1px green;
  padding: 12px;
}
</style>

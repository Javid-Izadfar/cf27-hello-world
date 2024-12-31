<script setup>
import CompC from "@/components/CompC.vue";
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from "vue";

onBeforeMount(() => {
  console.log("Comp B: Before Mount");
});
onMounted(() => {
  console.log("Comp B: on Mounted");
});

const counter = ref(0);
const increment = () => {
  console.log("Inside Increment Func");
  counter.value = counter.value + 1;
};

onBeforeUpdate(() => {
  console.log("Comp B: Before Update");
});
onUpdated(() => {
  console.log("Comp B: on Updated");
});

console.log("Comp B: On Created");
</script>

<template>
  <div class="border-blue">
    <div>Inside Component B</div>
    <div>
      Counter: {{ counter }}
      <button @click="increment">Add</button>
    </div>
    <CompC />
  </div>
</template>

<style scoped>
.border-blue {
  border: solid 1px blue;
  padding: 12px;
}
</style>

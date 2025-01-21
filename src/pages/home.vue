<script setup>
import { onMounted } from "vue";

console.log("created Home");
onMounted(() => {
  console.log("mounted Home Page");
});
</script>
<template>
  <div>
    <p>
      Welcome to SpaceX Program. to find more about our latest launches, check

      <RouterLink to="/latest" title="Go to Latest">Latest Page</RouterLink>
    </p>
  </div>
</template>

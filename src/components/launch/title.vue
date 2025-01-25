<script setup>
defineProps(["name", "logo"]);
</script>
<template>
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

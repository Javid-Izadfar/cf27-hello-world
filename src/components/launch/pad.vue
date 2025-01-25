<script setup>
import { ref } from "vue";

const props = defineProps(["id"]);

const pad = ref(null);

const fetchPadDetail = async () => {
  const response = await fetch(
    `https://api.spacexdata.com/v4/launchpads/${props.id}`
  );

  if (response.ok) {
    const result = await response.json();
    pad.value = result;
  } else {
    alert("error");
  }
};

fetchPadDetail();
</script>

<template>
  <div v-if="pad">
    <h2>{{ pad.name }}</h2>
    <p>{{ pad.details }}</p>
  </div>
  <div v-show="!pad">
    <div
      style="
        height: 30px;
        width: 200px;
        background-color: gray;
        margin-bottom: 10px;
      "
    ></div>
    <div
      style="height: 300px; background-color: gray; margin-bottom: 10px"
    ></div>
  </div>
</template>

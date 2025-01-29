import { defineStore } from "pinia";
import { ref } from "vue";

const useStoreCount = defineStore("count", () => {
  const count = ref(0);

  const add = () => {
    count.value = count.value + 1;
  };
  return {
    count,
    add,
  };
});

export default useStoreCount;

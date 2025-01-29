import { ref } from "vue";

const useCount = () => {
  const count = ref(0);

  const add = () => {
    count.value = count.value + 1;
  };
  return {
    count,
    add,
  };
};

export default useCount;

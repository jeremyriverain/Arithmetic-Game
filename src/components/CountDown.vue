<template>
  <div class="app-container">{{countDown}}</div>
</template>

<script>
import { defineComponent } from "vue";
import useCountDown from "@/use/useCountDown";

export default defineComponent({
  name: "CountDown",
  setup() {
    const { countDown } = useCountDown();
    return {
      countDown,
    };
  },
});
</script>

<style lang="sass" scoped>
.app-container
  text-align: center
</style>
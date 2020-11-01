<template>
  <div class="is-size-1 has-text-centered">{{countDown}}</div>
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
</style>
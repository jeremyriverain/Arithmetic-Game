<template>
  <div class="is-flex is-align-items-center is-justify-content-center">
    <span class="icon is-size-4">
      <i class="fas fa-stopwatch"></i>
    </span>

    <div class="is-size-3 pl-3">
      {{countDown}}
    </div>
  </div>
</template>

<script lang="ts">
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
<template>
  <div class="app-container">
    <button
      @click="isPlaying = true"
      :disabled="isPlaying"
    >Play</button>
    <button
      @click="isPlaying = false"
      :disabled="!isPlaying"
    >Pause</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import useGameState from "@/use/useGameState";

export default defineComponent({
  name: "StateGameButtons",
  setup() {
    const { isPlaying } = useGameState();

    return {
      isPlaying,
    };
  },
});
</script>

<style lang="sass" scoped>
.app-container
  display: flex
  justify-content: center
  align-items: center
  & * + *
    margin-left: 0.3rem
</style>
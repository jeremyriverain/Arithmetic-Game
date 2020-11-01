<template>
  <div class="app-container">
    <button
      class="button"
      @click="isPlaying = true"
      :disabled="isPlaying"
    >

      <span class="icon is-small">
        <i class="fas fa-play-circle"></i>
      </span>
      <span>Jouer</span>
    </button>
    <button
      class="button"
      @click="isPlaying = false"
      :disabled="!isPlaying"
    >
      <span class="icon is-small">
        <i class="fas fa-pause-circle"></i>
      </span>
      <span>Pause</span>
    </button>
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
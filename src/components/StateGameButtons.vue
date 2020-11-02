<template>
  <div class="app-container">
    <button
      class="button is-small"
      @click="$emit('play')"
      :disabled="isPlaying"
    >

      <span class="icon is-small">
        <i class="fas fa-play-circle"></i>
      </span>
      <span>Jouer</span>
    </button>

    <button
      class="button is-small"
      @click="$emit('pause')"
      :disabled="!isPlaying"
    >
      <span class="icon is-small">
        <i class="fas fa-pause-circle"></i>
      </span>
      <span>Pause</span>
    </button>
    <button
      class="button is-small"
      :disabled="!startedAt || (startedAt && finishedAt)"
      @click="$emit('stop')"
    >
      <span class="icon is-small">
        <i class="fas fa-stop-circle"></i>
      </span>
      <span>Stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StateGameButtons",
  props: {
    startedAt: {
      type: Number,
      default: null,
    },
    finishedAt: {
      type: Number,
      default: null,
    },
    isPlaying: {
      type: Boolean,
      required: true,
    },
  },
  setup() {},
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
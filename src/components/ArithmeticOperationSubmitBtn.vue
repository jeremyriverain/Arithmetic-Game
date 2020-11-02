<template>
  <button
    class="button"
    :disabled="!isPlaying"
    @click="$emit('submit')"
  >
    <span
      class="icon is-small"
      v-if="isPlaying"
    >
      <i class="fas fa-check"></i>
    </span>
    <span
      class="icon is-small"
      v-else
    >
      <i class="fas fa-question"></i>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ArithmeticOperationSubmitBtn",
  props: {
    isPlaying: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
});
</script>

<style>
</style>
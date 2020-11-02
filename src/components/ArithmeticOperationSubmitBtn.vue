<template>
  <button
    class="button"
    :disabled="!isPlaying"
    @click="$emit('submit')"
  >
    <span class="icon is-small">
      <i :class="icon"></i>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "ArithmeticOperationSubmitBtn",
  props: {
    isPlaying: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const icon = computed(() =>
      props.isPlaying ? "fas fa-check" : "fas fa-question"
    );

    return {
      icon,
    };
  },
});
</script>

<style>
</style>
<template>
  <span class="icon has-text-danger">
    <i :class="icon"></i>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  props: {
    isDamaged: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const icon = computed(() =>
      props.isDamaged ? "far fa-heart" : "fas fa-heart"
    );

    return {
      icon,
    };
  },
});
</script>

<style>
</style>
<template>
  <div
    class="help has-text-danger"
    v-for="(error, index) in errors"
    :key="index"
  >
    {{error.$message}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    errors: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style>
</style>
<template>
  <ul class="pl-3 pt-3">
    <li class="has-text-weight-bold mb-2">Résultats</li>
    <li
      class="is-size-6"
      v-for="i in 2"
      :key="i"
    >
      <span class="icon has-text-success">
        <i class="fas fa-thumbs-up"></i>
      </span>
      <span class="pl-3">+ 9</span>
    </li>
    <li class="is-size-6">
      <span class="icon has-text-danger">
        <i class="fas fa-thumbs-down"></i>
      </span>
      <span class="pl-3">9 + 1 - 3 = 7</span>
    </li>

  </ul>

</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "FeedbackList",
  setup() {},
});
</script>

<style>
</style>
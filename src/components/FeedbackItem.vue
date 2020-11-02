<template>
  <li class="is-size-6">
    <span
      class="icon"
      :class="classIcon"
    >
      <i :class="icon"></i>
    </span>
    <span class="pl-3">{{message}}</span>
  </li>
</template>

<script lang="ts">
import LogOperation from "@/model/logOperation";
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "FeedbackItem",
  props: {
    logOperation: {
      type: LogOperation,
      required: true,
    },
  },
  setup(props) {
    const isPositive = computed(
      () =>
        props.logOperation.getExpectedResult() ===
        props.logOperation.getSubmittedNumber()
    );

    const icon = computed(() =>
      isPositive.value ? "fas fa-thumbs-up" : "fas fa-thumbs-down"
    );

    const classIcon = computed(() =>
      isPositive.value ? "has-text-success" : "has-text-danger"
    );

    return {
      icon,
      classIcon,
      message: props.logOperation.getMessage(),
    };
  },
});
</script>
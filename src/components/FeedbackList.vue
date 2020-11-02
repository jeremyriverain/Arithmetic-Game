<template>
  <ul class="pl-3 pt-3">
    <li class="has-text-weight-bold mb-2">Historique</li>
    <li v-if="logOperations.length === 0">
      <small>Aucun historique pour le moment</small>
    </li>

    <feedback-item
      :log-operation="log"
      v-for="log in logOperations"
      :key="log.uuid"
    />
  </ul>

</template>

<script lang="ts">
import LogOperation from "@/model/logOperation"; // eslint-disable-line no-unused-vars

import { defineComponent, PropType } from "vue"; // eslint-disable-line no-unused-vars

import FeedbackItem from "@/components/FeedbackItem.vue";

export default defineComponent({
  name: "FeedbackList",
  props: {
    logOperations: {
      type: Array as PropType<LogOperation[]>,
    },
  },
  components: {
    FeedbackItem,
  },
  setup() {},
});
</script>

<style>
</style>
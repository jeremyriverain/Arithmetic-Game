<template>
  <div class="page-rules">
    <rules-explanation />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import RulesExplanation from "@/components/RulesExplanation.vue";
export default defineComponent({
  name: "PageRules",
  components: {
    RulesExplanation,
  },
  setup() {},
});
</script>

<style lang="sass" scoped>
.page-rules
  // text-align: center
</style>
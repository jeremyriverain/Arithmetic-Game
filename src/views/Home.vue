<template>
  <div class="page-home">
    <count-down />
    <arithmetic-operation class="mt-3" />
    <score-tracking class="mt-3" />

    <teleport to="#app-container">
      <state-game-buttons class="mt-3" />
    </teleport>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ArithmeticOperation from "@/components/ArithmeticOperation";
import CountDown from "@/components/CountDown";
import ScoreTracking from "@/components/ScoreTracking";
import StateGameButtons from "@/components/StateGameButtons";

export default defineComponent({
  name: "PageHome",
  components: {
    ArithmeticOperation,
    CountDown,
    ScoreTracking,
    StateGameButtons,
  },
});
</script>

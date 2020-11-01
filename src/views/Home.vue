<template>
  <div class="page-home">
    <count-down style="margin-top: 1rem" />
    <arithmetic-operation style="margin-top: 1rem" />
    <state-game-buttons style="margin-top: 1rem" />
    <score-tracking style="margin-top: 1rem" />
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

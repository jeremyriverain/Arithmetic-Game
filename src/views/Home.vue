<template>
  <div class="page-home">
    <teleport to="#app-top">
      <count-down />
    </teleport>
    <arithmetic-operation class="my-5" />

    <div class="is-flex is-justify-content-space-around	is-align-items-center mt-5">
      <health-point />
      <score-tracking />
    </div>

    <teleport to="#app-container">
      <state-game-buttons class="my-3" />
    </teleport>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ArithmeticOperation from "@/components/ArithmeticOperation";
import CountDown from "@/components/CountDown";
import HealthPoint from "@/components/HealthPoint";
import ScoreTracking from "@/components/ScoreTracking";
import StateGameButtons from "@/components/StateGameButtons";

export default defineComponent({
  name: "PageHome",
  components: {
    ArithmeticOperation,
    CountDown,
    HealthPoint,
    ScoreTracking,
    StateGameButtons,
  },
});
</script>

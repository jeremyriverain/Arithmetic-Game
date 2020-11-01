<template>
  <div class="page-home">

    <state-game-buttons class="mb-5" />
    <rules-explanation
      class="px-2"
      v-if="startedAt === ''"
    />
    <count-down />

    <arithmetic-operation class="my-5" />

    <div class="card">
      <div class="card-content">
        <div class="is-flex is-flex-direction-column is-justify-content-space-around	is-align-items-center mt-5 is-flex-wrap-wrap">
          <health-point />
          <score-tracking class="my-1" />
          <chrono-game />
        </div>

        <hr>

        <feedback-list />

      </div>
    </div>

  </div>
</template>

<script>
import { defineComponent } from "vue";

import useGameState from "@/use/useGameState";

import ArithmeticOperation from "@/components/ArithmeticOperation";
import ChronoGame from "@/components/ChronoGame";
import CountDown from "@/components/CountDown";
import FeedbackList from "@/components/FeedbackList";
import HealthPoint from "@/components/HealthPoint";
import RulesExplanation from "@/components/RulesExplanation";
import ScoreTracking from "@/components/ScoreTracking";
import StateGameButtons from "@/components/StateGameButtons";

export default defineComponent({
  name: "PageHome",
  components: {
    ArithmeticOperation,
    ChronoGame,
    CountDown,
    FeedbackList,
    HealthPoint,
    RulesExplanation,
    ScoreTracking,
    StateGameButtons,
  },
  setup() {
    const { startedAt } = useGameState();

    return { startedAt };
  },
});
</script>

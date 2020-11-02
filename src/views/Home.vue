<template>
  <div class="page-home">

    <state-game-buttons
      class="mb-5"
      :started-at="startedAt"
      :is-playing="isPlaying"
      @play="play"
      @pause="pause"
      @stop="stop"
    />
    <rules-explanation
      class="px-2"
      v-if="startedAt === '' && logOperations.length === 0"
    />
    <count-down />

    <arithmetic-operation
      class="my-5"
      :started-at="startedAt"
      :operation-track-index="operationTrackIndex"
      :is-playing="isPlaying"
      @operation-success="onOperationSuccess"
      @operation-error="onOperationError"
    />

    <div class="card">
      <div class="card-content">
        <div class="is-flex is-flex-direction-column is-justify-content-space-around	is-align-items-center mt-5 is-flex-wrap-wrap">
          <health-points />
          <score-tracking class="my-1" />
          <chrono-game />
        </div>

        <hr>

        <feedback-list :log-operations="logOperations" />

      </div>
    </div>

    <modal-win-game :hasWon="hasWon" />
    <modal-lose-game :hasLost="hasLost" />

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import useGameState from "@/use/useGameState";

import ArithmeticOperation from "@/components/ArithmeticOperation.vue";
import ChronoGame from "@/components/ChronoGame.vue";
import CountDown from "@/components/CountDown.vue";
import FeedbackList from "@/components/FeedbackList.vue";
import HealthPoints from "@/components/HealthPoints.vue";
import ModalLoseGame from "@/components/ModalLoseGame.vue";
import ModalWinGame from "@/components/ModalWinGame.vue";
import RulesExplanation from "@/components/RulesExplanation.vue";
import ScoreTracking from "@/components/ScoreTracking.vue";
import StateGameButtons from "@/components/StateGameButtons.vue";

export default defineComponent({
  name: "PageHome",
  components: {
    ArithmeticOperation,
    ChronoGame,
    CountDown,
    FeedbackList,
    HealthPoints,
    ModalLoseGame,
    ModalWinGame,
    RulesExplanation,
    ScoreTracking,
    StateGameButtons,
  },
  setup() {
    const {
      startedAt,
      operationTrackIndex,
      isPlaying,
      play,
      pause,
      stop,
      onOperationError,
      onOperationSuccess,
      logOperations,
      hasWon,
      hasLost,
    } = useGameState();

    return {
      startedAt,
      operationTrackIndex,
      isPlaying,
      play,
      pause,
      stop,
      onOperationError,
      onOperationSuccess,
      logOperations,
      hasWon,
      hasLost,
    };
  },
});
</script>

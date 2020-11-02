<template>
  <div class="page-home">

    <state-game-buttons
      class="mb-5"
      :started-at="startedAt"
      :finished-at="finishedAt"
      :is-playing="isPlaying"
      @play="play"
      @pause="pause"
      @stop="stop"
    />
    <rules-explanation
      class="px-2 mb-3"
      v-if="!startedAt && logOperations.length === 0"
    />
    <timer class="timer" />

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
        </div>

        <hr>

        <feedback-list :log-operations="logOperations" />

      </div>
    </div>

    <modal-win-game
      :has-won="hasWon"
      :started-at="startedAt"
      :finished-at="finishedAt"
    />
    <modal-lose-game :has-lost="hasLost" />

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import useGameState from "@/use/useGameState";

import ArithmeticOperation from "@/components/ArithmeticOperation.vue";
import FeedbackList from "@/components/FeedbackList.vue";
import HealthPoints from "@/components/HealthPoints.vue";
import ModalLoseGame from "@/components/ModalLoseGame.vue";
import ModalWinGame from "@/components/ModalWinGame.vue";
import RulesExplanation from "@/components/RulesExplanation.vue";
import ScoreTracking from "@/components/ScoreTracking.vue";
import StateGameButtons from "@/components/StateGameButtons.vue";
import Timer from "@/components/Timer.vue";

export default defineComponent({
  name: "PageHome",
  components: {
    ArithmeticOperation,
    FeedbackList,
    HealthPoints,
    ModalLoseGame,
    ModalWinGame,
    RulesExplanation,
    ScoreTracking,
    StateGameButtons,
    Timer,
  },
  setup() {
    const {
      finishedAt,
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
      finishedAt,
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

<style lang="sass" scoped>
.timer
  margin-left: auto
  margin-right: auto
</style>
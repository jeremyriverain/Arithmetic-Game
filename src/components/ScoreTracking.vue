<template>

  <div class="is-flex is-justify-content-center is-align-items-center is-flex-wrap-nowrap is-size-4">
    <span class="icon has-text-success">
      <i class="fas fa-leaf"></i>
    </span>
    <span class="px-2">x</span>
    <span :class="[hasWon ? 'is-success' : 'is-dark']">

      {{score}}
    </span>
  </div>

</template>

<script>
import useScoreTracking from "@/use/useScoreTracking";
import useGameSettings from "@/use/useGameSettings";
import useGameState from "@/use/useGameState";
export default {
  name: "ScoreTracking",
  setup() {
    const { score } = useScoreTracking();

    const { hasWon } = useGameState();

    const { winningScore } = useGameSettings();

    console.log("score", score);

    return { score, hasWon, winningScore };
  },
};
</script>

<style lang="sass" scoped>
</style>
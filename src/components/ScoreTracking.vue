<template>

  <div class="is-flex is-justify-content-center is-align-items-center is-flex-wrap-nowrap is-size-4">
    <span class="icon has-text-info">
      <i class="fas fa-medal"></i>
    </span>
    <span class="px-2">x</span>
    <span>
      {{score}}
    </span>
  </div>

</template>

<script lang="ts">
import useScoreTracking from "@/use/useScoreTracking";
import { useGameSettings } from "@/use/useGameSettings";
export default {
  name: "ScoreTracking",
  setup() {
    const { score } = useScoreTracking();

    const { winningScore } = useGameSettings();

    console.log("score", score);

    return { score, winningScore };
  },
};
</script>

<style lang="sass" scoped>
</style>
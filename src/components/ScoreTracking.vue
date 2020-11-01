<template>

  <div class="app-container">
    <div class="control">
      <div class="tags has-addons are-medium">
        <span class="tag">score</span>
        <span class="tag is-warning">{{score}}</span>
        <span class="tag is-dark">{{winningScore}}</span>
      </div>
    </div>
  </div>

</template>

<script>
import useScoreTracking from "@/use/useScoreTracking";
import useGameSettings from "@/use/useGameSettings";
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
.app-container
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
</style>
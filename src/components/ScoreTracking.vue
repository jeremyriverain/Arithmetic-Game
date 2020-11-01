<template>

  <div class="app-container">
    <div class="control">
      <div class="tags has-addons are-medium">
        <span class="tag">score</span>
        <span
          class="tag"
          :class="[hasWon ? 'is-success' : 'is-danger']"
        >{{score}}</span>
        <!-- <span class="tag is-dark">{{winningScore}}</span> -->
      </div>
    </div>
  </div>

</template>

<script>
import useScoreTracking from "@/use/useScoreTracking";
import useGameState from "@/use/useGameState";
export default {
  name: "ScoreTracking",
  setup() {
    const { score } = useScoreTracking();

    const { hasWon } = useGameState();

    console.log("score", score);

    return { score, hasWon };
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
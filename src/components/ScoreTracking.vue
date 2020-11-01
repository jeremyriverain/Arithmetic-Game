<template>
  <div class="app-container">Score: {{score}}</div>
</template>

<script>
import useScoreTracking from "./../use/useScoreTracking";
export default {
  name: "ScoreTracking",
  setup() {
    const { score } = useScoreTracking();

    console.log("score", score);

    return { score };
  },
};
</script>

<style lang="sass" scoped>
.app-container
    text-align: center
</style>
<template>
  <div>
    <count-down style="margin-top: 1rem" />
    <arithmetic-operation style="margin-top: 1rem" />
    <state-game-buttons style="margin-top: 1rem" />
    <score-tracking style="margin-top: 1rem" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ArithmeticOperation from "./components/ArithmeticOperation";
import CountDown from "./components/CountDown";
import ScoreTracking from "./components/ScoreTracking";
import StateGameButtons from "./components/StateGameButtons";

export default defineComponent({
  name: "App",
  components: {
    ArithmeticOperation,
    CountDown,
    ScoreTracking,
    StateGameButtons,
  },
});
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  margin-top: 60px
  padding: 0 1rem
</style>
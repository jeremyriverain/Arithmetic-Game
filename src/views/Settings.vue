<template>
  <div class="page-settings">
    <div>Nombre d'opérandes: {{numberOfOperands}}</div>
    <div>Valeur minimale: {{minMaxNumbers[0]}}</div>
    <div>Valeur maximale: {{minMaxNumbers[1]}}</div>
    <div>Type d'opérateurs: {{operators.join(' ')}}</div>
    <div>Score à atteindre: {{winningScore}}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import useGameSettings from "@/use/useGameSettings";

export default defineComponent({
  name: "PageSettings",
  setup() {
    const {
      minMaxNumbers,
      maxResolutionTime,
      operators,
      numberOfOperands,
      winningScore,
    } = useGameSettings();

    return {
      minMaxNumbers,
      maxResolutionTime,
      operators,
      numberOfOperands,
      winningScore,
    };
  },
});
</script>

<style lang="sass" scoped>
.page-settings
  text-align: center
</style>
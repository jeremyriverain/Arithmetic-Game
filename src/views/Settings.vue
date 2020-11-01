<template>
  <div class="page-settings">
    <div>number of operands: {{numberOfOperands}}</div>
    <div>min value operand: {{minMaxNumbers[0]}}</div>
    <div>max value operand: {{minMaxNumbers[1]}}</div>
    <div>type operators: {{operators.join(' ')}}</div>
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
    } = useGameSettings();

    return {
      minMaxNumbers,
      maxResolutionTime,
      operators,
      numberOfOperands,
    };
  },
});
</script>

<style lang="sass" scoped>
.page-settings
  text-align: center
</style>
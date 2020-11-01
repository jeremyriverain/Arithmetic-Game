<template>
  <div class="app-container">
    <div
      v-for="(item, i) in operationNodes"
      :key="i"
      class="app-node"
      :class="i % 2 === 0 ? 'app-number' : 'app-operator'"
    >
      {{item}}
    </div>
    <div>=</div>
    <div>
      <input
        type="number"
        v-model.number="result"
        @keyup.enter="onSubmit"
        :disabled="!isPlaying"
      />
    </div>
    <div>
      <button
        @click="onSubmit"
        :disabled="!isPlaying"
      >Submit</button>
    </div>
  </div>
</template>


<script>
import useOperation from "@/use/useOperation.ts";
import useGameState from "@/use/useGameState.ts";
import useCountDown from "@/use/useCountDown";
import useScoreTracking from "@/use/useScoreTracking";
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  name: "ArithmeticOperation",
  setup() {
    const result = ref(null);
    const { makeOperation, getResult } = useOperation();

    const operationNodes = ref(makeOperation());

    const { currentRound, isPlaying, nextRound } = useGameState();

    const { countDown } = useCountDown();
    const { addScore } = useScoreTracking();

    watch([currentRound], () => {
      operationNodes.value = makeOperation();
      result.value = null;
    });

    const onSubmit = () => {
      const expected = getResult(operationNodes.value);
      if (result.value === expected) {
        console.log("success");
        addScore(countDown.value);
      } else {
        console.warn(`error, ${expected} expected`);
      }
      nextRound();
    };

    return {
      onSubmit,
      operationNodes,
      result,
      isPlaying,
    };
  },
});
</script>

<style lang="sass" scoped>
.app-container
  display: flex
  justify-content: center
  align-items: center
  & * + *
    margin-left: 0.2rem
</style>
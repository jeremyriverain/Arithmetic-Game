<template>
  <div class="card">
    <div class="card-content">
      <div class="app-container">
        <div
          v-for="(item, i) in operationNodes"
          :key="i"
          class="is-size-4"
        >
          <span v-if="i % 2 === 0 && !isPlaying && startedAt === ''">x</span>
          <span v-else>
            {{item}}
          </span>
        </div>
        <div>=</div>
        <div class="field mb-0">
          <div class="control">
            <input
              class="input"
              type="number"
              v-model.number="result"
              @keyup.enter="onSubmit"
              :disabled="!isPlaying"
            >
          </div>
        </div>
        <div>

          <span class="icon is-small">
            <i class="fas fa-question"></i>
          </span>

        </div>
      </div>
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

    const { currentRound, isPlaying, nextRound, startedAt } = useGameState();

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
      startedAt,
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
    margin-left: 0.3rem
  .field
    max-width: 70px
</style>
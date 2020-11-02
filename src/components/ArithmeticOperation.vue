<template>
  <div class="card">
    <div class="card-content">
      <div class="app-container">
        <div
          v-for="(item, i) in operationNodes"
          :key="i"
          class="is-size-4"
        >
          <span v-if="i % 2 === 0 && !isPlaying && !startedAt">x</span>
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

          <arithmetic-operation-submit-btn
            @submit="onSubmit"
            :is-playing="isPlaying"
          />

        </div>
      </div>
    </div>
  </div>

</template>


<script lang="ts">
import useOperation from "@/use/useOperation.ts";
import { defineComponent, ref, watch, Ref } from "vue"; // eslint-disable-line no-unused-vars

import ArithmeticOperationSubmitBtn from "@/components/ArithmeticOperationSubmitBtn.vue";
import LogOperation from "@/model/logOperation";

export default defineComponent({
  name: "ArithmeticOperation",
  props: {
    startedAt: {
      type: Number,
      default: null,
    },
    operationTrackIndex: {
      type: Number,
      required: true,
    },
    isPlaying: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    ArithmeticOperationSubmitBtn,
  },
  setup(props, { emit }) {
    const result: Ref<number | null> = ref(null);
    const { makeOperation, getResult } = useOperation();

    const operationNodes: Ref<(string | number)[]> = ref(makeOperation());

    watch(
      () => props.operationTrackIndex,
      () => {
        operationNodes.value = makeOperation();
        result.value = null;
      }
    );

    const onSubmit = () => {
      const expected = getResult(operationNodes.value);

      const copyOperationNodes: (string | number)[] = Object.assign(
        [],
        operationNodes.value
      );

      let logOperation = new LogOperation(
        copyOperationNodes,
        result.value,
        expected
      );

      if (result.value === expected) {
        emit("operation-success", logOperation);
      } else {
        emit("operation-error", logOperation);
      }
    };

    return {
      onSubmit,
      operationNodes,
      result,
    };
  },
  emits: {
    "operation-success": (logOperation: LogOperation) => {
      if (logOperation instanceof LogOperation) {
        return true;
      }
      return false;
    },
    "operation-error": (logOperation: LogOperation) => {
      if (logOperation instanceof LogOperation) {
        return true;
      }
      return false;
    },
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
    max-width: 95px
</style>
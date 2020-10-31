<template>
  <div class="container">
    <div
      v-for="(item, i) in operationNodes"
      :key="i"
      class="node"
      :class="i % 2 === 0 ? 'number' : 'operator'"
    >
      {{item}}
    </div>
    <div>=</div>
    <div>
      <input
        type="number"
        v-model.number="result"
      />
    </div>
    <div>
      <button @click="onSubmit">Submit</button>
    </div>
  </div>
</template>


<script>
import useOperation from "./../use/useOperation.ts";
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const result = ref(null);
    const { makeOperation, getResult } = useOperation();

    const operationNodes = ref(makeOperation());

    const onSubmit = () => {
      const expected = getResult(operationNodes.value);
      if (result.value === expected) {
        console.log("success");
        operationNodes.value = makeOperation();
        result.value = null;
      } else {
        console.warn(`error, ${expected} expected`);
      }
    };

    return {
      onSubmit,
      operationNodes,
      result,
    };
  },
});
</script>

<style lang="sass" scoped>
.container
    display: flex
    justify-content: center
    align-items: center
    // font-size: 3rem
    & * + *
        margin-left: 0.2rem
</style>
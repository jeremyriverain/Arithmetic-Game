<template>
  <div>
    <arithmetic-operation />
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import ArithmeticOperation from "./components/ArithmeticOperation";

export default defineComponent({
  name: "App",
  components: {
    ArithmeticOperation,
  },
  setup() {
    onMounted(() => {});

    return {};
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
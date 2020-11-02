<template>
  <div class="is-flex is-align-items-center is-justify-content-center is-size-6">

    <health-point
      v-for="(h, i) in healthPoints"
      :key="i"
    />

    <health-point
      v-for="(h, i) in numDamaged"
      :key="i"
      is-damaged
    />

  </div>

</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import HealthPoint from "@/components/HealthPoint.vue";
import useHealthTracking from "@/use/useHealthTracking";
import useGameSettings from "@/use/useGameSettings";

export default defineComponent({
  name: "HealthPoints",
  components: {
    HealthPoint,
  },
  setup() {
    const { healthPoints } = useHealthTracking();
    const { healthPoints: initialHealthPoints } = useGameSettings();

    return {
      healthPoints,
      numDamaged: computed(() => initialHealthPoints - healthPoints.value),
    };
  },
});
</script>

<style>
</style>
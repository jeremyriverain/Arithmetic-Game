<template>
  <div class="base-timer">
    <svg
      class="base-timer__svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="base-timer__circle">
        <circle
          class="base-timer__path-elapsed"
          cx="50"
          cy="50"
          r="45"
        ></circle>
        <path
          :stroke-dasharray="circleDasharray"
          class="base-timer__path-remaining"
          :class="[remainingPathColor, {animated: animated}]"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span class="base-timer__label is-size-4">{{ formattedTimeLeft }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import useCountDown from "@/use/useCountDown";
import { useGameSettings } from "@/use/useGameSettings";

export default defineComponent({
  name: "Timer",
  setup() {
    const { countDown } = useCountDown();
    const { maxResolutionTime } = useGameSettings();

    const warning_threshold = computed(() =>
      Math.ceil((maxResolutionTime.value * 40) / 100)
    );
    const alert_threshold = computed(() =>
      Math.ceil((maxResolutionTime.value * 20) / 100)
    );

    const timePassed = computed(
      () => maxResolutionTime.value - countDown.value
    );

    const timeLeft = computed(() => maxResolutionTime.value - timePassed.value);

    const animated = computed(() => timePassed.value >= 1);

    const remainingPathColor = computed(() => {
      if (timeLeft.value <= alert_threshold.value) {
        return "has-text-danger";
      } else if (timeLeft.value <= warning_threshold.value) {
        return "has-text-warning";
      } else {
        return "has-text-success";
      }
    });

    const timeFraction = computed(() => {
      const rawTimeFraction = timeLeft.value / maxResolutionTime.value;
      return (
        rawTimeFraction - (1 / maxResolutionTime.value) * (1 - rawTimeFraction)
      );
    });

    const circleDasharray = computed(() => {
      return `${(timeFraction.value * 283).toFixed(0)} 283`;
    });

    const formattedTimeLeft = computed(() => {
      const minutes = Math.floor(countDown.value / 60);
      let seconds = countDown.value % 60;

      return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    });

    return {
      remainingPathColor,
      circleDasharray,
      formattedTimeLeft,
      animated,
    };
  },
});
</script>

<style scoped lang="sass">
$dimension: 80px
.base-timer
  position: relative
  width: $dimension
  height: $dimension

  &__svg
    transform: scaleX(-1)

  &__circle
    fill: none
    stroke: none

  &__path-elapsed
    stroke-width: 7px
    stroke: grey

  &__path-remaining
    stroke-width: 7px
    stroke-linecap: round
    transform: rotate(90deg)
    transform-origin: center
    fill-rule: nonzero
    stroke: currentColor
    &.animated
      transition: 1s linear all

  &__label
    position: absolute
    width: $dimension
    height: $dimension
    top: 0
    display: flex
    align-items: center
    justify-content: center
</style>

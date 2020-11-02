<template>
  <base-modal :show="show">
    <p>
      <span class="icon has-text-success">
        <i class="fas fa-trophy"></i>
      </span>
      Bravo !! Vous avez remporté {{score}} points en {{timeElapsed}}.
    </p>
  </base-modal>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "vue";

import useScoreTracking from "@/use/useScoreTracking";
import useCountDown from "@/use/useCountDown";

import BaseModal from "@/components/BaseModal.vue";

export default defineComponent({
  name: "ModalWinGame",
  props: {
    hasWon: {
      type: Boolean,
      required: true,
    },
    startedAt: {
      type: Number,
      default: null,
    },
    finishedAt: {
      type: Number,
      default: null,
    },
  },
  components: {
    BaseModal,
  },
  setup(props) {
    const show = ref(0);
    const { formatTimeElapsed } = useCountDown();
    const timeElapsed = ref("");

    const { score } = useScoreTracking();

    watch(
      () => props.hasWon,
      (newVal) => {
        if (newVal) {
          show.value++;
        }
      }
    );

    watch(
      () => [props.startedAt, props.finishedAt],
      ([newValStartedAt, newValFinishedAt]) => {
        if (newValStartedAt && newValFinishedAt) {
          timeElapsed.value = formatTimeElapsed(
            props.startedAt,
            props.finishedAt
          );
        }
      }
    );

    return { show, score, timeElapsed };
  },
});
</script>
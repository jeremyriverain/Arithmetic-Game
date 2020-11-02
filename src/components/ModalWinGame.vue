<template>
  <base-modal :show="show">
    <p>
      <span class="icon has-text-success">
        <i class="fas fa-trophy"></i>
      </span>
      Bravo !! Vous avez remporté {} points en 00:00.
    </p>
  </base-modal>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "vue";

import BaseModal from "@/components/BaseModal.vue";

export default defineComponent({
  name: "ModalWinGame",
  props: {
    hasWon: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    BaseModal,
  },
  setup(props) {
    const show = ref(0);
    watch(
      () => props.hasWon,
      (newVal) => {
        if (newVal) {
          show.value++;
        }
      }
    );

    return { show };
  },
});
</script>
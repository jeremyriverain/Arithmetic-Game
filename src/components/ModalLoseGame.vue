<template>
  <base-modal :show="show">
    <p>
      Game over
      <span class="icon has-text-danger">
        <i class="fas fa-exclamation"></i>
      </span>
      <span class="icon has-text-danger">
        <i class="fas fa-exclamation"></i>
      </span>
    </p>
  </base-modal>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

import BaseModal from "@/components/BaseModal.vue";

export default defineComponent({
  name: "ModalLoseGame",
  props: {
    hasLost: {
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
      () => props.hasLost,
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
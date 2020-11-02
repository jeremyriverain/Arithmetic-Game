<template>
  <div
    class="modal"
    :class="{'is-active': isVisible}"
  >
    <div class="modal-background"></div>
    <div class="modal-content">
      <article class="message is-dark">
        <div class="message-body">
          <slot />
        </div>
      </article>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="isVisible = false"
    ></button>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "vue";

export default defineComponent({
  name: "BaseModal",
  props: {
    show: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const isVisible = ref(false);

    watch(
      () => props.show,
      () => {
        isVisible.value = true;
      }
    );

    return {
      isVisible,
    };
  },
});
</script>
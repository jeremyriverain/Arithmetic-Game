<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">{{label}}</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control">
          <input
            class="input"
            type="number"
            :value="modelValue"
            @input="$emit('update:model-value', +$event.target.value)"
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "BaseInputNumber",
  props: {
    error: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

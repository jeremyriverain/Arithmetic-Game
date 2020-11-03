<template>
  <div class="page-settings">
    <form>
      <base-input-number
        v-model="vuelidate.localSettings.numberOfOperands.$model"
        label="Nombre d'opérandes"
        :error="vuelidate.localSettings.numberOfOperands.$errors.length > 0"
      >
        <template #error>
          <base-error-input-message :errors="vuelidate.localSettings.numberOfOperands.$errors" />
        </template>
      </base-input-number>

      <base-input-number
        v-model="vuelidate.min.$model"
        label="Valeur min."
        :error="vuelidate.min.$errors.length > 0"
      >
        <template #error>
          <base-error-input-message :errors="vuelidate.min.$errors" />
        </template>
      </base-input-number>

      <base-input-number
        v-model="vuelidate.max.$model"
        label="Valeur max."
        :error="vuelidate.max.$errors.length > 0"
      >
        <template #error>
          <base-error-input-message :errors="vuelidate.max.$errors" />
        </template>
      </base-input-number>

      <base-input-number
        v-model="vuelidate.localSettings.winningScore.$model"
        label="Score à atteindre"
        :error="vuelidate.localSettings.winningScore.$errors.length > 0"
      >
        <template #error>
          <base-error-input-message :errors="vuelidate.localSettings.winningScore.$errors" />
        </template>
      </base-input-number>

      <base-input-number
        v-model="vuelidate.localSettings.maxResolutionTime.$model"
        label="Délai de résolution (secondes)"
        :error="vuelidate.localSettings.maxResolutionTime.$errors.length > 0"
      >
        <template #error>
          <base-error-input-message :errors="vuelidate.localSettings.maxResolutionTime.$errors" />
        </template>
      </base-input-number>
      <base-input-number
        v-model="vuelidate.localSettings.healthPoints.$model"
        :error="vuelidate.localSettings.healthPoints.$errors.length > 0"
        label="Points de vie"
      >
        <template #error>
          <base-error-input-message :errors="vuelidate.localSettings.healthPoints.$errors" />
        </template>
      </base-input-number>

      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button
                class="button is-success"
                @click="onSubmit"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>

    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";

import { useVuelidate } from "@vuelidate/core";
import { required, minValue, maxValue } from "@vuelidate/validators";

import Settings from "@/model/settings";

import { useGameSettings, setSettings } from "@/use/useGameSettings";

import BaseErrorInputMessage from "@/components/BaseErrorInputMessage.vue";
import BaseInputNumber from "@/components/BaseInputNumber.vue";

export default defineComponent({
  name: "PageSettings",
  components: {
    BaseErrorInputMessage,
    BaseInputNumber,
  },
  setup() {
    const router = useRouter();

    // eslint-disable-line no-unused-vars
    const {
      minMaxNumbers,
      maxResolutionTime,
      winningScore,
      healthPoints,
      numberOfOperands,
      operators,
    } = useGameSettings();

    let localSettings = reactive(
      new Settings(
        minMaxNumbers.value,
        numberOfOperands.value,
        operators.value,
        maxResolutionTime.value,
        winningScore.value,
        healthPoints.value
      )
    );

    const min = ref(minMaxNumbers.value[0]);
    const max = ref(minMaxNumbers.value[1]);

    const rules = {
      min: {
        required,
        minValue: minValue(0),
        maxValue: maxValue(99),
        minLessThanMax() {
          if (!min.value || !max.value) {
            return true;
          }
          return min.value < max.value;
        },
      },
      max: {
        required,
        minValue: minValue(1),
        minLessThanMax() {
          if (!min.value || !max.value) {
            return true;
          }
          return min.value < max.value;
        },
        maxValue: maxValue(100),
      },
      localSettings: {
        numberOfOperands: {
          required,
          minValue: minValue(2),
          maxValue: maxValue(5),
        },
        winningScore: {
          required,
          minValue: minValue(10),
          maxValue: maxValue(500),
        },
        maxResolutionTime: {
          required,
          minValue: minValue(5),
          maxValue: maxValue(180),
        },
        healthPoints: {
          required,
          minValue: minValue(1),
          maxValue: maxValue(10),
        },
      },
    };

    const $v = useVuelidate(rules, { localSettings, min, max });

    const onSubmit = () => {
      console.log("on submit");
      $v.value.$touch();
      if ($v.value.$invalid) {
        console.log("invalid");
      } else {
        localSettings.minMaxNumbers = [min.value, max.value];
        setSettings(localSettings);
        router.push({ name: "Home" });
      }
    };

    return {
      onSubmit,
      localSettings,
      min,
      max,
      vuelidate: $v,
    };
  },
});
</script>

<style lang="sass" scoped>
.page-settings
  // text-align: center
</style>
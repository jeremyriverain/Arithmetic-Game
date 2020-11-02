<template>
  <div class="page-settings">
    <form @submit.prevent>

      <base-input-number
        v-model="localSettings.numberOfOperands"
        label="Nombre d'opérandes"
      />

      <base-input-number
        v-model="localSettings.minMaxNumbers[0]"
        label="Nombre minimum"
      />

      <base-input-number
        v-model="localSettings.minMaxNumbers[1]"
        label="Nombre maximum"
      />

      <div class="field is-horizontal">
        <div class="field-label">
          <label class="label">Opérations possibles</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <label class="mr-3">
                <input
                  type="checkbox"
                  name="member"
                >
                Addition
              </label>
              <label class="mr-3">
                <input
                  type="checkbox"
                  name="member"
                >
                Soustraction
              </label>
              <label class="mr-3">
                <input
                  type="checkbox"
                  name="member"
                >
                Multiplication
              </label>
            </div>
          </div>
        </div>
      </div>

      <base-input-number
        v-model="localSettings.winningScore"
        label="Score à atteindre"
      />

      <base-input-number
        v-model="localSettings.maxResolutionTime"
        label="Délai de résolution (secondes)"
      />
      <base-input-number
        v-model="localSettings.healthPoints"
        label="Points de vie"
      />

      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button
                class="button is-success"
                type="submit"
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
import { defineComponent, watch, reactive } from "vue";
import { useGameSettings, setSettings } from "@/use/useGameSettings";

import BaseInputNumber from "@/components/BaseInputNumber.vue";
import Settings from "@/model/settings";

export default defineComponent({
  name: "PageSettings",
  components: {
    BaseInputNumber,
  },
  setup() {
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
    watch(localSettings, (newSettings) => {
      console.log("local settings", newSettings);
    });

    const onSubmit = () => {
      console.log("on submit");
      setSettings(localSettings);
    };

    return {
      onSubmit,
      localSettings,
    };
  },
});
</script>

<style lang="sass" scoped>
.page-settings
  // text-align: center
</style>
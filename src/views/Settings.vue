<template>
  <div class="page-settings">
    <form @submit.prevent>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Nombre d'opérandes</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input
                class="input"
                type="number"
              >
            </p>
          </div>

        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Nombre minimum</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input
                class="input"
                type="number"
              >
            </p>
          </div>
        </div>

      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Nombre maximum</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input
                class="input"
                type="number"
              >
            </p>
          </div>
        </div>

      </div>

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
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Score à atteindre</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input
                class="input"
                type="number"
              >
            </p>
          </div>
        </div>

      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Délai de résolution (secondes)</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input
                class="input"
                type="number"
              >
            </p>
          </div>
        </div>

      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Points de vie</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input
                class="input"
                type="number"
              >
            </p>
          </div>
        </div>

      </div>

      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-success">
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import useGameSettings from "@/use/useGameSettings";

export default defineComponent({
  name: "PageSettings",
  setup() {
    const {
      minMaxNumbers,
      maxResolutionTime,
      operators,
      numberOfOperands,
      winningScore,
    } = useGameSettings();

    return {
      minMaxNumbers,
      maxResolutionTime,
      operators,
      numberOfOperands,
      winningScore,
    };
  },
});
</script>

<style lang="sass" scoped>
.page-settings
  // text-align: center
</style>
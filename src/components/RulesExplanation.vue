<template>
  <article
    class="message app-message"
    v-show="showMessage"
  >
    <div class="message-header">
      <p>Règles du jeu</p>
      <button
        class="delete"
        aria-label="delete"
        @click="showMessage = false"
      ></button>

    </div>
    <div class="message-body">

      <p>
        Jeu de calcul mental.
      </p>

      <p>
        Tu débutes la partie avec un score à 0, et {{healthPoints}} points de vie.
      </p>

      <p>
        Le but du jeu est de remporter {{winningScore}} points en un minimum de temps.
      </p>

      <p>
        {{maxResolutionTime}} secondes maximum pour résoudre chaque opération.
      </p>

      <p>
        En cas de bonne réponse, tu gagnes les points équivalents au nombre de secondes ne s'étant pas écoulées. Il faut donc être rapide !
      </p>

      <p>
        En cas de mauvaise réponse, tu perds 1 point de vie.
      </p>

      <p>
        Si le temps s'est écoulé et que tu n'a pas répondu, on passe au calcul suivant mais tu perds 1 point de vie.
      </p>

      <p>
        Si tu perds tous tes points de vie, évidemment c'est game over mais tu pourras retenter ta chance.
      </p>
      <p>
        Amuse toi bien !
      </p>

    </div>
  </article>
</template>

<script>
import useGameSettings from "@/use/useGameSettings";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "RulesExplanation",
  setup() {
    const showMessage = ref(true);
    const { healthPoints, winningScore, maxResolutionTime } = useGameSettings();

    return {
      showMessage,
      healthPoints,
      winningScore,
      maxResolutionTime,
    };
  },
});
</script>

<style lang="sass" scoped>
.app-message
  font-size: 0.8rem
  .message-body p
    margin-top: 0.5rem
</style>
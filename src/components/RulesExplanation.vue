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
        Ceci est un jeu de réflexion et de rapidité portant sur le calcul mental.
      </p>

      <p>
        Vous débutez la partie avec un score à 0, et {{healthPoints}} points de vie.
      </p>

      <p>
        Le but du jeu est de remporter {{winningScore}} points en un minimum de temps.
      </p>

      <p>
        Vous avez {{maxResolutionTime}} secondes maximum pour résoudre chaque opération.
      </p>

      <p>
        En cas de bonne réponse, vous gagnez un nombre de points équivalents au nombre de secondes ne s'étant pas écoulées. Il faut donc être rapide !
      </p>

      <p>
        En cas de mauvaise réponse ou si le temps s'est écoulé, vous perdez 1 point de vie.
      </p>

      <p>
        Si vous perdez tous vos points de vie, évidemment c'est Game Over mais vous pourrez retenter votre chance.
      </p>

      <p>Si le niveau de difficulté ne vous correspond pas, vous avez la possibilité de modifier les paramètres du jeu
        <router-link to="/settings">ici</router-link>.
      </p>

      <p>
        May be the force with you !
      </p>

    </div>
  </article>
</template>

<script lang="ts">
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
  font-size: 0.9rem
  .message-body p
    margin-top: 0.5rem
</style>
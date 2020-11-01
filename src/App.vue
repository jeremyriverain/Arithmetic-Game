<template>
  <section
    class="hero is-fullheight"
    id="app-container"
    ref="appWrapper"
  >
    <div id="app-top">
      <div id="nav">
        <router-link to="/">Jeu</router-link> |
        <router-link to="/settings">Paramètres</router-link>
      </div>
    </div>

    <div class="hero-body">

      <div class="container">

        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  setup() {
    const appWrapper = ref(null); // template refs

    onMounted(() => {
      console.log("el", appWrapper);
      if (appWrapper.value.requestFullScreen) {
        appWrapper.value.requestFullScreen();
      }
    });

    return {
      appWrapper,
    };
  },
});
</script>

<style lang="sass">
@charset "utf-8"
$green: #42b983
@import "~bulma/bulma.sass"
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

#nav
  text-align: center
  padding: 30px

  a
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active
      color: $green
</style>

<template>
  <section id="app-container">

    <div id="nav">
      <router-link to="/">Jeu</router-link> |
      <router-link to="/settings">Paramètres</router-link>
    </div>

  </section>

  <section class="section">
    <div class="container">
      <router-view />
    </div>
  </section>

</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style lang="sass">
@charset "utf-8"
$green: #42b983
$green: $green
@import "~bulma/bulma.sass"
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

#nav
  text-align: center
  padding: 30px 30px 0 30px

  a
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active
      color: $green
</style>

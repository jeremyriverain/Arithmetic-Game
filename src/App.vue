<template>
  <section
    class="hero is-fullheight pb-3"
    id="app-container"
  >
    <div id="nav">
      <router-link to="/">Game</router-link> |
      <router-link to="/settings">Settings</router-link>
    </div>
    <div class="hero-body">

      <div class="container">

        <router-view />
      </div>
    </div>
  </section>
</template>

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

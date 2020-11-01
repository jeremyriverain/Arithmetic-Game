<template>
  <div id="nav">
    <router-link to="/">Game</router-link> |
    <router-link to="/settings">Settings</router-link>
  </div>
  <router-view />
</template>

<style lang="sass">
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
      color: #42b983
</style>

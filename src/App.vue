<template>
  <div id="app">
    <div class="bg-gradient p-3 flex">
      <div class="flex-1 flex items-center">
        <h1 class="text-white ml-12">Checked-in Angular Nights 🌙 Participants</h1>
      </div>
      <div class="mr-12">
        <img class="h-16" src="@/assets/logo.svg" alt="">
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'assets/styles/tailwind.postcss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

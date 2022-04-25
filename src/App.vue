<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  background-color: #ebebeb;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: auto;
}
</style>

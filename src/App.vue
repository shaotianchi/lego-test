<template>
  <div id="app">
    <div class="top">
      <div class="top-title">Lego</div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.top {
  background-color: lightgray;
  height: 64px;
  display: flex;
  align-items: center;
}

.top-title {
  margin-left: 20px;
  font-weight: 700;
  font-size: 28px;
}
</style>

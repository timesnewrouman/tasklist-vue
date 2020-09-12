<template>
  <div id="app">
    <div class="header">
      <h1 class="header__text">Список задач</h1>
      <img class="header__image" src="./images/exclamation-mark.png" />
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1000px;
  margin: auto;
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

.header {
  display: flex;
  flex-direction: row;
}

.header__text {
  max-width: 250px;
  margin: 0 10px 20px auto;
  display: flex;
}

.header__image {
  height: 32px;
  margin-top: 3px;
  margin-right: auto;
}
</style>

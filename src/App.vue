<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
html, body { width: 100%; height: 100%;}
* { padding: 0; margin: 0}
* { padding: 0; margin: 0; box-sizing: border-box; }

.centered { text-align: center; }
.lefted { text-align: left; }
.righted { text-align: right; }

#app {
  width: 100%;
  height: 100%;
  font-family: 'Barlow', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
  text-align: center;
  color: #2c3e50;
}

h1, h2, h3, h4 {
  text-transform: uppercase;
  font-weight: 400;
}
</style>

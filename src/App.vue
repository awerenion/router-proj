<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  body {
    font-family: 'Poppins', sans-serif;
    width: 1440px;
    margin: 0 auto;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  button {
    padding: 0;
  }
</style>

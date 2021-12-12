<template>
  <h1 class="header">G-Сode Sender</h1>
  <InputSelector />
</template>

<script>
import InputSelector from "./components/InputSelector.vue"
export default {
  name: 'App',
  components: {
    InputSelector
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}

.header {
  margin-bottom: 30px;
}
</style>

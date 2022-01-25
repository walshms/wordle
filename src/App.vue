<template>
  <Letter class="letter"></Letter>
  <Letter class="letter"></Letter>
  <Letter class="letter"></Letter>
  <Letter class="letter"></Letter>
  <Letter class="letter"></Letter>
</template>

<script>
import Letter from './components/Letter.vue'

export default {
  name: "App",
  components: {
    Letter
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div.letter{
  width: 81px;
  display: inline-block;
}
</style>

<template>
  <WordleAttempt
    v-for="(attempt, index) in attempts"
    :key="index"
    :wordList="attempt.wordList"
  />
</template>

<script>
import WordleAttempt from "./components/WordleAttempt.vue";
import initialWordList from "@/words.js";

export default {
  mounted: function () {
    console.log("loaded words: " + initialWordList.length);
    this.attempts.push({ wordList: initialWordList });
  },
  props: ["initialWordList"],
  data: function () {
    return {
      attempts: [],
    };
  },
  name: "App",
  components: {
    WordleAttempt,
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
div.letter {
  width: 81px;
  display: inline-block;
}
</style>

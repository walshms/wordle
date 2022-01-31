<template>
  <div>
    <Letter
      class="letter"
      v-bind:id="0"
      v-bind:init="getLetter(0)"
      v-on:values-updated="evaluateIfPossible"
    ></Letter>
    <Letter
      class="letter"
      v-bind:id="1"
      v-bind:init="getLetter(1)"
      v-on:values-updated="evaluateIfPossible"
    ></Letter>
    <Letter
      class="letter"
      v-bind:id="2"
      v-bind:init="getLetter(2)"
      v-on:values-updated="evaluateIfPossible"
    ></Letter>
    <Letter
      class="letter"
      v-bind:id="3"
      v-bind:init="getLetter(3)"
      v-on:values-updated="evaluateIfPossible"
    ></Letter>
    <Letter
      class="letter"
      v-bind:id="4"
      v-bind:init="getLetter(4)"
      v-on:values-updated="evaluateIfPossible"
    ></Letter>
    <div class="filteredWordContainer" v-show="showFilteredWords">
      <div
        class="filteredWord"
        v-for="word in filteredWords"
        v-bind:key="word"
        v-on:click="selectWord(word)"
      >
        {{ word }}
      </div>
    </div>
  </div>
</template>

<script>
import Letter from "./Letter.vue";
import { filterWords } from "@/common.ts";

export default {
  components: { Letter },
  props: ["wordList", "preselectedWord"],
  data: function () {
    return {
      guessedLetters: new Array(5),
      filteredWords: [],
      showFilteredWords: false,
      disabled: false
    };
  },
  methods: {
    evaluateIfPossible: function (event) {
      this.guessedLetters[event.id] = {
        color: event.color,
        letter: event.letter,
      };
      if (this.canEvaluate()) {
        this.filteredWords = filterWords(this.wordList, this.guessedLetters);
        this.showFilteredWords = true;
      }
    },
    canEvaluate: function () {
      for (let i = 0; i < this.guessedLetters.length; i++) {
        let element = this.guessedLetters[i];
        if (!element || !element.color || !element.letter) {
          return false;
        }
      }
      return true;
    },
    selectWord: function (word) {
      this.$emit("word-selected", { word: word, wordList: this.filteredWords });
      this.showFilteredWords = false;
    },
    getLetter: function (index) {
      if (this.preselectedWord) {
        return this.preselectedWord.charAt(index);
      }
      return "";
    },
  },
};
</script>

<style>
div.letter {
  width: 60px;
  display: inline-block;
}
.filteredWordContainer {
  height: 210px;
  overflow-y: auto;
  background-color: #eee
}
.filteredWord {
  display: inline-block;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 1px;
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
</style>
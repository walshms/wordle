<template>
  <div>
    <Letter
      class="letter"
      v-bind:id="0"
      v-on:values-updated="evaluateIfPossible"
    ></Letter>
    <Letter
      class="letter"
      v-bind:id="1"
      v-on:values-updated="evaluateIfPossible"
    ></Letter>
    <Letter
      class="letter"
      v-bind:id="2"
      v-on:values-updated="evaluateIfPossible"
    ></Letter>
    <Letter
      class="letter"
      v-bind:id="3"
      v-on:values-updated="evaluateIfPossible"
    ></Letter>
    <Letter
      class="letter"
      v-bind:id="4"
      v-on:values-updated="evaluateIfPossible"
    ></Letter>
  </div>
</template>

<script>
import Letter from "./Letter.vue";
import { filterWords } from "@/common.ts";

export default {
  components: { Letter },
  props: ["wordList"],
  data: function () {
    return {
      guessedLetters: new Array(5),
    };
  },
  methods: {
    evaluateIfPossible: function (event) {
      this.guessedLetters[event.id] = {
        color: event.color,
        letter: event.letter,
      };
      if (this.canEvaluate()) {
        console.log("evaluating");
        console.log(this.guessedLetters);
        const filteredWords = filterWords(this.wordList, this.guessedLetters);
        console.log(filteredWords);
        // 1) show filtered words
        // 2) set this to disabled
        //
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
  },
};
</script>

<style>
div.letter {
  width: 81px;
  display: inline-block;
}
</style>
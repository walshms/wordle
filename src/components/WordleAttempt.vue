<template>
  <div>
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
    <div></div>
  </div>
</template>

<script>
import Letter from "./Letter.vue";
import filterWords from "@/common.ts";

export default {
  components: { Letter },
  props: ["wordList"],
  mounted: function () {
    console.log(">>>" + this.wordList.length);
  },
  data: function () {
    return {
      letters: new Array(5),
    };
  },
  methods: {
    evaluateIfPossible: function (event) {
      this.letters[event.id] = { color: event.color, letter: event.letter };
      if (this.canEvaluate()) {
        console.log("evaluating " + this.wordList.length);
        const filteredWords = filterWords(this.wordList, this.letters);
        console.log("filtered " + filteredWords.length);
        // 1) show filtered words
        // 2) set this to disabled
        // 
      }
    },
    canEvaluate: function () {
      for (let i = 0; i < this.letters.length; i++) {
        let element = this.letters[i];
        if (element && (!element.color || !element.letter)) {
          return false;
        }
      }
      return true;
    },
  },
};
</script>

<style>
</style>
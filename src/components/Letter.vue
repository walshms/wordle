<template>
  <div>
    <div>
      <input
        type="text"
        maxlength="1"
        v-bind:style="getColor"
        v-model="selectedLetter"
        v-on:keyup="valuesUpdated"
      />
    </div>
    <div>
      <ColorSelector
        v-bind:color="'green'"
        v-on:color-change="setColor"
      ></ColorSelector>
      <ColorSelector
        v-bind:color="'yellow'"
        v-on:color-change="setColor"
      ></ColorSelector>
      <ColorSelector
        v-bind:color="'grey'"
        v-on:color-change="setColor"
      ></ColorSelector>
    </div>
  </div>
</template>

<script>
import ColorSelector from "./ColorSelector.vue";

export default {
  components: { ColorSelector },
  props: ["id", "init"],
  mounted: function () {
    if (this.init) {
      this.selectedLetter = this.init;
    }
  },
  data: function () {
    return {
      selectedColor: "",
      selectedLetter: "",
    };
  },
  methods: {
    setColor: function (color) {
      this.selectedColor = color;
      this.valuesUpdated();
    },
    valuesUpdated: function () {
      this.$emit("values-updated", {
        id: this.id,
        color: this.selectedColor,
        letter: this.selectedLetter.toUpperCase(),
      });
    },
  },
  computed: {
    getColor: function () {
      return {
        backgroundColor: this.selectedColor,
      };
    },
  },
};
</script>

<style>
input {
  width: 1em;
  font-size: 42px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  background-color: #eee;
  color: black;
  text-align: center;
  text-transform: uppercase;
}
</style>
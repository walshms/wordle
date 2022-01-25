<template>
  <div>
    <div>
      <input type="text" maxlength="1" v-bind:style="getColor" />
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
  data: function () {
    return { selectedColor: "" };
  },
  methods: {
    setColor: function (color) {
      this.selectedColor = color;
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
  font-size: 69px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  background-color: #eee;
  text-align: center;
}
</style>
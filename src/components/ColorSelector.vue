<template>
  <span
    class="selectorBox"
    v-on:click="$emit('color-change', color)"
    v-bind:style="backgroundColor"
    >&nbsp;</span
  >
</template>

<script>
export default {
  props: ["color"],
  computed: {
    backgroundColor: function () {
      return {
        backgroundColor: this.color,
      };
    },
  },
};
</script>

<style>
.selectorBox {
  width: 12px;
  height: 12px;
  margin: 1px;
  display: inline-block;
  cursor: pointer;
  border: 1px solid gray;
}
</style>
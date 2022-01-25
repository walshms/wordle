<template>
  <span v-on:click="$emit('color-change', color)" v-bind:style="backgroundColor">&nbsp;</span>
</template>

<script>
export default {
  props: ['color'],
  computed: {
      backgroundColor: function(){
          return {
              backgroundColor: this.color
          }
      }
  }
};
</script>

<style>
span {
    width:21px;
    height:21px;
    margin:3px;
    display: inline-block;
}
</style>
<template>
  <ComponentePadre v-bind:mensajePadre="test"></ComponentePadre>
</template>

<script>
import ComponentePadre from './components/ComponentePadre.vue';

export default {
  name: 'App',
  data(){
    return{
      test : 'mensaje desde app'
    }
  },
  components: {
    ComponentePadre
}
}
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
</style>

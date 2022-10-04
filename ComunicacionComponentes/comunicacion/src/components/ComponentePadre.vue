<template>
  <h1>Componente Padre</h1>
  <ComponenteHijo v-bind:msjHijo="test"></ComponenteHijo>
  <h4>{{mensajePadre}}</h4>
</template>

<script>
import ComponenteHijo from './ComponenteHijo.vue';
export default {
    name: "ComponentePadre",
    props:{
      mensajePadre: String
    },
    data(){
      return{
        test: "mensaje desde padre"
      }
    },
    components: { ComponenteHijo },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

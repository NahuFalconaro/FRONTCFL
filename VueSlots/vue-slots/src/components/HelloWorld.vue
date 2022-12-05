<template>
    <h1>Esto es VUE SLOTS</h1>
    <h2>Hello World</h2>
    <SlotComponent>
      <template v-slot:header>
        <h1>infoIndividual</h1>
        <p>Puedo agregar la cant de info que yo quiera</p>
        <ComponenteDos></ComponenteDos>
      </template>
      <template #footer>
        <h1>footer</h1>
        <p>Con los props paso objetos, atributos, funciones, con slots paso contenido html a los componentes</p>
    </template>
    </SlotComponent>
    <form method="get" v-on:submit="checkForm">
      <label for="nombre">nombre</label>
      <input type="text" name="nombre" id="nombre">
      <label for="email">mail</label>
      <input type="text" name="email" id="email">
      <button type="submit">SUbmit</button>
    </form>
</template>
<script>
import SlotComponent from './SlotComponent.vue';
import ComponenteDos from './ComponenteDos.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{

    }
  },
  methods:{
    checkForm(event){
      event.preventDefault();
    }
  },
  components:{
    SlotComponent,
    ComponenteDos
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

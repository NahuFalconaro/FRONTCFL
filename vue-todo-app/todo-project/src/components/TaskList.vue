<template>
  <h1>Nuestra task list</h1>
  <h3>{{msj}}</h3>
  <!-- <input v-bind:value="task" v-on:input="task = $event.target.value"> -->
  <BtnGetInfo @laKey="tareaDesdeHijo"></BtnGetInfo>
  <ul>
    <li v-for="t in tasks" :key="t.id">
      <Task :data="t"></Task>
      <button v-on:click="updateTask(t.id)">marcar tarea</button>
      <button @click="deleteTask(t.id)">eliminar tarea</button>
    </li>
  </ul>
  <button v-if="tasks.length > 0" @click="deleteAll()">eliminar todo</button>
</template>
<script>
  
import BtnGetInfo from './BtnGetInfo.vue';
this.tasks.push({
                id: this.id++,
                data: task,
                check: false
            });
export default {
    name: "TaskList",
    data() {
        return {
            tasks: [],
            id: 0,
            msj: "mensaje desde atributo"
        };
    },
    methods: {
        addTask(task) {
            this.tasks.push({
                id: this.id++,
                data: task,
                check: false
            });
            console.log(this.tasks);
        },
        updateTask(id) {
            //recorrer el arreglo y encontrar el objeto con el id y cambiarle el valor
            //de check a true
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].id == id) {
                    this.tasks[i].check = !this.tasks[i].check;
                }
            }
            // this.tasks.map(e=>{if(e.id == id) e.check = !e.check})
        },
        deleteTask(id) {
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].id == id) {
                    this.tasks.splice(this.tasks.indexOf(this.tasks[i]), 1);
                }
            }
            //this.tasks = this.tasks.filter(e => { return e.id !== id})
        },
        deleteAll() {
            this.tasks = [];
        },
        tareaDesdeHijo(tarea){
          this.addTask(tarea);
        }
        /**
          Agregar una nueva tarea - Listo
          Marcar una tarea como realizada - Listo
          Borrar una tarea - Listo
          Borrar todas las tareas - Listo
    
         */
    },
    components: { BtnGetInfo }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.check{
  color: red;
}
</style>

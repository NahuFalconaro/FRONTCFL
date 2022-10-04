<template>
  <input type="text" v-model="task">
  <button @click="nuevaTaskAlgoAsi(task)">add Task</button>
</template>

<script>
export default {
  name: 'BtnGetInfo',
  props: {
    msg: String
  },
  methods:{
    nuevaTaskAlgoAsi(task){
      this.$emit('laKey', task);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

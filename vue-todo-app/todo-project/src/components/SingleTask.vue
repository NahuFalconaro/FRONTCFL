<template>
  <p>{{tarea}}</p>
  <h1>{{test}}</h1>
</template>

<script>
export default {
  name: 'SingleTask',
  props: {
    tarea: String
  },
  data(){
    return{
      test: 'texto'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.check{
  color: red;
}
</style>

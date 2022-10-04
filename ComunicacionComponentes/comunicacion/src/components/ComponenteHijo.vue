<template>
  <h1>ComponenteHijo</h1>
  <p>{{msjHijo}}</p>
</template>

<script>
export default {
  name: 'ComponenteHijo',
  props:{
    msjHijo: String,
    otro: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <p :class="{'check': t.check}">{{data.data}}</p>
</template>

<script>
export default {
  name: 'Task',
  props: {
    data: {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.check{
  color: red;
}
</style>

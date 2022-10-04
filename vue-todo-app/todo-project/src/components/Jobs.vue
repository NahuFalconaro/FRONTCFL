<template>
  <BtnGetInfo @laKey="tareaDesdeHijo"></BtnGetInfo>
</template>

<script>
import BtnGetInfo from './BtnGetInfo.vue';
export default {
    name: "Jobs",
    props: {
        msg: String
    },
    components: { BtnGetInfo }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

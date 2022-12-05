<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/empleados">Empleados</router-link>
  </nav>
  <router-view/>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'NavComponent'
}
</script>

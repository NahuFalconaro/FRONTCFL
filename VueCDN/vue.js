new Vue({
  el: '#app',
  data:{
    titulo: 'Mi Titulo'
  },
  methods: {
    changeTitle(){
      this.titulo = 'Nuevo titulo'
    }
  }
})
//https://es.vuejs.org/v2/guide/events.html

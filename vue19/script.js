new Vue({
  el: "#tarjetita",
  data: {
    foto: "https://picsum.photos/200/300",
    nombre: "carla",
    descripcion: "la mejor de las tarjetitas",
  },
  methods: {
    borrar() {
      this.nombre = "";
    },
    editar() {
      this.descripcion = " change description";
    }
  }
})

new Vue({
  el: '#app',
  data: {
    titulo2: 'Titulo2',
    titulo: 'Titulo1',
  },
  methods: {
    changeTitle() {
      this.titulo = ' Titulo change '
    },
    changeTitle2() {
      this.titulo2 = ' Titulo change 2'
    }
  }
})


new Vue({
  el: '#contador',
  data: {
    numero: 0,
    mensaje: ' ',
  },
  methods: {
    sumar() {
      this.numero += 1;
      if (this.checkNumber(this.numero)) {
        this.mensaje = ' '
      }
    },
    restar() {
      if (this.checkNumber(this.numero)) {
        this.numero -= 1
        this.mensaje = ' '
      }
      else {
        this.mensaje = 'Numero no valido'
      }
    },
    checkNumber(numero) {
      return numero > 0;
    }
  }
})



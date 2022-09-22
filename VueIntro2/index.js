Vue.component('app-user',{
  template: `
  <div>
    <p>texto desde vue.component</p>
  </div>`
})

Vue.component('my-btn',{
  props:['create'],
  methods:{
    createTest(){
      alert('log', create);
    }
  },
  template: `
  <button>{{create}}</button>`
})

function getData(){
    fetch(`https://rickandmortyapi.com/api/character/limit=4`)
    .then(r=>{
      return r.json()
    })
    .then(r=>{
      return r;
    })
    .catch(error=>{console.log(error);});
}

Vue.component('card', {
  props:['g'],
  data: function () {
    return {
     data: this.get(),
    }
  },
  methods:{
    async get(){
    fetch(`https://rickandmortyapi.com/api/character/${this.g}`)
    .then(r=>{
      return r.json()
    })
    .then(r=>{
      // let result = {
      //   id: r.id,
      //   name: r.name,
      //   status: r.status,
      //   species: r.species,
      // }  
      this.data = r.name;
      console.log(this.data, 'data');
    })
    .catch(error=>{console.log(error);});
  }},
  template: `
  <p>{{ this.data }}</p>`
})
new Vue({
  el: "#app",
  data:{
    texto: '',
    textGreen: 'test',
    mostrar: false,
    showView: true,
    people:[
      'name1',
      'name2',
      'name3'
    ]
  },
  methods:{
    showClick(){
      this.showView = !this.showView;
    }
  }
})


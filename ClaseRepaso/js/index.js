// let btn = document.getElementById('btn');


// btn.addEventListener('click', ()=>{
//   let nombre = document.getElementById('nombre').value;
//   console.log(nombre.length === 0)
//   console.log(nombre);
//   console.log(nombre === " ");
// })


let name = '';
let address = '';
function home(name,address){
  this.name = name;
  this.address = address;
}

const myHome = new home('azul', 'misiones')
const myOtherHome = new home('tandil', 'belgrano')

console.log(myHome)
console.log(myOtherHome)

console.log(home.prototype, 'proto')

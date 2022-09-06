let personas = [
  {
    nombre: "Alan",
    edad: 25,
    profesion: ["Apicultor","Estudiante","Programador"]
  },
  {
    nombre: "Nahuel",
    edad: 23,
    profesion: ["Profesor"],
  },
  {
    nombre: "Carla",
    edad: 25,
    profesion: ["Programadora"],
  },
  {
    nombre: "Matias",
    edad: 27,
    profesion: ["Programador","Astronauta"],
  },
  {
    nombre: "Enzo",
    edad: 26,
    profesion: ["Programador"],
  },
]

let div = document.getElementById("personas");

window.addEventListener("load", ()=> {
  createList();
})

let list;

function createList(){
  list = document.createElement("ul");
  personas.forEach(persona => {
    createCard(persona);
  });
  div.appendChild(list);
}

function createCard(persona){
  let li = document.createElement("li");
  li.innerHTML += `Nombre: ${persona.nombre}, Edad: ${persona.edad}, Profesion: ${persona.profesion}`;
  list.appendChild(li)
}


//   Mostrar personas
//   1) Recorrer arreglo de personas -> function2(persona)
//   2) Crear elemento desde js para mostrar en html->recibe una persona
//   




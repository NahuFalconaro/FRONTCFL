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


let tbody = document.getElementById("tablaPersonas");


window.addEventListener("load", ()=> {
  createTable();
})
let tr;

function createTable(){
  personas.forEach(persona => {
    tr = document.createElement("tr");
    createCard(persona);
    tbody.appendChild(tr);
  });
}

function createCard(persona){
  let tdNombre = document.createElement("td");
  let tdEdad= document.createElement("td");
  let tdProfesiones= document.createElement("td");
  tdNombre.innerHTML+= persona.nombre;
  tdEdad.innerHTML += persona.edad;
  tdProfesiones.innerHTML+= persona.profesion;
  tr.appendChild(tdNombre)
  tr.appendChild(tdEdad)
  tr.appendChild(tdProfesiones)
}

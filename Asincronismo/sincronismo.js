//fetch

let html = document.getElementById('html');
function getDataFetch(nCharacter, limite){
  fetch(`https://rickandmortyapi.com/api/character/${nCharacter}%limit=${limite}`)
  .then(r=>{
    return r.json()
  })
  .then(r=>{
    let result = {
      id: r.id,
      name: r.name,
      status: r.status,
      species: r.species,
    }   
    html.innerHTML += JSON.stringify(result);
  })
  .catch(error=>{console.log(error);});
}
for (let i = 1; i < 5; i++) {
  getDataFetch(i); 
}

let url;
//fetch
function getHTMLFetch(html, id){
  fetch('html1.html')
  .then(r=>{
    return r.text()
  })
  .then(r=>{
    let id = document.getElementById(id);
    id.innerHTML += r;
  })
}
getHTMLFetch();


//fetch with async-await
let html2= document.getElementById('html2');

async function getRespuesta(){
  const respuesta = await fetch('html2.html');
  if(respuesta.ok){
    return respuesta.text()
  }

}
async function getDataMix(){
  let data = await getRespuesta();
  html2.innerHTML+= data;
}
getDataMix();



//calback

// function alerta(mensaje, callback){
//   alert(mensaje, 'START')
//   callback()
// }
// function alertaFInalizada(){
//   alert('finish')
// }

// alerta('alerta', alertaFInalizada)

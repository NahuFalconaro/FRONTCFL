
let filteredData = [
  { age: 5, linkcv: 'linkcv 2', fulltime: true, movility: true },
  { age: 9, linkcv: 'linkcv 2', fulltime: true, movility: true },
  { age: 2, linkcv: 'linkcv 2', fulltime: true, movility: true },
  { age: 11, linkcv: 'linkcv 2', fulltime: true, movility: true },
]

function retornoValue(key, x, y) {
  let valor = Object.keys(x).filter(g => { return g == key })
  return (x.key > y.key) ? 0 : x ? -1 : 1;
}

function getAlgo(keyV) {
  switch (keyV) {
    case 'age':
      return filteredData.sort((a, b) => {
        return (a.age > b.age) ? 0 : x ? -1 : 1;
      })
      break;
    case 'linkcv':
      return filteredData.sort((a, b) => {
        return (a.linkcv > b.linkcv) ? 0 : x ? -1 : 1;
      })
      break;
    case 'fulltime':
      return filteredData.sort((a, b) => {
        return (a.fulltime > b.fulltime) ? 0 : x ? -1 : 1;
      })
      break;
    case 'movility':
      return filteredData.sort((a, b) => {
        return (a.movility > b.movility) ? 0 : x ? -1 : 1;
      })
      break;
  }
}
function filterFulltime(key) {
  // if (this.isfilterFullTime == true) {
  //   this.isfilterFullTime = false;
  //   this.filteredData = this.filteredData.sort(function (x, y) {
  //     
  //   });
  // }
  // else {
  //   this.isfilterFullTime = true;
  //   this.filteredData = this.filteredData.sort(function (x, y) {
  //     return (x.fulltime < y.fulltime) ? 0 : x ? -1 : 1;
  //   });
  // }
  filteredData = filteredData.sort(function (x, y) {

  });
}



function orderBy(value) {

  this.filteredData = this.filteredData.sort(function (x, y) {
    return (x.hola > y.hola) ? 0 : x ? -1 : 1;
  });
}

function sort() {

}


function filtrar(key){
  
  for(let i=0; i < filterData.length; i++){
      for(let j=i+1; j < filterData.length; j++){
        if(filterData[i][key] > filterData[j][key]){
              let guardando  = filterData[i];
              filterData[i] = filterData[j];
              filterData[j] = guardando;
        }
      }
  }
  
  console.log("NewData", filterData)
}

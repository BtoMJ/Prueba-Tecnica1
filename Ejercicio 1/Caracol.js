function caracol(matriz){

  var arrayCaracol = []
  var arrayTemporal = []
  var contador = matriz.length

  for(let j = 0 ; j < contador - 1 ; j++){

    for(let i = 0 ; i < contador - j ; i++){

      var elementos = matriz[i]

      if(i === 0){
        for(const item of elementos)
          arrayCaracol.push(item)
      } else {
        let ultimo = elementos.pop()
        var a = elementos
        arrayCaracol.push(ultimo)
        arrayTemporal.push(a.reverse())
        if(i === matriz.length -1 ){
          arrayTemporal = arrayTemporal.reverse()
          if(arrayTemporal.length === 2){
            elementos = arrayTemporal
            for(const item of elementos)
              arrayCaracol.push(item)
          console.log("Caracol",arrayCaracol)
          return
          } else {
            matriz = arrayTemporal
            arrayTemporal = []
          }
        }
      }

    }

  }
}
  
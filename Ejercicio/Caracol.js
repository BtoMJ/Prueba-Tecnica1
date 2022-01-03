/*var x =[
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]*/

/*var x =[
[1, 2, 3, 4, 5],
[6, 7, 8, 9, 10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20]
]*/

//var x =[
//[1, 2, 3, 4],
//[5, 6, 7, 8],
//[9, 10, 11, 12]
//]


var x= [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
  ]
  
  function caracol(matriz){
    var arrayCaracol = []
    var arrayTemporal = []
    var contador = matriz.length
    // console.log("Contador", contador)
    // console.log("-------------")
    for(let j = 0 ; j < contador - 1 ; j++){
      for(let i = 0 ; i < contador - j ; i++){
        // console.log("j=",j," i=",i," Matriz.length=",matriz.length)
        // console.log("-------------")
        var elementos = matriz[i]
        // console.log("Linea",i,": ",elementos)
        if(i === 0){
          for(const item of elementos)
            arrayCaracol.push(item)
        } else{
        //   console.log("------------------")
          let ultimo = elementos.pop()
        //   console.log(ultimo)
        //   console.log(elementos)
          var a = elementos
          arrayCaracol.push(ultimo)
          arrayTemporal.push(a.reverse())
        //   console.log(arrayTemporal)
          if(i === matriz.length -1 ){
            arrayTemporal = arrayTemporal.reverse()
            if(arrayTemporal.length === 2){
            //   console.log("Reverse",arrayTemporal)
            //   console.log(arrayTemporal.length)
              elementos = arrayTemporal
              //console.log(elementos)
              for(const item of elementos)
                arrayCaracol.push(item)
               /*for(let h = 0 ; h < arrayTemporal.length ; h++)
                  arrayCaracol.push(arrayTemporal[h])*/
            console.log("Caracol",arrayCaracol)
            return
            } else {
            //   console.log("Reverse",arrayTemporal)
              matriz = arrayTemporal
              arrayTemporal = []
            //   console.log("Matriz",matriz)
            }
          }
        }
        // console.log("--------------")
        // console.log("Caracol",arrayCaracol)
        // console.log("--------------")
      }
    }
  }
  
  caracol(x)
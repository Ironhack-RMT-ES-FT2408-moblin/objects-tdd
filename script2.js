console.log("aprendiendo sobre testing")

// crear una funcion que convierte los centimos a euros
function convertCentsToEuros(centimos) {

  if (centimos === undefined) {
    return 0
  }

  if (typeof centimos !== "number") {
    return null
  }

  let euros = centimos / 100
  return euros

}


console.log("test1. Deberia convertir centimos a euros")
console.log( convertCentsToEuros(100) === 1 ) // true
console.log( convertCentsToEuros(3000) === 30 ) // true
console.log( convertCentsToEuros(-20) === -0.2 ) // true
console.log( convertCentsToEuros(0) === 0 ) // true

console.log("test2. Si el primer argumento no es un numero, deberia retornar undefined")
console.log( convertCentsToEuros("patata") === undefined ) // true

console.log("test3. Sin los centimos no son recibimos, deberia retornar 0")
console.log( convertCentsToEuros() === 0 ) // true
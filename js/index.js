/* console.log("Consulta")
console.log("1. diferencia entre objetos y arreglos en JS")
console.log("2. 5 metodos que se puedan usar con arreglos. ") */

var mivariable = 3
let nombre = "oscar"
let apellido = 'MESA'
const PI = 3.1416
const esDeportista = true
var a = 4
let b = 5
const suma = 4 + 5
console.log(mivariable, nombre.toUpperCase(), apellido.toLowerCase(), PI, esDeportista);
console.log(nombre.charAt(1), apellido.substr(-2, 1))
console.log(a, '+', b, "=", suma)
    


const misuma = a => {
    console.log("Estoy sumando!!!!")
    const y = 10
    if(mivariable > 1){
        var x = 8
        x = 2
    }
    console.log(a , "+", b, "=",  (a + b))
    return 5 + a
}

const sumar = (a, b) => 
     a + b

console.log("mi suma es ", sumar(3, 4))

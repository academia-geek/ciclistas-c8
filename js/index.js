const ciclistas = ["diego", "camilo", "diana", "oscar"];
const tabla = [1,2,3,4,5,6,7,8,9,10]
let dia = 0
    
//while(dia++ < 7)console.log("Dia de la semana ", dia)

/*
for(let i = 0; i < ciclistas.length; i++)
    console.log("Elemento ", ciclistas[i])

for(let indice in ciclistas){
    console.log(ciclistas[indice])
}

for(let ciclista of ciclistas){
    console.log(ciclista)
}*/

//console.log(ciclistas)
    
//const iterador = ciclista => console.log(ciclista)

//ciclistas.forEach(ciclista => console.log(ciclista))
    
tabla.forEach((numero) => {
    console.log("===========")
    console.log(numero * 8);
    console.log("===========")
})
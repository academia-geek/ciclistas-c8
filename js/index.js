const ciclistas = []
const cilista1 = {
  "nombre": 'Pedro',
  edad: 25,
  distancia: function (x) {
    return x * 8000
  },
  alto_rendimiento: true
}

ciclistas.push(cilista1)

console.log(ciclistas)
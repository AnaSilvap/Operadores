let h1Saludo = document.querySelector("#Saludo")
let nombre = prompt("escriba su nombre y apellido")
h1Saludo.innerHTML = `Hola ${nombre}`
h1Saludo.style.color = "Purple"
console.log(h1Saludo)
let h2Edad = document.querySelector("#Edad")
let Edad = prompt("escriba su edad en 10 años")
h2Edad.innerHTML = `Vas a tener ${Edad} años`
h1Saludo.style.color = "Green"
console.log(h2Edad)

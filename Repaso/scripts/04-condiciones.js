//Operador ternario
let persona = ["Victor Robles", 17]

//condicion clasica
if(persona[1]>=18){
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad")
}
//condicion ternario
let edad = (persona[1] >= 18) ? "Es mayor de edad" : "Es menor de edad";

console.log(edad);
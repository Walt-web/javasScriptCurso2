let persona = ["Walter", 32];

//Condicion normal if

if(persona[1]<= 18){
    console.log("Es menor de edad");
} else{
    console.log("Es mayor de edad")
}

//Operador ternario

let validacion = (persona[1]<= 18) ? "Es menor de edad": "Es mayor de edad";
console.log(validacion);

//Diferencia entre == ; ==== != y !==

let edad1 = 80;
let edad2 = "80";

if(edad1 !== edad2){
    console.log("Edades iguales")
} else {console.log("Edades distintas")}
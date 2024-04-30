
/*let frutas = ["manzana", "pera","naranja", "sandia"];

//let manzana = frutas[0];
//let pera = frutas[1];
//let sandia = frutas[2];

//console.log(manzana);
//En lugar de crear las variables una por una accediendo al indice
//Usamos la desestructuracion 

let [manzana,pera,sandia] = frutas;
console.log(manzana);
console.log(pera);
//console.log(naranja);
console.log(sandia);

let persona = {
    nombre: "Juan",
    edad: 80,
    altura: 190,
    pais: "España"
}

let {nombre,edad,altura,pais} = persona;

console.log(nombre)
console.log(pais)*/

let datos_usuario = "Walter-Andres-Servin-35895286-23/10/1990";

let [nombre,nombre2,apellido,DNI,fecha] = datos_usuario.split("-");

console.log(nombre);
console.log(nombre2);
console.log(apellido);
console.log(DNI);
console.log(fecha);


//Forma Clasica de 
let marketType = ["BOL", "LOWVIG","TG","SB"];
/*let bol = marketType[0];
let LOWVIG = marketType[1];
let TG = marketType[2];
let SB = marketType[3];*/


//Desestructuracion de un array
//se crea una variable con cada uno de los objetos del array
let [BOL, LOWVIG,TG,SB] = marketType;
console.log(LOWVIG);

//Desestructuracion de un string
let persona = "Walter Andres Servin 23/10/09 33";
let [NOMBRE1,NOMBRE2,APELLIDO,FECHA,EDAD] = persona.split(" ");

//Desestructuracion de un objeto
let alumno = {
    legajo: "2504",
    curso: "Tecnologia",
    notas: {
        Q1: 10,
        Q2 : 6,
        Q3: 7
    }
}

let {legajo,curso,notas} = alumno;

console.log("Legajo " + legajo + " Toff " + typeof(legajo));
console.log("Curso " + curso + " Toff " + typeof(curso));
console.log("Notas " + JSON.stringify(notas) + " Toff " + typeof(notas));










































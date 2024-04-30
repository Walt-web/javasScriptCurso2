let estudiante = {
    nombre: "Juan",
    apellido: "Gomez",
    edad: 19,
    domicilio: {
        calle: "Rivadavia",
        nroCalle: 110
    },
    carrera: "Derecho",
    regular: true

}

function getNombre(){
    return estudiante.nombre;
}
function getEdad(){
    return estudiante.edad;
}
function saludo(persona,edad){
    console.log("Hola " + persona + " ¿como estas? " + "tienes " + edad + " años")
};

function validateIsRegular(){
    estudiante.regular = estudiante.edad >= 18 ? true : false;
    if(estudiante.regular) {
        console.log("Es mayor de edad")
    } else {console.log("Es menor de edad")}
    return estudiante.regular;
}

let validate = () =>{

    estudiante.regular = estudiante.edad >= 18 ? true : false;
    if(estudiante.regular) {
        console.log("Es mayor de edad")
    } else {console.log("Es menor de edad")}
    return estudiante.regular;

}


//////////////////////////
saludo(getNombre(),getEdad());
console.log(validateIsRegular());
///////////////////////7
let saludo2 = function(nombrePersona){
    return `¿Hola ${nombrePersona} como estas?`
}

let saludo3 = nombrePersona => {
    return `Esta es la tercera funcion de saludo a ${nombrePersona}`;
}

console.log(saludo2("juan Acosta"));
console.log(saludo3("Walter"));

//Operaciones matematicas usando funcion flecha

let n1 = 6;
let n2 = 4.3;
let resultado;

let suma = (v1,v2) => {
    resultado = `Este es el resultado de la suma: ${v1+v2}`;
    return resultado;
}

console.log(suma(n1,n2));

let resta = (v1,v2) => {
    resultado = `Este es el resultado de la resta: ${v1-v2}`;
    return resultado;
}

console.log(resta(n1,n2));

let multiplicacion = (v1,v2) =>{
    resultado = `Este es el resultado de la multiplicación: ${v1*v2}`;
    return resultado;
}

console.log(multiplicacion(n1,n2));

let division = (v1,v2) => {
    resultado = v2 != 0 ? resultado = `Este es el resultado de la division: ${v1/v2}` : resultado = "No se puede dividir por cero"
    return resultado;
}

console.log(division(n1,n2));

let objPersona = {
    nombre: "Ricardo",
    apellido: "Perez",
    edad: 10,
    nivel: ()=>{
        if(objPersona.edad< 18)
            {console.log("Nivel Primaria")}
            else {console.log("Nivel Secundaria")
                }
    }
}

objPersona.nivel();


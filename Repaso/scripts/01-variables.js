//EcmaScript 2021/ES12/ES.NET

//Variables: var, let const.. Palabras reservadas

//Var es para un ambito global 
var nombre = "Walter";

function mostrarNombre(){
    var nombre = "Andres"; // Esta variable se redefinio dentro de la funcion 
    var apellidos = "Robles" //Si quito var estaría solo cambiando el valore de la variable original
    console.log("Dentro: " + nombre);
    console.log("Dentro: " + apellidos);
}

/*mostrarNombre();

console.log("Fuera: " +nombre);*/

//LET: su ambito es el bloque
//ahorra memoria
let pais = "España";

function mostrarPais(){
    console.log(pais);
}

mostrarPais();

if(pais == "España"){
   var continente = "Europa" 
    console.log(continente);
}

console.log('Fuera: ', continente); //Esto arroja un error porque la varible let no puede ser llamada fuera de su contexto
                                    //Si cambio la variable continenen a VAR no arroja error porque 
                                    //var si es global 

for(var contador = 0; contador <= 5; contador++){
    console.log(contador);
}

console.log("contador: ", contador);

////////////////////////////////

//const crea constante. 
/*let edad = 18;
console.log(edad);

edad = 12
console.log(edad);*/

const edad = 18;
console.log(edad);

edad = 12
console.log(edad);

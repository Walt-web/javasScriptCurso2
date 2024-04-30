
let nombre = "Walter"

//Creamos la funcion saludo
function Saludo(persona = "Victor Robles!!", year = 2020) {
    saludo = "Hola " + persona + " te mando un saludo" + " estamos en el año " + year;
    console.log(saludo);
}

Saludo("Juan");
Saludo("Ricardo");
Saludo();


Saludo("Ramon", 2050);
Saludo("Gimena", 2033);



//Parametro por defecto

/* ***************** */

//para declarar una funcion usamos la palabra reservada function 
//Podemos enviar parametros por defecto los cuales en caso de no escribir 
//el parametro al llamar la funcion toma el "por defecto"

//Funciones Flecha. 

let saludo2 = function (nombre) {
    return "Hola te envio otro saludo " + nombre;

}

//console.log(saludo2("andres"));

let saludos3 = nombre => "Hola te envío un tercer saludo " + nombre;

//console.log(saludos3("Richard"));

let saludo5 = (nombre, pais) => {
    let continente = "Europa";

    if (pais !== "España") {
        continente = "Asia"
    }

    return "Hola, te envío un saludo "
        + nombre + " de " + pais + " y el continente " + continente
}

//console.log(saludo5("Carlos ", "EEUU"));



/*Funciones una funcion normal se declara con la palabra reservado function,  
el nombre de la funcion, los parametros de entrada o solo () si no lleva parametros. 
Y entre llaves la funcion. */

function saludoEJ(nombre) {
    console.log("Hola " + nombre);
}

saludoEJ("RicardooEJ");

/*la funcion flecha se declara con una variable, el nombre de la variable,  = y los parametros de entrada 
despues la flecha y entre llaves lo que se ejecuta como parte de la funcion 

EJ: */

let multiplicacionEJ = (n1, n2) => {
    resultado = n1 * n2;
    console.log("Esto es una multiplicacion " + resultado);
};

multiplicacionEJ(25, 5);


//////////////

let tienda = {
    nombre: "GAME",
    calle: "Rivadavia",
    videosJuegos: ["GTA", "WWE", "FIFA"],
    mostrarNombre: function () {
        return this.nombre;
    },
    mostrarCalle: () => {
        return tienda.calle;
    },
    mostrarVideos: () => {
        tienda.videosJuegos.forEach(Juego => {
            console.log(Juego)
        })
    },

    mostrarGTA: () => {
        tienda.videosJuegos.forEach(video => {
            if (video == "GTA") {
                console.log(video + " El mejor juego de la historia")
            } else {
                console.log(video)
            }
        })
    }
}

console.log(tienda.mostrarNombre());
console.log(tienda.mostrarCalle());
//tienda.mostrarVideos();
tienda.mostrarGTA();

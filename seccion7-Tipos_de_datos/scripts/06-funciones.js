//Funcion es una manera de agrupar instrucciones para llamar a esa funcion y que las instrucciones se ejecuten
//Sirve tambien para reutilizar codigo 
//En este caso creo una funcion que recibe dos parametros 
//pero con valores por defecto en caso de llamar a la funcion sin pasarle los parametros

function saludo(persona = "Ricardo",anio = 1999){
    console.log("Hola! " + persona + " este año es " + anio )
}

saludo();
 
let prueba = param => `Esto es una prueba que rotorna el valor ${param}`;
console.log(prueba("PRUEBA RETURN"));

function prueba1() {

}

let saludo4 = (nombre,pais ) => "Hola, te mando un saludo " + nombre + " de " + pais;

console.log(saludo4("Pepe", "España"));

let saludo5 = (nombre,pais ) => {
    let continente;

    if (pais === "España"){
        continente = "Europa";
    } else {continente = "Asia";}

    return "Hola, te mando un saludo " + nombre + " de " + pais + " y el continente es " + continente ;
}

console.log(saludo5("Juan","Argentina"));

/////////

let tienda = {
    nombre: "Game",
    videoJuegos: ["GTA", "WWE", "FIFA"],
    mostrar: function(){
        this.videoJuegos.forEach(juego => console.log(juego))
    },
    mostrar2(){
        console.log(this.nombre);
    },
    mostrar3: () => {
        console.log(tienda.nombre);
    },
};

tienda.mostrar();
//tienda.mostrar2();
//tienda.mostrar3();
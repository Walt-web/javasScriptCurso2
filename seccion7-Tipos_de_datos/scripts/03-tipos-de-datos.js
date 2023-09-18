//String 
let nombre = "Walter Servin";

//Number 
let numero = 14;
let decimal = 3.2;

//boolean
let mayor_edad = true;
let menor_edad = Boolean(0); //1 true 0 false  

//array
let paises = ['España', 'Argentina', 'Mexico'];

//null 
let vacio = null;
//undefined
let no_definido = undefined;

//consultar el tipo de dato
/*console.log(typeof nombre,
            typeof numero,
            typeof decimal,
            typeof mayor_edad,
            typeof menor_edad,
            typeof paises,
            typeof(paises[0]),
            typeof vacio, 
            typeof no_definido

);
*/
//JSON JavaScript Objet Notation
//Objeto literal - dentro de puedo guardar muchos datos. 
//Tienen clave valor. Prpiedad y un valor para esa propiedad. 

let pelicula = {
    titulo: "Space Jam",
    genero: "Animacion",
    anio: 1996,
    director: "Tarantino",
    //metodo 
    mostrar: function(){
        return `
            **** LA PELICULA DE LA SEMANA *** \n
            Titulo: ${this.titulo} \n
            Genero: ${this.genero} \n
            Año: ${this.anio} \n
            Director: ${this.director}
        
        
        `;
    }
}

//Como agregar propiedades desde afuera
pelicula.pais = "EEUU"
pelicula["premios"] = "Globo"
//Eliminar propiedades desde afuera
delete pelicula.director;
delete pelicula['anio'];
//Cambiar el valor de una propiedad
pelicula.genero = null;

//con in verifico si una propiedad existe dentro de un objeto
//console.log("titulo" in pelicula);
//console.log("anio" in pelicula); //esto retorna false por que se elimino la propiedad 

//console.log(pelicula);

for(propiedad in pelicula){
    let dato_actual = pelicula[propiedad];
    if(dato_actual !== null && typeof(dato_actual) !== "function"){
        console.log(dato_actual);
    }
    
}

//Symbol - Porque mas que los datos sean iguales Symbol hace que sean diferentes
//Symbol hace que dos datos sean unicos
animal = Symbol("Tigre");
animal2 = Symbol("Tigre")

console.log(animal === animal2);

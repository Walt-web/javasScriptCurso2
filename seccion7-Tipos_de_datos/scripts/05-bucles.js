let nombres = [
    "Juan",
    "Carlos",
    "Pedro",
    "Ramon"

]

//console.log(nombres[0]);

//For clasico ejecuta el bucle mientras que se cumpla la condicion
for (let i = 0; i < nombres.length; i++) {
    //console.log(nombres[i]);
}
let num = 0;

//Propio de javascript crea la variable y le asigna el valor de cada elemento del array
//Ejecuta la sentencia mientras que recorre el array 
for (let nombre of nombres) {
    //console.log(nombre);
    //console.log("Valor indice: " + `${num} ` + nombre);
    //num++;
}

//El for in crea una variable que se asigna con el valor del indice
for (let index in nombres) {
    //console.log(index, nombres[index]);
}

//Se llama a la funcion For Each. Se puede crear una funcion que obtiene 
//el valor de cada indice del arreglo, el indice y el objeto array si se indican estos parametros
nombres.forEach(function(nombre_actual,index,arreglo){
    console.log(index,nombre_actual,arreglo[index]);
});

/*nombres.forEach((valueString, index) => {
    console.log(valueString, index)    
})*/

//forEach con funcion flecha
//En lugar de usar la palabra reservada function desde la variables con 
//la flecha se indica que se debe ejecutar una funcion 
//nombres.forEach((nombre_actual,index) => console.log(nombre_actual,index));

//Recorrer string
let sitioWeb = "victorreblosewb.es";

for (let letra of sitioWeb) {
    //console.log(letra);
}


//Iterables
const mi_iterable = nombres[Symbol.iterator]();
//console.log(typeof mi_iterable, mi_iterable );
/*console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());*/

//crear un iterador personalizado
//crear un objeto json por ej
//al no ser un objeto iterable como array o string
//no puedo user for of

let fruta = {
    nombre: "Manzana",
    color: "Verde",
    temporada: "Invierno"
}

fruta[Symbol.iterator] = function () {
    let indice = 0;
    let valores = Object.values(this);
    return {
        next() {
            //indice++;
            if (indice >= valores.length) {
                return {
                    done: true,
                    value: undefined
                };
            }
            return {
                done: false,
                value: valores[indice++]
            }
        }
    }
}
for (let propiedad of fruta) {
    //console.log(propiedad);
}
for (let propiedad in fruta) {
    console.log(propiedad, fruta[propiedad]);
}





let nombres = [
    "Walter",
    "Cristian",
    "Ovi",
    "Mati"

]

//console.log(nombres[0]);

//For ejecuta el bucle mientras que se cumpla la condicion
for(let i = 0; i< nombres.length;i++){
    //console.log(nombres[i]);
}
let num = 0;
//Propio de javascript crea la variable y le asigna el valor
//Ejecuta la sentencia mientras que recorre el array 
for(let nombre of nombres){
    //console.log(nombre);
    //console.log(num++);
}

//El for in crea una variable que se asigna con el valor del indice
for(let index in nombres){
    //console.log(index, nombres[index]);
}

nombres.forEach(function(nombre_actual,index){
    //console.log(nombre_actual,index);
})

//forEach con funcion flecha
//En lugar de usar la palabra reservada function desde la variables con 
//la flecha se indica que se debe ejecutar una funcion 
nombres.forEach((nombre_actual,index) => console.log(nombre_actual,index));
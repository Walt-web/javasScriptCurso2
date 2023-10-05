//Funcion es una manera de agrupar instrucciones para llamar a esa funcion y que las instrucciones se ejecuten
//Sirve tambien para reutilizar codigo 
//En este caso creo una funcion que recibe dos parametros 
//pero con valores por defecto en caso de llamar a la funcion sin pasarle los parametros

function saludo(persona = "Ricardo",anio = 1999){
    console.log("Hola! " + persona + " este año es " + anio )
}

saludo();
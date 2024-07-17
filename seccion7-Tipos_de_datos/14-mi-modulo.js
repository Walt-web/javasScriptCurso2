
//Al exportar una funcion con default se importa sin llaves. 
export default function imprimirArray(datos){
    datos.forEach(element => {
        console.log(element)
    });
    return datos;
}

export function imprimirNombre(nombre){
    console.log(`Hola mi nombre es ${nombre}`)
}



//export default imprimirArray;
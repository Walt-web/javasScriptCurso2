let productos = [
    {
        nombre: "Notebook",
        marca: "HP",
        precio: 1200
    },
    {
        nombre: "Camara Reflex",
        marca: "Samsung",
        precio: 600
    },
    {
        nombre: "Table",
        marca: "Asus",
        precio: 300
    }
]

/*function mostrarProductos() {
    setTimeout(()=>{
        return productos;
    }, 500)
    
}*/

//console.log(mostrarProductos());

function mostrarProductos() {
    return new Promise((resolve, reject) => {
        console.log("...Cargando")
        setTimeout(() => {
            //resolve(productos)
            reject(Error("A ocurrido un error"))
        }, 3500);
    });
}

mostrarProductos().then(items => console.log(items))
                .catch(error => console.log(error.message));
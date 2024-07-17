let productos = [
    {
        nombre: "TV",
        marca: "LG",
        precio: 1500
    },
    {
        nombre: "Cel",
        marca: "Motorola",
        precio: 800
    },
    {
        nombre: "Tablet",
        marca: "Asus",
        precio: 2100
    },
    {
        nombre: "Impresora",
        marca: "Printer",
        precio: 900
    }
];




let recorrerObjeto = () => {
    let compra;
    productos.forEach(items => {
        if (items.nombre === "TV") {
            compra = items;
        }
    });
    return compra
}

console.log("Funcion Recorrer Objeto;", recorrerObjeto());

function compraProducto() {
    console.log("Buscando producto TV")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(recorrerObjeto())
        }, 3000)

    });
}

console.log(compraProducto().then(producto => {
    producto;
} ))

function obtenerProductosProm() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
            //reject(error("A ocurrido un error"))
        }, 3500);
    });
}





obtenerProductosProm()
    .then((items) => {
        console.log("Productos disponibles: ", items);
        return compraProducto();
    })
    .then(compra => {
        console.log("Comprando...")
        console.log("Producto comprado: ", compra);

        let productosDisponibles = productos.filter(producto =>{
            return producto != compra
        })

        console.log("Productos Restantes:",productosDisponibles);
    })
    .catch(error => console.log(error))
    .finally(() => {
        console.log("Promesa Finalizada")
    });





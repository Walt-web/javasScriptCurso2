let productos = [
    {
        nombre: "Ordenador Gaming",
        marca: "Asus",
        precio: 1200
    },
    {
        nombre: "Tablet",
        marca: "Samsung",
        precio: 300
    },
    {
        nombre: "Camara Reflex",
        marca: "Canon",
        precio: 650
    }
];


function conseguirProductos() {

    return new Promise((resolve, reject) => {
        console.log("Cargando productos...")
        setTimeout(() => {
            resolve(productos);
            //reject(Error("A ocurrido un error!!"))
        }, 3500);
    })
}

function productoComprado(nombre) {
    return new Promise((resolve, reject) => {
        console.log("Haciendo compra...")
        //console.log("Cargando productos...")
        setTimeout(() => {
            resolve({
                producto: nombre,
                cliente: "Victor Rebles Web"
            });
        }, 3000);
    })
}

function procesarVenta(venta) {
    console.log("Producto Comprado", venta)

    productos = productos.filter(producto => {
        return producto.nombre != venta.producto;
    });

    return productos
}

conseguirProductos()
    .then(items => {
        console.log("Productos disponibles", items)
        return productoComprado("Ordenador Gaming");
    })
    .then(venta => {
        procesarVenta(venta);
        return productoComprado("Tablet");
    })
    .then(venta => {
        procesarVenta(venta);
        return productoComprado("Camara Reflex");
    })
    .then(venta => {
        procesarVenta(venta);
    })
    .catch(error => console.log(error.message))
    .finally(() => {
        if(productos.length >= 1){
            console.log("Productos que quedan disponibles", productos)
        } else {
            console.log("No quedan productos disponibles")
        }
        console.log("Promesa finalizada!!");   
    })


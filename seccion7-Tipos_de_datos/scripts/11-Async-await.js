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

function mostrarProductos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
            //reject("A ocurrido un error")
        }, 3000);
    });
}

function mostrarNombre() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Walter Promise")
        }, 3000);
    });
}

//Use de then para resolver promesas con una funcion callback

mostrarProductos().then(items => {
    console.log(items)
});

//Funcion que usa async await y resuelve dos promesas, 
//espera a que ejecute una promesa y despues ejecuta otra 

async function getProductos(){
    console.log("Funcion 1");
    let productos = await mostrarProductos();
    let nombre = await mostrarNombre();
    console.log(productos, nombre);
};

//await Promise.all ejecuta las promesas al mismo tiempo 
async function getProductos_awaitAll(){
    let nombre_y_productos = await Promise.all([mostrarProductos(),mostrarNombre()]);
    //console.log(nombre_y_productos[0],nombre_y_productos[1]);
    console.log(...nombre_y_productos);
}

getProductos_awaitAll()

/*let getProductos2 = async () => {
    console.log("Funcion 2");
    console.log(await mostrarProductos());
}

getProductos2();*/
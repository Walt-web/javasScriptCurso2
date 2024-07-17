//Una promesa es una forma de ejecutar codigo de manera sincronica con javascript.
//Para crear una promesa se realiza la creacion de un objeto "Promise" que debe recibir dos parametros "resolve" y "reject"

//En este ejemplo creo un objeto promesa el cual ejecuta una funcion callback 
const myPromise = new Promise((resolve, reject) => {

    console.log("Esperando a que finalice la promesa")
    setTimeout(() => {

        const success = false; //Simula un resultado de exito 
        if (success) {
            resolve("Operacion exitosa");
        } else {
            reject("La operacion falla");
        }

    }, 4000);
});


myPromise.then(result=>{
    console.log(result);
}).catch(error =>{
    console.log(error);
});
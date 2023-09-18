let arrayDeObjetos = ["Natalia", "Cascella", "Comerciante"];

console.log(arrayDeObjetos[0]);

function cambiarTitulo(){
    document.querySelector('#titulo').innerHTML = arrayDeObjetos[0];
}

cambiarTitulo();
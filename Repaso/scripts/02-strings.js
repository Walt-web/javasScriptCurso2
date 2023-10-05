let nombre = "Walter";
let apellido ="Servin";
let profesion = "QA";
let edad = 55;

let nye = nombre + "" + apellido + "\n" + profesion;

let plantilla = `
hola 
soy 
walter
tengo 33 años
`;

let plantilla2 = `
soy ${nombre} ${apellido} y trabajo como ${profesion};`

//console.log(nye);
//console.log(plantilla);
//console.log(plantilla2);

function imprimirDatos(edad){
    console.log(`Hola Soy ${nombre} ${apellido} tengo ${edad} años. Y trabajo como ${profesion}`);
}

let fichaTecnica = `
    <div class="ficha"> 
        <h2>${nombre} ${apellido} </h2>
        <h3> ${profesion}</h3>
        <p>Forma parte del equipo de victorroblesweb.es</p>
    </div>
`;

function ficha(nombre,apellido){
    let fichaTecnica = `
    <div class="ficha"> 
        <h2>${nombre} ${apellido} </h2>
        <h3> ${profesion}</h3>
        <p>Forma parte del equipo de victorroblesweb.es</p>
    </div>`
return fichaTecnica
}



document.addEventListener('DOMContentLoaded',function(){
    let cajaFichas = document.createElement("section");
    cajaFichas.innerHTML =  fichaTecnica;
    cajaFichas.innerHTML +=  ficha('Juan','Carlos');
    cajaFichas.innerHTML +=  fichaTecnica;
    document.body.appendChild(cajaFichas);

    document.querySelector('.Titulo').innerHTML = plantilla;
});





imprimirDatos(25);


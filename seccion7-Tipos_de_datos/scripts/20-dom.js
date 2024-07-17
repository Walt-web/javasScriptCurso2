//let contenedor = document.getElementById("contenedor");

//let contenedor = document.querySelector(".contenedor");
let contenedor = document.querySelectorAll(".contenedor");
console.log(contenedor);

contenedor.forEach(elemento => {

    elemento.innerText = "Hola soy un texto desde JS"
    elemento.className = "ficha";

})


/*contenedor.style.border = "1px solid black";
contenedor.style.backgroundColor = "#CCC";*/

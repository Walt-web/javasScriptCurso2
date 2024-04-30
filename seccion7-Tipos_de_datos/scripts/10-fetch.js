//Peticion ajax
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(items => {
        console.log(items)
        mostrar(items)
    })
    .catch(error => {
        console.log("La peticion ajax ha fallado")
    })

//DOM
function mostrar(elementos) {
    let contenedor = document.querySelector("#contenedor");

    elementos.forEach(elemento => {
        let muestrame = `
        <article>
            <h2>${elemento.title}</h2>
            <p>${elemento.body}</p>
       </article>
       <hr/>     
        `;
        contenedor.innerHTML += muestrame;
    });
    return elementos;
}
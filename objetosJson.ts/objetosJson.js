let pelicula = {
    titulo: "Space Jump",
    genero: "comedia",
    anio: 1990,
    director: "Michel Fox",
    mostrar: function mostrarDatos(){
        return `
        *** ${this.titulo} es una pelicula del genero ${this.genero}
        se estreno en ${this.anio} y el director es ${this.director}.
        `
    }
}

let titulo = document.querySelector('#titulo');


function cambiarTitulo(texto){

document.querySelector('#titulo').innerHTML(texto);
}

console.log(pelicula.mostrar());
cambiarTitulo(pelicula.mostrar());
console.log(titulo);
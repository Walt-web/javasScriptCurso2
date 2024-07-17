//Molde
class Coche {

    //Se ejecuta cuando se instancia la clase
    //Si creo un objeto del tipo coche se va a inicializar con estos valores
    constructor(marca, modelo, color, velocidad, year) {
        //Propiedades o atributos
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidad = velocidad;
        this.year = year;
    }

    //Dentro de mi clase puedo crear funciones que modifiquen valores

    cambiarMarca(marca) {
        this.marca = marca;
    }
    //Tambien funciones que obtengan la marca
    obtenerMarca() {
        return this.marca;
    }

    //getters y seters usan la palabra reservado get y set y no se llaman como un metodo/funcion normal
    //se transforman en propiedades publicas 

    set cambiarModelo(modelo) {
        this.modelo = modelo;
    }
    get obtenerModelo() {

        return this.modelo;
    }

    static saludar(nombre) {
        console.log("Hola: " + nombre);
    }

}

//Crear objeto

let mi_coche = new Coche("Toyota", "C4");
//console.log(mi_coche);

mi_coche.cambiarMarca("Jeep");
//console.log(mi_coche.obtenerMarca());

//usamos getters y seteers

mi_coche.cambiarModelo = "Spark LT";
//console.log(mi_coche.obtenerModelo, mi_coche);


//Metodo statico en una clase se invocan directamente con el nombre de la clase y no se debe crear una instancia para usarlos.  

Coche.saludar("Ricardo...");


//Herencia Puedo crear una clase que herede todos los atributos y metodos de otra
//Creando el constructor y usando super obtengo los datos de la Clase padre y puedo agregar otros atributos al constructor

class Moto extends Coche {
    constructor(
        marca, modelo, color, velocidad, year, cilindrada
    ) {
        super(
            marca, modelo, color, velocidad, year
        );
        this.cilindrada = cilindrada;
    }
}

let mi_moto = new Moto("Jahamaha", "full", "rojo", 200, 2020, 5);
console.log("Marca de la moto: " + mi_moto.marca);
console.log("Modelo: " + mi_moto.obtenerModelo);
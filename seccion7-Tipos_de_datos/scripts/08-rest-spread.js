let heroes = ["Batman", "Spiderman","Superman","Venon","Aquaman"];
console.log(...heroes);


function mostrarHeroes(heroe1,heroe2){
    console.log(`
        **********Mis Heroes favoritos son 
                ${heroe1} y ${heroe2} *************
    `)    
}

mostrarHeroes(...heroes);


miArray = ["Value1","Value2","Value3"];

miSegundoArray = ["Value1B","Value2B",...miArray]

console.log(...miSegundoArray);
//se imprime Value1B Value2B Value1 Value2 Value3
console.log(miSegundoArray);
/*
[
    "Value1B",
    "Value2B",
    "Value1",
    "Value2",
    "Value3"
]
*/
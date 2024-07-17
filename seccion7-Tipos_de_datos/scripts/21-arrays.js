let personas = ["victor","paco","pepe","Juan"];

//Realiza una busqueda especifica
let busqueda = personas.find(persona => persona === "victor"); 

console.log(busqueda);

console.log(personas.includes("paco")); //Retorna boolean


//Filter filtra entre elementos del array u objeto por una condicion
let nuevas_personas = personas.filter(persona => persona.includes("a")); 
console.log(nuevas_personas);

personas.some(nombre => nombre === "victor");



if (2 || 3 > 1) {console.log("Hola Mundo");}
2||3 > 1 ? console.log("Hola Mundo") : console.log("Chau Mundo");

let animales =["Perro", "Gato", "Pajaro", "Pez", "Tortuga"];
animales.push("Hamster");
animales.unshift("Serpiente");
animales.splice(3,1); 
console.log(animales);

let libros = new Set (["El Quijote", "Sapiens", "El Principito", "Metamorfosis", "IT"]);
libros.add("1984");
libros.add("El Quijote");
libros.delete("Metamorfosis");
console.log(libros)

let meses = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"]
]);

meses.has(5) ? console.log(meses.get(5)) : console.log("Mes no encontrado");
meses.set("Meses de verano", [meses.get(5), meses.get(6), meses.get(7)]);
console.log(meses);

animalesset = new Set(animales);
animalesmap = new Map();
animales.forEach((animal, index) => {
  animalesmap.set(index, animal);
});
console.log(animalesmap);
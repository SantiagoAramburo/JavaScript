
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


for (let i=1;i<21;i++){
  console.log(`Número suma: ${i}`);
}

  let suma = 0;
  for (let i = 1; i <= 100; i++) {
    suma += i;
  }
  console.log(`Suma del 1 al 100: ${suma}`);

  
  for (let i = 1; i <=50; i++){
    if (i % 2 == 0){
      console.log(`Número par: ${i}`);
    }}

for (i=0;i<animales.length;i++){
  console.log(`Animal: ${animales[i]}`);
}
function cantidadvocales(palabra) {
let candtidad_vocales = 0;
palabra = palabra.toLowerCase();
for (let letra of palabra){
  if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    candtidad_vocales++;
  }
}
return candtidad_vocales;
}
let palabra = "JavaScript";
for (let i=1; i<=10; i++){
  console.log(`Tabla del 5: ${i*5}`);
}
let palabrainvetida = "";
for (let i = palabra.length-1; i >= 0; i--){
  palabrainvetida += palabra[i];
}
console.log(`Palabra invertida de ${palabra}: ${palabrainvetida}`);

let fibonacci = [0, 1];
for (let i=2; i<=10; i++){
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
console.log(`Primeros 10 numeros Fibonacci: ${fibonacci}`);


function numeroalto(array) {
  let max = array[0];
  for (let arrayElement of array) {
    if (arrayElement > max) {
      max = arrayElement;
    }
  }
  return max;
}
let numeros = [3, 5, 7, 2, 8, -1, 4];
console.log(`Número más alto en el array: ${numeroalto(numeros)}`);
console.log(cantidadvocales("Ejercicio de múltiples líneas"));

function mayusculas(array) {
  let resultado = [];
  for (let elemento of array) {
    resultado.push(elemento.toUpperCase());
  }
  return resultado;
}
console.log(mayusculas(["ejercicio", "de", "múltiples", "líneas"]));

function numprimo(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(numprimo(4));

function factorial(n) {
  let f = 1;
  for (let i = 2; i <= n; i++) {
    f = (f*i);
  }
  return f;
}
console.log("factorial de 5 es: " + factorial(5));


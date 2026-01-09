// Esto es un comentario en JavaScript
/* 
  Esto es un comentario
  de múltiples líneas
*/


//Asignación de variables
//var
var mensaje = console.log("Hola JavaScript") //esto ya no se usa mas que en casos muy específicos

//Let
let mensaje2 = "Hola JavaScript2"
console.log(mensaje2)

//Const
const mensaje3 = "Hola JavaScript3"
console.log(mensaje3)

//mensaje3 = "Nuevo Mensaje" /Error, no se puede reasignar una constante

console.log(typeof mensaje3) //string

//concatencaciones
let nombre = "Santiago"
let saludo = "Hola " + nombre + ", bienvenido a JavaScript"
console.log(saludo)

//Template Strings
let saludo2 = `Hola ${nombre}, bienvenido a JavaScript`
console.log(saludo2)

console.log(saludo.toUpperCase())

//.indexOf()
console.log(saludo.indexOf("Santiago")) //retorna la posición del primer caracter de la palabra

//funciones, son los def de Python
function sumar(a, b){
    return a + b
}

let resultado = sumar(5, 10)
console.log(`El resultado de la suma es: ${resultado}`)

//funciones flecha
const restar = (a, b) => {
    return a - b
}

let resultadoResta = restar(10, 5)
console.log(`El resultado de la resta es: ${resultadoResta}`)

//Si la función flecha tiene una sola línea de código, se puede simplificar
const multiplicar = (a, b) => a * b

function externa(){
    console.log("Función externa")
    
    const interna = () => {
        console.log("Función interna")
    }
    
    interna()
}

externa()

//Objetos
let persona = {
    nombre: "Santiago",
    edad: 25,
    saludar: function(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}

console.log(persona.nombre)
persona.saludar()

//Objetos anidados
let estudiante = {
    nombre: "Ana",
    edad: 22,
    direccion: {
        calle: "Calle Falsa 123",
        ciudad: "Springfield",
        pais: "USA"
    }
}

console.log(`La estudiante vive en ${estudiante.direccion.ciudad}, ${estudiante.direccion.pais}`)

//Destructuración de objetos
let {nombre: nombreEstudiante, edad: edadEstudiante, direccion: {calle: calleEstudiante}} = estudiante
console.log(`Nombre: ${nombreEstudiante}, Edad: ${edadEstudiante}, Calle: ${calleEstudiante}`)

//propagación de objetos
let estudiante2 = {...estudiante, carrera: "Ingeniería"}
console.log(estudiante2)

//clases avanzadas
class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
    
    hacerSonido() {
        console.log("El animal hace un sonido");
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre, "Perro");
        this.raza = raza;
    }
    
    hacerSonido() {
        console.log("El perro ladra");
    }
}

let miPerro = new Perro("Firulais", "Labrador");
console.log(`Mi perro se llama ${miPerro.nombre} y es de la raza ${miPerro.raza}`);
miPerro.hacerSonido();

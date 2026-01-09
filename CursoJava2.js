//segundo archivo de JavaScript
console.log("Segundo archivo de JavaScript")

let message = 1>2 ? "Es mayor":"Es menor"
console.log(message)

switch(message=="Es mayor"){
    case true:
        console.log("El mensaje es mayor")
        break
    case false:
        console.log("El mensaje es menor")
        break
    default:
        console.log("No se pudo determinar el mensaje")
}

for(let i=0; i<5; i++){ //(inicialización; condición; incremento), si se deja vacío el incremento, se debe incrementar manualmente dentro del bloque
    console.log(`El valor de i es: ${i}`)
}

//Array es las listas de JavaScript
let frutas = ["Manzana", "Banana", "Cereza", "Durazno"]
console.log(frutas)
console.log(frutas[2]) //Cereza

frutas.push("Uva") //agrega un elemento al final del array
console.log(frutas)

frutas.pop() //elimina el último elemento del array
console.log(frutas)

frutas.splice(1, 1) //elimina un elemento en una posición específica (1er parámetro: posición, 2do parámetro: cantidad de elementos a eliminar)

frutas.shift() //elimina el primer elemento del array
console.log(frutas)

frutas.unshift("Kiwi") //agrega un elemento al inicio del array
console.log(frutas)

console.log(`El array tiene ${frutas.length} elementos`) //tamaño del array

for(let fruta of frutas){ // of recorre los valores del array
    console.log(`Fruta: ${fruta}`)
}

//Sets (en conjuntos no se permiten elementos duplicados)
let numeros = new Set([1,2,3,4,5,5,5,5])
console.log(numeros) //los elementos duplicados son eliminados automáticamente

numeros.add(6) //agrega un elemento al set
console.log(numeros)

numeros.delete(3) //elimina un elemento del set
console.log(numeros)

numeros.has(4) //verifica si un elemento existe en el set
console.log(numeros.has(4)) //true

let numerosArray = Array.from(numeros) //convierte el set a un array
let numerosset2 = new Set(numerosArray) //convierte el array a un set
let numerosfiltrados = numerosArray.filter(num => num > 2) //filtra los números mayores a 2
console.log(numerosfiltrados)

//Maps (colecciones de pares clave-valor), son los diccionarios en otros lenguajes
let persona = new Map()
persona.set("nombre", "Santiago")
persona.set("edad", 25)
persona.set("país", "México")
persona.set("edad", 26) //actualiza el valor de una clave existente
console.log(persona)
console.log(persona.get("nombre")) //Santiago

console.log(persona.keys()) //retorna las claves del map
console.log(persona.values()) //retorna los valores del map
console.log(persona.entries()) //retorna un array con los pares clave-valor 

let numeros1 =[10,20,30,40,50]
for (let i=0; i<numeros1.length; i++){
    console.log(`Número: ${numeros1[i]}`)
}

//poo
class Chairo{
    halabar_A_AMLO(){
        console.log("AMLO es el mejor presidente de la historia de México")
        console.log("*tiene kk en el cerebro")
    }
    halabar_a_morena(){
        console.log("Morena es el mejor partido político de México")
        console.log("*ignora la corrupción y el nepotismo")
    }
    ir_por_croquetas(){
        console.log("Y ahora vamos por las croquetas del bienestar")
        console.log("*se las roba el chairo")
    }
}

let chairo1 = new Chairo()
chairo1.halabar_A_AMLO()
chairo1.halabar_a_morena()
chairo1.ir_por_croquetas()

//funciones en classes

class Calculadora{
    sumar(a, b){
        return a + b
    }
    restar(a, b){
        return a - b
    }
    multiplicar(a, b){
        return a * b
    }
    dividir(a, b){
        if(b === 0){
            return "No se puede dividir entre cero"
        }
        return a / b
    }
}

let calc = new Calculadora()
console.log(`Suma: ${calc.sumar(5, 3)}`)
console.log(`Resta: ${calc.restar(5, 3)}`)
console.log(`Multiplicación: ${calc.multiplicar(5, 3)}`)
console.log(`División: ${calc.dividir(5, 0)}`)
console.log(`División: ${calc.dividir(5, 2)}`)
//fin poo

//propiedades privadas en clases
class CuentaBancaria{
    #saldo //propiedad privada

    constructor(saldoInicial){
        this.#saldo = saldoInicial
    }

    depositar(cantidad){
        this.#saldo += cantidad
        console.log(`Depósito: ${cantidad}, Nuevo saldo: ${this.#saldo}`)
    }

    retirar(cantidad){
        if(cantidad > this.#saldo){
            console.log("Fondos insuficientes")
            return
        }
        this.#saldo -= cantidad
        console.log(`Retiro: ${cantidad}, Nuevo saldo: ${this.#saldo}`)
    }

    obtenerSaldo(){
        return this.#saldo
    }
}

let cuenta = new CuentaBancaria(1000)
cuenta.depositar(500)
cuenta.retirar(200)
console.log(`Saldo actual: ${cuenta.obtenerSaldo()}`)

"CuentaBancaria.#saldo = 5000" //Error: no se puede acceder a una propiedad privada fuera de la clase

//getters y setters para propiedades privadas
class Persona{
    #nombre

    constructor(nombre){
        this.#nombre = nombre
    }

    get nombre(){
        return this.#nombre
    }

    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre
    }
}

let persona1 = new Persona("Santiago")
console.log(`Nombre: ${persona1.nombre}`) //getter

persona1.nombre = "Carlos" //setter
console.log(`Nombre actualizado: ${persona1.nombre}`)

//fin getters y setters
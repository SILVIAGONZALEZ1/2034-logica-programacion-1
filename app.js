// Desafío 1: Mensaje de bienvenida
console.log("¡Bienvenida y bienvenido a nuestro sitio web!");

// Desafío 2: Mostrar nombre
let nombre = "Silvia";
console.log(`¡Hola, ${nombre}!`);

// Desafío 3: Alerta con nombre
let nombreS = "Silvia";
alert(`¡Hola, ${nombreS}!`);

// Desafío 4: Pregunta sobre lenguaje de programación favorito
let lenguajeFavorito = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(`Tu lenguaje de programación favorito es ${lenguajeFavorito}.`);

// Desafío 5: Suma de dos valores
let valor1 = 10;
let valor2 = 20;
let resultadoSuma = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultadoSuma}.`);

// Desafío 6: Resta de dos valores
let resultadoResta = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultadoResta}.`);

// Desafío 7: Verificación de mayor o menor de edad
let edad = prompt("Por favor, ingresa tu edad:");
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Desafío 8: Verificar si un número es positivo, negativo o cero
let numero = prompt("Por favor, ingresa un número:");
numero = Number(numero);
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

// Desafío 9: Mostrar números del 1 al 10
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// Desafío 10: Verificar nota
let nota = 7;
if (nota >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

// Desafío 11: Número aleatorio
let numeroAleatorio = Math.random();
console.log(`Número aleatorio: ${numeroAleatorio}`);

// Desafío 12: Número entero entre 1 y 10
let numeroEntero1a10 = Math.floor(Math.random() * 10) + 1;
console.log(`Número entero entre 1 y 10: ${numeroEntero1a10}`);

// Desafío 13: Número entero entre 1 y 1000
let numeroEntero1a1000 = Math.floor(Math.random() * 1000) + 1;
console.log(`Número entero entre 1 y 1000: ${numeroEntero1a1000}`);

//Desafíos

//1- Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".
alert ("¡Bienvenida y bienvenido a nuestro sitio web!");

//2- Declara una variable llamada nombre y asígnale el valor "Luna".
let nombre = ("Luna"); 

//3- Crea una variable llamada edad y asígnale el valor 25.
let edad= 25;

//4- Establece una variable numeroDeVentas y asígnale el valor 50.
let numeroDeVentas = 50;

//5- Establece una variable saldoDisponible y asígnale el valor 1000.
let saldoDisponible = 1000;

//6- Muestra una alerta con el texto "¡Error! Completa todos los campos".
alert ("¡Error! Completa todos los campos");

//7- Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos".
let mensajeDeError = ("¡Error! Completa todos los campos");

//8- Ahora muestra una alerta con el valor de la variable mensajeDeError .
alert(mensajeDeError);

//9- Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .
let nombre = prompt("Escriba su nombre : ");

//10- Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
let edad = prompt("Ingresa tu edad: ");

//11- Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".
let edadUsuario = prompt("Ingresa tu edad: ");
       
    if (edadUsuario >= 18) {
        //Acertamos, fue verdadera la condición
        alert(`¡Puedes obtener tu licencia de conducir!`);
    } else {
        //La condición no se cumplió
        alert('¡Lo siento, No puedes obtener tu licencia de conducir!');
    }

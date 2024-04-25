// Ejemplos de Expresiones regulares en JS

// Formas de como definir una RegExp
const regExpNew = new RegExp("ab+c");
const regExp = /ab+c/;

/*
// - Métodos de las expresiones regulares
// 1. exec(). Ejecuta una búsqueda por una coincidencia en un texto. En consola muestra un arreglo con la informacion de la ejecución.
// 2. test(). Prueba una coincidencia en una cadena. Devuelve true o false.
// 3. match(). Devuelve un arreglo que contiene todas las coincidencias, incluidos los grupos de captura, o null si no se encuentra ninguna coincidencia.
// 4. matchAll(). Devuelve un iterador que contiene todas las coincidencias, incluidos los grupos de captura.
// 5. search(). Prueba una coincidencia en una cadena. Devuelve el índice de la coincidencia, o -1 si la búsqueda falla.
// 6. replace(). Ejecuta una búsqueda por una coincidencia en una cadena y reemplaza la subcadena coincidente con una subcadena de reemplazo.
// 7. replaceAll(). Ejecuta una búsqueda de todas las coincidencias en una cadena y reemplaza las subcadenas coincidentes con una subcadena de reemplazo.
// 8. split(). Utiliza una expresión regular o una cadena fija para dividir una cadena en un arreglo de subcadenas.
*/

// 1. La expresión regular que sólo contiene texto, números o símbolos sólo se podrá encontrar la conincidencia una sola vez
const regExp1 = /sol/;

// - Ejemplo 1: Usando 'exec()'

// 1.1 Forma breve con 'exec()'
let frase1 = regExp1.exec("hoy parece que va a salir el sol")
console.log(frase1);

// 1.2 Forma amplia con 'exec()'
const frase1_1 = "hoy parece que va a salir el sol";
const validacion1 = regExp1.exec(frase1_1);
console.log(validacion1); // Output -> index: 29. Index se refiere a la posicion del texto donde se encontró la coincidecnia.

// - Ejemplo 2:
// Usando 'match()' no se podrá encontrar más de una coincidencia porque la expresion regular no está definida con el modificador global 'g'

// 2.1 Forma breve con 'match()'
const otraFrase = ("solamente quiero comer solo").match(regExp1);
console.log(otraFrase);

// 2.2 Forma amplia con 'match()'
const otraFrase1 = "solamente quiero comer solo";
const otraValidacion1 = otraFrase1.match(regExp1);
console.log(otraValidacion1);

/* MODIFICADORES */

// 2. Usamos el modificador global -> 'g' para que muestre todas las coincidencias en el texto.
const regExp2 = /cena/g;
const frase2 = "la quincena es para la cena.";
const validacion2 = frase2.match(regExp2);
console.log(validacion2);

// 3. Usamos el modificador insensitive -> 'i' para buscar las coincidencias sin importar que esté en mayuscula o minúscula
const regExp3 = /LA/gi;
const frase3 = "la espera en el aeropuerto de LA";
const validacion3  = frase3.match(regExp3);
console.log(validacion3);

/* CORCHETES */

// 4. Usamos los corchetes [] cuando queramos encontrar cualquiera de los caractéres que esté adentro.
const regExp4 = /[eo]/g;
const frase4 = "te marqué anoche";
const validacion4  = frase4.match(regExp4);
console.log(validacion4);

// 5. Dentro del corchede podemos colocar un rango por ejemplo que busque numeros del 0 al 5.
const regExp5 = /[0-5]/g;
const frase5 = "Mi telefono es 055 47898";
const validacion5  = frase5.match(regExp5);;
console.log(validacion5);

// 6. Cuando usamos corchetes y colocalos el símbolo '^' antes de un valor, valores juntos que se convierten en opciones o un rango, esos valores serán omitidos.
const regExp6 = /[^0-9]/g;
const frase6 = "Mi telefono es 055 47898";
const validacion6 = frase6.match(regExp6);
console.log(validacion6);

/* META CARACTERES */

// 7. Con el caracter '.' antes de otra letra, numero o simbolo estamos pidiendo de que capture el caracter anterior incluyendo espacios en blanco.
const regExp7 = /.h/g;
const frase7 = "Dos horas tomando alcohol";
const validacion7 = frase7.match(regExp7);
console.log(validacion7);

// 8. Al usar '\d' estamos solicitando que capture sólo dígitos.
const regExp8 = /\d/g;
const frase8 = "Mi casa está a 11 cuadras.";
const validacion8 = frase8.match(regExp8);
console.log(validacion8);

// 9. Al usar '\D' estamos solicitando que capture sólo caractéres.
const regExp9 = /\D/g;
const frase9 = "Mi casa está a 11 cuadras.";
const validacion9 = frase9.match(regExp9);
console.log(validacion9);

// 10. Usando '\w' se buscan los caracteres que no sean símbolos, solamente letras del alfabeto y dígitos.
const regExp10 = /\w/g;
const frase10 = "LPW-605&á";
const validacion10 = frase10.match(regExp10);
console.log(validacion10);

// 11. Usando '\b' al inicio sirve para definir que se busque caracteres al principio de una cadena
const regExp11 = /\babc/g;
const frase11 = "abc123abc";
const validacion11 = frase11.match(regExp11);
console.log(validacion11);

// 12. Usando '\b' al último sirve para definir que se busque caracteres al final de una cadena
const regExp12 = /abc\b/g;
const frase12 = "abc123abc";
const validacion12 = frase12.match(regExp12);
console.log(validacion12);

/* CUANTIFICADORES */

// 13. El operador '+' se usa para que se capture una o más coincidencias.
const regExp13 = /a+b+c+/g;
const frase13 = "abc123aaaabbbbbccccc";
const validacion13 = frase13.match(regExp13);
console.log(validacion13);

// 14. El operador '*' se usa para que se capture ninguna o más coincidencias.
const regExp14 = /0*55/g;
const frase14 = "05523445523188055";
const validacion14 = frase14.match(regExp14);
console.log(validacion14);

// 15. El operador '?' sirve para que se cumpla o no una coincidencia una sola vez. En otras palabras, es opcional.
const regExp15 = /abz?/g;
const frase15 = "abacccabzabzzz";
const validacion15 = frase15.match(regExp15);
console.log(validacion15);

// 16. Con las llaves '{}' solo permite que se encuentre la coincidencia la cantidad de veces que se defina adentro.

// - Ejemplo 1: es necesario los parentesis para un texto
const regExp16 = /(lol){2}/g;
const frase16 = "lollollol";
const validacion16 = frase16.match(regExp16);
console.log(validacion16);

// - Ejemplo 2:
const regExp16_1 = /5{3}/g;
const frase16_1 = "2233555556";
const validacion16_1 = frase16_1.match(regExp16_1);
console.log(validacion16_1);


// 17. Con el símbolo '^' estamos buscando coincidencias al inicio de una cadena de texto.
const regExp17 = /^(www)/;
const frase17 = "www.mycompany.com";
const validacion17 = frase17.match(regExp17);
console.log(validacion17);

// 18. Con el símbolo '$' estamos buscando coincidencias al final de una cadena de texto.
const regExp18 = /(com)$/;
const frase18 = "mycompany.com";
const validacion18 = frase18.match(regExp18);
console.log(validacion18);

// 19. Con el cuantificador '?=' analiza la coincidencia que esté antes de lo que se desea buscar.
const regExp19 = /^\w+(?=\.)/; // /\w(?=\.)/; solocapture una letra antes del punto. con un 'w+' se arregla
const frase19 = "file.txt";
const validacion19 = frase19.match(regExp19);
console.log(validacion19);


/* EJERCICIOS */

const regExpValidacionPrecio = /^\d{0,8}(\.\d{1,2})?$/;
const regExpNumEntero = /^\d+$/;
const regExpNumDecimal = /^\d*\.\d+$/;
const regExpNumEnterosDecimales = /^\d*(\.\d+)?$/;
const regExpNumEnteroPositivoNegativo = /^-?\d*(\.\d+)?$/;
const regExpAlfanumericosSinEspacios = /^[a-zA-Z0-9]*$/;
const regExpAlfanumericosConEspacios = /^[a-zA-Z0-9 ]*$/;
const regExpCorreoElectronico = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
const regExpContraseñaFuerte = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
const regExpUrlHttps = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.-\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;
const regExpIpv4 = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
const regExpFecha = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12\d|3[01]]))/;
const regExpHoraFormato12 = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/;
const regExpHoraFormato24 = /^(0[0-9]|1[0-9])|2[0-3]):([0-5][0-9])$/;





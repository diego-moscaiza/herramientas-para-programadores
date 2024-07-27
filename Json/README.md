# Introducción a JSON

JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero y fácil de leer que se utiliza para representar datos en forma de texto. Se utiliza comúnmente para intercambiar datos entre servidores y clientes web, y es especialmente útil para aplicaciones web que requieren el intercambio de datos en tiempo real.

Fue creado por [Douglas Crockford](https://es.wikipedia.org/wiki/Douglas_Crockford) en 2001 mientras trabajaba en State Software. Se inspiró en la sintaxis de [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) para crear un formato de datos ligero y fácil de leer. En 2005, JSON se convirtió en un estándar oficial de la [ECMA](https://developer.mozilla.org/es/docs/Glossary/ECMAScript) y desde entonces ha sido ampliamente adoptado en la industria del desarrollo web.

Un objeto JSON se compone de pares clave-valor, donde la clave es una cadena de texto y el valor puede ser un número, una cadena de texto, un objeto JSON, un arreglo, un valor booleano o un valor nulo.

Obtén más información en este enlace. [Haz click aquí.](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON)

## Sintaxis de JSON

**1.-** El primer ejemplo tiene 3 propiedades: **nombre** de tipo cadena, **edad** de tipo numérico, y **dirección** que es de tipo JSON pero está anidado con 2 propiedades: calle y dirección de tipo cadena.

```json
{
  "nombre": "Juan",
  "edad": 30,
  "direccion": {
    "calle": "Calle 123",
    "ciudad": "Ciudad de México"
  }
}
```

**2.-** El segundo ejemplo tiene la propiedad **people** de tipo arreglo y contiene 5 objetos JSON anidados con 2 propiedades: **name y nickname**, ambos de tipo cadena.

```json
{
  "people": [
    { "name": "fabian", "nickname": "faker123" },
    { "name": "jesus", "nickname": "jesus123" },
    { "name": "maria", "nickname": "maria24" },
    { "name": "luis", "nickname": "luis123" },
    { "name": "oscar", "nickname": "oscar12" }
  ]
}
```

**3.-** El tercer ejemplo tiene 2 propiedades: **cargo** de tipo nulo y **es_administrador** de tipo booleano, en este caso es _false_

```json
{
  "cargo": null,
  "es_administrador": false
}
```




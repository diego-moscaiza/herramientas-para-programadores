# Introducción de Markdown

## 1.- Cabeceras

Para las cabeceras (_"headers"_) que son **`<h1>`** en `Html` se empieza con el símbolo numeral, almohadilla o hash **`#`** y luego el nombre de la cabecera. Dependiendo de la cantidad de símbolos usados será el nivel.

### - Sintaxis en markdown

```md
# h1
## h2
### h3
#### h4
##### h5
```

### - Resultado:

# h1
## h2
### h3
#### h4
##### h5

<br/>


## 2.- Párrafos

Los párrafos en Markdown **no** se necesita símbolo al inicio.

Sin embargo se puede usar indentación, tabulación que es similar a la sangría en textos para poder mostrarlo de la siguiente forma:

### - Sintaxis en markdown

```md
    Hola, aquí aprendiendo Markdown :D
```

### - Resultado:

    Hola, aquí aprendiendo Markdown :D


<br/>

## 3.- Separar párrafos

Para separar párrafos se puede colocar la etiqueta break **`<br>`** de `Html`.

### - Sintaxis en markdown

```md
Primer renglón
<br/>
Segundo renglón
```

### - Resultado:
Primer renglón
<br/>
Segundo renglón


<br/>


## 4.- Fuentes

Para un texto en **`negrita`** se usa el asterisco o caret **`*`** al inicio y al final de la palabra o frase.

Para un texto en _`italika`_ se usa el guión bajo **`_`** al inicio y al final de la palabra o frase.

Para un texto en ~~`suprimida`~~ se usa el símbolo de equivalencia o virgulilla **`~`** 2 veces al inicio y al final de la palabra o frase.


### - Sintaxis en markdown

```md
**negrita**
_italika_
~~suprimida~~
```

### - Resultado:
**negrita**
_italika_
~~suprimida~~


<br/>


## 5.- Hipervínculos

Para los hipervínculos o, normalmente llamados, enlaces se usan las llaves **`[ ]`** para el texto del hipervínculo y seguido va un paréntesis **`( )`** para colocar la dirección local o remota del sitio al cual se va a redireccionar.

### - Sintaxis de markdown

```md
[Markdown / Sintaxis Básica](https://www.silocreativo.com/que-es-markdown-por-que-deberias-empezar-a-usarlo/)

[Comparación entre Markdown y HTML](https://comunidad.dev/2020/04/22/markdown-y-html-comparando-la-sintaxis-basica-de-los-dos/)
```

### - Resultado:

[Markdown / Sintaxis Básica](https://www.silocreativo.com/que-es-markdown-por-que-deberias-empezar-a-usarlo/)

[Comparación entre Markdown y HTML](https://comunidad.dev/2020/04/22/markdown-y-html-comparando-la-sintaxis-basica-de-los-dos/)

<br/>


## 6.- **Archivos multimedia**

Para poder mostrar un archivo multimedia es similar a los enlaces; se usan los símbolos de incógnita y las llaves **`![ ]`** para declararle una referencia y seguido va un paréntesis **`( )`** para colocar la dirección local o remota de la imagen o video que se quiera visualizar.

### - Sintaxis de markdown

```md
![Imagen](https://markdown.net.br/assets/img/basic-syntax/markdown-headings-alternative-syntax_w1280.png)
```

### - Resultado:

![Imagen](https://markdown.net.br/assets/img/basic-syntax/markdown-headings-alternative-syntax_w1280.png)

<br/>


## 7.- Listas

### 7.1.- Lista y sub lista sin orden

Para esto se usa el guión **`-`**, asterisco **`*`** ó suma **`+`** y para la sub lista de añade la indentación.
No se puede usar el mismo símbolo a la vez ya que habrá salto de línea.

### - Sintaxis de markdown

```md
- Primero
- Segundo
* Tercero
  - first
  - second
+ Cuarto
```

### - Resultado:

- Primero
- Segundo
* Tercero
  - first
  - second
+ Cuarto

<br/>

### 7.2.- Lista y sub lista ordenada

Para esto se coloca números con un punto al inicio, por ejemplo `1.`, y para la sub lista de añade la indentación de cuatro (4) espacios o una (1) tabulación.

### - Sintaxis de markdown

```md
1. Primero
2. Segundo
3. Tercero
    1. uno
    2. dos
    3. tercero
```

### - Resultado:

1. Primero
2. Segundo
3. Tercero
    1. uno
    2. dos
    3. tercero

<br/>


## 8.- Citas

Para esto se usa el símbolo **mayor que** **`>`** al inicio.

### - Sintaxis de markdown

```md

> Las citas bibliográficas o notas pueden estar aquí. (APELLIDO, Nombre. Fecha y Año).
```

### - Resultado:

> Las citas bibliográficas o notas pueden estar aquí. (APELLIDO, Nombre. Fecha y Año).

<br/>


## 9.- Lista de verificación (Check List)

Para esto se usa los símbolos guión **`-`** y las llaves **`[ ]`** para crear la celda donde se hará **_`check`_** con `X` dentro de las llaves.

### - Sintaxis de markdown

```md
- [x] PRIME TASK COMPLETED.
- [ ] This is a incomplete item.
- [ ] Task incomplete again.
```

### - Resultado:

- [x] PRIME TASK COMPLETED.
- [ ] This is a incomplete item.
- [ ] Task incomplete again.

<br/>


## 10.- Tablas

Para esto se usa el símbolo  pleca o barra vertical **`|`**, esto sirve para separar columnas.

La primera fila es de las cabeceras, en la siguiente fila se coloca el símbolo de barra vertical entre 2 guiones a inicio y al final **`---|---`** para una linea recta que separará de los demás datos y dar formato de tabla.

### - Sintaxis de markdown

```md
| Column A | Column B | Column C |
| -------- | -------- | -------- |
| A1       | B1       | C1       |
| A2       | B2       | C2       |
| A3       | B3       | C3       |
```

### - Resultado:

| Column A | Column B | Column C |
| -------- | -------- | -------- |
| A1       | B1       | C1       |
| A2       | B2       | C2       |
| A3       | B3       | C3       |

<br/>


## 11.- Texto como código

Para mostrar una palabra con `este formato` se utiliza el símbolo de acento grave al inicio y al final **( ` )**

### - Sintaxis en markdown

```md
`texto`
```

### - Resultado:
`texto`

## 12.- Bloques de código de programación

Para poder mostrar una porción de código se utiliza el símbolo de acento grave 3 veces al inicio con o sin un nombre del lenguaje de programación específico **`(```javascript)`** y 3 símbolos al final **`(```)`**.


### - Sintaxis en markdown

```md
  ```javascript
  // Ejemplo de Javascript

  var foo = "bar";
  if(true) return foo;
  ```
```

### - Resultado:

```javascript
  // Ejemplo de Javascript

  var foo = "bar";
  if(true) return foo;
```

<br/>

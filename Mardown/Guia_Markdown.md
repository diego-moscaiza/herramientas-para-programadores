# **INTRODUCCIÓN A MARKDOWN**

# **CABECERAS**

Para los _"headers"_ que son **_"h1"_** en **_"HTML"_** se empieza con el símbolo numeral, almohadilla o hash **"#"** y luego el nombre de la cabecera. Dependiendo de la cantidad de símbolos usados será el nivel.

# H1
## H2
### H3
#### H4
##### H5

<br/>


# **PÁRRAFO**

Los párrafos en Markdown **no** se necesita símbolo al inicio.

Sin embargo se puede usar indentación, tabulación que es similar a la sangría en textos para poder mostrarlo de la siguiente forma:

    Hola, aqui aprendiendo Markdown :D


<br/>

# **SEPARAR PÁRRAFOS**

Para separar párrafos se puede colocar la etiqueta break **_"br"_** de **_HTML_**.

<br/>


# **FUENTES**

Para un texto en **NEGRITA** se usa el aterisco o caret **"*"** al inicio y al final de la palabra o frase.

Para un texto en _ITALIKA_ se usa el guión bajo **"_"** al inicio y al final de la palabra o frase.

Para un texto en ~~SUPRIMIDA~~ se usa el símbolo de equivalencia o virgulilla **"~"** 2 veces al inicio y al final de la palabra o frase.

<br/>


# **HIPERVÍNCULOS**

Para los hipervínculos o, normalmente llamados, enlaces se usan las llaves **"[ ]"** para el texto del hipervínculo y seguido va un paréntesis **"( )"** para colocar la direccion local o remota del sitio al cual se va a redireccionar.

[Markdown / Sintaxis Básica](https://www.silocreativo.com/que-es-markdown-por-que-deberias-empezar-a-usarlo/)

[Comparación entre Markdown y HTML](https://comunidad.dev/2020/04/22/markdown-y-html-comparando-la-sintaxis-basica-de-los-dos/)

<br/>


# **ARCHIVOS MULTIMEDIA**

Para poder mostrar un archivo multimedia es similiar a los enlaces; se usan los simbolos de incógnita y las llaves **"![ ]"** para declararle una referencia y seguido va un paréntesis **"( )"** para colocar la direccion local o remota de la imagen o video que se quiera visualizar.

![Imagen](https://markdown.net.br/assets/img/basic-syntax/markdown-headings-alternative-syntax_w1280.png)

<br/>


# **LISTAS**

## Lista y sublista Desordenada

Para esto se usa el guión **"-"**, asterisco **"*"** ó suma **"+"** y para la sublista de añade la indentacón.
No se puede usar el mismo símbolo a la vez ya que habrá salto de línea.

- PRIME
- SECOND
* THIRD
  - first
  - second
+ FORTH

<br/>

## Lista y sublista Ordenada

Para esto se usan _los números_ con un punto **"."** y para la sublista de añade la indentacón.

1. PRIMERO
2. SEGUNDO
3. TERCERO
   1. first
   2. second
   3. thrid

<br/>


# **CITAS**

Para esto se usa el simbolo _mayor que_ **">"** al inicio.

> Las citas bibliográficas o notas pueden estar aqui. (MOSCAIZA, Diego. 16 de junio,2023. No me acuerdo como hacer una cita BIBLIOGRÁFICA iso xdxdxd).

<br/>


# **CHECK LIST**

Para esto se usa los símbolos guión **"-"** y las llaves **"[ ]"** para crear la celda donde se hará **_check_** con "X" dentro de las llaves.

- [x] PRIME TASK COMPLETED.
- [ ] This is a incomplete item.
- [ ] Task incomplete again.

<br/>


# **TABLAS**

Para esto se usa el símbolo  pleca o barra vertical **"|"**, esto sirve para separar columnas. 
La primera fila es de las cabeceras, en la siguiente fila se coloca el símbolo de barra vertical entre 2 guiones a inicio y al final **"---|---"** para una linea recta que separá de los demás datos y dar formato de tabla.

Column A | Column B | Column C
---------|----------|---------
 A1 | B1 | C1
 A2 | B2 | C2
 A3 | B3 | C3

<br/>


# **CÓDIGO PROGRAMACIÓN**

Para poder mostrar una porción de código se utiliza el símbolo de acento grave "**```**" 3 veces al inicio con o sin un nombre del lenguaje de programación específico y al final solo.

```javascript
// Ejemplo de Javascript

var foo = "bar";
if(true) foo = "foo";
```
<br/>

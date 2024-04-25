# Batch

## ¿Qué es Batch?
Un archivo batch es un archivo de procesamiento por lotes. Se trata de archivos de texto sin formato, guardados con la extensión .BAT que contienen un conjunto de instrucciones MS-DOS.

## Comandos básicos de Batch

### 1. Comando echo
El comando 'echo' sirve para imprimir texto en la consola.
El símbolo de sistema de Windows o CMD siempre muestra el directorio del usuario por ejemplo: "C:\Users\".
En los archivos '.bat' se puede usar el comando '@echo' con la opción 'off' para desactivar la visualizacion del directorio.
Para revertir esto usamos '@echo on'

### 2. Comando help
Usar el comando 'help' para visualizar la lista de comandos.

### 3. Comando title
El comando 'title' sirve para colocar un nombre en la cabecera del cmd.

### 4. Comando pause
Este comando sirve para detener una ejecución y muestra el mensaje "Presione una tecla para continuar . . .".

### - Ejemplo con estos comandos:
```bat
:: Ejemplo practico en Batch
@echo off
title ESTE ES UN PROGRAMA
echo Hola mundo
pause
```

### 5. Comando mkdir
Se utiliza para crear una carpetay al costado debe ir el nombre de la carpeta.

### 6. Comando dir
Sirve para ver las carpetas en donde se encuentra el usuario.
Se puede poner el símbolo '>' para crear un archivo con un nombre y la extensión que uno desee.

    'dir > @nombre' para crear un archivo con un nombre.

### 7. Comando cd
Se utiliza para acceder a la carpeta colocando el nombre después del comando.

    1 cd..  para retroceder a la carpeta raíz en donde se encuentra.

### 8. Comando move
Para mover un archivo a otro directorio "escribir origen a destino"


### Ejemplo con estos comandos:

```bat
:: Codigos probados
cd "C:\Users\PC\Documents\MIS CURSOS\CURSO DE BATCH SCRIPTING"
dir
mkdir carpetaDePrueba
dir > lista.txt
move lista.txt  carpetaDePrueba
pause
```


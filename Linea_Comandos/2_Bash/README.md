# Bash

## ¿Qué es Bash?
Bash (acrónimo de Bourne-Again Shell) es un intérprete de comandos y lenguaje de programación integrado que corre bajo el macroprocesador Shell de Unix.

Este programa ejecuta una a una las órdenes que el usuario pone en una ventana de texto o las que se encuentran contenidas en un script o bash script (archivo con todas las instrucciones), para luego devolver los resultados.

## Comandos básicos de Bash

### 1. Comando sudo
Abreviatura de superusuario do, sudo es uno de los comandos básicos más populares de Linux que te permite realizar tareas que requieren permisos administrativos o de root.

### 2. Comando pwd
Utiliza el comando pwd para encontrar la ruta de tu directorio de trabajo actual.

### 3. Comando cd
Para navegar por los archivos y directorios de Linux, usa el comando cd.

Hay algunos atajos para ayudarte a navegar rápidamente:

    1. cd ~[nombredeusuario] para ir directamente a la carpeta de inicio.
    2. cd .. para ir un directorio hacia arriba.
    3. cd- para ir al directorio anterior.


### 4. Comando ls
El comando ls se usa para ver el contenido de un directorio. Por defecto, este comando mostrará el contenido de tu directorio de trabajo actual.

Hay variaciones que puedes usar con el comando ls:

    1. ls -R también listará todos los archivos en los subdirectorios.
    2. ls -a mostrará los archivos ocultos.
    3. ls -al listará los archivos y directorios con información detallada como los permisos, el tamaño, el propietario, etc.


### 5. Comando cat
cat (abreviatura de concatenate, en inglés). Este lista, combina y escribe el contenido de los archivos en la salida estándar. Para ejecutar este comando, escribe cat seguido del nombre del archivo y su extensión. Por ejemplo:

    cat archivo.txt.

Aquí hay otras formas de usar el comando cat:

    1. cat > nombredearchivo.txt crea un nuevo archivo.
    2. cat nombredearchivo1.txt nombredearchivo2.txt>nombredearchivo3.txt fusiona nombrearchivo1.txt y nombrearchivo2.txt y almacena el resultado en nombrearchivo3.txt.
    3. cat nombrearchivo.txt muestra el contenido en orden inverso.


### 6. Comando cp
Utiliza el comando cp para copiar archivos o directorios y su contenido. Echa un vistazo a los siguientes casos de uso.

Para copiar un archivo del directorio actual a otro, introduce cp seguido del nombre del archivo y del directorio de destino. Por ejemplo:

    cp nombrearchivo.txt /inicio/nombredeusuario/Documentos

Para copiar archivos en un directorio, introduce los nombres de los archivos seguidos del directorio de destino:

    cp nombrearchivo1.txt nombrearchivo2.txt nombrearchivo3.txt /inicio/nombredeusuario/Documentos

Para copiar el contenido de un fichero a otro nuevo en el mismo directorio, introduce cp seguido del fichero de origen y del fichero de destino:

    cp nombrearchivo1.txt nombrearchivo2.txt

Para copiar un directorio completo, pasa el indicador -R antes de escribir el directorio de origen, seguido del directorio de destino:

    cp -R /inicio/nombredeusuario/Documentos /inicio/nombredeusuario/Documentos_backup


### 7. Comando mv
El uso principal del comando mv es mover archivos, aunque también se puede usar para cambiar el nombre de los archivos. Además, no produce ninguna salida al ejecutarlo.

Simplemente escribe mv seguido del nombre del archivo y el directorio de destino. Por ejemplo, si quieres mover nombredearchivo.txt al directorio /inicio/nombredeusuario/Documentos:

    mv nombrearchivo.txt /inicio/nombredeusuario/Documentos.

También puedes utilizar el comando mv para renombrar un archivo:

    mv nombre_archivo_antiguo.txt nombre_archivo_nuevo.txt


### 8. Comando mkdir
Utiliza el comando mkdir para crear uno o varios directorios a la vez y establecer los permisos para cada uno de ellos. El usuario que ejecuta este comando debe tener el privilegio de crear una nueva carpeta en el directorio principal o puede recibir un error de permiso denegado.

Esta es la sintaxis básica:

    mkdir [opción] nombre_directorio

Por ejemplo, si deseas crear un directorio llamado Música:

    mkdir Musica

Para crear un nuevo directorio llamado Canciones dentro de Música, utiliza este comando:

    mkdir Musica/Canciones

El comando mkdir acepta muchas opciones, como:

    1. -p o -parents crean un directorio entre dos carpetas existentes. Por ejemplo, mkdir -p Musica/2020/Canciones creará el nuevo directorio «2020».
    2. -m establece los permisos del archivo. Por ejemplo, para crear un directorio con todos los permisos de lectura, escritura y ejecución para todos los usuarios, introduce mkdir -m777 nombre_directorio.
    3. -v imprime un mensaje para cada directorio creado.


### 9. Comando rmdir
Para eliminar permanentemente un directorio vacío, utiliza el comando rmdir. Recuerda que el usuario que ejecuta este comando debe tener privilegios sudo en el directorio padre.

Por ejemplo, si deseas eliminar un subdirectorio vacío llamado personal1 y su carpeta principal mydir:

    rmdir -p mydir/personal1


### 10. Comando rm
El comando rm se utiliza para borrar archivos dentro de un directorio. Asegúrate de que el usuario que ejecuta este comando tiene permisos de escritura.

Recuerda la ubicación del directorio ya que esto eliminará el/los archivo(s) y no podrás deshacerlo.

Esta es la sintaxis general:

    rm nombredearchivo

Para eliminar varios archivos, introduce el siguiente comando:

    rm nombredearchivo1 nombredearchivo2 nombredearchivo3

Aquí tienes algunas opciones aceptables que puedes añadir:

    -i pide confirmación al sistema antes de borrar un archivo.
    -f permite al sistema eliminar sin confirmación.
    -r borra archivos y directorios de forma recursiva.

### Trucos y consejos adicionales
Estos son algunos consejos y trucos que puedes utilizar para gestionar el sistema Linux:

- Introduce el comando clear para limpiar la pantalla del Terminal.
- Pulsa el botón Tab para autorrellenar después de introducir un comando con un argumento.
- Utiliza Ctrl + C para terminar un comando en ejecución.
- Pulsa Ctrl + Z para pausar un comando de trabajo.
- Utiliza Ctrl + S para congelar tu Terminal temporalmente.
- Pulsa Ctrl + Q para deshacer la congelación del Terminal.
- Utiliza Ctrl + A para desplazarte al principio de la línea.
- Pulsa Ctrl + E para llegar al final de la línea.
- Cuando ejecutes varios comandos de Linux en una sola línea, utiliza (;) para separarlos. Alternativamente, utiliza && para - permitir que sólo se ejecute el siguiente comando si el anterior tiene éxito.








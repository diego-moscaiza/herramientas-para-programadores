:: "Solicitando DATOS al USUARIO en BATCH"
:: Para ello digitamos '/p' que permite la entrada de datos y el usuario define la variable.
:: En etse caso usamos la variable nombre la cual está VACIA.

@echo off

echo.
set /p nombre= ¿Cuál es tu nombre?:
echo.
set /p edad= ¿Cuál es tu edad?:
echo.
echo Hola %nombre% tu edad es %edad%
echo.

pause
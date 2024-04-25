:: Operador IF
:: Aqui usamos un if para saber si el valor es correspondiente.

@echo OFF

echo.
set /p suma= ¿Cuanto es 2+2?:
echo.
if %suma%==4 echo "MUY BIEN"

pause

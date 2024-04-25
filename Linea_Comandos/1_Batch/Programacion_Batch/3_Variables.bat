:: ----- USO DE VARIABLES ----

:: Para crear una variable en BATCH
:: Se declara el nombre de la variable con el comando SET
:: junto con el nombre y por ultimo el valor de la varibale
:: Por ejm: "set numero = 15"

:: Para llamar el valor de la variable creada se declara...
:: En este caso '%numero%' y ya puede ser llamada en cualquier parte.

@echo off
title varibles

:: Es importante colocar el simbolo '=' junto a la variable.
set nombre= Diego
echo tu nombre es %nombre%

pause
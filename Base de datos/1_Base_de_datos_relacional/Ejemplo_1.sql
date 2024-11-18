/* 1.- Crear base de datos */
create database primeraBaseDatos;

/* 2.- Usar la base de datos creada */
use primeraBaseDatos;

/* 3.- Primera tabla */
CREATE TABLE usuario (
	id int,
	tipo varchar(255),
	estado varchar(255),
	primary key(id)
);


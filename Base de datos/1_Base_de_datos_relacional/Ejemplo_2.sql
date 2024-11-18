/* DML */

INSERT INTO usuario (tipo, estado) VALUES ('normal', 'activo');
INSERT INTO usuario (tipo, estado) VALUES ('Admin', 'activo');

SELECT * FROM usuario

UPDATE usuario SET estado = 'Inactivo' where id = 2;

DELETE FROM usuario where id = 2;

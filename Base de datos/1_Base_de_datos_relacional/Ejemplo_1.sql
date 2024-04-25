create database primeraBaseDatos;
use primeraBaseDatos;

CREATE TABLE usuario (
	id int,
	tipo varchar(255),
	estado varchar(255),
	primary key(id)
);


/* DML */

INSERT INTO usuario (tipo, estado) VALUES ('normal', 'activo');
INSERT INTO usuario (tipo, estado) VALUES ('Admin', 'activo');

SELECT * FROM usuario

UPDATE usuario SET estado = 'Inactivo' where id = 2;

DELETE FROM usuario where id = 2;


/* DDL */

ALTER TABLE usuario MODIFY COLUMN id int auto_increment;

-- DROP
-- VIEW
-- TRUNCATE



/* JOINS */

/* INNER JOIN */

Select <select_list>
from Table_A as A INNER JOIN Table_B ON A_Key = B_Key;


/* LEFT JOIN */

Select <select_list> from Table_A as A LEFT JOIN Table_B ON as B A_Key = B_Key;

-- 'Left join' sin mostrar el valor en común, en este caso el valor de la llave.

Select <select_list>
from Table_A as A LEFT JOIN Table_B ON as B A_Key = B_Key 
Where B_Key IS NULL;


/* RIGHT JOIN */

Select <select_list>
from Table_A as A RIGHT JOIN Table_B as B ON A_Key = B_Key;

-- 'Right join' sin mostrar el valor en común, en este caso el valor de la llave.

Select <select_list>
from Table_A as A RIGHT JOIN Table_B as B ON A_Key = B_Key
Where A_Key IS NULL;


/* FULL JOIN */

Select <select_list>
from Table_A as A FULL JOIN Table_B as B ON A_Key = B_Key;

-- 'Full join' sin mostrar el valor en común, en este caso el valor de la llave.

Select <select_list>
from Table_A as A FULL JOIN Table_B as B ON A_Key = B_Key
Where A_Key IS NULL OR B_Key IS NULL;


/* ORDER BY */
-- Se usa para que se ordenen los elementos de forma ascendete o decreciente, por defecto es ascendente. Esta sentencia SQL puede usarse sola sin la necesidad de un 'GROUP BY' o 'HAVING'

SELECT lastname, firstname, city
FROM <table>
ORDER BY lastname desc;


/* GROUP BY */
-- Al usar esta setencia se puede agrupar por una columna. Si deseamos usar esta sentencia, se debe colocar antes de 'having' y 'order by'.

SELECT [OrderDate], SUM(SalesAmount) AS Total
FROM [AdventureWorksDW2014].[dbo].[FactInternetSales]
GROUP BY [OrderDate]
HAVING SUM([SalesAmount]) > 80000
ORDER BY [OrderDate];


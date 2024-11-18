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

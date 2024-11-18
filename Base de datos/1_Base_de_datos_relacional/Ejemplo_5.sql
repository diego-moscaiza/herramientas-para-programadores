
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

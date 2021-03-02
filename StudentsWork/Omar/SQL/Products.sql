1- SELECT Name FROM Products
ORDER BY Name

2- SELECT Name, Description, Stock FROM Products
WHERE Stock > 10

3- SELECT Name, Sale_Value, Reference, Stock FROM Products
WHERE Stock = 0

4- SELECT Name, Reference, Status FROM Products
WHERE Status = 0

5- SELECT Name, (Sale_Value-Purchase_Value) as "Gain" FROM Products

6- SELECT Name, (Sale_Value-Purchase_Value) as "Gain" FROM Products
WHERE (Sale_Value-Purchase_Value) < 0
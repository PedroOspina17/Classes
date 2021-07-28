1.1- SELECT Name FROM Products
ORDER BY Name
1.2- SELECT Name, Description, Stock FROM Products
WHERE Stock > 10
1.3- SELECT Name, Sale_Value, Reference, Stock FROM Products
WHERE Stock = 0
1.4- SELECT Name, Reference, Status FROM Products
WHERE Status = 1
1.5- SELECT Name, (Sale_Value-Purchase_Value) as "Gain" FROM Products
1.6- SELECT Name, (Sale_Value-Purchase_Value) as "Gain" FROM Products
WHERE (Sale_Value-Purchase_Value) < 0


2.1- UPDATE Products SET Purchase_Value = 1
WHERE Purchase_Value = 0
2.2- UPDATE Products SET Name = Name + 'DISABLED'
WHERE Status = 0
2.3- UPDATE Products SET Name = Name + '-NO STOCK'
WHERE Stock <= 0
2.4- UPDATE Products SET Sale_Value = Sale_Value - 5
WHERE Stock > 10
2.5- UPDATE Products SET Sale_Value = Sale_Value + 15
WHERE Stock < 5
2.6- UPDATE Products SET Sale_Value = Sale_Value + 15
WHERE Status =1 AND Purchase_Value < 100
2.7- UPDATE Products SET Status = 0
WHERE (Sale_Value - Purchase_Value) < 0


3.1- DELETE FROM Products 
WHERE id = 10 
3.2- DELETE FROM Products 
WHERE Name = 'Nike' 
3.3- DELETE FROM Products 
WHERE Name = 'Adidas' AND Reference = 'Gazelle'
3.4- DELETE FROM Products 
WHERE Name = 'Under Armour' OR id = 20
3.5- DELETE FROM Products 
WHERE (Sale_Value - Purchase_Value) < 0
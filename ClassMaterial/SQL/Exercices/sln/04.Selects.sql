/*Selects examples */
-- 1
select [Name]
from Products
order by [Name] asc

--2 
select [Name],[Description]
from Products
where Stock > 10
order by Stock asc

--3 
select [Name],Purchase_Value,Reference
from Products
where Stock = 0

--4
select [Name],Reference
from Products
where [Status] = 1

--5
select [Name], Purchase_Value, Sale_Value,Sale_Value-Purchase_Value as revenue
from Products

--6 
select [Name],Sale_Value-Purchase_Value as losses
from Products
where (Sale_Value-Purchase_Value) < 0


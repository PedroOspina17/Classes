
select [Name],Sale_Value-Purchase_Value as losses
from Products
where (Sale_Value-Purchase_Value) < 0


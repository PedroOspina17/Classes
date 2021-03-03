select * from Product

delete from Product
where ProductId=1 

delete from Product
where [Name]='producto1' 

delete from Product
where [Name]='producto 2' and Reference='RF002'

delete from Product
where [Name]='producto 3' or ProductId=2 or ProductId=4 or ProductId=6 or ProductId=8 or ProductId=10

delete from Product
where Sale_Value<Purchese_Value

select * from Product

update Product set Purchese_Value=1000
where Purchese_Value<=0

update Product set [Name]= [Name] + ' ¡¡DISABLED!!' 
where Status=0

update Product set [Name]= [Name] + ' ¡¡NO STOCK!!' 
where Stock=0

update Product set Sale_Value= Sale_Value-5000
where Stock>10

update Product set Purchese_Value=Purchese_Value+15000
where Stock<5

update Product set Sale_Value=Sale_Value+15000
where [Status]=1 and Sale_Value < 10000

update Product set [Status]=0
where Purchese_Value> Sale_Value
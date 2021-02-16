/*
seleccionar nombre y edad de todos los usuarios que sean menores de aded o que se llamen pedro
*/

select Name, Age 
from [User]
where Name = 'Pedro' or Age < 18

/*
seleccionar nombre y edad de todos los usuarios que sean menores de aded o que se llamen pedro o cristian o wbeimar
*/

select Name, Age 
from [User]
where Name = 'Pedro' or Name = 'wbeimar' or Name = 'Cristian' or Age < 18

select Name, Age 
from [User]
where Name in ('Cristian','Wbeimar','Pedro') or Age < 18
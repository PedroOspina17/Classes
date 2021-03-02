
-- 1. mostrar todos los productos ordenados alfabeticamente
select * 
from Product
order by "Name" asc

-- 2. mostrar el nombre y la descripcion de los productos mas abundantes
select "Name","Description"
from Product
where Stock>10

-- 3. mostrar nombre, precio y referencia de los productos que no tienen stock
select	"Name",Purchese_Value, Reference
from Product
where Stock=0

-- 4. mostrar un listado de los productos activos con su referencia 
select [Name] + '   (' + Reference + ')' as [Name and Reference]
from Product


-- 5. mosrtrar de cada producto que ganacia esta dejando
select *,  Sale_Value - Purchese_Value as Ganacias
from Product
where Sale_Value - Purchese_Value > 0

-- 6. mostrar los productos que estan generando perdidas
select *,  Sale_Value - Purchese_Value   as Perdidas
from Product
where Sale_Value - Purchese_Value < 0
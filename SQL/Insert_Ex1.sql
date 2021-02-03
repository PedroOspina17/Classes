/*
add three departments to EEUU country
*/
insert into [Department] (Id,Name,CountryId) values (7,'Arizona',2)
insert into [Department] (Id,Name,CountryId) values (8,'Michigan',2)
insert into [Department] (Id,Name,CountryId) values (9,'Washintong',2)

insert into [city] (Id,Name,DepartmentId) values (7,'Phoenix',7)
insert into [city] (Id,Name,DepartmentId) values (8,'Glendale',7)

insert into [city] (Id,Name,DepartmentId) values (9,'Lansing',8)
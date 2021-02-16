/*
Inserts: To add information to the table.

Structure:

INSERT INTO <<Table>> (<<FieldList>>) VALUES (<<Values>>)

<<FieldList>>:	All the fields separated by comma that are going to be filled. 
				If the fieldlist is not provided means that all the entire field list will be filled.
<<Table>>:		The table name where the Select will be executed.
<<Values>>:		All the corresponding value for each column specified in the column list.
*/


INSERT INTO [User]  VALUES (9954, 'Belar',  6) 

INSERT INTO [User] (Id,Age,Name,CityId) VALUES (1153,13, 'Aldemar', 5)

INSERT INTO [User] (Id,Name,CityId) VALUES (9955, 'Sol',  6)


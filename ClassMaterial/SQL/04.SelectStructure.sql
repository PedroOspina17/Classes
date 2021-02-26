/*
Structure of select:

SELECT <<FieldList>>, *
FROM <<Table>>
WHERE <<Condition>> AND/OR <<Condition>>
ORDER BY <<SortField>> ASC/DESC

<<FieldList>>:	All the fields separated by comma that are going to be displayed. 
				The star (*) means that all the fields will be displayed. MANDATORY STATEMENT
<<Table>>:		The table name where the Select will be executed. MANDATORY STATEMENT
<<Condition>>:  A logic operation similar to the IF operation. 
				**Need to be an specific true or false question.**
				Several conditions can be mixed with AND/ OR operators. 
				ALL THE ENTRIES THAT MEETS ALL THE CONDITIONS ARE GOING TO BE DISPLAYED.
<<SortField>>:  The field to be used as sorting. ALWAYS AT THE END OF THE SCRIPT
				After the field goes the direction. 
					ASC means ascendence (From small to big) and DESC means descendece (From Big to small). 


*/

SELECT * 
FROM [user]
where Name = 'Pedro'
order by CityId asc
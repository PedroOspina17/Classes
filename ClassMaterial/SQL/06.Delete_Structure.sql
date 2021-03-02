/*
Delete: To eliminate information from a table.

Structure:

DELETE FROM <<Table>> 
WHERE <<Condition>> AND/OR <<Condition>>

<<Table>>:			The table name where the Update will be executed.
<<Condition>>:		A logic operation similar to the IF operation. 
					**Need to be an specific true or false question.**
					Several conditions can be mixed with AND/ OR operators. 
					ALL THE ENTRIES THAT MEET ALL THE CONDITIONS ARE GOING TO BE CHANGED.

*/

DELETE FROM Users -- To clean the table.
DELETE FROM Users WHERE Id = 1
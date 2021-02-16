/*
UPDATE: To change information.

Structure:

UPDATE <<Table>> SET <<TargetField>> = <<NewValue>>, <<TargetField>> = <<NewValue>>
WHERE <<Condition>> AND/OR <<Condition>>

<<Table>>:			The table name where the Update will be executed.
<<TargetField>>:	The field that will be changed.
<<NewValue>>:		The value that the target field will have.
<<Condition>>:		A logic operation similar to the IF operation. 
					**Need to be an specific true or false question.**
					Several conditions can be mixed with AND/ OR operators. 
					ALL THE ENTRIES THAT MEET ALL THE CONDITIONS ARE GOING TO BE CHANGED.

*/




UPDATE [User] SET Age = 700
WHERE Age = 20 or name = 'pedro'

UPDATE [User] SET Age = 700, Name = 'Something'
WHERE Age > 20 
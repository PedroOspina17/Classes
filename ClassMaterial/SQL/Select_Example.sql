/*

    Table schema:

        User(
            Id INT IDENTITY(1,1) PRIMARY KEY,
            Name VARCHAR(50) NOT NULL,
            Age INT NOT NULL            
        )

    Select the name and age for all the users with age less than 18 years old or the ones with name 'Pedro'. 
*/

select Name, Age 
from [User]
where Name = 'Pedro' or Age < 18

/*
    Select the name and age for all the users with age less than 18 years old or the ones with name 'Pedro' or 'Cristian' or 'Wbeimar'. 
*/

select Name, Age 
from [User]
where Name = 'Pedro' or Name = 'wbeimar' or Name = 'Cristian' or Age < 18

select Name, Age 
from [User]
where Name in ('Cristian','Wbeimar','Pedro') or Age < 18
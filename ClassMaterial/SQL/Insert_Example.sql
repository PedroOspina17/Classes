/*


Table schema:

    Country(
        Id INT PRIMARY KEY,
        Name VARCHAR(50) NOT NULL
    )

    Department(
        Id INT PRIMARY KEY,
        Name VARCHAR(50) NOT NULL,
        CountryId INT NOT NULL FOREIGN REFERENCES Country(Id)
    )

    City(
        Id INT PRIMARY KEY,
        Name VARCHAR(50) NOT NULL,
        DepartmentId INT NOT NULL FOREIGN REFERENCES Department(Id)
    )


    Add three states to EEUU's country

*/
INSERT INTO [Country] (Id,Name) VALUES (1,'Colombia')
INSERT INTO [Country] (Id,Name) VALUES (2,'EEUU')
INSERT INTO [Country] VALUES (3,'Peru')

INSERT INTO [Department] (Id,Name,CountryId) VALUES (7,'Arizona',2)
INSERT INTO [Department] (Id,Name,CountryId) VALUES (8,'Michigan',2)
INSERT INTO [Department] VALUES (9,'Washintong',2)

INSERT INTO [city] (Id,Name,DepartmentId) VALUES (7,'Phoenix',7)
INSERT INTO [city] (Id,Name,DepartmentId) VALUES (8,'Glendale',7)
INSERT INTO [city] VALUES (9,'Lansing',8)
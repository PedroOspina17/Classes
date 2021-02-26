/*
    Create the following structure to store Cities, Deparments and countries. 

    1. Create the Country table with the following fields: Id, Name, Population
    2. Create the Deparment table with the following fields: Id, Name, IdCountry
    3. Create the City table with the following fields: Id, Name, IdDepartment
    4. Create 3 entries for country table.
    5. Create 2 departments for each country
    6. Create 2 cities foreach department
    
    
            COUNTRY
    _________________________________________________
        Id  |   Name                |   Population 
        1   |   Colombia            |   50.34
        2   |   Estados unidos      |   328.2
        3   |   Venezuela           |   28.52
    

            DEPARTMENT     
    _________________________________________________
        Id  |   Name                |   IdCountry
        1   |   Antioquia           |   1
        2   |   Meta                |   1
        ..  |   ..                  |   ..
        n   |   XXXX                |   3
    

            CITY     
    _________________________________________________
        Id  |   Name                |   IdDepartment                           
        1   |   Medellín            |   1
        2   |   Bello               |   1
        3   |   Villavicencio       |   2
        4   |   El castillo         |   2
        ..  |   ..                  |   ..
        n   |   XXXX                |   nDepartments

        
*/
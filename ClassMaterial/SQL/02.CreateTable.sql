/*
    Script to create a table 
    Structure:
    <<TableName>>: The table's name to be created.
    <<FieldName>>: The field's name to be create.
    <<DataType>>: The data type of the field. 
                    Int: integer numbers
                    Varchar(<<Size>>): Strings. Should have an specified size. I.E: Varchar(50)
                    Float: foating point numbers (Decimal).
                    Date: To store Day/Month/Year only
                    Time: To store time only. HH/MM/SS.MMMM
                    DateTime: To store date and time. Day/Month/Year HH/MM/SS.MMMM
                    Bit: To store boolean data. (1 / 0) True or false.
    <<NOT NULL>>: To specify that the field is required. It goes after all the restrictions. 
    <<Identity(Start,Increment)>>: To specify that el field is going to be autoincrementable.
    <<Primary Key>>: To specify that the field is the one that identifies the row. All the values in this field should be unique. 
                    To create a primary key after the datatype use 'PRIMARY KEY'
    <<Foreign Keys>>: It is used to reference data from another table. Needs to be specified the table to be referenced and the primary key of the table.
                    To create a primary key after the datatype use FOREIGN KEY REFERENCES <<TableName>>(<<PrimaryKey>>)

CREATE TABLE <<TableName>>(
    <<FieldName>> <<DataType>> PRIMARY KEY,
    <<FieldName>> <<DataType>>,
    <<FieldName>> <<DataType>>,
    .....
)

*/ 


CREATE TABLE Country(
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(30) NOT NULL,
    LongName VARCHAR(100),
    Description VARCHAR(50)
)

CREATE TABLE Department(
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    LongName VARCHAR(100),
    Description VARCHAR(50),
    IdCountry INT FOREIGN KEY REFERENCES Country(Id) NOT NULL
)

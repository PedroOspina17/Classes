INSERT INTO PAISES (NAME,POBLACION) VALUES('COLOMBIA',50.34)
INSERT INTO PAISES (NAME,POBLACION) VALUES('ESTADOS UNIDOS',328.2)
INSERT INTO PAISES (NAME,POBLACION) VALUES('VENEZUELA'.52)

INSERT INTO DEPARTAMENTO(NAME,IDPAISES) VALUES('ANTIOQUIA',1)
INSERT INTO DEPARTAMENTO(NAME,IDPAISES) VALUES('META',1)
INSERT INTO DEPARTAMENTO(NAME,IDPAISES) VALUES('BOGOTA',1)
INSERT INTO DEPARTAMENTO(NAME,IDPAISES) VALUES('VIRGINIA',2)
INSERT INTO DEPARTAMENTO(NAME,IDPAISES) VALUES('UTHA',2)
INSERT INTO DEPARTAMENTO(NAME,IDPAISES) VALUES('VIRGINIA',2)
INSERT INTO DEPARTAMENTO(NAME,IDPAISES) VALUES('UTHA',2)



INSERT INTO CIUDADES (NAME,IDDEPARTAMENTO) VALUES ('MEDELLILN',1)
INSERT INTO CIUDADES (NAME,IDDEPARTAMENTO) VALUES ('BELLO',1)
INSERT INTO CIUDADES (NAME,IDDEPARTAMENTO) VALUES ('Villavicencio',2)
INSERT INTO CIUDADES (NAME,IDDEPARTAMENTO) VALUES ('EL CASTILLO',2)




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

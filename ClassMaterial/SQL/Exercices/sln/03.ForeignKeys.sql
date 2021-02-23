/*

_________________________________               
COUNTRY                                         
_________________________________               
PK  Id          INT     NOT NULL                    
    Name                NOT NULL  
    Population  FLOAT                
_________________________________           
                                                
_________________________________               
DEPARTMENT                                      
_________________________________               
PK  Id          INT     NOT NULL                
    Name                NOT NULL                
FK  IdCountry   INT     NOT NULL                
_________________________________
                                                
_________________________________               
CITY                                            
_____________________________________           
PK  Id              INT     NOT NULL            
    Name                    NOT NULL            
FK  IdDepartment    INT     NOT NULL            
_____________________________________           
                                                
                                                */
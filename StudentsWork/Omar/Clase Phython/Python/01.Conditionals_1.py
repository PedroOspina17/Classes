ejercicio = int(input("Ingrese el número del ejercicio que desea realizar: "))
if (ejercicio == 2):
    num_1 = int(input("Ingrese valor 1: "))
    num_2 = int(input("Ingrese valor 2: "))
    pdto = num_1 * num_2
    print("El producto de los dos números es: {}".format(pdto) )

elif(ejercicio == 4):
    anio_actual = 2021
    anio_nace = int(input("Ingrese el año en el que nació: "))
    edad = anio_actual - anio_nace
    print("Usted tiene {} años de edad.".format(edad))

elif(ejercicio == 5):
    nota_1 = int(input("Ingrese la nota 1: "))
    nota_2 = int(input("Ingrese la nota 2: "))
    nota_3 = int(input("Ingrese la nota 3: "))
    prom = (nota_1 + nota_2 + nota_3)/3
    print ("El promedio es de: {}".format(prom))

elif(ejercicio == 6):
    g_cent = 30
    g_faren = (g_cent * 1.8) + 32
    print ("{}° centigrados equivalen a {}° farenheit".format(g_cent, g_faren))

elif(ejercicio == 7):
    num = int(input("Ingrese un número: "))
    total = num + 10
    print ("Total = {}".format(total))

elif(ejercicio == 8):
    g_cent = int(input("Ingrese la cantidad de grados centigrados: "))
    g_faren = (g_cent * 1.8) + 32
    print ("{}° centigrados equivalen a {}° farenheit".format(g_cent, g_faren))

elif(ejercicio == 9):
    name = (input("Ingrese el nombre del empleado: "))
    hours = int(input("Ingrese el total de horas trabajadas: "))
    value = int(input("Ingrese el valor monetario de 1 hora laboral: "))
    sueldo = hours * value
    print ("El sueldo del empleado {} es: {}".format(name, sueldo))

elif(ejercicio == 10):
    n_pdto = (input("Ingrese el nombre del producto: "))
    v_pdto = int(input("Ingrese el valor del producto: "))
    porc_iva = v_pdto * 0.19
    total_pdto = v_pdto + porc_iva
    print(f"El valor total de {n_pdto} es = {total_pdto} iva incluido")

elif(ejercicio == 11):
    fecha_nace = int(input("Ingrese su año de nacimiento: "))
    edad = 2021 - fecha_nace
    if(edad < 18):
        print(f"Su edad es de {edad} años, es menor de edad.")
    elif(edad == 18):
        print(f"Su edad es de {edad} años, por lo tanto debe sacar la cédula de ciudadania.")
    else:
        print(f"Su edad es de {edad} años, es mayor de edad.")

elif(ejercicio == 12):
    num = int(input("Ingrese un número: "))
    if(num < 0):
        print(f"El número {num} es negativo.")
    elif(num > 0):
        print(f"El número {num} es positivo.")
    else:
        print("Es cero")

elif(ejercicio == 13):
    num = int(input("Ingrese un número: "))
    if(num <100):
        print(f"El número {num} es menor a 100.")
    elif(num > 100):
        print(f"El número {num} es mayor a 100.")

elif(ejercicio == 14):
    hours = int(input("Ingrese el total de horas trabajadas en la semana: "))
    if(hours <= 40):
        value = 300
        sueldo = hours * value
        print (f"El sueldo semanal del empleado fue: {sueldo}")
    else:
        value_ex  =500
        hours_ex = hours - 40
        sueldo_ex = hours_ex * value_ex
        sueldo_t = sueldo_ex + 12000
        print(f"El sueldo semanal del empleado fue: {sueldo_t}")

elif(ejercicio == 15):
    num = int(input("Ingrese un número del 1 al 7: "))
    day = ""
    if(num == 1):
       day = "Lunes"
    elif(num == 2):
        day = "Martes"
    elif(num == 3):
       day = "Miercoles"
    elif(num == 4):
       day = "Jueves"
    elif(num == 5):
        day = "Viernes"
    elif(num == 6):
        day = "Sabado"
    elif(num == 7):
        day = "Domingo"
    print(f"El día elegido es: {day}")

elif(ejercicio == 16):
    user = input("Ingrese el nombre de usuario: ")
    password = input("Ingrese la contraseña: ")
    if(user == "omarendon" and password == "1234"):
        print(f"Bienvenido {user}")
    elif(user != "omarendon" or password != "1234"):
        print(f"El usuario y/o la contraseña son incorrectos ")

elif(ejercicio == 17):
    num = int(input("Ingrese el ultimo número de la placa de su vehiculo: "))
    day = ""
    if(num == 0 or num == 1):
        day = "Lunes"
    elif(num == 2 or num == 3):
        day = "Martes"
    elif(num == 4 or num == 5):
        day = "Miercoles"
    elif(num == 6 or num == 7):
        day = "Jueves"
    elif(num == 8 or num == 9):
        day = "Viernes"
    print(f"Su vehiculo tiene pico y placa el día: {day}")

elif(ejercicio == 18):
    letra = input("Ingrese una letra: ")
    if(letra == "a" or letra == "A" or letra == "e" or letra == "E" or letra == "i" or letra == "I" or letra == "o" or letra == "O" or letra == "u" or letra == "U"):
        print(f"La letra ingresada {letra} es una vocal")
    else:
        print(f"La letra ingresada es: {letra} y no es vocal")
    
elif(ejercicio == 19):
    option = int(input("Bienvenido, para ingresar a nuestro menu elija una de las siguentes opciones: \n - Archvo presione 1. \n - Buscar presione 2. \n - Si desea salir presione 3. \n"))
   
    if(option == 1):
        option1 = int (input("Ud ha elegido la opción Archivo. \n- Si desea salir presione 3. \n"))
        if(option1 == 3):
            print("Hasta luego!!!")
        elif(option1 != 3):
            option2 = int (input("Opción invalida. \n- Si desea salir presione 3. \n"))
            if(option2 == 3):
                print("Hasta luego!!!")
    elif(option == 2):
        option1 = int (input("Ud ha eligido la opción Buscar. \n- Si desea salir presione 3. \n"))
        if(option1 == 3):
            print("Hasta luego!!!")
        elif(option1 != 3):
            option2 = int (input("Opción invalida. \n- Si desea salir presione 3. \n"))
            if(option2 == 3):
                print("Hasta luego!!!")
    elif(option == 3):
        print("Hasta luego!!!")
    elif(option != 1 and option != 2 and option != 3):
        option = int(input("La opción que eligió no existe en nuestro menú. \n - Archvo presione 1. \n - Buscar presione 2. \n - Si desea salir presione 3. \n"))
        if(option == 1):
            option = int (input("Ud ha elegido la opción Archivo. \n- Si desea salir presione 3. \n"))
        elif(option == 2):
            option = int (input("Ud ha eligido la opción Buscar. \n- Si desea salir presione 3. \n"))
        elif(option == 3):
            print("Hasta luego!!!")

        
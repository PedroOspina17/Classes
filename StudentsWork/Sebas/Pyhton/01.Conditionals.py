
numeroEjercicio = int(input("Seleccione el numero del ejercicio ó 0 para salir: "))

while (numeroEjercicio != 0):

    if(numeroEjercicio == 2):

    # Ejercicio2: Cree dos constantes con un valor númerico, multiplicar los dos numeros, guardar el resultado de la multiplicacion en una variable y escribir/ imprimir la variable con el resultado
        CONST_UNO = 12
        CONST_DOS = 22
        mult = CONST_UNO * CONST_DOS
        print("El resultado de la multiplicación de {} * {} = {}".format(CONST_UNO, CONST_DOS, mult))

    elif(numeroEjercicio == 4):

    # Ejercicio4: Crear un algoritmo que calcule los años que usted tiene con base en su año de nacimiento, debe crear una constante con valor numérico (año de su nacimiento y hacer el cálculo)
        CONST_ANIO_NAC = 1997
        CONST_ANIO_ACTUAL = 2021
        edad = CONST_ANIO_ACTUAL - CONST_ANIO_NAC
        print("Su edad es: " + str(edad))

    elif(numeroEjercicio == 5):

    # Ejercicio5: Crear un algoritmo que calcule el promedio de tres notas (n1: 4.3, n2:3.5, n3: 2.8), imprimir el promedio
        notaUno = 4.3
        notaDos = 3.5
        notaTres = 2.8
        promedio = (notaUno+notaDos+notaTres)/3
        print("El promedio de la nota es: " + str(promedio))

    elif(numeroEjercicio == 6):

    # Ejercicio 6:Hacer un programa que convierta los grados centigrados (30) grados a grados Fahrenheit. La formula es la siguiente: (C*1.8)+32
        gradosCentigrados = 80
        conversion = (gradosCentigrados*1.8)+32
        print("{} grados centigrados es equivalente a {} grados fahrenheit".format(
            gradosCentigrados, conversion))

    elif(numeroEjercicio == 7):

    # Ejercicio 7: pedir un número al usuario y escribirlo/imprimirlo sumándole 10.
        numero = float(input("Digite un número: "))
        print("El numero {} + 10 es igual a {}".format(numero, numero+10))


    elif(numeroEjercicio == 8):

    # Ejercicio 8:Realizar el mismo programa del punto (6), pero ahora se debe pedir el dato inicial (grados centígrados) al usuario (teclear el dato)
        gradosCentigrados = float(input("Digite los grados centigrados a convertir: "))
        conversion = (gradosCentigrados*1.8)+32
        print("{} grados centigrados es equivalente a {} grados fahrenheit".format(
            gradosCentigrados, conversion))

    elif(numeroEjercicio == 9):

    # Ejercio 9: Hacer un algoritmo que calcule el sueldo de un empleado dados como datos de entrada: el nombre, horas trabajadas y el valor de la hora
        nombre = input("Digite el nombre del empleado")
        horas = float(input("Digite el total de horas trabajadas"))
        valorHora = float(input("Digite el valor de la hora"))
        sueldo = horas * valorHora
        print("El sueldo del empleado {} es de {} pesos".format(nombre, sueldo))


    elif(numeroEjercicio == 10):

    # Ejercicio 10: Crear un algoritmo que calcule el precio final de un producto, teniendo en cuenta el iva del 19%, el usuario debe ingresar el valor del producto sin iva y el algoritmo debe retornar el valor final
        valorProductoSinIVA = float(input("Digite el valor del producto sin IVA"))
        CONTS_IVA = 0.19
        valorTotal = (valorProductoSinIVA * CONTS_IVA) + valorProductoSinIVA
        print("El valor total del producto es: " + str(valorTotal))

    elif(numeroEjercicio == 11):

    #Ejercicio 11: Elaborar un algoritmo que permita averiguar si una persona debe sacar su cedula (mayor de 17 años), sabiendo su año de nacimiento.
        CONST_ANIO_NAC = 1997
        CONST_ANIO_ACTUAL = 2021
        edad = CONST_ANIO_ACTUAL - CONST_ANIO_NAC
        if (edad >= 18 ):
            print("Puedes realizar el proceso para sacar la cedula")
        else:
            print("Aun no tienes la edad para sacar la cedula")

    elif(numeroEjercicio == 12):

    #Ejercicio 12: Elaborar un algoritmo que pida un número y diga si es positivo o negativo

        numero= float(input("Digite un numero: "))
        if(numero >= 0):
            print("El numero " + str(numero) + " es positivo")
        else: 
            print("El numero " + str(numero) + " es negativo")

    elif(numeroEjercicio == 13):

    #Ejercicio 13: Elaborar un algoritmo que pida un número y diga si es mayor de 100

        numero= float(input("Digite un numero: "))
        if(numero > 100):
            print("El numero " + str(numero) + " es mayor que 100")
        else: 
            print("El numero " + str(numero) + " es menor que 100")

    elif(numeroEjercicio == 14):

    #Ejercicio 14: Elaborar un algoritmo para un trabajador que necesita calcular su salario semanal, el cual se obtiene de la siguiente manera: Si trabaja 40 horas o menos se le paga 300 por hora, Si trabaja más de 40 horas se le paga 300 por cada una de las primeras 40 horas y $500 por cada hora extra.

        horas = float(input("Digite la cantidad de horas trabajadas"))

        if(horas <= 40):
            salarioSemanal = horas * 300
        else: 
            valorHorasExtras = (horas - 40) * 500
            valorHorasNormales = 40 * 300 
            salarioSemanal = valorHorasExtras + valorHorasNormales
        print("El valor del salario semanal es: " + str(salarioSemanal))

    elif(numeroEjercicio == 15):

    #Ejercicio 15: Elaborar un algoritmo que pida un número del 1 al 7 y entregue como resultado el nombre del día correspondiente a la semana. Por ejemplo: Si el usuario ingresa el número 1, entonces se le debe dar como resultado "Lunes"

        numDia = int(input("Digite un numero del 1 al 7"))

        if(numDia == 1):
            print("El número {} es correspondiente al día Lunes".format(numDia))
        elif(numDia == 2):
            print("El número {} es correspondiente al día Martes".format(numDia))
        elif(numDia == 3):
            print("El número {} es correspondiente al día Miercoles".format(numDia))
        elif(numDia == 4):
            print("El número {} es correspondiente al día Jueves".format(numDia))
        elif(numDia == 5):
            print("El número {} es correspondiente al día Viernes".format(numDia))
        elif(numDia == 6):
            print("El número {} es correspondiente al día Sabado".format(numDia))
        elif(numDia == 7):
            print("El número {} es correspondiente al día Domingo".format(numDia))
        else:
            print("Número de día de la semana no valido")

    elif(numeroEjercicio == 16):

    #Ejercicio 16: Elaborar un algoritmo que permita el login (inicio de sesión) en una red social. Nota: Debe crear una variable con el nombre de usuario y otra con la contraseña.

        usuario= "SebasMadrid"
        contrasena= "Sebas123456789"

        usuarioConsola = input("Porfavor digite su usuario")
        contrasenaConsola = input("Porfavor digite su contraseña")

        if(usuarioConsola == usuario and contrasenaConsola == contrasena):
            print("Bienvenido a la página")
        else:
            print("Usuario o contraseña incorrectos")

    elif(numeroEjercicio == 17):

    #Ejercicio 17: Elaborar un algoritmo que pida el número final de la placa de un vehículo y permita determinar que día tiene pico y placa.

        ultimoDigitoPlaca = int(input("Digite el ultimo digito de la placa: "))

        if(ultimoDigitoPlaca >= 0 and ultimoDigitoPlaca <= 9):
            if(ultimoDigitoPlaca == 0 or ultimoDigitoPlaca == 1):
                print("El número {} tiene pico y placa el día Lunes".format(ultimoDigitoPlaca))
            elif(ultimoDigitoPlaca == 2 or ultimoDigitoPlaca == 3):
                print("El número {} tiene pico y placa el día Martes".format(ultimoDigitoPlaca))
            elif(ultimoDigitoPlaca == 4 or ultimoDigitoPlaca == 5):
                print("El número {} tiene pico y placa el día Miercoles".format(ultimoDigitoPlaca))
            elif(ultimoDigitoPlaca == 6 or ultimoDigitoPlaca == 7):
                print("El número {} tiene pico y placa el día Jueves".format(ultimoDigitoPlaca))
            elif(ultimoDigitoPlaca == 8 or ultimoDigitoPlaca == 9 ):
                print("El número {} tiene pico y placa el día Viernes".format(ultimoDigitoPlaca))    
        else:
            print("El valor ingresado no es valor valido")

    elif(numeroEjercicio == 18):

    #Ejercicio 18: Elaborar un algoritmo que pida una letra y detecte si es una vocal.

        letra = input("Digite una letra:").upper()
        if (letra == "A" or letra == "E" or letra == "I" or letra == "O" or letra == "U" ):
            print("El valor ingresado es una vocal")
        else:
            print("El valor ingresado no es una vocal")

    elif(numeroEjercicio == 19):

    #Ejercicio 19: Elaborar un algoritmo que muestre un menú que contemple las opciones "Archivo", "Buscar" y "Salir", en caso de que no se introduzca una opción correcta se notificará por pantalla.
        print("Digite una de las siguientes opciones: ")
        print("1.Archivo")
        print("2.Buscar")
        print("3.Salir")
        opcion = int(input())
        if (opcion == 1):
            print("Has seleccionado la opción archivo")
        elif(opcion == 2):
            print("Has seleccionado la opción buscar")
        elif(opcion == 3):
            print("Has seleccionado la opción Salir")
        else:
            print("Has seleccionado un opcion incorrecta")
    else: 
        print("Has seleccionado un numero de ejercicio no valido, verifica nuevamente")

    numeroEjercicio = int(input("Seleccione el numero del ejercicio ó 0 para salir: "))
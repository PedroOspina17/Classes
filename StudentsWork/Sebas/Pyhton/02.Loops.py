# Exercises

tipoCiclo = int(input("Seleccione el numero tipo de ciclo que quiere ejecutar 1.FOR ó 2.WHILE ó 0 para salir: "))


if (tipoCiclo == 1): 
    
    numeroEjercicio = int(input("Seleccione el numero del ejercicio ó 0 para salir: "))

    while ( numeroEjercicio != 0):
        # FOR

        if(numeroEjercicio == 1):

            # Ejercicio 1: Desarrollar un algoritmo que imprima los números de 1 al 100.
            for i in range(1, 100):
                print(i)

        elif(numeroEjercicio == 2):

            # Ejercicio 2:  Desarrollar un algoritmo que sume los cinco primeros números naturales.
            acumulador = 0
            for i in range(1, 6):
                acumulador += i
            print("La suma de los primeros 5 numero es " + str(acumulador))

        elif(numeroEjercicio == 3):

            # Ejercicio 3:  Desarrollar un algoritmo que solicite 7 calificaciones en la materia de química de un alumno y calcule el promedio final de su nota.
            acumuladorNota = 0
            for i in range(1, 8):
                acumulador += float(input("Digite la nota " + str(i)))
            definitiva = acumulador/7
            print("la nota definitiva es: " + str(definitiva))

        elif(numeroEjercicio == 4):

            # Ejercicio 4:  Desarrollar un algoritmo que lea 10 números e imprimir solamente los números positivos. (se imprime dentro del ciclo, si el usuario ingresa un número positivo se imprime, sino ingresa un número positivo, no se imprime nada y se pide el número siguiente)
            for i in range(1, 11):
                numero = int(input("Digite un numero: "))
                if (numero > 0):
                    print(numero)

        elif(numeroEjercicio == 5):

            # Ejercicio 5:  Desarrollar un algoritmo que lea 10 números e imprimir cuántos son positivos, cuántos negativos y cuántos ceros.
            contadorPositivos = 0
            contadorNegativos = 0
            contadorCeros = 0
            for i in range(1, 11):
                numero = int(input("Digite un numero: "))
                if (numero == 0):
                    contadorCeros += 1
                elif (numero >= 1):
                    contadorPositivos += 1
                else:
                    contadorNegativos += 1
            print("Cantidad de numeros positivos: " + str(contadorPositivos))
            print("Cantidad de numeros negativos: " + str(contadorNegativos))
            print("Cantidad de numeros cero: " + str(contadorCeros))

        elif(numeroEjercicio == 6):

            # Ejercicio 6:  Desarrollar un algoritmo que lea un número del 1 al 10 e imprima la tabla de multiplicar de ese número
            #Ejemplo: 2 * 1 = 2
            #         2 * 2 = 4
            #         2 * 3 = 6
            #               ...

            numero = int(input("Digite un numero entero: "))
            for i in range(1, 11):
                print("{} * {} = {}".format(numero, i, i*numero))

        elif(numeroEjercicio == 7):

            # Ejercicio 7: Se tiene el nombre y la edad de 3 personas y se desea saber si dentro de ellas hay por lo menos una que sea menor de edad e imprimir Un mensaje que diga “si se encontró un menor de edad” y su nombre. Sino “no hay ningún menor de edad”
            # Nota: Considere romper el ciclo

            for i in range(1, 4):
                nombre = input("Digite el nombre de la persona {} :".format(i))
                edad = int(input("Digite la edad: "))
                if(edad <= 18):
                    print("Se encontró un menor de edad, el cual es: " + nombre)
                    break
                if(i == 3):
                    print("No hay ningún menor de edad")

        elif(numeroEjercicio == 8):

            # Ejercicio 8:  Desarrollar un algoritmo que pida 5 productos con cantidad y precio; si el total de la compra es mayor a 100.000 entonces darle al cliente el 10% de descuento. mostrar cuántos productos compro, total de compra, descuento y valor a pagar.

            totalCompra = 0
            cantidadTotalProductos = 0

            for i in range(1, 6):
                cantidad = int(input("Digite la cantidad de producto " + str(i)))
                cantidadTotalProductos += 1
                valor = int(input("Digite el valor de producto " + str(i)))
                totalCompra += cantidad * valor

            if(totalCompra > 100000):
                descuento = totalCompra * 0.1
            else:
                descuento = 0

            print("Cantidad productos: " + str(cantidadTotalProductos))
            print("Total de la compra: " + str(totalCompra))
            print("Descuento: " + str(descuento))
            print("Total a pagar: " + str(totalCompra-descuento))
            
        elif(numeroEjercicio == 9):

            # Ejercicio 9: Una compañía fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de N focos, el número de focos de cada color que hay en existencia.
            # Nota: el tamaño del lote (N) debe ser ingresado por pantalla

            tamañoLote = int(input("Digite el tamaño del lote: "))

            contVerdes = 0
            contBlancos = 0
            contRojos = 0
            for i in range(tamañoLote):
                color = input("Digite el color del foco: ").lower()
                if(color == "verde"):
                    contVerdes += 1
                elif (color == "blanco"):
                    contBlancos += 1
                else:
                    contRojos += 1
            print("Cantidad de focos verdes: " + str(contVerdes))
            print("Cantidad de focos blancos: " + str(contBlancos))
            print("Cantidad de focos rojos " + str(contRojos))
        else :
            print("Ah diligenciado un numero de ejercicio incorrecto")
        
        numeroEjercicio = int(input("Seleccione el numero del ejercicio ó 0 para salir: "))
        
elif(tipoCiclo == 2):

    numeroEjercicio = int(input("Seleccione el numero del ejercicio ó 0 para salir: "))
    # WHILE
    # Exercises
    while ( numeroEjercicio != 0):

        if(numeroEjercicio == 1):

            # 1. Crea un programa que pida un código de usuario y una contraseña. Deberá repetirse hasta que el código sea “1” y la contraseña sea “1234”.
            bandera = 0
            while(bandera == 0):
                codigoUsuario = input("Digite el codigo de usuario: ")
                contrasena = input("Digite la contraseña: ")
                if(codigoUsuario == '1' and contrasena == '1234'):
                    bandera = 1

        elif(numeroEjercicio == 2):

            # 2. Escribir un programa que realice la pregunta ¿Desea continuar S/N? y que no deje de hacerla hasta que el usuario teclee N.
            opcion = input("¿Desea continuar S/N? : ")
            while (opcion.upper() != "N"):
                if (opcion.upper() != 'S'):
                    print("Ah ingresado un valor invalido intentelo nuevamente")
                opcion = input("¿Desea continuar S/N? : ")

        elif(numeroEjercicio == 3):

            # 3. Escribir un programa que reciba una a una las notas del usuario, preguntando a cada paso si desea ingresar más notas, e imprimir promedio de las notas ingresadas.
            bandera = input("¿Desea ingresar notas S/N? : ")
            contador = 0
            acumulador = 0
            while (bandera.upper() != 'N'):

                if(bandera.upper() == 'S'):
                    nota = float(input("Digite la nota: "))
                    acumulador += nota
                    contador += 1
                    bandera = input("¿Desea ingresar notas S/N? : ")
                else:
                    print("Ah ingresado un valor no valido, intentelo nuevamente")
                    bandera = input("¿Desea ingresar notas S/N? : ")

            if(contador > 0):
                promedio = acumulador/contador
                print("El promedio de las notas es: {}".format(promedio))

        elif(numeroEjercicio == 4):

            # 4. Escribir un programa que le pida al usuario que ingrese una sucesión de números naturales, dejará de pedirlos sí
            # ingresa un número que no sea natural. Al final, el programa debe imprimir cuántos números fueron ingresados, la suma total de los valores y el promedio.
            numero = float(input("Ingrese un numero: "))
            suma = 0
            contador = 0

            while (numero > 0):
                suma += numero
                contador += 1
                numero = float(input("Ingrese un numero: "))

            print("Fueron ingresados {} numeros".format(contador))
            print("La suma de todos los numeros es: {}".format(suma))
            print("El promedio es: {}".format(suma/contador))

        elif(numeroEjercicio == 5):

            # 5. Dado un grupo de 20 estudiantes que cursaron la materia Algoritmos, se desea saber cuál es el promedio del grupo, cual fue la nota más alta y cual la más baja.
            cantidadEstudiantes = 1
            notaMaxima = 0
            notaMinima = 50
            acumulador = 0
            contador = 0
            while (cantidadEstudiantes <= 20):
                nota = float(input("Digite la nota del estudiante " +
                            str(cantidadEstudiantes) + " : "))
                cantidadEstudiantes += 1
                acumulador += nota
                contador += 1
                if(nota > notaMaxima):
                    notaMaxima = nota
                if(nota < notaMinima):
                    notaMinima = nota
            print("La nota mas alta fue: {}".format(notaMaxima))
            print("La nota mas baja fue: {}".format(notaMinima))
            print("El promedio del grupo fue de: {}".format(acumulador/contador))

        elif(numeroEjercicio == 6):

            # 6. Crear un algoritmo que lea un número entero y sume los números comprendidos entre 1 y el número leído inclusive.
            # Ejemplo: el usuario ingresó en número 8, se debe sumar 1+2+3+4+5+6+7+8
            suma = 0
            numero = int(input("Digite un numero entero: "))
            i = 1
            while(i <= numero):
                suma += i
                i += 1
            print("La suma total es: {}".format(suma))

        elif(numeroEjercicio == 7):

            # 7. Escribir un programa que lea 10 datos desde el teclado y sume sólo aquellos que sean negativos.
            control = 1
            suma = 0
            while (control <= 10):
                dato = float(input("Digite el dato: "))
                control += 1
                if(dato < 0):
                    suma += dato
            print("La suma de los numeros negativos es: {}".format(suma))

        elif(numeroEjercicio == 8):

            # 8. Crea un programa que calcula la factorial de un nº entero y positivo.
            # Ejemplo factorial de 5 es 1*2*3*4*5 = 120
            numero = int(input("Digite el numero para sacar factorial: "))
            i = 1
            factorial = 1
            while (i <= numero):
                factorial *= i
                i += 1
            print("El factorial de {} es: {}".format(numero, factorial))

        elif(numeroEjercicio == 9):

            # 9. Una compañía fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de N focos, el número de focos de cada color.
            # Nota: el tamaño del lote (N) debe ser ingresado por pantalla
            lote = int(input("Digite el tamaño del lote: "))
            contVerdes = 0
            contBlancos = 0
            contRojos = 0
            i = 1

            while(i <= lote):
                color = input("Digite el color del foco: ").lower()
                i += 1
                if(color == "verde"):
                    contVerdes += 1
                elif (color == "blanco"):
                    contBlancos += 1
                else:
                    contRojos += 1
            print("Cantidad de focos verdes: " + str(contVerdes))
            print("Cantidad de focos blancos: " + str(contBlancos))
            print("Cantidad de focos rojos " + str(contRojos))
        else :
            print("Ah diligenciado un numero de ejercicio incorrecto")

        numeroEjercicio = int(input("Seleccione el numero del ejercicio ó 0 para salir: "))
else :
    print("Ah diligenciado un numero de ejercicio incorrecto")
numeroEjercicio = int(input("Ingrese el número del ejercicio del 1 al 10: "))
if(numeroEjercicio == 1):
    for i in range(1,101,1):
        print(i)
elif(numeroEjercicio == 2):
    contador = 0
    for i in range (0,5,1):
        contador = contador + i
    print(contador)
elif(numeroEjercicio == 3):
    contador = 0
    for i in range(1,8,1):
        nota = int(input("Ingresar la " + str(i) +" nota:"))
        contador = contador + nota
        if(i == 7):
            promedio = contador/7
            print("el promedio de la nota de química es :", str(promedio))
elif(numeroEjercicio == 4):         
    contador = 0
    for i in range(1,11,1):
        numeroIngresado = int(input("Digitar el número: "))
        if(numeroIngresado >= 0):
            print(numeroIngresado)
elif(numeroEjercicio == 5): 
    contadorPositivos = 0
    contadorNegativos = 0
    contadorCeros = 0
    for i in range(1,11,1):
        numeroIngresado = int(input("Digitar el número: "))
        if(numeroIngresado > 0):
            contadorPositivos = contadorPositivos + 1
        elif(numeroIngresado == 0):
            contadorCeros = contadorCeros + 1
        else:
          contadorNegativos = contadorNegativos + 1
    print(f"El cantidad de números positivo son: {contadorPositivos}")
    print(f"El cantidad de números negativo son: {contadorNegativos}")    
    print(f"El cantidad de números fueron 0 son: {contadorCeros}")  
elif(numeroEjercicio == 6): 
    numeroIngresado = int(input("Digitar el número: "))
    for i in range(1,11,1):
        resultado = i * numeroIngresado
        print(f"La tabla del {numeroIngresado} * {i} = {resultado}")
elif(numeroEjercicio == 7):
    menor = ""
    for i in range(1,4,1): 
        nombre = input(f"Por favor ingresar el {i} nombre: ")
        edad = int(input(f"Por favor ingresas la {i} edad: "))
        if(edad < 18):
            if(menor == ""):
                menor = str(menor + nombre + " - " + str(edad)+ ", ")
            else:
                menor = str(menor + nombre + " - " + str(edad))
    print(menor)
elif(numeroEjercicio == 8):
    cantidadTotalProducto = 0
    valorTotal = 0
    cantidadProducto = 0
    for i in range(1,6,1):
        nombreProducto = input("Ingrese el nombre del producto: ")
        cantidadProducto = int(input(f"Ingresar la cantidad de {nombreProducto} a comprar: "))
        valorProducto = int(input("Ingresar el valor unitario del producto adquirido: "))
        valorPagar = int(valorProducto * cantidadProducto)
        valorTotal = int(valorTotal + valorPagar)
        cantidadTotalProducto = cantidadProducto + cantidadTotalProducto
        if(valorTotal > 100000 and i >= 5):
            valorDescuento = (valorTotal * 10)/100
            valorTotalDescuento = valorTotal - valorDescuento
            print(f"La cantidad de productos son: {cantidadTotalProducto}")
            print(f"El total de la compra: {valorTotal}")
            print(f"El valor de descuento de la compra: {valorDescuento}")
            print(f"Valor total a pagar: {valorTotalDescuento}")
elif(numeroEjercicio == 9):
    cantidadLote = int(input("Ingrese la cantidad de lote: "))
    contadorVerde = 0
    contadorBlaco = 0
    contadorRojo = 0
    otroColo = 0
    for i in range(0,cantidadLote,1):
        colorBombillo = input("Por favor ingresar el color de bombillo (Verde, Blanco y Rojo): ")
        if(colorBombillo == "Verde"):
            contadorVerde = contadorVerde + 1
        elif(colorBombillo == "Blanco"):
            contadorBlaco = contadorBlaco + 1
        elif(colorBombillo == "Rojo"):
            contadorRojo = contadorRojo + 1
        else:
            otroColo = otroColo + 1
    print(f"La cantidad de bombillo de color Verde: {contadorVerde}")
    print(f"La cantidad de bombillo de color Blanco: {contadorBlaco}")
    print(f"La cantidad de bombillo de color Rojo: {contadorRojo}")
elif(numeroEjercicio == 10):
    codigoUsuario = ""
    pssUsuario = 0
    while(codigoUsuario != "1" or pssUsuario != 1234):
        codigoUsuario = input("Por favor ingresar el código: ")
        pssUsuario = int(input("Por favor ingresar la contraseña: "))

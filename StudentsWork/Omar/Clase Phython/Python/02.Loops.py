ejercicio = int(input("Ingrese el número del ejercicio que desea realizar: "))

if (ejercicio == 1):
    for i in range(1,101):
        print(i)

elif (ejercicio == 2):
    acum = 0
    for i in range (1,6):
        print(i)
        acum+=i       
    print(f"La suma de los numeros es: {acum}" )

elif (ejercicio == 3):
    acum = 0
    for i in range(1,8):
        nota = float(input(f"Ingrese la nota{i}: "))
        acum+=nota
    prom = acum/7
    print(f"El promedio total de las notas es: {prom}")

elif (ejercicio == 4):
    for i in range(1,11):
        num = int(input("Ingrese un número: "))
        if (num > 0):
            print(num)
       
elif (ejercicio == 5):
    acum_p = 0
    acum_n = 0
    acum_c = 0
    for i in range (1,11):
        num = int(input("Ingrese un número: "))
        if (num > 0):
            acum_p += 1

        elif (num < 0):
            acum_n += 1
        
        elif (num == 0):
            acum_c += 1

    print(f"Cantidad números positivos: {acum_p}")
    print(f"Cantidad números negativos: {acum_n}")
    print(f"Cantidad ceros: {acum_c}")

elif (ejercicio == 6):
    num = int(input("Ingrese un número: "))
    num_m= 0
    for  i in range (1,11):
        num_m += 1
        pdto = num * num_m
        print(f"{num} * {num_m} = {pdto}")

elif (ejercicio == 7):
    for i in range (1,4):
        name = input("Ingrese nombre: ")
        age = int(input("Ingrese la edad: "))
    if (age < 18):
        print(f"Se encontró un menor de edad, su nombre es {name} y tiene {age} años.")
    else:
        print("No se encontraron menores de edad.")
        
elif (ejercicio == 8):
    acum_pdtos = 0
    acum_price = 0
    total_pdtos = 0
    total_price = 0
    desc = 0
    total_price_desc = 0
    for i in range (1,6):
        pdto = input(f"Escriba el nombre del producto {i}: ")
        price = int(input("Digite el precio unitario del producto: "))
        cant = int(input("Digite la cantidad total del producto: "))
        total_price = price * cant
        print (f"Precio total de la cantidad del producto: {total_price}")
        acum_pdtos += cant
        acum_price += total_price
    print (f"Cantidad total de productos: {acum_pdtos} \nPrecio total de la compra: {acum_price}")
    if (acum_price > 100000):
        desc = acum_price * 0.10
        total_price_desc = acum_price - desc
    print (f"Descuento del 10% = {desc}")
    print (f"Total a pagar = {total_price_desc}")
       
elif (ejercicio == 9):
    focos_v = 0
    focos_b = 0
    focos_r = 0
    lote = int(input("Ingrese la cantidad del lote: "))
    for i in range(1, lote + 1):
        color_foco = input(f"Ingrese el color del foco {i}: ")
        if(color_foco == "v"):
            focos_v += 1
        elif(color_foco == "b"):
            focos_b += 1
        elif(color_foco == "r"):
            focos_r += 1
        elif(color_foco != "v" and color_foco != "b" and color_foco != "r"):
            print(f"El color {color_foco} no existe")
    print(f"Total focos verdes: {focos_v} \nTotal focos blancos: {focos_b} \nTotal focos rojos: {focos_r}")
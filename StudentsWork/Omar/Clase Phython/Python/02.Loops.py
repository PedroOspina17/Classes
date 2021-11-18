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
       
        
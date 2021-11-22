numeroEjercicio = int(input("Ingrese el número del ejercicio del 2 al 19: "))
if(numeroEjercicio == 2):
    primerNumero = int(input("Ingrese el primer número entero: "))
    segundoNumero = int(input("Ingrese el segundo número entero: "))
    resultadoMulti = primerNumero * segundoNumero
    print(resultadoMulti)
elif(numeroEjercicio == 3):
    print("No hay ejercicio")
elif(numeroEjercicio == 4):
    añoActual = 2021
    añoNacimiento = int(input("Ingrese el año en que nació: "))
    edad = añoActual - añoNacimiento
    print(edad)
elif(numeroEjercicio == 5):
    opcionNota = int(input("Ingrese 1 si quiere ingresar las notas, 2 si quiere el promedio estandar: "))
    if(opcionNota == 1):
        primeraNota = float(input("Ingrese la 1ra nota: "))
        segundaNota = float(input("Ingrese la 2da nota: "))
        terceraNota = float(input("Ingrese la 3ra nota: "))
        promedio = (primeraNota + segundaNota + terceraNota)/3
        print(promedio)
    elif (opcionNota == 2):
        primeraNota = 4.3
        segundaNota = 3.5
        terceraNota = 2.8
        promedio = (primeraNota + segundaNota + terceraNota)/3
        print(promedio)
    else:  
        print("Opción incorrecta")
elif(numeroEjercicio == 6):
    opcionCentigrado = int(input("Ingrese 1 si quiere ingresar grados centigrados, 2 si quiere pasar los (30) grados a Fahrenheit: "))
    if(opcionCentigrado == 1):
        centigrado = float(input("Ingrese los grados centigrados a convertir en Fahrenheit: ",))
        formulario = (centigrado*1.8)+32
        print(formulario)
    elif (opcionCentigrado == 2):
        centigrado = 30
        formulario = (centigrado*1.8)+32
        print(formulario)
elif(numeroEjercicio == 7):
    númeroIngresado = float(input("Por favor ingrese un número: "))
    resultado = númeroIngresado + 10
    print(resultado)
elif(numeroEjercicio == 8):
    print("Esta en el ítem 6")
elif(numeroEjercicio == 9):
    nombre = input("Ingresar el nombre del empleado: ")
    horasTrabajadas = int(input("Ingresar # de horas trabajadas: "))
    valorHora = float(input("Ingresar el valor de la hora: "))
    calculo = int(horasTrabajadas * valorHora)
    print("El pago de", nombre, "es:", calculo)
elif(numeroEjercicio == 10):
    valorProducto = int(input("Ingresar el valor del producto: "))
    valorTotalIva =   int((0.19 * valorProducto) + valorProducto)
    print("El valor total con iva del procudto es:"+ valorTotalIva)
elif(numeroEjercicio == 11):
    añoNacimiento = int(input("Por favor ingresar el año de nacimiento:"))
    añoActual = 2021
    calculo =   añoActual - añoNacimiento
    if(calculo > 17):
        print(f"Usuario debe de solicitar la cedula, ya que su edad de {calculo} es apta para hacerlo ")
    else:
        print(f"Usuario su edad no es apta para solicitar la cedula, ya que la edad minima debe de ser:", 18)
elif(numeroEjercicio == 12):
    numeroIngresado = int(input("Por favor ingresar el número a evaluar: "))
    if(numeroIngresado >= 0):
        print(f"El número {numeroIngresado} ingresado es: Positivo")
    else:
        print(f"El número {numeroIngresado} ingresado es: Negativo")
elif(numeroEjercicio == 13):
    numeroIngresado = int(input("Por favor ingresar el número a evaluar: "))
    if(numeroIngresado >100):
        print(f"El número {numeroIngresado} ingresado es mayo que 100")
    else:
        print(f"El número {numeroIngresado} ingresado es menor que 100")
elif(numeroEjercicio == 14):
    horasTrabajadas = float(input("Ingrese los días trabajados: "))
    salarioSemanl = 0
    if(horasTrabajadas <= 40):
        salarioSemanl = horasTrabajadas * 300
        print(f"Las horas trabajadas en la semana son {horasTrabajadas} y e salario del trabajador es: {salarioSemanl}")
    else:
        horasExtras = horasTrabajadas - 40
        valorHorasExtras = horasExtras * 500
        valorHoraNormativa = 40 * 300
        salarioSemanl = valorHorasExtras + valorHoraNormativa
        print(f"Las horas trabajadas en la semana son: {horasTrabajadas}")
        print(f"Horas normativas son: 40, el valor de estas horas es : {valorHoraNormativa}") 
        print(f"Horas extras son: {horasExtras}, el valor de estas horas es: {valorHorasExtras}") 
        print(f"El salario de esta semana: {salarioSemanl}")
elif(numeroEjercicio == 15):
    numeroDiaSemana = int(input("Por favor ingresar el número del día de la semana: "))
    if(numeroDiaSemana < 8):
        if(numeroDiaSemana == 1):
            print("El día de la semana es: Lunes")
        elif(numeroDiaSemana == 2):
            print("El día de la semana es: Martes")
        elif(numeroDiaSemana == 3):
            print("El día de la semana es: Miércoles")
        elif(numeroDiaSemana == 4):
            print("El día de la semana es: Jueves")
        elif(numeroDiaSemana == 5):
            print("El día de la semana es: Viernes")
        elif(numeroDiaSemana == 6):
            print("El día de la semana es: Sábado")
        elif(numeroDiaSemana == 7):
            print("El día de la semana es: Domingo")
    else:
        print("El número ingresado no es valido")
elif(numeroEjercicio == 16):
    Usuario = "Mawi618"
    pss = "0618"
    usuarioLogueado = input("Ingresar el usuario: ")
    pssLogueado = input("Ingresar la contraseña: ")
    if(Usuario == usuarioLogueado and pss == pssLogueado):
        print("Sessión logueada correctamente")
    else:
        print(f"Usuario {usuarioLogueado} o contraseña {pssLogueado} errada, intente de nuevo")
elif(numeroEjercicio == 17):
    ultimoNumeroPlaca = input("Ingresar el último número de la placa de su vehículo: ")
    if(ultimoNumeroPlaca == 0 or ultimoNumeroPlaca == 1):
        print("El día que le corresponde pico y placa es: Lunes")
    elif(ultimoNumeroPlaca == 2 or ultimoNumeroPlaca == 3):
        print("El día que le corresponde pico y placa es: Martes")
    elif(ultimoNumeroPlaca == 4 or ultimoNumeroPlaca == 5):
        print("El día que le corresponde pico y placa es: Mirécoles")
    elif(ultimoNumeroPlaca == 6 or ultimoNumeroPlaca == 7):
        print("El día que le corresponde pico y placa es: Jueves")
    elif(ultimoNumeroPlaca == 8 or ultimoNumeroPlaca == 9):
        print("El día que le corresponde pico y placa es: Lunes")
    else:
        print("El número ingresado no corresponde, ingresar un número entre el 0 al 9")
elif(numeroEjercicio == 18):
    letra = input("Por favor ingresar una letra: ")
    if(letra == "a" or letra == "e" or letra == "i" or letra == "o" or letra == "u"):
        print("La letra ingresada es: Vocal")
    else:
        print("La letra ingresada es: Consonante")
elif(numeroEjercicio == 19):
    opcionIngresada = input("Por favor digitar una opción: Archivo, Buscar o Salir: ")
    if(opcionIngresada == "Archivo" or opcionIngresada == "Buscar"):
        print(f"Está en el menú {opcionIngresada}")
    elif(opcionIngresada == "Salir"):
        print("Cerró sessión correctamente")
    else:
        print("La opción digitada no es correcta!")

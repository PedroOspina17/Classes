user=input("escribe el usuario: ")
passw=input("escribe la contraseña: ")
if (user=="1" and passw=="1234"):
    print("good")
else:
    while (user!="11"):
        user=input("escribe el usuario otra vez: ")
    while (passw!="1234"):
        passw=input("escribe la contraseña otra vez: ")


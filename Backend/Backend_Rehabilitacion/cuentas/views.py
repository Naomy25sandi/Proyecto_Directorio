from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
import re
from rest_framework import viewsets
from .models import Blacklist
from .serializers import BlacklistSerializer

# Create your views here.
# # View es la logica y se tienen que conectar con las URL
class RegistroView(APIView):
    def post(self,request):# Peticion
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        last_name = request.data.get('last_name')

        if User.objects.filter(email=email).exists():# usuario ya existe
            return Response({'error': 'Usuario ya existe'}, status=status.HTTP_400_BAD_REQUEST)
        
        #Validacion de nombre de usuario
        if not any(letra.isupper() for letra in username):
            return Response({'error': 'El nombre de usuario debe tener al menos una mayúscula'}, status=status.HTTP_400_BAD_REQUEST)

        if len(last_name) < 3:  
            return Response({'error': 'El apellido debe tener 3 o más carácteres'}, status=status.HTTP_400_BAD_REQUEST)
        #Validación para la contraseña
        if len(password) < 8:
            return Response({'error': 'La contraseña debe tener 8 o más carácteres'}, status=status.HTTP_400_BAD_REQUEST)
        
        if not re.search(r'\d',password):
            return Response({'error': 'La contraseña debe al menos un un número'}, status=status.HTTP_400_BAD_REQUEST)

        if not re.search(r'[!@#$%^&*(),.?":{}|<>]',password):
            return Response({'error': 'La contraseña debe tener al menos un carácter especial'}, status=status.HTTP_400_BAD_REQUEST)


        nuevo_usuario = User.objects.create_user(username=username,email=email, password=password,last_name=last_name) # creamos un nuevo usuario   
        return Response({'success': 'Usuario creado'}, status=status.HTTP_201_CREATED) # creamos nuevo usuario

class LoginView(APIView):
    def post(self,request):
        email = request.data.get('email')
        password = request.data.get('password')

        usuario = User.objects.get(email=email) # obtenemos el usuario por el email

        usuario = authenticate(request,username=usuario.username, password=password) # autenticamos al usuario

        if usuario is None: # si no existe el usuario
            return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            refresh = RefreshToken.for_user(usuario)
             # creamos un token para el usuario
            return Response({'success': f' Usuario valido es super usuario?','usuario':{usuario.id},'super':{usuario.is_superuser},'token_acceso':str(refresh.access_token),'token_refresco':str(refresh)}, status=status.HTTP_200_OK) # retornamos el token
    
    #tengo dudas para crear estas validaciones? 

class RegistroAdminView(APIView):
    def post(self,request):# Peticion
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        if User.objects.filter(email=email).exists():# usuario ya existe
            return Response({'error': 'Usuario ya existe'}, status=status.HTTP_400_BAD_REQUEST)
        
        #Validación para la contraseña
        if len(password) < 8:
            return Response({'error': 'La contraseña debe tener 8 o más carácteres'}, status=status.HTTP_400_BAD_REQUEST)
        
        if not re.search(r'\d',password):
            return Response({'error': 'La contraseña debe al menos un un número'}, status=status.HTTP_400_BAD_REQUEST)

        if not re.search(r'[!@#$%^&*(),.?":{}|<>]',password):
            return Response({'error': 'La contraseña debe tener al menos un carácter especial'}, status=status.HTTP_400_BAD_REQUEST)


        nuevo_usuario = User.objects.create_superuser(username=username,email=email,password=password) # creamos un nuevo usuario   
        return Response({'success': 'Usuario creado'}, status=status.HTTP_201_CREATED) # creamos nuevo usuario
    
    
class BlacklistViewSet(viewsets.ModelViewSet):
    queryset = Blacklist.objects.all() #defino conjunto de datos
    serializer_class= BlacklistSerializer# convertimos datos 
from django.shortcuts import render
from rest_framework.views import APIView #clase base para definir vistas
from rest_framework.response import Response # respuestas JSON u otro formato
from django.contrib.auth.models import User # modelo para la autenticacion
from django.contrib.auth import authenticate # funcion para verficar si usuario existe
from rest_framework.authtoken.models import Token # usado para la autenticacion
from rest_framework import status# HTTP
from rest_framework_simplejwt.tokens import RefreshToken #crear tokens JWT
import re # expresiones regulares
from rest_framework import viewsets
from .models import Blacklist
from .serializers import BlacklistSerializer
from rest_framework.permissions import AllowAny #


# Create your views here.
# # View es la logica y se tienen que conectar con las URL
class RegistroView(APIView):
    permission_classes = [AllowAny] # sobreescribir permisos 
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
    permission_classes = [AllowAny]
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            usuario = User.objects.get(email=email)  # obtenemos el usuario por el email
        except User.DoesNotExist:
            return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_400_BAD_REQUEST)

        usuario = authenticate(request, username=usuario.username, password=password)  # autenticamos al usuario

        if usuario is None:  # si no existe el usuario
            return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            refresh = RefreshToken.for_user(usuario)  # creamos un token para el usuario
            return Response({
                'success': 'Usuario válido',
                'usuario': {
                    'id': usuario.id,
                    'username': usuario.username,  # Devuelve el nombre de usuario
                    'super': usuario.is_superuser,  # Indica si es superusuario
                    'correo':usuario.email,
                    'apellido':usuario.last_name,
                    'token_acceso': str(refresh.access_token),
                    'token_refresco': str(refresh)
                },
            },status=status.HTTP_200_OK)
            

    
   

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
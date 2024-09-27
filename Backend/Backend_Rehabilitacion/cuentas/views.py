from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework import status
# Create your views here.
# # View es la logica y se tienen que conectar con las URL
class RegistroView(APIView):
    def post(self,request):# Peticion
        username= request.data.get('username')
        password = request.data.get('password')
        
        if User.objects.filter(username=username).exists():# usuario ya existe
            return Response({'error': 'Usuario ya existe'}, status=status.HTTP_400_BAD_REQUEST)
        
        
        nuevo_usuario = User.objects.create_user(username=username, password=password)
        return Response({'success': 'Usuario creado'}, status=status.HTTP_201_CREATED) # creamos nuevo usuario
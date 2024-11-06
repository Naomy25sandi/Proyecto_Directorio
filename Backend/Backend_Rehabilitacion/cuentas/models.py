from django.db import models #se inporta el módulo necesario para usar los models Django 
from django.contrib.auth.models import User # Importo el modelo User Django

# Create your models here.
class Usuario(models.Model): # creo la clase Usuario
    user= models.OneToOneField(User,on_delete=models.CASCADE)
 
 # creacion de la clase Blacklist   
class Blacklist(models.Model):
    ip_address = models.GenericIPAddressField(unique=True) # Almacena direcciones IP únicas.
    reason = models.TextField()#Almacena el motivo
    created_at = models.DateTimeField(auto_now_add=True)#fecha y hora creacion el registro

    def __str__(self):
        return self.ip_address
    

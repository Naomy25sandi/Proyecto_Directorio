from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Usuario(models.Model):
    user= models.OneToOneField(User,on_delete=models.CASCADE)
 
 # creacion de la clase Blacklist   
class Blacklist(models.Model):
    ip_address = models.GenericIPAddressField(unique=True) # Almacena direcciones IP únicas.
    reason = models.TextField()#Almacena el motivo
    created_at = models.DateTimeField(auto_now_add=True)#fecha y hora creacion el registro

    def __str__(self):
        return self.ip_address
    
#la dirección IP se muestre
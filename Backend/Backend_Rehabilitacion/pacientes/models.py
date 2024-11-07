from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Paciente(models.Model): #clase paciente que hereda            # autenticacion de models
    usuario = models.OneToOneField(User, on_delete=models.CASCADE)  # Relación uno a uno con el modelo User
    fecha_nacimiento = models.DateField()
    genero = models.CharField(max_length=10,null=False,blank=False)  # "masculino", "femenino"
    historia_clinica = models.TextField(null=False,blank=False)
    

    
    


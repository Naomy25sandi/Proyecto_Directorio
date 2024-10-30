from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Paciente(models.Model):
    usuario = models.OneToOneField(User, on_delete=models.CASCADE)  # Relación uno a uno con el modelo User
    fecha_nacimiento = models.DateField()
    genero = models.CharField(max_length=10)  # "masculino", "femenino"
    historia_clinica = models.TextField()
    
# duda con el y se me olvido poner la llave foranea, ahora como la agrego
    # def __str__(self):
    # return ?
    
    


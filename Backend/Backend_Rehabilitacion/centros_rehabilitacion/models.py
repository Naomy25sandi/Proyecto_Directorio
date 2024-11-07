from django.db import models ##se inporta el módulo necesario para usar los models Django 

# Create your models here.
class Centro(models.Model): # clase centro donde vamos a almacenar la info de cada centro
    nombre = models.CharField(max_length=100,blank=False,null=False) # autenticacion de models
    descripcion = models.TextField(blank=False,null=False)
    telefono = models.CharField(max_length=15,blank=False,null=False)
    distrito = models.CharField(max_length=15,blank=False,null=False)
    provincia = models.CharField(max_length=15,blank=False,null=False)
    estado = models.BooleanField(default=True,blank=False,null=False)
    precio = models.CharField(max_length=15,blank=False,null=False)
    imagen = models.TextField() #base64 de la imagen del centro
    creado_en = models.DateTimeField(auto_now_add=True,blank=False,null=False)

# python manage.py startapp nombre_app

class Tratamientos(models.Model): # clase tratamiento
    nombre=  models.CharField(max_length=100)
    

    
class TratamientosPorCentro(models.Model): # tratamiento por centro
    centro = models.ForeignKey(Centro,on_delete=models.CASCADE)
    tratamiento = models.ManyToManyField(Tratamientos)
    

    
    
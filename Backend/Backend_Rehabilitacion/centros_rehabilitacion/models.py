from django.db import models

# Create your models here.
class Centro(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    telefono = models.CharField(max_length=15)
    distrito = models.CharField(max_length=15)
    provincia = models.CharField(max_length=15)
    estado = models.BooleanField(default=True)
    precio = models.CharField(max_length=15)
    imagen = models.TextField()
    creado_en = models.DateTimeField(auto_now_add=True)

# python manage.py startapp nombre_app

class Tratamientos(models.Model):
    nombre=  models.CharField(max_length=100)
    
# class Servicios(models.Model):
#     nombre=  models.CharField(max_length=100)
#     descripcion =  models.CharField(max_length=100)
    
class TratamientosPorCentro(models.Model):
    centro = models.ForeignKey(Centro,on_delete=models.CASCADE)
    tratamiento = models.ManyToManyField(Tratamientos)
    
# class CentroServicios(models.Model):
#     centro = models.ForeignKey(Centro,on_delete=models.CASCADE)
#     servicio = models.ForeignKey()
    
    
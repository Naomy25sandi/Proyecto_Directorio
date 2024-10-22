from django.db import models

# Create your models here.
class Centro(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    telefono = models.CharField(max_length=15)
    # ubicacion = models.ForeignKey('Ubicacion', on_delete=models.CASCADE)
    estado = models.BooleanField(default=True)
    precio = models.CharField(max_length=15)
    imagen = models.TextField()
    creado_en = models.DateTimeField(auto_now_add=True)

# python manage.py startapp nombre_app

# class Ubicacion(models.Model):
#     distrito= models.CharField(max_length=100)
#     provincia= models.CharField(max_length=100)
#     codigo_postal= models.CharField(max_length=15)
#     detalles= models.CharField(max_length=100)
    
    
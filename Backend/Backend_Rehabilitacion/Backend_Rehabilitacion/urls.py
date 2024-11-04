from django.urls import path,include
from cuentas.views import RegistroAdminView, RegistroView
from cuentas.views import LoginView
#from cuentas.views import obtener_perfil_usuario

# usamos para comunicarnos con el path
urlpatterns = [
    path('registro/',RegistroView.as_view()),
    path('registroAdmin/',RegistroAdminView.as_view()),
    path('inicio/',LoginView.as_view()),
    path('centros/',include('centros_rehabilitacion.urls')),
    #path('api/user/profile/', obtener_perfil_usuario, name='perfil_usuario'), 
    # El include accede a las urls de la app centros_rehabilitacion. 
    # Entre comillas se pone el nombre de la app y luego se pone el nombre del archivo urls.py

]

from django.contrib import admin
from django.urls import path
from cuentas.views import RegistroView
from cuentas.views import LoginView

# usamos para comunicarnos con el path
urlpatterns = [
    path('admin/', admin.site.urls),
    path('registro/',RegistroView.as_view()),
    path('inicio/',LoginView.as_view())

]

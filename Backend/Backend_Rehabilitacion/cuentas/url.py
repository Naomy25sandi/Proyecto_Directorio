from django.urls import path # Importamos path para definir las rutas

from rest_framework_simplejwt.views import (
    TokenRefreshView,  # Importa la vista TokenRefreshView desde el paquete simplejwt
)
urlpatterns = [
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
]
from django.urls import path
from .views import PacienteListCreate, PacienteDetalle


urlpatterns = [
      path('pacientes/', PacienteListCreate.as_view(), name='paciente-list-create'),
      path('pacientes/<int:pk>/', PacienteDetalle.as_view(), name='paciente-detail'),
]
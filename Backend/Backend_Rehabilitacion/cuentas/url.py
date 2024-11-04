from django.urls import path

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
urlpatterns = [
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    #path('api/usuario/', UserProfileView.as_view(), name='user-profile'),
]
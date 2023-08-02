from django.urls import path, include
from rest_framework import routers
from .views import ProductModelViewSet

router = routers.DefaultRouter()
router.register('products', ProductModelViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

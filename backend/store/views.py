from django.http import JsonResponse
from rest_framework import generics, viewsets, status

from .models import Product
from .serializers import ProductSerializer


class ProductModelViewSet(viewsets.ModelViewSet):
    # Specify the serializer class for the viewset
    serializer_class = ProductSerializer
    # Set the queryset to fetch all Product objects
    queryset = Product.objects.all()

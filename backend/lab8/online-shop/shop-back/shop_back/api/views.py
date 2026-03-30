from django.shortcuts import render
from .models import Product , Category

# Create your views here.
from rest_framework.viewsets import ModelViewSet
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from rest_framework.decorators import action
from rest_framework.response import Response


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self , request , pk=None):
        products = Product.objects.filter(category_id=pk)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
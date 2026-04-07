from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404


from .models import Product
from .serializers import ProductSerializer

#List of all products GET and creating new POST
class ProductListCBV(APIView):

    def get(self , request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self , request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#getting , updating or deleting products
class ProductDetailCBV(APIView):
    def get_object(self, pk : int):
        return get_object_or_404(Product , pk=pk)

    def get(self , request, pk : int):
        product = self.get_object(pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self , request, pk : int):
        product = self.get_object(pk)
        serializer = ProductSerializer(product , data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self , request , pk : int):
        product = self.get_object(pk)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
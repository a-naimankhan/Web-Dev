from rest_framework import generics, request
from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet

from .models import Product
from .serializers import ProductSerializer

class ProductListMixins(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self , requst , *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self , request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

#much more easier logic
class ProductDetailMixins(mixins.RetrieveModelMixin, mixins.DestroyModelMixin, mixins.UpdateModelMixin, generics.GenericAPIView):
    queryset = Product.objects.all()
    serialize_class = ProductSerializer

    def get(self , request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self , request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self , request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
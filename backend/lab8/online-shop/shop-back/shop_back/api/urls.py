from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, CategoryViewSet
from .fbv import product_list , product_detail

#
# router = DefaultRouter()
# router.register('categories', CategoryViewSet)
# router.register('products', ProductViewSet)
#
# urlpatterns = router.urls

urlpatters = [
    path('products/', product_list, name='products-list'),
    path('products/<int:pk>/', product_detail, name='product-detail'),
]
from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, CategoryViewSet
from .fbv import product_list , product_detail
from .cbv import ProductListCBV , ProductDetailCBV
from .mixins import ProductListMixins , ProductDetailMixins
from .generics import (
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
    ProductListAPIView,
    ProductDetailAPIView
)

#
router = DefaultRouter()
# router.register('categories', CategoryViewSet)
# router.register('products', ProductViewSet)
#
# urlpatterns = router.urls

urlpatterns = [
    # #fbv urls
    # path('products/', product_list, name='products-list'),
    # path('products/<int:pk>/', product_detail, name='product-detail'),


    # #CBV urls :
    # path('products-cbv/' , ProductListCBV.as_view() , name="products-cbv" ),
    # path('products-cbv/<int:pk>/' , ProductDetailCBV.as_view() , name="products-detail" ),

    #MIXINS

    # path('product-mixins/' , ProductListMixins.as_view() , name = 'product_list' ),
    # path('products-mixins/<int:pk>/' , ProductDetailMixins.as_view() , name = 'product_detail' ),

#     #Generics
    path('products-generics/', ProductListAPIView.as_view()),
    path('products-generics/<int:pk>/', ProductDetailAPIView.as_view()),

    #categories
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),

    #custom
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view()),


]
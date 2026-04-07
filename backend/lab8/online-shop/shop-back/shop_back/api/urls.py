from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, CategoryViewSet
from .fbv import product_list , product_detail
from .cbv import ProductListCBV , ProductDetailCBV

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


    #CBV urls :
    path('products-cbv/' , ProductListCBV.as_view() , name="products-cbv" ),
    path('products-cbv/<int:pk>/' , ProductDetailCBV.as_view() , name="products-detail" ),
]
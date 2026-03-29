from django.shortcuts import render
from .models import Product , Category

# Create your views here.
from django.http import JsonResponse

def root(request):
    return JsonResponse({"message" : "API is running"})


def test(request):
    return JsonResponse({"status" : "ok"})


def products_list(request):
    products = Product.objects.all()
    data = []
    for p in products:
        data.append({
            "id" : p.id,
            "name" : p.name,
            "price" : p.price,
            "description" : p.description,
            "count" : p.count,
            "is_active" : p.is_active,
            "category_id" : p.category_id,
        })

    return JsonResponse({"data" : data} , safe = False)


def product_detail(request, id):
    try:
        p = Product.objects.get(id=id)

        data = {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category_id": p.category_id,
        }

        return JsonResponse(data)

    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)

def categories_list(request):
    categories = Category.objects.all()

    data = []
    for c in categories:
        data.append({
            "id" : c.id,
            "name" : c.name,
        })

    return JsonResponse({"data" : data} , safe = False)

def category_detail(request , id):
    try:
        c = Category.object.filter(id = id)
        data = {
            "id" : c.id,
            "name" : c.name
        }

        return JsonResponse({"data" : data} , safe = False)
    except Category.DoesNotExist:
        return JsonResponse({"message" : "Category with id {} does not exist".format(id)} , safe = False)


def category_products(request , id):
    products = Product.objects.filter(category_id = id)
    data = []
    for p in products:
        data.append({
            "id" : p.id,
            "name" : p.name,
            "price" : p.price,
        })

    return JsonResponse({"data" : data} , safe = False)
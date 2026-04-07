from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import AuthorModel, BookModel
from .serilizers import AuthorSerializer, BooksSerializer


class AuthorViewSet(viewsets.ModelViewSet):
    queryset = AuthorModel.objects.all()
    serializer_class = AuthorSerializer

    @action(detail=True, methods=['get'], url_path='books')
    def all_books_author(self, request, pk=None):
        author = self.get_object()
        books = BookModel.objects.filter(authors=author)
        serializer = BooksSerializer(books, many=True)
        return Response(serializer.data)


class BookViewSet(viewsets.ModelViewSet):
    queryset = BookModel.objects.all()
    serializer_class = BooksSerializer

    @action(detail=False, methods=['get'])
    def avaible_books(self, request):
        book = self.queryset.filter(is_available=True)
        serializer = BooksSerializer(book, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def out_of_stock_books(self, request):
        book = BookModel.objects.filter(stock=0, is_available=False)
        serializer = BooksSerializer(book, many=True)
        return Response(serializer.data)

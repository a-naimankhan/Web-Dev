from django.db import models

# Create your models here.

class AuthorModel(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    birth_date = models.DateField()
    nationality = models.CharField(max_length=50)
    bio = models.TextField()

    def __str__(self):
        return self.first_name


class BookModel(models.Model):
    title = models.CharField(max_length=50)
    isbn = models.CharField(max_length=13 , unique=True)
    pages = models.IntegerField()
    price = models.FloatField()
    stock = models.IntegerField(default=0)
    publish_date = models.DateField()
    is_available = models.BooleanField()
    authors = models.ForeignKey(AuthorModel , on_delete=models.CASCADE)


    def __str__(self):
        return self.title
from django.core.management.base import BaseCommand
from store.models import AuthorModel, BookModel


class Command(BaseCommand):
    help = 'Seed the database with test authors and books'

    def handle(self, *args, **kwargs):
        self.stdout.write('Seeding data...')

        # --- Authors ---
        author1, _ = AuthorModel.objects.get_or_create(
            first_name='George',
            last_name='Orwell',
            defaults={
                'birth_date': '1903-06-25',
                'nationality': 'British',
                'bio': 'Eric Arthur Blair, known by his pen name George Orwell, was an English novelist and essayist.',
            }
        )

        author2, _ = AuthorModel.objects.get_or_create(
            first_name='J.K.',
            last_name='Rowling',
            defaults={
                'birth_date': '1965-07-31',
                'nationality': 'British',
                'bio': 'Joanne Rowling, better known as J.K. Rowling, is a British author best known for the Harry Potter series.',
            }
        )

        author3, _ = AuthorModel.objects.get_or_create(
            first_name='Leo',
            last_name='Tolstoy',
            defaults={
                'birth_date': '1828-09-09',
                'nationality': 'Russian',
                'bio': 'Lev Nikolayevich Tolstoy was a Russian writer widely regarded as one of the greatest authors of all time.',
            }
        )

        # --- Books for George Orwell ---
        BookModel.objects.get_or_create(
            isbn='9780451524935',
            defaults={
                'title': '1984',
                'pages': 328,
                'price': 9.99,
                'stock': 15,
                'publish_date': '1949-06-08',
                'is_available': True,
                'authors': author1,
            }
        )

        BookModel.objects.get_or_create(
            isbn='9780451526342',
            defaults={
                'title': 'Animal Farm',
                'pages': 112,
                'price': 7.99,
                'stock': 0,
                'publish_date': '1945-08-17',
                'is_available': False,
                'authors': author1,
            }
        )

        BookModel.objects.get_or_create(
            isbn='9780141182704',
            defaults={
                'title': 'Homage to Catalonia',
                'pages': 232,
                'price': 11.49,
                'stock': 5,
                'publish_date': '1938-04-25',
                'is_available': True,
                'authors': author1,
            }
        )

        # --- Books for J.K. Rowling ---
        BookModel.objects.get_or_create(
            isbn='9780439708180',
            defaults={
                'title': "Harry Potter and the Sorcerer's Stone",
                'pages': 309,
                'price': 12.99,
                'stock': 30,
                'publish_date': '1997-06-26',
                'is_available': True,
                'authors': author2,
            }
        )

        BookModel.objects.get_or_create(
            isbn='9780439064873',
            defaults={
                'title': 'Harry Potter and the Chamber of Secrets',
                'pages': 341,
                'price': 12.99,
                'stock': 0,
                'publish_date': '1998-07-02',
                'is_available': False,
                'authors': author2,
            }
        )

        BookModel.objects.get_or_create(
            isbn='9780439136365',
            defaults={
                'title': 'Harry Potter and the Prisoner of Azkaban',
                'pages': 435,
                'price': 13.99,
                'stock': 20,
                'publish_date': '1999-07-08',
                'is_available': True,
                'authors': author2,
            }
        )

        # --- Books for Leo Tolstoy ---
        BookModel.objects.get_or_create(
            isbn='9780140449174',
            defaults={
                'title': 'War and Peace',
                'pages': 1392,
                'price': 18.99,
                'stock': 8,
                'publish_date': '1869-01-01',
                'is_available': True,
                'authors': author3,
            }
        )

        BookModel.objects.get_or_create(
            isbn='9780140449295',
            defaults={
                'title': 'Anna Karenina',
                'pages': 864,
                'price': 15.99,
                'stock': 0,
                'publish_date': '1878-01-01',
                'is_available': False,
                'authors': author3,
            }
        )

        BookModel.objects.get_or_create(
            isbn='9780140449600',
            defaults={
                'title': 'The Death of Ivan Ilyich',
                'pages': 92,
                'price': 8.49,
                'stock': 12,
                'publish_date': '1886-01-01',
                'is_available': True,
                'authors': author3,
            }
        )

        self.stdout.write(self.style.SUCCESS('Database seeded successfully!'))

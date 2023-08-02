from django.db import models
from django.utils.translation import gettext_lazy as _


class Product(models.Model):
    # Define size choices as a TextChoices enumeration
    class Size(models.TextChoices):
        SMALL = "Small"
        MEDIUM = "Medium"
        LARGE = "Large"

    name = models.CharField(max_length=50)
    product_id = models.IntegerField()
    description = models.CharField(max_length=1000)
    colour = models.CharField(max_length=50)
    size = models.CharField(max_length=6, choices=Size.choices, default=None)

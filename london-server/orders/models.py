# models.py

from django.db import models


class Categories(models.Model):
    name = models.TextField(unique=True)

    class Meta:
        managed = False
        db_table = 'categories'


class Items(models.Model):
    category = models.ForeignKey(Categories, on_delete=models.CASCADE, blank=True, null=True)
    name = models.TextField()
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='items/', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'items'


class Sizes(models.Model):
    size_name = models.TextField(unique=True)

    class Meta:
        managed = False
        db_table = 'sizes'


class ItemSizes(models.Model):
    id = models.AutoField(primary_key=True)
    item = models.ForeignKey('Items', on_delete=models.CASCADE)
    size = models.ForeignKey('Sizes', on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=4)

    class Meta:
        unique_together = ('item', 'size')

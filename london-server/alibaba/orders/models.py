from django.db import models

class Categories(models.Model):
    name = models.TextField(unique=True)

    class Meta:
        managed = False
        db_table = 'categories'


class ItemSizes(models.Model):
    # Removed blank=True, null=True and ensured primary_key=True
    item = models.OneToOneField('Items', on_delete=models.CASCADE, primary_key=True)
    size = models.ForeignKey('Sizes', on_delete=models.CASCADE, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        managed = False
        db_table = 'item_sizes'


class Items(models.Model):
    category = models.ForeignKey(Categories, on_delete=models.CASCADE, blank=True, null=True)
    name = models.TextField()
    description = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'items'


class Sizes(models.Model):
    size_name = models.TextField(unique=True)

    class Meta:
        managed = False
        db_table = 'sizes'

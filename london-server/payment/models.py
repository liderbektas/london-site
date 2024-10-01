from django.db import models

class Order(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    road_name = models.CharField(max_length=255)
    apartment_name = models.CharField(max_length=255, blank=True, null=True)
    flat_number = models.CharField(max_length=50, blank=True, null=True)
    post_code = models.CharField(max_length=20)
    phone_number = models.CharField(max_length=20)
    item_name = models.CharField(max_length=255)  
    size_name = models.CharField(max_length=50)   
    price = models.DecimalField(max_digits=10, decimal_places=2)
    salad_toppings = models.TextField(blank=True, null=True)
    sauce_toppings = models.TextField(blank=True, null=True)
    quantity = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'orders'

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.quantity} items"

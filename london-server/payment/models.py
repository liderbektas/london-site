from django.db import models

class Order(models.Model):
    first_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255, blank=True, null=True)
    road_name = models.CharField(max_length=255, blank=True, null=True)
    apartment_name = models.CharField(max_length=255, blank=True, null=True)
    flat_number = models.CharField(max_length=255, blank=True, null=True)
    post_code = models.CharField(max_length=255, blank=True, null=True)
    phone_number = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)  
    def __str__(self):
        return f"Order by {self.first_name} {self.last_name} on {self.created_at}"

class Item(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    item_name = models.CharField(max_length=255, blank=True, null=True)
    size_name = models.CharField(max_length=255, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    salad_toppings = models.JSONField(default=list, blank=True)
    sauce_toppings = models.JSONField(default=list, blank=True)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.quantity} of {self.item_name} ({self.size_name})"

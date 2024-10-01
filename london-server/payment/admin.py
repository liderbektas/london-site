from django.contrib import admin
from .models import Order  # Import the Order model

class OrderAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'post_code', 'created_at', )  # Customize the fields to display

# Register the Order model with the new admin class
admin.site.register(Order, OrderAdmin)

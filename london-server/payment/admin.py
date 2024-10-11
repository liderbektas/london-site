from django.contrib import admin
from .models import Order, Item

class ItemInline(admin.TabularInline): 
    model = Item
    fields = ('item_name', 'size_name', 'price', 'salad_toppings', 'sauce_toppings', 'quantity')  
    extra = 0  

class OrderAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'post_code', 'created_at')
    search_fields = ('first_name', 'last_name', 'post_code') 
    inlines = [ItemInline] 

admin.site.register(Order, OrderAdmin)

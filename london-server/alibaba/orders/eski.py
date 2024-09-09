"""from django.shortcuts import render, get_object_or_404
from .models import Categories, Items, ItemSizes  # Corrected model names


def order_page(request):
    # Fetch all categories
    categories = Categories.objects.all()

    # Get the selected category ID from request, or default to the first category
    selected_category = request.GET.get('category', categories.first().id if categories else None)

    # Fetch items belonging to the selected category, if any
    items = Items.objects.filter(category_id=selected_category) if selected_category else []

    context = {
        'categories': categories,
        'items': items,
        'selected_category': int(selected_category) if selected_category else None,
    }
    return render(request, 'orders/order_page.html', context)


def item_detail(request, item_id):
    # Get the item or return a 404 if not found
    item = get_object_or_404(Items, id=item_id)

    # Fetch sizes for the selected item, ordered by size name
    sizes = ItemSizes.objects.filter(item=item).order_by('size__size_name')

    # Get the default size, if any
    default_size = sizes.first() if sizes.exists() else None

    # Get item categories for the item
    item_category_id = item.category.id

    # Fetch salad toppings and sauce toppings based on the item category
    salad_toppings = Items.objects.filter(category_id=10) if item_category_id in [1, 2, 4] else None
    sauce_toppings = Items.objects.filter(category_id=11) if item_category_id in [1, 2, 3, 4, 5] else None

    context = {
        'item': item,
        'sizes': sizes,
        'default_size': default_size,
        'salad_toppings': salad_toppings,
        'sauce_toppings': sauce_toppings,
    }
    return render(request, 'orders/item_detail.html', context)
"""

# views.py
"""
from rest_framework import generics
from rest_framework.response import Response
from .models import Items
from .serializers import ItemDetailSerializer


class ItemDetailAPIView(generics.RetrieveAPIView):
    queryset = Items.objects.all()
    serializer_class = ItemDetailSerializer

    def get(self, request, *args, **kwargs):
        item = self.get_object()
        item_category_id = item.category.id

        # Fetch salad toppings based on category
        salad_toppings = Items.objects.filter(category_id=10) if item_category_id in [1, 2, 4] else []

        # Fetch sauce toppings based on category
        sauce_toppings = Items.objects.filter(category_id=11) if item_category_id in [1, 2, 3, 4, 5] else []

        # Serialize data
        data = self.get_serializer(item).data
        data['salad_toppings'] = [{'id': topping.id, 'name': topping.name} for topping in salad_toppings]
        data['sauce_toppings'] = [{'id': topping.id, 'name': topping.name} for topping in sauce_toppings]

        return Response(data)

"""

# views_api.py

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Items, ItemSizes, Categories


@api_view(['GET'])
def categories(request):
    # Fetch all categories from the database
    categories = Categories.objects.all()

    # Serialize the data to a response format
    context = [
        {
            'id': category.id,
            'name': category.name,
            'items': [
                {
                    'id': item.id,
                    'name': item.name,
                    'description': item.description,
                    'price': ItemSizes.objects.filter(item=item).first().price if ItemSizes.objects.filter(item=item).exists() else None
                }
                for item in Items.objects.filter(category=category)
            ]
        }
        for category in categories
    ]

    return Response(context)


@api_view(['GET'])
def categories_page_api(request, categori_id):
    # Fetch the category by the given ID, or return 404 if not found
    try:
        category = Categories.objects.get(id=categori_id)
    except Categories.DoesNotExist:
        return Response({"error": "Category not found"})

    # Fetch items belonging to the selected category
    items = Items.objects.filter(category=category)

    # Serialize the data to a response format
    context = {
        'category': {
            'id': category.id,
            'name': category.name,
        },
        'items': [
            {
                'id': item.id,
                'name': item.name,
                'description': item.description,
            }
            for item in items
        ],
    }

    return Response(context)


@api_view(['GET'])
def item_detail_api(request, item_id):
    try:
        item = Items.objects.get(id=item_id)
    except Items.DoesNotExist:
        return Response({"error": "Item not found"}, status=404)

    sizes = ItemSizes.objects.filter(item=item).select_related('size')

    sizes_data = [
        {
            "size_id": size.size_id,
            "size_name": size.size.size_name,
            "price": size.price,
        }
        for size in sizes
    ]

    salad_toppings = [
        {"id": topping.id, "name": topping.name}
        for topping in Items.objects.filter(category_id=10)
    ] if item.category_id in [1, 2, 4] else []

    sauce_toppings = [
        {"id": topping.id, "name": topping.name}
        for topping in Items.objects.filter(category_id=11)
    ] if item.category_id in [1, 2, 3, 4, 5] else []

    data = {
        "item_id": item.id,
        "name": item.name,
        "description": item.description,
        "sizes": sizes_data,
        "salad_toppings": salad_toppings,
        "sauce_toppings": sauce_toppings,
    }

    return Response(data)
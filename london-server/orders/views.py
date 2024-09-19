from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Items, ItemSizes, Categories
from datetime import datetime, time
import pytz


@api_view(['POST'])
def time_post_checker(request):
    uk_tz = pytz.timezone("Europe/London")
    now = datetime.now(uk_tz).time()

    order_start = time(12, 00)
    order_finish = time(23, 00)

    if not (order_start < now < order_finish):
        return Response({"error": "Orders are not accepted at this time."}, status=status.HTTP_403_FORBIDDEN)

    acceptable_postcodes = [
        "NW1", "NW2", "NW3", "NW5", "NW6", "NW8", "NW10", "NW11",
        "W2", "W9", "W10", "W11", "W12"
    ]

    user_post_code = request.data.get("postcode").upper()

    if not any(user_post_code.startswith(post_code) for post_code in acceptable_postcodes):
        return Response({"error": "We do not deliver to this area."}, status=status.HTTP_403_FORBIDDEN)

    return Response({'success': 'Proceed to order'}, status=status.HTTP_200_OK)


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
                    'image': item.image.url if item.image else None,
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

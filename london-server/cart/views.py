from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .cart import Cart
from orders.models import Items, ItemSizes


@api_view(['POST'])
def add_to_cart(request):
    try:
        # Use request.data to get data from the POST request
        item_id = request.data.get("item_id")
        size_id = request.data.get("size_id")
        salad_toppings = request.data.get("salad_toppings", [])
        sauce_toppings = request.data.get("sauce_toppings", [])
        
        # Validate item_id to ensure it is not None
        if not item_id:
            return Response({"error": "Item ID is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            item_id = int(item_id)
        except ValueError:
            return Response({"error": "Item ID must be a number."}, status=status.HTTP_400_BAD_REQUEST)

        item = get_object_or_404(Items, id=item_id)

        size = get_object_or_404(ItemSizes, size_id=size_id, item=item)

        price = size.price

        salad_toppings = Items.objects.filter(id__in=salad_toppings, category_id=10)
        sauce_toppings = Items.objects.filter(id__in=sauce_toppings, category_id=11)

        selected_salad_toppings = [{"id": topping.id, "name": topping.name} for topping in salad_toppings]
        selected_sauce_toppings = [{"id": topping.id, "name": topping.name} for topping in sauce_toppings]
        
        quantity=1
        # Create or get the cart and add the item
        cart = Cart(request)
        cart.add(
                 item=item,
                 size=size_id,
                 price=price,
                 salad_toppings=selected_salad_toppings,
                 sauce_toppings=selected_sauce_toppings,
                 quantity=quantity,
                 )

        response_data = {
            "message": f"Item '{item.name}' added to cart.",
            "item": {
                "item_id": item.id,
                "name": item.name,
                "description": item.description,
                "image_url": item.image.url if item.image else None,  
                "selected_size": {
                    "size_id": size.size_id,
                },
                "price": str(price),
                "quantity": quantity,
                "salad_toppings": selected_salad_toppings,
                "sauce_toppings": selected_sauce_toppings,
                
            

            }
        }

        # Return the response with item details
        return Response(response_data, status=status.HTTP_200_OK)

    except Exception as e:
        # Catch any unexpected errors and return an error response
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .cart import Cart
from orders.models import Items

@api_view(['POST'])
def add_to_cart(request):
    try:
        # Use request.data to get data from the POST request
        item_id = request.data.get("item_id")

        # Validate item_id to ensure it is not None
        if not item_id:
            return Response({"error": "Item ID is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            item_id = int(item_id)  # Convert to int, if possible
        except ValueError:
            return Response({"error": "Item ID must be a number."}, status=status.HTTP_400_BAD_REQUEST)

        # Correctly retrieve the item using the 'id' field
        item = get_object_or_404(Items, id=item_id)

        # Create or get the cart and add the item
        cart = Cart(request)
        cart.add(item=item)

        # Prepare the response data including name, description, and image
        response_data = {
            "message": f"Item '{item.name}' added to cart.",
            "item": {
                "name": item.name,
                "description": item.description,
                "image_url": item.image.url if item.image else None,  # Assuming item.image is an ImageField
            }
        }

        # Return the response with item details
        return Response(response_data, status=status.HTTP_200_OK)

    except Exception as e:
        # Catch any unexpected errors and return an error response
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

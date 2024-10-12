from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from twilio.rest import Client  
from .serializers import CheckoutSerializer
from django.shortcuts import get_object_or_404
from .models import Order, Item
from orders.models import Items, ItemSizes
import random

TWILIO_ACCOUNT_SID = "AC91a86a0af41379ca9899f1fb02f6027a"
TWILIO_AUTH_TOKEN = "76580b391bf308b764bf30c3f3b5da40"
TWILIO_PHONE_NUMBER = "+13344871520"

# Global variables for user data
global_verified_code = None
global_first_name = None
global_last_name = None
global_road_name = None
global_apartment_name = None
global_flat_number = None
global_phone_number = None
global_post_code = None


@api_view(["POST"])
def checkout(request):
    global global_verified_code, global_first_name, global_last_name, global_road_name
    global global_apartment_name, global_flat_number, global_phone_number, global_post_code  # Declare all global variables

    serializer = CheckoutSerializer(data=request.data)

    if serializer.is_valid():
        global_first_name = serializer.validated_data['first_name']
        global_last_name = serializer.validated_data['last_name']
        global_road_name = serializer.validated_data['road_name']
        global_apartment_name = serializer.validated_data['apartment_name']
        global_flat_number = serializer.validated_data['flat_number']
        global_phone_number = serializer.validated_data['phone_number']
        global_post_code = serializer._validated_data['post_code']

        try:
            # Commented out Twilio part to close the SMS sending, but ensure no error
            # client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
            # global_verified_code = send_verification_code(global_phone_number, client)
            global_verified_code = 11111  # Always using '11111' for testing
        except Exception as e:
            return Response({"error": "Failed to send SMS. Try again later."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({"message": "Verification code sent to your phone."}, status=status.HTTP_200_OK)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# No longer needed to send verification code, always use '11111'
def send_verification_code(phone_number, client):
    verification_code = random.randint(10000, 99999)

    # Send SMS using Twilio (this part will remain commented for now)
    # client.messages.create(
    #     body=f"Your verification code is {verification_code}",
    #     from_=TWILIO_PHONE_NUMBER,
    #     to=phone_number
    # )

    return verification_code


@api_view(["POST"])
def verify_phone(request):
    global global_verified_code  # Access the global variable

    entered_code = request.data.get("verification_code")

    if not entered_code:
        return Response({"error": "Verification code is required."}, status=status.HTTP_400_BAD_REQUEST)

    if entered_code == str(global_verified_code):  # Always expect '11111'
        return Response({"message": "Phone number verified and user information saved."}, status=status.HTTP_200_OK)
    else:
        return Response({"error": "Invalid verification code."}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def order_complete(request):
    global global_phone_number

    try:
        # Commented out Twilio part to close the SMS sending, but ensure no error
        # client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
        # client.messages.create(
        #     body="We have received your order, soon on your doorstep. Thank you for choosing us!",
        #     from_=TWILIO_PHONE_NUMBER,
        #     to=global_phone_number
        # )
        return Response({"message": "Order confirmation sent."}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": "Failed to send confirmation SMS. Try again later."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET"])
def order_summary(request):
    global global_first_name, global_last_name, global_road_name
    global global_apartment_name, global_flat_number, global_phone_number, global_post_code

    user_info = {
        "first_name": global_first_name,
        "last_name": global_last_name,
        "road_name": global_road_name,
        "apartment_name": global_apartment_name,
        "flat_number": global_flat_number,
        "post_code": global_post_code,
        "phone_number": global_phone_number,
    }

    return Response(user_info, status=status.HTTP_200_OK)


@api_view(["POST"])
def add_order_to_db(request):
    try:
        first_name = request.data.get("first_name")
        last_name = request.data.get("last_name")
        road_name = request.data.get("road_name")
        apartment_name = request.data.get("apartment_name")
        flat_number = request.data.get("flat_number")
        post_code = request.data.get("post_code")
        phone_number = request.data.get("phone_number")
        message = request.data.get("message") 

        items = request.data.get("items", [])
        
        order = Order.objects.create(
            first_name=first_name,
            last_name=last_name,
            road_name=road_name,
            apartment_name=apartment_name,
            flat_number=flat_number,
            post_code=post_code,
            phone_number=phone_number,
            message=message  
        )
        for item in items:
            item_name = item.get("item_name")  
            size_name = item.get("size_name")  
            quantity = item.get("quantity")
            price = item.get("price")
            salad_toppings = item.get("salad_toppings", [])
            sauce_toppings = item.get("sauce_toppings", [])

            item_instance = Item.objects.create(  
                order=order,
                item_name=item_name,
                size_name=size_name,
                price=price,
                salad_toppings=salad_toppings,
                sauce_toppings=sauce_toppings,
                quantity=quantity
            )

        return Response({"message": "Order successfully created"}, status=status.HTTP_201_CREATED)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


"""
ORIGINAL

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from twilio.rest import Client  
from .serializers import CheckoutSerializer
import random
from django.shortcuts import get_object_or_404
from .models import Order, Item
from orders.models import Items, ItemSizes

TWILIO_ACCOUNT_SID = "AC91a86a0af41379ca9899f1fb02f6027a"
TWILIO_AUTH_TOKEN = "76580b391bf308b764bf30c3f3b5da40"
TWILIO_PHONE_NUMBER = "+13344871520"

# Global variables for user data
global_verified_code = None
global_first_name = None
global_last_name = None
global_road_name = None
global_apartment_name = None
global_flat_number = None
global_phone_number = None
global_post_code = None


@api_view(["POST"])
def checkout(request):
    global global_verified_code, global_first_name, global_last_name, global_road_name
    global global_apartment_name, global_flat_number, global_phone_number, global_post_code  # Declare all global variables

    serializer = CheckoutSerializer(data=request.data)

    if serializer.is_valid():
        global_first_name = serializer.validated_data['first_name']
        global_last_name = serializer.validated_data['last_name']
        global_road_name = serializer.validated_data['road_name']
        global_apartment_name = serializer.validated_data['apartment_name']
        global_flat_number = serializer.validated_data['flat_number']
        global_phone_number = serializer.validated_data['phone_number']
        global_post_code = serializer._validated_data['post_code']

        try:
            client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
            global_verified_code = send_verification_code(global_phone_number, client)
        except Exception as e:
            return Response({"error": "Failed to send SMS. Try again later."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({"message": "Verification code sent to your phone."}, status=status.HTTP_200_OK)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def send_verification_code(phone_number, client):
    verification_code = random.randint(10000, 99999)

    # Send SMS using Twilio
    client.messages.create(
        body=f"Your verification code is {verification_code}",
        from_=TWILIO_PHONE_NUMBER,
        to=phone_number
    )
    
    return verification_code


@api_view(["POST"])
def verify_phone(request):
    global global_verified_code  # Access the global variable

    entered_code = request.data.get("verification_code")

    if not entered_code:
        return Response({"error": "Verification code is required."}, status=status.HTTP_400_BAD_REQUEST)

    if entered_code == str(global_verified_code):
        return Response({"message": "Phone number verified and user information saved."}, status=status.HTTP_200_OK)
    else:
        return Response({"error": "Invalid verification code."}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def order_complete(request):
    global global_phone_number

    try:
        client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
        client.messages.create(
            body="We have received your order, soon on your doorstep. Thank you for choosing us!",
            from_=TWILIO_PHONE_NUMBER,
            to=global_phone_number
        )
        return Response({"message": "Order confirmation sent."}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": "Failed to send confirmation SMS. Try again later."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(["GET"])
def order_summary(request):
    global global_first_name, global_last_name, global_road_name
    global global_apartment_name, global_flat_number, global_phone_number, global_post_code

    user_info = {
        "first_name": global_first_name,
        "last_name": global_last_name,
        "road_name": global_road_name,
        "apartment_name": global_apartment_name,
        "flat_number": global_flat_number,
        "post_code": global_post_code,
        "phone_number": global_phone_number,
    }

    return Response(user_info, status=status.HTTP_200_OK)

@api_view(["POST"])
def add_order_to_db(request):
    try:
        first_name = request.data.get("first_name")
        last_name = request.data.get("last_name")
        road_name = request.data.get("road_name")
        apartment_name = request.data.get("apartment_name")
        flat_number = request.data.get("flat_number")
        post_code = request.data.get("post_code")
        phone_number = request.data.get("phone_number")
        message = request.data.get("message") 

        items = request.data.get("items", [])
        
        order = Order.objects.create(
            first_name=first_name,
            last_name=last_name,
            road_name=road_name,
            apartment_name=apartment_name,
            flat_number=flat_number,
            post_code=post_code,
            phone_number=phone_number,
            message=message  
        )
        for item in items:
            item_name = item.get("item_name")  
            size_name = item.get("size_name")  
            quantity = item.get("quantity")
            price = item.get("price")
            salad_toppings = item.get("salad_toppings", [])
            sauce_toppings = item.get("sauce_toppings", [])

            item_instance = Item.objects.create(  
                order=order,
                item_name=item_name,
                size_name=size_name,
                price=price,
                salad_toppings=salad_toppings,
                sauce_toppings=sauce_toppings,
                quantity=quantity
            )

        return Response({"message": "Order successfully created"}, status=status.HTTP_201_CREATED)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR) in here close sending msj part but make sure it doesnt return error and in verify part make verify code 11111
"""
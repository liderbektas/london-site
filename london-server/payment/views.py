from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from twilio.rest import Client  
from .serializers import CheckoutSerializer
from django.core.exceptions import ValidationError
import os

TWILIO_ACCOUNT_SID = "AC91a86a0af41379ca9899f1fb02f6027a"
TWILIO_AUTH_TOKEN = "76580b391bf308b764bf30c3f3b5da40"
TWILIO_PHONE_NUMBER = "+905377871412"

@api_view(["POST"])
def checkout(request):
    serializer = CheckoutSerializer(data=request.data)

    if serializer.is_valid():
        first_name = serializer.validated_data['first_name']
        last_name = serializer.validated_data['last_name']
        road_name = serializer.validated_data['road_name']
        apartment_name = serializer.validated_data['apartment_name']
        flat_number = serializer.validated_data['flat_number']
        phone_number = serializer.validated_data['phone_number']

        try:
            client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
            verification_code = send_verification_code(phone_number, client)
        except Exception as e:
            return Response({"error": "Failed to send SMS. Try again later."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        request.session['first_name'] = first_name
        request.session['last_name'] = last_name
        request.session['road_name'] = road_name
        request.session['apartment_name'] = apartment_name
        request.session['flat_number'] = flat_number
        request.session['phone_number'] = phone_number
        request.session['verification_code'] = verification_code

        return Response({"message": "Verification code sent to your phone."}, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def send_verification_code(phone_number, client):
    import random
    verification_code = random.randint(10000, 99999)

    # Send SMS using Twilio
    message = client.messages.create(
        body=f"Your verification code is {verification_code}",
        from_=TWILIO_PHONE_NUMBER,
        to=phone_number
    )
    
    return verification_code

@api_view(["POST"])
def verify_phone(request):
    entered_code = request.data.get("verification_code")
    verified_code = request.session.get("verification_code")

    if not entered_code:
        return Response({"error": "Verification code is required."}, status=status.HTTP_400_BAD_REQUEST)

    if entered_code == str(verified_code):
        first_name = request.session.get("first_name")
        last_name = request.session.get("last_name")
        road_name = request.session.get("road_name")
        apartment_name = request.session.get("apartment_name")
        flat_number = request.session.get("flat_number")
        phone_number = request.session.get("phone_number")

        return Response({"message": "Phone number verified and user information saved."}, status=status.HTTP_200_OK)
    else:
        return Response({"error": "Invalid verification code."}, status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
def order_complete(request):
    phone_number = request.session.get("phone_number")
    
    try:
        client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
        message = client.messages.create(
            body="We have received your order, soon on your doorstep. Thank you for choosing us!",
            from_=TWILIO_PHONE_NUMBER,
            to=phone_number
        )
        return Response({"message": "Order confirmation sent."}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": "Failed to send confirmation SMS. Try again later."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
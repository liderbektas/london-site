from rest_framework import serializers

class CheckoutSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=50)
    last_name = serializers.CharField(max_length=50)
    road_name = serializers.CharField(max_length=255)
    apartment_name = serializers.CharField(max_length=255)
    flat_number = serializers.CharField(max_length=10)
    phone_number = serializers.CharField(max_length=20)
    post_code = serializers.CharField(max_length=255)


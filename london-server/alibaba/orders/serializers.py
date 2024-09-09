from rest_framework import serializers
from .models import Items, ItemSizes, Sizes


class SizesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sizes
        fields = ['id', 'size_name']


class ItemSizesSerializer(serializers.ModelSerializer):
    size = SizesSerializer()

    class Meta:
        model = ItemSizes
        fields = ['id', 'size', 'price']


class ItemDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = ['id', 'name', 'description', 'category']


class ToppingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = ['id', 'name']

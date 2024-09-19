from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path("api/add_to_cart", views.add_to_cart, name="add_to_cart"),
]

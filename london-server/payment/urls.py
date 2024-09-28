from django.urls import path
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path("api/checkout", views.checkout, name="chechout"),
    path("api/verify_phone", views.verify_phone, name="verify_phone"),
    path("api/order_complete", views.order_complete, name="order_complete")
]
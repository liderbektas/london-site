from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', include('orders.urls')),
    path("cart/", include("cart.urls")),
    path("payment/", include("payment.urls"))

]

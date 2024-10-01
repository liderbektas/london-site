from django.urls import path
from .views import item_detail_api, categories_page_api, categories, time_post_checker
from django.conf import settings
from django.conf.urls.static import static
from . import views



urlpatterns = [
    # path('order/', order_page, name='order_page'),
    # path('order/item/<int:item_id>/', item_detail, name='item_detail'),
    # path('api/item/<int:pk>/', ItemDetailAPIView.as_view(), name='item-detail-api'),
    path('api/item/<int:item_id>/', item_detail_api, name='item-detail-api'),
    path('api/categories/<int:categori_id>/', categories_page_api, name="categories-page-api"),
    path("api/categories/", categories, name="categories"),
    path("api/time_post_checker", time_post_checker, name="time_post_checker"),
    #path("api/sizes", views.sizes, name="sizes")

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

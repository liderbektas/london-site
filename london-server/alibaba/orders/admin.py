from django.contrib import admin

# Register your models here.
# admin.py

from django.contrib import admin
from django.utils.html import format_html

from .models import Items, Categories, Sizes, ItemSizes


class ItemsAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'description', 'image_tag')  # Display image in admin
    readonly_fields = ['image_tag']

    def image_tag(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 100px;"/>'.format(obj.image.url))
        return '-'

    image_tag.short_description = 'Image'


admin.site.register(Items, ItemsAdmin)
admin.site.register(Categories)
admin.site.register(Sizes)
admin.site.register(ItemSizes)


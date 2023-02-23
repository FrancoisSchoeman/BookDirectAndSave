from django.contrib import admin

# Register your models here.
from .models import Listing, SeparateRoom, City, Province, ListingType, RoomType, Amenities, Gallery, BookedDates

class ListingAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Listing._meta.get_fields() if field.name != "amenities" and field.name != "separate_rooms" and field.name != "gallery" and field.name != "booked_dates" and field.name != "user"]
    # for field in Listing._meta.get_fields():
    #     print(field.name)
    
    

admin.site.register(Listing, ListingAdmin)
admin.site.register(SeparateRoom)
admin.site.register(City)
admin.site.register(Province)
admin.site.register(ListingType)
admin.site.register(RoomType)
admin.site.register(Amenities)
admin.site.register(Gallery)
admin.site.register(BookedDates)

from rest_framework import serializers
from .models import Listing, SeparateRoom, City, Province, ListingType, RoomType, Amenities, Gallery, BookedDates
from django.utils.text import slugify



class CitySerializer(serializers.ModelSerializer):

    class Meta:
        model = City
        fields = "__all__"


class ProvinceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Province
        fields = "__all__"


class ListingTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListingType
        fields = "__all__"


class RoomTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomType
        fields = "__all__"


class AmenitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Amenities
        fields = "__all__"


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = "__all__"


class BookedDatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookedDates
        fields = "__all__"

class SeparateRoomSerializer(serializers.ModelSerializer):
    amenities = AmenitiesSerializer(many=True)
    gallery = GallerySerializer(many=True)
    booked_dates = BookedDatesSerializer(many=True)
    class Meta:
        model = SeparateRoom
        fields = "__all__"


class ListingSerializer(serializers.ModelSerializer):
    separate_rooms = SeparateRoomSerializer(many=True)
    city = CitySerializer(many=False)
    province = ProvinceSerializer(many=False)
    listing_type = ListingTypeSerializer(many=False)
    room_type = RoomTypeSerializer(many=False)
    amenities = AmenitiesSerializer(many=True)
    gallery = GallerySerializer(many=True)
    booked_dates = BookedDatesSerializer(many=True)
    url = serializers.SerializerMethodField()
    host = serializers.SerializerMethodField()

    def get_host(self, instance):
        return instance.host.username

    def get_url(self, instance):
        return slugify(f"{instance.title}-{instance.id}")
        
    class Meta:
        model = Listing
        fields = "__all__"


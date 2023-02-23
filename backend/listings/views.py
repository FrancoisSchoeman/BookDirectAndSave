from django.shortcuts import render

# Create your views here.
from .serializers import ListingSerializer, SeparateRoomSerializer, CitySerializer, ProvinceSerializer, ListingTypeSerializer, RoomTypeSerializer, AmenitiesSerializer, GallerySerializer
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from .models import Listing, SeparateRoom, City, Province, ListingType, RoomType, Amenities, Gallery

class RecentListingsView(viewsets.ModelViewSet):
    serializer_class = ListingSerializer
    pagination_class = None
    queryset = Listing.objects.filter(is_published=True).order_by('-published_date')[:6]

class ListingView(viewsets.ModelViewSet):
    serializer_class = ListingSerializer
    # queryset = Listing.objects.all()
    pagination_class = PageNumberPagination

    def get_queryset(self):
        queryset = Listing.objects.all()
        city = self.request.query_params.get('city', None)
        listing_type = self.request.query_params.get('listing-type', None)
        guests = self.request.query_params.get('guests', None)
        booked_dates = self.request.query_params.get('booked-dates', None)
        if city is not None:
            # get city property from city model
            queryset = queryset.filter(city__city__icontains=city)
        if listing_type is not None:
            queryset = queryset.filter(listing_type__listing_type__icontains=listing_type)
        if guests is not None:
            # check if guests is smaller than or equal to the number of guests in separate rooms model or listing model, but ignores empty values
            queryset = queryset.filter(separate_rooms__guests__gte=guests).exclude(separate_rooms__guests__isnull=True) | queryset.filter(guests__gte=guests).exclude(guests__isnull=True)

        if booked_dates is not None:
            queryset = queryset.filter(booked_dates=booked_dates)
        
        return queryset

class SeparateRoomView(viewsets.ModelViewSet):
    serializer_class = SeparateRoomSerializer
    queryset = SeparateRoom.objects.all()
    pagination_class = None

class CityView(viewsets.ModelViewSet):
    serializer_class = CitySerializer
    queryset = City.objects.all()
    pagination_class = None

class ProvinceView(viewsets.ModelViewSet):
    serializer_class = ProvinceSerializer
    queryset = Province.objects.all()
    pagination_class = None

class ListingTypeView(viewsets.ModelViewSet):
    serializer_class = ListingTypeSerializer
    queryset = ListingType.objects.all()
    pagination_class = None

class RoomTypeView(viewsets.ModelViewSet):
    serializer_class = RoomTypeSerializer
    queryset = RoomType.objects.all()
    pagination_class = None

class AmenitiesView(viewsets.ModelViewSet):
    serializer_class = AmenitiesSerializer
    queryset = Amenities.objects.all()
    pagination_class = None

class GalleryView(viewsets.ModelViewSet):
    serializer_class = GallerySerializer
    queryset = Gallery.objects.all()
    pagination_class = None
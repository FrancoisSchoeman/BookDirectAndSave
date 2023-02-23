from email.policy import default
from django.db import models
from django.utils.text import slugify
from django.contrib.postgres.fields import DateRangeField
from django.conf import settings


# Create your models here.
class Listing(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    description= models.TextField(default="No Description", null=True, blank=True)
    bedrooms = models.IntegerField(default=1, null=True, blank=True)
    bathrooms = models.IntegerField(default=1, null=True, blank=True)
    guests = models.IntegerField(default=1, null=True, blank=True)
    ical_link = models.URLField(default="", null=True, blank=True)
    separate_rooms = models.ManyToManyField("SeparateRoom", blank=True)
    published_date = models.DateField(auto_now_add=True, null=True, blank=True)
    check_in = models.TimeField(default="14:00:00", null=True, blank=True)
    check_out = models.TimeField(default="10:00:00", null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    latitude = models.FloatField(default=-34.36395675807039, null=True, blank=True)
    longitude = models.FloatField(default=21.43102905736344, null=True, blank=True)
    city = models.ForeignKey('City', default='None', on_delete=models.SET_DEFAULT, null=True, blank=True)
    province = models.ForeignKey('Province', default='None', on_delete=models.SET_DEFAULT, null=True, blank=True)
    listing_type = models.ForeignKey('ListingType', default='None', on_delete=models.SET_DEFAULT, null=True, blank=True)
    room_type = models.ForeignKey('RoomType', default='None', on_delete=models.SET_DEFAULT, null=True, blank=True)
    amenities = models.ManyToManyField('Amenities')
    gallery = models.ManyToManyField('Gallery')
    url = models.SlugField(default="", null=True, blank=True)
    instant_booking = models.BooleanField(default=False, null=True, blank=True)
    price = models.FloatField(default=0)
    is_price_per_unit = models.BooleanField(default=False, null=True, blank=True)
    cleaning_fee = models.FloatField(default=0, null=True, blank=True)
    security_deposit = models.FloatField(default=0, null=True, blank=True)
    video = models.URLField(default="", null=True, blank=True)
    booked_dates = models.ManyToManyField('BookedDates', blank=True)
    host = models.ForeignKey('users.User', on_delete=models.CASCADE, default=1)
    is_published = models.BooleanField(default=False)
    client_email = models.EmailField(default="", null=True, blank=True)


    def save(self, *args, **kwargs):
        super(Listing, self).save(*args, **kwargs)
        if not self.url:
            self.url = f"{slugify(self.title)}-{str(self.id)}"
            self.save()


    def __str__(self) -> str:
        return self.title


class SeparateRoom(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    price = models.FloatField(default=0)
    description= models.TextField(default="No Description", null=True, blank=True)
    bedrooms = models.IntegerField(default=1, null=True, blank=True)
    bathrooms = models.IntegerField(default=1, null=True, blank=True)
    guests = models.IntegerField(default=1, null=True, blank=True)
    ical_link = models.URLField(default="", null=True, blank=True)
    gallery = models.ManyToManyField('Gallery')
    url = models.SlugField(default="", null=True, blank=True)
    amenities = models.ManyToManyField('Amenities')
    booked_dates = models.ManyToManyField('BookedDates', blank=True)


    def __str__(self) -> str:
        return self.title



class City(models.Model):
    city = models.CharField(max_length=255, default="None", null=True, blank=True)

    def __str__(self) -> str:
        return self.city

class Province(models.Model):
    province = models.CharField(max_length=255, default="None", null=True, blank=True)

    def __str__(self) -> str:
        return self.province

class ListingType(models.Model):
    listing_type = models.CharField(max_length=255, default="None", null=True, blank=True)

    def __str__(self) -> str:
        return self.listing_type

class RoomType(models.Model):
    room_type = models.CharField(max_length=255, default="None", null=True, blank=True)

    def __str__(self) -> str:
        return self.room_type

class Amenities(models.Model):
    amenities = models.CharField(max_length=255, default="None", null=True, blank=True)

    def __str__(self) -> str:
        return self.amenities

class Gallery(models.Model):
    image = models.ImageField(upload_to='uploads', default='default.jpg')


class BookedDates(models.Model):
    from_date = models.DateField(editable=True, blank=True, null=True)
    to_date = models.DateField(editable=True, blank=True, null=True)
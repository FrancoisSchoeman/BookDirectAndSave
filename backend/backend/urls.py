"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

from rest_framework import routers
from listings import views as listing_views
from users import views as user_views
from emails import views as email_views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


router = routers.DefaultRouter()
router.register(r'recent-listings', listing_views.RecentListingsView, 'recent-listing')
router.register(r'listings', listing_views.ListingView, 'listing')
router.register(r'separate-rooms', listing_views.SeparateRoomView, 'separate-room')
router.register(r'cities', listing_views.CityView, 'city')
router.register(r'provinces', listing_views.ProvinceView, 'province')
router.register(r'listing-types', listing_views.ListingTypeView, 'listing-type')
router.register(r'room-types', listing_views.RoomTypeView, 'room-type')
router.register(r'amenities', listing_views.AmenitiesView, 'amenity')
router.register(r'galleries', listing_views.GalleryView, 'gallery')

router.register(r'users', user_views.UserView, 'user')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/contact', email_views.ContactView.as_view(), name='contact'),
    path('api/booking-contact', email_views.BookingContactView.as_view(), name='booking-contact'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/auth/', include('users.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

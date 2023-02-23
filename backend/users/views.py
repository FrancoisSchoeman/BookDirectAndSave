from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated

from rest_framework.permissions import AllowAny
from .serializers import MyTokenObtainPairSerializer, RegisterSerializer
from .models import User
from rest_framework import generics
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView

# Create your views here.
from .serializers import UserSerializer
from rest_framework import viewsets
from .models import User

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    permission_classes = [IsAuthenticated]

# Log In View
class MyObtainTokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer



# Register View
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


# Current User View
class CurrentUserView(generics.CreateAPIView):
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

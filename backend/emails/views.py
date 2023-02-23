from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .send_emails import send_email, send_booking_email

class ContactView(APIView):
    def post(self, request, format=None):
        name = request.data['name']
        phone = request.data['phone']
        email = request.data['email']
        subject = request.data['subject']
        message = request.data['message']
        send_email(name, phone, email, subject, message)
        return Response({'success': 'Email sent successfully!'})


class BookingContactView(APIView):
    def post(self, request, format=None):
        name = request.data['name']
        phone = request.data['phone']
        email = request.data['email']
        client_email = request.data['client-email']
        arrival_date = request.data['arrival-date']
        departure_date = request.data['departure-date']
        subject = request.data['subject']
        message = request.data['message']
        send_email(name, phone, email, arrival_date, departure_date, subject, message)
        return Response({'success': 'Email sent successfully!'})

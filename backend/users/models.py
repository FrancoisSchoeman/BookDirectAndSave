from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    phone_number = models.CharField(max_length=10, blank=True, null=True)
    listings = models.ManyToManyField('listings.Listing')
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    bank_account_number = models.CharField(max_length=255, blank=True, null=True)
    bank_account_name = models.CharField(max_length=255, blank=True, null=True)
    bank_name = models.CharField(max_length=255, blank=True, null=True)
    bank_branch_code = models.CharField(max_length=255, blank=True, null=True)
    bank_branch_name = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self) -> str:
        return self.username
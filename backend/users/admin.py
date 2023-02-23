from django.contrib import admin

# Register your models here.
from .models import User

class UserAdmin(admin.ModelAdmin):
    # list_display = [field.name for field in User._meta.get_fields()]
    pass

admin.site.register(User, UserAdmin)

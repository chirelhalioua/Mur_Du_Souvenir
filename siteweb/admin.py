from django.contrib import admin
from .models import CustomUser, Synagogue, Family

admin.site.register(CustomUser)
admin.site.register(Synagogue)
admin.site.register(Family)
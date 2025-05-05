from django.contrib.auth.models import AbstractUser
from django.db import models

class Synagogue(models.Model):
    name = models.CharField(max_length=200)
    address = models.TextField()
    phone = models.CharField(max_length=15)

class Family(models.Model):
    name = models.CharField(max_length=200)
    address = models.TextField()
    phone = models.CharField(max_length=15)

class CustomUser(AbstractUser):
    USER_TYPE_CHOICES = (
        ('synagogue', 'Synagogue'),
        ('family', 'Famille'),
    )
    ROLE_CHOICES = (
        ('admin', 'Administrateur'),
        ('user', 'Utilisateur'),
    )
    user_type = models.CharField(max_length=10, choices=USER_TYPE_CHOICES)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='user')
    synagogue = models.ForeignKey(Synagogue, null=True, blank=True, on_delete=models.SET_NULL)
    family = models.ForeignKey(Family, null=True, blank=True, on_delete=models.SET_NULL)

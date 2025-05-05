from django.urls import path
from . import views

app_name = 'siteweb'

urlpatterns = [
    path('', views.home_view, name='home'),
    path('contact/', views.contact, name='contact'),
    path('auth/', views.auth_view, name='auth'),
    path('profile/', views.profile_view, name='profile'),
    path('logout/', views.logout_view, name='logout'),
]
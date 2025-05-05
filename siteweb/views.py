from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm
from .models import CustomUser
from .forms import UnifiedRegistrationForm

def home_view(request):
    print(f"Home view called, User: {request.user}, Authenticated: {request.user.is_authenticated}")
    return render(request, 'home.html')

def contact(request):
    return render(request, 'contact.html')

def auth_view(request):
    login_form = AuthenticationForm()
    register_form = UnifiedRegistrationForm()

    if request.method == 'POST':
        if 'login' in request.POST:
            login_form = AuthenticationForm(request, data=request.POST)
            if login_form.is_valid():
                user = login_form.get_user()
                login(request, user)
                return redirect('siteweb:profile')  # Redirige vers la page de profil
        elif 'register' in request.POST:
            register_form = UnifiedRegistrationForm(request.POST)
            if register_form.is_valid():
                user = register_form.save()
                login(request, user)
                return redirect('siteweb:profile')  # Redirige vers la page de profil

    return render(request, 'auth.html', {
        'login_form': login_form,
        'register_form': register_form,
    })

@login_required
def profile_view(request):
    return render(request, 'profile.html', {'user': request.user})

def logout_view(request):
    logout(request)
    return redirect('siteweb:home')
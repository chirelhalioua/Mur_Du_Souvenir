from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import CustomUser, Synagogue, Family

class UnifiedRegistrationForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    user_type = forms.ChoiceField(choices=CustomUser.USER_TYPE_CHOICES)
    # Champs pour créer une Family ou Synagogue
    family_name = forms.CharField(max_length=200, required=False)
    family_address = forms.CharField(widget=forms.Textarea, required=False)
    family_phone = forms.CharField(max_length=15, required=False)
    synagogue_name = forms.CharField(max_length=200, required=False)
    synagogue_address = forms.CharField(widget=forms.Textarea, required=False)
    synagogue_phone = forms.CharField(max_length=15, required=False)

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password', 'user_type']

    def clean(self):
        cleaned_data = super().clean()
        user_type = cleaned_data.get('user_type')
        family_name = cleaned_data.get('family_name')
        synagogue_name = cleaned_data.get('synagogue_name')

        if user_type == 'family' and not family_name:
            raise forms.ValidationError("Le nom de la famille est requis pour les utilisateurs de type famille.")
        if user_type == 'synagogue' and not synagogue_name:
            raise forms.ValidationError("Le nom de la synagogue est requis pour les utilisateurs de type synagogue.")

        return cleaned_data

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data['password'])
        if commit:
            user.save()
            # Créer et associer Family ou Synagogue
            if user.user_type == 'family':
                family = Family.objects.create(
                    name=self.cleaned_data['family_name'],
                    address=self.cleaned_data['family_address'],
                    phone=self.cleaned_data['family_phone']
                )
                user.family = family
            elif user.user_type == 'synagogue':
                synagogue = Synagogue.objects.create(
                    name=self.cleaned_data['synagogue_name'],
                    address=self.cleaned_data['synagogue_address'],
                    phone=self.cleaned_data['synagogue_phone']
                )
                user.synagogue = synagogue
            user.save()
        return user
    

class LoginForm(AuthenticationForm):
    class Meta:
        model = CustomUser
        fields = ['username', 'password']
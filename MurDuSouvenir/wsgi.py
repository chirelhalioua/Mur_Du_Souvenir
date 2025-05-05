"""
WSGI config for MurDuSouvenir project.
"""
import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'MurDuSouvenir.settings')

application = get_wsgi_application()
🕯️ Mémoire Partagée
Mémoire Partagée est une plateforme web conçue pour honorer la mémoire des défunts en offrant aux familles et aux communautés religieuses un espace sécurisé pour partager, se souvenir et gérer les hommages.

🌟 À propos du projet
Dans les moments de deuil, il est essentiel de disposer d'un lieu où l'on peut se recueillir, partager des souvenirs et maintenir le lien avec ceux qui nous ont quittés. Ce projet vise à :

- Permettre aux familles de créer des profils commémoratifs pour leurs proches disparus.

- Offrir aux synagogues un espace pour gérer les hommages collectifs et les cérémonies.

- Faciliter la gestion des utilisateurs avec des rôles spécifiques (administrateur, utilisateur).

🛠️ Fonctionnalités principales
- Authentification unifiée : inscription et connexion pour les familles et les synagogues.

- Tableaux de bord personnalisés : interfaces dédiées selon le type d'utilisateur.

- Gestion des utilisateurs : attribution de rôles et gestion des membres par les administrateurs.

- Partage de souvenirs : possibilité de publier des messages, photos et souvenirs en mémoire des défunts.

🚀 Démarrage rapide
Prérequis
Python 3.8+

Django 3.2+

PostgreSQL ou SQLite

Environnement virtuel recommandé

Installation
Clonez le dépôt :

bash
Copier
Modifier
git clone https://github.com/votre-utilisateur/memoire-partagee.git
cd memoire-partagee
Créez et activez un environnement virtuel :

bash
Copier
Modifier
python -m venv env
source env/bin/activate  # Sur Windows : env\Scripts\activate
Installez les dépendances :

bash
Copier
Modifier
pip install -r requirements.txt
Appliquez les migrations :

bash
Copier
Modifier
python manage.py migrate
Lancez le serveur de développement :

bash
Copier
Modifier
python manage.py runserver
🔐 Accès et rôles
Synagogue : accès au tableau de bord pour gérer les hommages collectifs et les membres de la communauté.

Famille : création et gestion de profils commémoratifs pour les proches disparus.

Administrateur : gestion des utilisateurs et des permissions au sein de la synagogue ou de la famille.

📁 Structure du projet
siteweb/ : application principale contenant les vues, modèles et formulaires.

templates/ : fichiers HTML pour les différentes pages du site.

static/ : fichiers statiques (CSS, JS, images).

manage.py : outil de gestion du projet Django.

🤝 Contribuer
Les contributions sont les bienvenues pour améliorer cette plateforme dédiée au souvenir. Pour contribuer :

Forkez le projet.

Créez une branche pour votre fonctionnalité (git checkout -b nouvelle-fonctionnalite).

Commitez vos modifications (git commit -m 'Ajout d'une nouvelle fonctionnalité').

Poussez la branche (git push origin nouvelle-fonctionnalite).

Ouvrez une Pull Request.

📜 Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d'informations.

🙏 Remerciements
Nous exprimons notre gratitude à toutes les familles et communautés qui nous ont inspirés dans la création de cette plateforme. Que cette initiative contribue à préserver la mémoire de ceux qui nous ont quittés.

Si vous souhaitez personnaliser davantage ce README.md ou ajouter des sections spécifiques, n'hésitez pas à me le faire savoir.

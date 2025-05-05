# 🕊️ Mémoire Partagée

Mémoire Partagée est une plateforme web conçue pour honorer la mémoire des défunts en offrant aux familles et aux communautés religieuses un espace sécurisé pour partager, se souvenir et gérer les hommages.

## 🌟 À propos du projet

Dans les moments de deuil, il est essentiel de disposer d'un lieu où l'on peut se recueillir, partager des souvenirs et maintenir le lien avec ceux qui nous ont quittés. Ce projet vise à :

- Permettre aux familles de créer des profils commémoratifs pour leurs proches disparus.
- Offrir aux synagogues un espace pour gérer les hommages collectifs et les cérémonies.
- Faciliter la gestion des utilisateurs avec des rôles spécifiques (administrateur, utilisateur).

## 🛠️ Fonctionnalités principales

- **Authentification unifiée** : Inscription et connexion pour les familles et les synagogues.
- **Tableaux de bord personnalisés** : Interfaces dédiées selon le type d'utilisateur.
- **Gestion des utilisateurs** : Attribution de rôles et gestion des membres par les administrateurs.
- **Partage de souvenirs** : Possibilité de publier des messages, photos et souvenirs en mémoire des défunts.

## 🚀 Démarrage rapide

### Prérequis

- Python 3.8+
- Django 3.2+
- PostgreSQL ou SQLite
- Environnement virtuel recommandé

### Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/memoire-partagee.git
   cd memoire-partagee
   ```

2. Créez et activez un environnement virtuel :
   ```bash
   python -m venv env
   source env/bin/activate  # Sur Windows : env\Scripts\activate
   ```

3. Installez les dépendances :
   ```bash
   pip install -r requirements.txt
   ```

4. Appliquez les migrations :
   ```bash
   python manage.py migrate
   ```

5. Lancez le serveur de développement :
   ```bash
   python manage.py runserver
   ```

## 🔐 Accès et rôles

- **Synagogue** : Accès au tableau de bord pour gérer les hommages collectifs et les membres de la communauté.
- **Famille** : Création et gestion de profils commémoratifs pour les proches disparus.
- **Administrateur** : Gestion des utilisateurs et des permissions au sein de la synagogue ou de la famille.

## 📁 Structure du projet

- `siteweb/` : Application principale contenant les vues, modèles et formulaires.
- `templates/` : Fichiers HTML pour les différentes pages du site.
- `static/` : Fichiers statiques (CSS, JS, images).
- `manage.py` : Outil de gestion du projet Django.

## 🤝 Contribuer

Les contributions sont les bienvenues pour améliorer cette plateforme dédiée au souvenir. Pour contribuer :

1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité (`git checkout -b nouvelle-fonctionnalite`).
3. Commitez vos modifications (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`).
4. Poussez la branche (`git push origin nouvelle-fonctionnalite`).
5. Ouvrez une Pull Request.

## 📜 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.

## 🙏 Remerciements

Nous exprimons notre gratitude à toutes les familles et communautés qui nous ont inspirés dans la création de cette plateforme. Que cette initiative contribue à préserver la mémoire de ceux qui nous ont quittés.
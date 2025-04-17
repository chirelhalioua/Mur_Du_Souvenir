const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir les fichiers statiques depuis le dossier src
app.use(express.static('public'));

// Définir EJS comme moteur de templates
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route pour la page d'authentification
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'login.html'));
});

// Route pour la page de gestion synagogue
app.get('/synagogue', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'synagogue.html'));
});

// Route pour la page de gestion famille
app.get('/famille', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'famille.html'));
});


// Route pour la page de contact
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'contact.html'));
});

// Route pour la page de Politique de confidentialité
app.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'privacy.html'));
});

// Route pour la page de Conditions d'utilisation
app.get('/conditions_utilisation', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'conditions.html'));
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
}); 
// Fonction pour inclure un composant HTML
async function includeComponent(componentPath, targetElement) {
  try {
    const response = await fetch(componentPath);
    const html = await response.text();
    document.querySelector(targetElement).innerHTML = html;
  } catch (error) {
    console.error(`Erreur lors du chargement du composant ${componentPath}:`, error);
  }
}

// Fonction pour créer la navbar
function createNavbar() {
  const navbar = `
    <nav class="navbar">
      <div class="navbar-brand">
        <a href="/" class="logo">
          <i class="fas fa-monument"></i>
          Mur du Souvenir
        </a>
      </div>
      <ul class="nav-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="login.html" class="button">Connexion/Inscription</a></li>
      </ul>
    </nav>
  `;
  return navbar;
}

// Fonction pour créer le footer
function createFooter() {
  const footer = `
    <footer>
      <div class="footer-content">
        <div class="footer-section">
          <h3>À Propos</h3>
          <p>Le Mur du Souvenir est une plateforme dédiée à la préservation de la mémoire de vos proches disparus.</p>
        </div>
        <div class="footer-section">
          <h3>Liens Utiles</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Politique de Confidentialité</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><i class="fas fa-envelope"></i> contact@murdusouvenir.fr</li>
          </ul>
        </div>
      </div>
      <div class="footer-separator"></div>
      <div class="copyright">
        <p>&copy; ${new Date().getFullYear()} Mur du Souvenir. Tous droits réservés.</p>
      </div>
    </footer>
  `;
  return footer;
}

// Fonction pour initialiser les composants
function initComponents() {
  // Ajouter la navbar
  const header = document.createElement('header');
  header.innerHTML = createNavbar();
  document.body.insertBefore(header, document.body.firstChild);

  // Ajouter le footer
  const footer = document.createElement('footer');
  footer.innerHTML = createFooter();
  document.body.appendChild(footer);

  // Ajuster le margin-top du contenu principal pour la navbar fixe
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.style.marginTop = '60px';
  }
}

// Initialiser les composants lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', initComponents);

// Ajout du menu hamburger
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.createElement('button');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;

  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');

  // Insérer le bouton hamburger avant les liens de navigation
  navbar.insertBefore(menuToggle, navLinks);

  // Gérer le clic sur le bouton hamburger
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Fermer le menu quand on clique sur un lien
  navLinks.addEventListener('click', function() {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
  });
}); 
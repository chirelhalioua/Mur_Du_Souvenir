function createNavbar() {
  console.log('window.isAuthenticated:', window.isAuthenticated);

  const isAuthenticated = String(window.isAuthenticated).toLowerCase() === 'true';
  console.log('isAuthenticated:', isAuthenticated);

  return `
    <nav class="navbar" role="navigation" aria-label="Navigation principale">
      <div class="navbar-brand">
        <a href="${window.urls.home}" class="logo" aria-label="Retour à l'accueil">
          <i class="fas fa-monument"></i> Mur du Souvenir
        </a>
      </div>
      <button class="menu-toggle" aria-label="Ouvrir le menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" role="menu">
        <li><a href="${window.urls.home}" role="menuitem">Accueil</a></li>
        <li><a href="${window.urls.contact}" role="menuitem">Contact</a></li>
        ${
          isAuthenticated
            ? 
            `
              <li><a href="${window.urls.logout}" class="button" role="menuitem">Déconnexion</a></li>
            `
            : `<li><a href="${window.urls.auth}" class="button" role="menuitem">Connexion/Inscription</a></li>`
        }
      </ul>
    </nav>
  `;
}

function createFooter() {
  return `
    <footer role="contentinfo">
      <div class="footer-content">
        <div class="footer-section" aria-labelledby="about-heading">
          <h3 id="about-heading">À Propos</h3>
          <p>Le Mur du Souvenir est une plateforme dédiée à la préservation de la mémoire de vos proches disparus.</p>
        </div>
        <div class="footer-section" aria-labelledby="links-heading">
          <h3 id="links-heading">Liens Utiles</h3>
          <ul role="list">
            <li><a href="${window.urls.home}" role="listitem">Accueil</a></li>
            <li><a href="${window.urls.contact}" role="listitem">Contact</a></li>
            <li><a href="/privacy.html" role="listitem">Politique de Confidentialité</a></li>
          </ul>
        </div>
        <div class="footer-section" aria-labelledby="contact-heading">
          <h3 id="contact-heading">Contact</h3>
          <ul role="list">
            <li role="listitem"><i class="fas fa-envelope"></i> <a href="mailto:contact@murdusouvenir.fr">contact@murdusouvenir.fr</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-separator"></div>
      <div class="copyright">
        <p>© ${new Date().getFullYear()} Mur du Souvenir. Tous droits réservés.</p>
      </div>
    </footer>
  `;
}

function initComponents() {
  const header = document.createElement('header');
  header.innerHTML = createNavbar();
  document.body.insertBefore(header, document.body.firstChild);

  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = createFooter();
  } else {
    const footer = document.createElement('footer');
    footer.innerHTML = createFooter();
    document.body.appendChild(footer);
  }

  const mainContent = document.querySelector('main');
  const navbar = document.querySelector('.navbar');
  if (mainContent && navbar) {
    const navbarHeight = navbar.offsetHeight;
    mainContent.style.marginTop = `${navbarHeight}px`;
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      const isExpanded = navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
      menuToggle.setAttribute('aria-label', isExpanded ? 'Fermer le menu' : 'Ouvrir le menu');
    });

    navLinks.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
      }
    });

    document.addEventListener('click', function (event) {
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', initComponents);

import './bootstrap';

// resources/js/menu.js

// Sélection des éléments
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

// État du menu (ouvert ou fermé)
let isMenuOpen = false;

// Fonction pour ouvrir/fermer le menu
menuToggle.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen; // Inverse l'état du menu
    if (isMenuOpen) {
        mobileMenu.classList.remove('max-h-0', 'opacity-0', 'invisible', 'overflow-hidden');
        mobileMenu.classList.add('max-h-screen', 'opacity-100', 'visible');
    } else {
        mobileMenu.classList.add('max-h-0', 'opacity-0', 'invisible', 'overflow-hidden');
        mobileMenu.classList.remove('max-h-screen', 'opacity-100', 'visible');
    }
});

// Optionnel : Fermer le menu si on clique ailleurs
document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        isMenuOpen = false;
        mobileMenu.classList.add('max-h-0', 'opacity-0', 'invisible', 'overflow-hidden');
        mobileMenu.classList.remove('max-h-screen', 'opacity-100', 'visible');
    }
});

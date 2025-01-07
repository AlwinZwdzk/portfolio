import './bootstrap';
import pp from '../images/pp.jpg';
import portfolio1 from '../images/portfolio1.png';
import portfolio2 from '../images/portfolio2.png';
import portfolio3 from '../images/portfolio3.png';
import meditrip1 from '../images/meditrip1.png';
import meditrip2 from '../images/meditrip2.png';
import meditrip3 from '../images/meditrip3.png';
import meditrip4 from '../images/meditrip4.png';
import bomberman1 from '../images/bomberman1.png';
import bomberman2 from '../images/bomberman2.png';
import bomberman3 from '../images/bomberman3.png';
import justePrix1 from '../images/justeprix1.png';
import justePrix2 from '../images/justeprix2.png';
import justePrix3 from '../images/justeprix3.png';

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

document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const modal = document.getElementById('project-modal');
    const closeModal = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const carouselImages = document.getElementById('carousel-images');
    const prevSlide = document.getElementById('prev-slide');
    const nextSlide = document.getElementById('next-slide');

    // Sample project data
    const projects = [
        {
            title: 'Portfolio',
            description: 'J\'ai créé ce portfolio pour présenter mes projets et compétences. ' +
                'Je l\'ai développé à l\'aide de Laravel et Tailwind CSS. '+
                'J\'ai utilisé Laravel afin de me perfectionner ' +
                'et montrer mes compétences en back-end. J\'ai notamment géré les droits et de l\'authentification et créé un CRUD.',
            images: [
                portfolio1,
                portfolio2,
                portfolio3,
            ],
        },
        {
            title: 'Méditrip',
            description: 'Ce projet Laravel a été réalisé lors du Marathon du Web, un événement où nous devions créer un site web en 48h sans pause. ' +
                'Notre équipe informatique de trois étudiants était accompagnée de quatre étudiants de la filière MMI pour faire le design du site. '+
                'Méditrip est un site qui répertorie les voyages en Méditerranée effectués par les utilisateurs de l\'application. ' +
                'Il est aussi possible de créer, modifier, supprimer un voyage en ajoutant, modifiant ou supprimant des étapes.',
            images: [
                meditrip1,
                meditrip2,
                meditrip3,
                meditrip4,
            ],
        },
        {
            title: 'Bomberman',
            description: 'Nous avons reproduit ce jeu en Java avec JavaFX et Gradle en groupe de 4 étudiants. ' +
                'La programmation orientée objet et et les patrons de conception ont été utilisé pour le développer le projet.',
            images: [
                bomberman1,
                bomberman2,
                bomberman3,
            ],
        },
        {
            title: 'Le juste prix',
            description: 'Nous avons reproduit ce jeu en Java avec JavaFX et Gradle en groupe de 4 étudiants. ' +
                'La programmation orientée objet et et les patrons de conception ont été utilisé pour le développer le projet.',
            images: [
                justePrix1,
                justePrix2,
                justePrix3,
            ],
        },
    ];

    // Open modal and populate data
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            const project = projects[index];
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;

            // Populate carousel images
            carouselImages.innerHTML = '';
            project.images.forEach((src) => {
                const img = document.createElement('img');
                img.src = src;
                img.className = 'w-64 h-40 object-cover rounded-lg';
                carouselImages.appendChild(img);
            });

            modal.classList.remove('hidden');
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Carousel navigation
    let currentIndex = 0;
    const scrollCarousel = (direction) => {
        const images = carouselImages.children;
        if (direction === 'prev') {
            currentIndex = Math.max(currentIndex - 1, 0);
        } else {
            currentIndex = Math.min(currentIndex + 1, images.length - 1);
        }
        images[currentIndex].scrollIntoView({ behavior: 'smooth', inline: 'center' });
    };

    prevSlide.addEventListener('click', () => scrollCarousel('prev'));
    nextSlide.addEventListener('click', () => scrollCarousel('next'));
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('projects-button');
    const tooltip = document.getElementById('tooltip');

    if (tooltip) { // Tooltip existe uniquement si l'utilisateur n'est pas connecté
        button.addEventListener('mouseover', () => {
            tooltip.style.opacity = '1';
            tooltip.style.pointerEvents = 'auto';
        });

        button.addEventListener('mouseout', () => {
            tooltip.style.opacity = '0';
            tooltip.style.pointerEvents = 'none';
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    function updateStars(rating) {
        // Met à jour la valeur du champ caché avec la note sélectionnée
        document.getElementById('note').value = rating;

        // Récupère toutes les étoiles
        const stars = document.querySelectorAll('.star-icon');

        // Parcourt chaque étoile et change sa couleur
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.remove('text-gray-300'); // Supprime la couleur grise
                star.classList.add('text-yellow-400'); // Ajoute la couleur jaune
            } else {
                star.classList.remove('text-yellow-400'); // Supprime la couleur jaune
                star.classList.add('text-gray-300'); // Ajoute la couleur grise
            }
        });
    }

    // Ajoute les écouteurs d'événements aux boutons d'étoiles
    document.querySelectorAll('.star-button').forEach(button => {
        button.addEventListener('click', () => {
            const rating = button.getAttribute('data-value');
            updateStars(rating);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('avis-button');
    const popup = document.getElementById('popup');

    if (popup) {
        button.addEventListener('mouseover', () => {
            popup.style.opacity = '1';
            popup.style.pointerEvents = 'auto';
        });

        button.addEventListener('mouseout', () => {
            popup.style.opacity = '0';
            popup.style.pointerEvents = 'none';
        });
    }
});

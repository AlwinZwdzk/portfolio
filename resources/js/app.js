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
import justePrix4 from '../images/justeprix4.png';

// resources/js/menu.js

// Sélection des éléments
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

// État du menu (ouvert ou fermé)
let isMenuOpen = false;

// Fonction pour ouvrir/fermer le menu
menuToggle.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        mobileMenu.classList.remove('max-h-0', 'opacity-0', 'invisible', 'overflow-hidden');
        mobileMenu.classList.add('max-h-screen', 'opacity-100', 'visible');
    } else {
        mobileMenu.classList.add('max-h-0', 'opacity-0', 'invisible', 'overflow-hidden');
        mobileMenu.classList.remove('max-h-screen', 'opacity-100', 'visible');
    }
});

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu.classList.add('max-h-0', 'opacity-0', 'invisible', 'overflow-hidden');
        mobileMenu.classList.remove('max-h-screen', 'opacity-100', 'visible');
    });
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
                'Je l\'ai développé à l\'aide de Laravel et de Tailwind CSS. '+
                'J\'ai utilisé le framework Laravel afin de me perfectionner ' +
                'et montrer mes compétences en PHP. J\'ai notamment créé un CRUD pour gérer les avis et j\'ai aussi utilisé l\'authentification pour gérer les droits liés aux utilisateurs.',
            images: [
                portfolio1,
                portfolio2,
                portfolio3,
            ],
        },
        {
            title: 'Méditrip',
            description: 'Ce projet a été réalisé en PHP (Laravel) lors du Marathon du Web, un événement où nous devions créer un site web complet en 48h et sans pause. ' +
                'Notre équipe informatique de trois étudiants était accompagnée de quatre étudiants de la filière MMI pour s\'occuper du design du site. '+
                'Méditrip est un site qui répertorie les voyages en Méditerranée, effectués par les utilisateurs de l\'application. ' +
                'Chaque utilisateur peut créer, modifier, supprimer un voyage en ajoutant, modifiant ou supprimant des étapes. Il peut aussi liker le voyage d\'un autre utilisateur.',
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
                'Ce projet nous a permis de bien nous former sur les patrons de conception. ' +
                'Bomberman est un jeu où les joueurs placent des bombes pour détruire des obstacles et éliminer des ennemis. '+
                'Le but est de survivre tout en tuant les ennemis que nous avons programmés. '+
                'Des bonus permettent d\'améliorer les capacités du joueur, '+
                'comme le rendre invincible pendant un court laps de temps, récupérer une vie, ou '+
                'encore obtenir une bombe supplémentaire.',
            images: [
                bomberman1,
                bomberman2,
                bomberman3,
            ],
        },
        {
            title: 'Le juste prix',
            description: 'En groupe de trois étudiants, nous avons reproduit le concept de l\'émission "Le Juste Prix" pour recréer le jeu sur un site web en Python Flask. '+
                'Le but du jeu est donc de trouver le prix d\'un objet disponible sur amazon avec le moins de tentative possible. '+
                'Il y a deux modes de difficulté : "facile" et "difficile". Nous avons ajouté un mode "multijoueur" où le but est d\'être celui qui trouve le '+
                'prix le plus proche de l\'article de base. Le site possède un classement qui répertorie les 5 meilleurs joueurs de chaque mode. Un utilisateur peut '+
                'ajouter un article grâce au lien amazon de celui-ci. '+
                'Nous obtenons les informations d\'un article à l\'aide d\'une API (ws.chez-wam.info)',
            images: [
                justePrix1,
                justePrix2,
                justePrix3,
                justePrix4,
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

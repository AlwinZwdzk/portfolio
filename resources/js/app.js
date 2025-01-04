import './bootstrap';
import pp from '../images/pp.jpg';

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
            title: 'Système de gestion de processus',
            description: 'Un projet avancé pour gérer les processus...',
            images: [
                pp,
                pp,
                pp,
            ],
        },
        {
            title: 'Application mobile de suivi de fitness',
            description: 'Une application mobile complète pour gérer vos entraînements.',
            images: [
                'resources/images/fitness1.jpg',
                'resources/images/fitness2.jpg',
                'resources/images/fitness3.jpg',
            ],
        },
        {
            title: 'Site de portfolio',
            description: 'Un portfolio personnel interactif et moderne.',
            images: [
                'resources/images/portfolio1.jpg',
                'resources/images/portfolio2.jpg',
                'resources/images/portfolio3.jpg',
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

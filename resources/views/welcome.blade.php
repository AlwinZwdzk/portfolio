<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta charset="UTF-8">
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="icon" type="image/png" href="{{Vite::asset('resources/images/favicon.png')}}">
        @section("head")
            @vite(['resources/css/app.css', 'resources/js/app.js', 'resources/js/bootstrap.js'])
        @show
        <style>
            .main-container {
                padding-top: 80px; /* Ajoute un espace en haut pour compenser la hauteur du menu */
            }

            section {
                min-height: 100vh; /* Prend au moins toute la hauteur de la fenêtre */
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .section-box {
                width: 80%; /* Largeur de la boîte */
                max-width: 1200px; /* Largeur maximale de la boîte */
                background-color: #ffffff; /* Couleur de fond de la boîte */
                padding: 20px;
                margin: 20px; /* Marge autour de la boîte */
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre pour l'effet de boîte */
                border-radius: 8px; /* Coins arrondis */
            }
        </style>
    </head>

    <body>
        <div class="min-h-screen bg-background main-container">
            <x-menu></x-menu>

            <section id="about" class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-6 sm:px-8">
                    <h2 class="text-3xl font-semibold text-center text-black">À propos de moi</h2>
                    <p class="mt-4 text-lg text-gray-600 text-center">
                        Je suis un étudiant en informatique passionné par le développement logiciel et la création de solutions innovantes.
                    </p>
                    <!-- Ajoute ici une image ou d'autres informations sur toi -->
                    <div class="mt-10 flex justify-center">
                        <img src="{{Vite::asset('resources/images/about-image.jpg')}}" alt="Image de moi" class="rounded-full w-40 h-40 object-cover">
                    </div>
                </div>
            </section>


            <section id="trainings" class="py-20 bg-gray-100">
                <div class="max-w-7xl mx-auto px-6 sm:px-8">
                    <h2 class="text-3xl font-semibold text-center text-black">Formations</h2>
                    <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <!-- Carte formation 1 -->
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-semibold text-primary">Bac +2 en Informatique</h3>
                            <p class="mt-2 text-gray-600">J'ai appris les bases du développement et des technologies web ainsi que des concepts de programmation avancée.</p>
                        </div>
                        <!-- Carte formation 2 -->
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-semibold text-primary">Certification Java</h3>
                            <p class="mt-2 text-gray-600">Certification sur les technologies Java et son écosystème pour renforcer mes compétences en développement logiciel.</p>
                        </div>
                        <!-- Carte formation 3 -->
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-semibold text-primary">Cours de Python et Data Science</h3>
                            <p class="mt-2 text-gray-600">Formation pour maîtriser Python et appliquer ses compétences à l'analyse de données et à l'intelligence artificielle.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="projects" class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-6 sm:px-8">
                    <h2 class="text-3xl font-semibold text-center text-black">Projets</h2>
                    <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <!-- Projet 1 -->
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-semibold text-primary">Système de gestion de processus</h3>
                            <p class="mt-2 text-gray-600">Un projet de gestion de processus en Java pour automatiser et surveiller les applications.</p>
                            <a href="#" class="text-blue-500 hover:underline">Voir le projet</a>
                        </div>
                        <!-- Projet 2 -->
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-semibold text-primary">Application mobile de suivi de fitness</h3>
                            <p class="mt-2 text-gray-600">Application pour suivre l'entraînement et les progrès en musculation avec des notifications personnalisées.</p>
                            <a href="#" class="text-blue-500 hover:underline">Voir le projet</a>
                        </div>
                        <!-- Projet 3 -->
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-semibold text-primary">Site de portfolio</h3>
                            <p class="mt-2 text-gray-600">Création d'un site portfolio avec des technologies web modernes pour présenter mes projets et compétences.</p>
                            <a href="#" class="text-blue-500 hover:underline">Voir le projet</a>
                        </div>
                    </div>
                </div>
            </section>


            <section id="contact" class="py-20 bg-gray-100">
                <div class="max-w-7xl mx-auto px-6 sm:px-8">
                    <h2 class="text-3xl font-semibold text-center text-black">Contact</h2>
                    <p class="mt-4 text-lg text-gray-600 text-center">N'hésitez pas à me contacter pour toute question ou collaboration.</p>
                    <div class="mt-10 flex justify-center">
                        <form action="#" method="post" class="w-full max-w-md">
                            <div class="flex flex-col mb-4">
                                <label for="name" class="text-gray-700">Nom</label>
                                <input type="text" id="name" name="name" class="mt-2 p-3 border border-gray-300 rounded-lg" required>
                            </div>
                            <div class="flex flex-col mb-4">
                                <label for="email" class="text-gray-700">Email</label>
                                <input type="email" id="email" name="email" class="mt-2 p-3 border border-gray-300 rounded-lg" required>
                            </div>
                            <div class="flex flex-col mb-4">
                                <label for="message" class="text-gray-700">Message</label>
                                <textarea id="message" name="message" class="mt-2 p-3 border border-gray-300 rounded-lg" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">Envoyer</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>

    </body>
    <footer class="bg-background py-12 mt-0">
        <div class="max-w-7xl mx-auto px-6 sm:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <!-- Section 1: À propos -->
                <div>
                    <h3 class="text-xl font-semibold text-black">À propos</h3>
                    <p class="mt-4 text-gray-600">Je suis un étudiant en informatique passionné par la technologie, l'innovation et la création de solutions logicielles.</p>
                </div>

                <!-- Section 2: Liens utiles -->
                <div>
                    <h3 class="text-xl font-semibold text-black">Liens utiles</h3>
                    <ul class="mt-4 space-y-2">
                        <li><a href="#about" class="text-gray-600 hover:text-primary transition-colors">À propos</a></li>
                        <li><a href="#trainings" class="text-gray-600 hover:text-primary transition-colors">Formations</a></li>
                        <li><a href="#projects" class="text-gray-600 hover:text-primary transition-colors">Projets</a></li>
                        <li><a href="#contact" class="text-gray-600 hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </div>

                <!-- Section 3: Contact -->
                <div>
                    <h3 class="text-xl font-semibold text-black">Contact</h3>
                    <p class="mt-4 text-gray-600">Tu peux me contacter par e-mail ou via mes réseaux sociaux.</p>
                    <ul class="mt-4 space-y-2">
                        <li><a href="mailto:tonemail@example.com" class="text-gray-600 hover:text-primary transition-colors">tonemail@example.com</a></li>
                        <li><a href="tel:+1234567890" class="text-gray-600 hover:text-primary transition-colors">+123 456 7890</a></li>
                    </ul>
                </div>

                <!-- Section 4: Réseaux sociaux -->
                <div>
                    <h3 class="text-xl font-semibold text-black">Réseaux sociaux</h3>
                    <div class="flex mt-4 space-x-6">
                        <a href="#" class="text-gray-600 hover:text-primary transition-colors">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="text-gray-600 hover:text-primary transition-colors">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="text-gray-600 hover:text-primary transition-colors">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" class="text-gray-600 hover:text-primary transition-colors">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Copyright -->
            <div class="mt-12 border-t border-gray-300 pt-6 text-center">
                <p class="text-gray-600 text-sm">© 2024 Ton Nom. Tous droits réservés.</p>
            </div>
        </div>
    </footer>

</html>

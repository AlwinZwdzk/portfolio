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
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div class="space-y-8">
                            <div class="space-y-4">
                                <h1 class="text-5xl font-bold text-black">
                                    John Doe
                                    <span class="block text-primary mt-2">Full Stack Developer</span>
                                </h1>
                                <p class="text-xl text-gray-600">
                                    Passionate about creating beautiful and functional web experiences that make a difference.
                                </p>
                            </div>

                            <div class="space-y-6">
                                <h2 class="text-2xl font-semibold text-black">About Me</h2>
                                <div class="prose text-gray-600 space-y-4">
                                    <p>
                                        With over 5 years of experience in web development, I specialize in building modern, responsive applications
                                        using cutting-edge technologies. My expertise spans both frontend and backend development, with a particular
                                        focus on React and Node.js ecosystems.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="relative flex justify-center">
                            <div class="w-80 h-80 rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="{{Vite::asset('resources/images/pp.jpg')}}"
                                    alt="Profile photo"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="trainings" class="py-20 bg-gray-100">
                <div class="max-w-7xl mx-auto px-6 sm:px-8">
                    <h2 class="text-4xl font-semibold text-center text-black mb-10">Formations</h2>
                    <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <!-- Carte formation 1 -->
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-semibold text-primary mb-4">Bac +2 en Informatique</h3>
                            <p class="mt-2 text-gray-600">J'ai appris les bases du développement et des technologies web ainsi que des concepts de programmation avancée.</p>
                        </div>
                        <!-- Carte formation 2 -->
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-semibold text-primary mb-4">Certification Java</h3>
                            <p class="mt-2 text-gray-600">Certification sur les technologies Java et son écosystème pour renforcer mes compétences en développement logiciel.</p>
                        </div>
                        <!-- Carte formation 3 -->
                        <div class="bg-white p-6 rounded-lg shadow-lg mb-4">
                            <h3 class="text-xl font-semibold text-primary">Cours de Python et Data Science</h3>
                            <p class="mt-2 text-gray-600">Formation pour maîtriser Python et appliquer ses compétences à l'analyse de données et à l'intelligence artificielle.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="projects" class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-6 sm:px-8">
                    <h2 class="text-4xl font-semibold text-center text-black mb-10">Projets</h2>
                    <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <!-- Projet 1 -->
                        <div class="bg-white p-6 rounded-lg shadow-lg mb-4">
                            <h3 class="text-xl font-semibold text-primary">Système de gestion de processus</h3>
                            <p class="mt-2 text-gray-600">Un projet de gestion de processus en Java pour automatiser et surveiller les applications.</p>
                            <a href="#" class="text-blue-500 hover:underline">Voir le projet</a>
                        </div>
                        <!-- Projet 2 -->
                        <div class="bg-white p-6 rounded-lg shadow-lg mb-4">
                            <h3 class="text-xl font-semibold text-primary">Application mobile de suivi de fitness</h3>
                            <p class="mt-2 text-gray-600">Application pour suivre l'entraînement et les progrès en musculation avec des notifications personnalisées.</p>
                            <a href="#" class="text-blue-500 hover:underline">Voir le projet</a>
                        </div>
                        <!-- Projet 3 -->
                        <div class="bg-white p-6 rounded-lg shadow-lg mb-4">
                            <h3 class="text-xl font-semibold text-primary">Site de portfolio</h3>
                            <p class="mt-2 text-gray-600">Création d'un site portfolio avec des technologies web modernes pour présenter mes projets et compétences.</p>
                            <a href="#" class="text-blue-500 hover:underline">Voir le projet</a>
                        </div>
                    </div>
                </div>
            </section>


            <section id="contact" class="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
                <div class="container mx-auto px-6 sm:px-8 lg:px-12">
                    <h2 class="text-4xl font-bold text-center text-gray-800 mb-10">Contactez-moi</h2>
                    <div class="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-2xl relative">
                        <form action="https://getform.io/f/your-getform-endpoint" method="POST" class="space-y-8">
                            <!-- Nom -->
                            <div class="relative">
                                <label for="name" class="absolute -top-3 left-3 bg-white px-2 text-sm text-gray-600">
                                    Nom <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                                    placeholder="Entrez votre nom"
                                    required
                                />
                            </div>

                            <!-- Email -->
                            <div class="relative">
                                <label for="email" class="absolute -top-3 left-3 bg-white px-2 text-sm text-gray-600">
                                    Email <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                                    placeholder="Entrez votre email"
                                    required
                                />
                            </div>

                            <!-- Message -->
                            <div class="relative">
                                <label for="message" class="absolute -top-3 left-3 bg-white px-2 text-sm text-gray-600">
                                    Message <span class="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                                    placeholder="Entrez votre message"
                                    required
                                ></textarea>
                            </div>

                            <!-- Bouton d'envoi -->
                            <div class="text-center">
                                <button
                                    type="submit"
                                    class="px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all"
                                >
                                    Envoyer le message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>

    </body>
    <footer class="bg-background py-12">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <!-- Section Réseaux Sociaux -->
            <div class="flex justify-center space-x-6">
                <a href="https://www.facebook.com" target="_blank">
                    <img src="{{Vite::asset('resources/images/mail.png')}}" alt="Mail" class="h-8 w-8">
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                    <img src="{{Vite::asset('resources/images/linkedin.png')}}" alt="LinkedIn" class="h-8 w-8">
                </a>
                <a href="https://github.com/AlwinZwdzk" target="_blank">
                    <img src="{{Vite::asset('resources/images/github.png')}}" alt="Github" class="h-8 w-8">
                </a>
            </div>

            <!-- Footer bottom -->
            <div class="mt-8 text-center text-gray-600 text-sm">
                © 2025 - Tous droits réservés | Conçu par Zawadzki Alwin
            </div>
        </div>
    </footer>

</html>

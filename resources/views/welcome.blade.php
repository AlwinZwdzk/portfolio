<x-app>
    <section id="about" class="sm:mt-32 my-20 bg-white">
        <div class="max-w-7xl mx-auto px-6 sm:px-8">
            <!-- Profile Section -->
            <div class="flex flex-col items-center mb-12 lg:flex-row lg:justify-between lg:mb-20">
                <!-- Image (First on mobile, second on desktop) -->
                <div class="w-64 h-64 mb-8 lg:w-72 lg:h-72 lg:order-2 lg:mb-0">
                    <div class="rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="{{Vite::asset('resources/images/pp.jpg')}}"
                            alt="Profile photo"
                            class="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <!-- Text Content -->
                <div class="text-center lg:text-left lg:order-1 lg:max-w-xl">
                    <h1 class="text-5xl font-bold text-black mb-4">
                        Alwin Zawadzki
                        <span class="block text-primary mt-2">Développeur junior en informatique</span>
                    </h1>
                    <p class="text-xl text-gray-600 mb-8">
                        Recherche de stage en développement d’application et/ou web
                    </p>
                    <div>
                        <h2 class="text-2xl font-semibold text-black mb-4">À propos</h2>
                        <div class="prose text-gray-600">
                            <p>
                                Il y a environ sept ans, au collège, j'ai fait mes premiers pas dans l'informatique, grâce au logiciel Scratch.
                                Très vite, j'ai su que mon avenir professionnel serait dans ce domaine. J'ai compris que ce qui m'animait,
                                c'est la combinaison de l'aspect logique des mathématiques et le concret de la réalisation d'applications.
                                Aujourd'hui, j'étudie le développement, les bases de données ainsi que les systèmes et réseaux à l'IUT de Lens
                                afin d'obtenir le BUT Informatique.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tech Stack Section -->
            <div class="space-y-12">
                <!-- Languages and Frameworks in 2 columns -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Languages -->
                    <div>
                        <h3 class="text-2xl font-semibold text-black mb-6">Langages</h3>
                        <div class="flex flex-wrap gap-4">
                            <div class="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" class="w-6 h-6" alt="PHP"/>
                                <span class="text-sm text-gray-700">PHP</span>
                            </div>
                            <div class="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" class="w-6 h-6" alt="Java"/>
                                <span class="text-sm text-gray-700">Java</span>
                            </div>
                            <div class="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="w-6 h-6" alt="Python"/>
                                <span class="text-sm text-gray-700">Python</span>
                            </div>
                            <div class="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                                <img src="{{Vite::asset('resources/images/sql.svg')}}" class="w-6 h-6" alt="SQL"/>
                                <span class="text-sm text-gray-700">SQL</span>
                            </div>
                            <div class="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" class="w-6 h-6" alt="Bash"/>
                                <span class="text-sm text-gray-700">Bash</span>
                            </div>
                        </div>
                    </div>

                    <!-- Frameworks -->
                    <div>
                        <h3 class="text-2xl font-semibold text-black mb-6">Frameworks</h3>
                        <div class="flex flex-wrap gap-4">
                            <div class="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                                <img src="{{Vite::asset('resources/images/Laravel.svg')}}" class="w-6 h-6" alt="Laravel"/>
                                <span class="text-sm text-gray-700">Laravel</span>
                            </div>
                            <div class="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" class="w-6 h-6" alt="Flask"/>
                                <span class="text-sm text-gray-700">Flask</span>
                            </div>
                            <div class="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" class="w-6 h-6" alt="JavaFX"/>
                                <span class="text-sm text-gray-700">JavaFX</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tools (Full Width) -->
                <div>
                    <h3 class="text-2xl font-semibold text-black mb-6">Outils</h3>
                    <div class="flex flex-wrap gap-4">
                        <div class="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" class="w-6 h-6" alt="Git"/>
                            <span class="text-sm text-gray-700">Git</span>
                        </div>
                        <div class="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpstorm/phpstorm-original.svg" class="w-6 h-6" alt="PhpStorm"/>
                            <span class="text-sm text-gray-700">PhpStorm</span>
                        </div>
                        <div class="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" class="w-6 h-6" alt="IntelliJ IDEA"/>
                            <span class="text-sm text-gray-700">IDEA</span>
                        </div>
                        <div class="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" class="w-6 h-6" alt="PyCharm"/>
                            <span class="text-sm text-gray-700">PyCharm</span>
                        </div>
                    </div>
                </div>

                <!-- Social Media Links -->
                <div class="flex justify-center gap-6 pt-4">
                    <a href="mailto:alwin.zawadzki@gmail.com" class="hover:opacity-80 transition-opacity">
                        <img src="{{Vite::asset('resources/images/mail.png')}}" alt="Mail" class="h-8 w-8">
                    </a>
                    <a href="https://www.linkedin.com/in/alwin-zawadzki/" target="_blank" class="hover:opacity-80 transition-opacity">
                        <img src="{{Vite::asset('resources/images/linkedin.png')}}" alt="LinkedIn" class="h-8 w-8">
                    </a>
                    <a href="https://github.com/AlwinZwdzk" target="_blank" class="hover:opacity-80 transition-opacity">
                        <img src="{{Vite::asset('resources/images/github.png')}}" alt="Github" class="h-8 w-8">
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section id="trainings" class="py-24 bg-pink-50 relative overflow-hidden">
        <div class="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div class="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div class="max-w-7xl mx-auto px-6 sm:px-8">
            <div class="text-center mb-24">
                <h2 class="text-3xl font-bold text-black mb-4">Formations</h2>
            </div>
            <div class="relative">
                <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
                <div class="space-y-16">
                    @foreach ($trainingsData as $index => $training)
                        <x-training-card :training="$training" :index="$index" />
                    @endforeach
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="py-20 bg-white min-h-screen flex items-center">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 w-full">
            <h2 class="text-4xl font-semibold text-center text-black mb-10">Projets</h2>
            <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Projet 1 -->
                <x-project-card
                    title="Portfolio - Site web"
                    image="{{ Vite::asset('resources/images/portfolio1.png') }}"
                    alt="Portfolio"
                />
                <!-- Projet 2 -->
                <x-project-card
                    title="Méditrip - Site web"
                    image="{{ Vite::asset('resources/images/meditrip1.png') }}"
                    alt="Méditrip"
                />
                <!-- Projet 3 -->
                <x-project-card
                    title="Bomberman - Application Java"
                    image="{{ Vite::asset('resources/images/portfolio1.png') }}"
                    alt="Project 1"
                />
            </div>
            <!-- Bouton pour voir d'autres projets -->
            <div class="mt-12 text-center">
                <a href="{{route('projects')}}" id="projects-button" class="projects-button inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition-all duration-300">
                    Voir d'autres projets
                </a>
                @guest()
                <!-- Pop-up message -->
                <div id="tooltip" class="absolute left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 pointer-events-none transition-opacity duration-300">
                    Une connexion est nécessaire pour accéder à cette fonctionnalité.
                </div>
                @endguest
            </div>
        </div>
    </section>

    <section id="contact" class="py-16 bg-pink-50 relative overflow-hidden">
        <div class="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div class="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
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

</x-app>

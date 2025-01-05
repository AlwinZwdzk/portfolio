<x-app>
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

    <section id="trainings" class="py-24 bg-pink-50 relative overflow-hidden">
        <div class="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div class="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div class="max-w-7xl mx-auto px-6 sm:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-black mb-4">Educational Journey</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    A chronological overview of my academic achievements and professional certifications.
                </p>
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
                <div class="project-card cursor-pointer flex flex-col bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                    <h3 class="text-xl font-semibold text-primary mb-4 flex-grow">
                        Système de gestion de processus
                    </h3>
                    <div class="w-full h-auto aspect-w-16 aspect-h-9">
                        <img src="{{ Vite::asset('resources/images/pp.jpg') }}"
                             alt="Project 1"
                             class="w-full h-full object-cover rounded-lg">
                    </div>
                </div>
                <!-- Projet 2 -->
                <div class="project-card cursor-pointer flex flex-col bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                    <h3 class="text-xl font-semibold text-primary mb-4 flex-grow">
                        Application mobile de suivi de fitness
                    </h3>
                    <div class="w-full h-auto aspect-w-16 aspect-h-9">
                        <img src="{{ Vite::asset('resources/images/pp.jpg') }}"
                             alt="Project 2"
                             class="w-full h-full object-cover rounded-lg">
                    </div>
                </div>
                <!-- Projet 3 -->
                <div class="project-card cursor-pointer flex flex-col bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                    <h3 class="text-xl font-semibold text-primary mb-4 flex-grow">
                        Site de portfolio
                    </h3>
                    <div class="w-full h-auto aspect-w-16 aspect-h-9">
                        <img src="{{ Vite::asset('resources/images/pp.jpg') }}"
                             alt="Project 3"
                             class="w-full h-full object-cover rounded-lg">
                    </div>
                </div>
            </div>
            <!-- Bouton Ajouter un projet -->
            <div class="mt-12 text-center">
                <a href="{{route('projets')}}" id="projects-button" class="projects-button inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition-all duration-300">
                    Voir d'autres projets
                </a>

                <!-- Pop-up message -->
                <div id="tooltip" class="absolute left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 pointer-events-none transition-opacity duration-300">
                    Une connexion est nécessaire pour accéder à cette fonctionnalité.
                </div>

            </div>
        </div>
    </section>

    <!-- Modal -->
    <div id="project-modal" class="fixed inset-0 z-50 hidden bg-black bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-lg shadow-lg max-w-4xl w-full relative">
            <!-- Close Button -->
            <button id="close-modal" class="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
                ✕
            </button>

            <!-- Modal Content -->
            <div class="p-6">
                <h2 id="modal-title" class="text-2xl font-bold text-black mb-4"></h2>
                <p id="modal-description" class="text-gray-600 mb-6"></p>

                <!-- Carrousel -->
                <div id="modal-carousel" class="relative">
                    <div id="carousel-images" class="flex overflow-x-scroll gap-4">
                        <!-- Images will be injected dynamically -->
                    </div>
                    <!-- Navigation Buttons -->
                    <button id="prev-slide" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow">←</button>
                    <button id="next-slide" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow">→</button>
                </div>
            </div>
        </div>
    </div>

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

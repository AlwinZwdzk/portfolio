<x-app>
    <section id="projects" class="py-20 bg-white min-h-screen flex items-center">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 w-full">
            <h2 class="text-4xl font-semibold text-center text-black mb-10">Projets</h2>
            <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <x-project-card
                    title="Système de gestion de process"
                    image="{{ Vite::asset('resources/images/pp.jpg') }}"
                    alt="Project 1"
                />
                <!-- Projet 2 -->
                <x-project-card
                    title="Système de gestion de process"
                    image="{{ Vite::asset('resources/images/pp.jpg') }}"
                    alt="Project 1"
                />
                <!-- Projet 3 -->
                <x-project-card
                    title="Système de gestion de process"
                    image="{{ Vite::asset('resources/images/pp.jpg') }}"
                    alt="Project 1"
                />
            </div>
        </div>
    </section>
</x-app>

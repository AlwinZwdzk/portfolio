<x-app>
    <div id="projects" class="py-20 bg-white min-h-screen flex items-center mt-10 mb-20">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 w-full">
            <h2 class="text-4xl font-semibold text-center text-black mb-16">Projets</h2>
            <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
                <div class="w-96">
                    <x-project-card
                        title="Système de gestion de process"
                        image="{{ Vite::asset('resources/images/pp.jpg') }}"
                        alt="Project 1"
                    />
                </div>
                <div class="w-96">
                    <x-project-card
                        title="Système de gestion de process"
                        image="{{ Vite::asset('resources/images/pp.jpg') }}"
                        alt="Project 2"
                    />
                </div>
                <div class="w-96">
                    <x-project-card
                        title="Système de gestion de process"
                        image="{{ Vite::asset('resources/images/pp.jpg') }}"
                        alt="Project 3"
                    />
                </div>
            </div>
        </div>
    </div>
</x-app>

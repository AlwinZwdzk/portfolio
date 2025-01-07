<x-app>
    <div id="projects" class="py-20 bg-white min-h-screen flex items-center mt-10 mb-20">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 w-full">
            <h2 class="text-4xl font-semibold text-center text-black mb-16">Projets</h2>
            <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
                <div class="w-96">
                    <x-project-card
                        title="Portfolio - Site web"
                        image="{{ Vite::asset('resources/images/portfolio1.png') }}"
                        alt="Portfolio"
                    />
                </div>
                <div class="w-96">
                    <x-project-card
                        title="Méditrip - Site web"
                        image="{{ Vite::asset('resources/images/meditrip1.png') }}"
                        alt="Méditrip"
                    />
                </div>
                <div class="w-96">
                    <x-project-card
                        title="Bomberman - Application Java"
                        image="{{ Vite::asset('resources/images/bomberman1.png') }}"
                        alt="Bomberman"
                    />
                </div>
                <div class="w-96">
                    <x-project-card
                        title="Le juste prix - Site Web"
                        image="{{ Vite::asset('resources/images/justeprix2.png') }}"
                        alt="Juste prix"
                    />
                </div>
            </div>
        </div>
    </div>
</x-app>

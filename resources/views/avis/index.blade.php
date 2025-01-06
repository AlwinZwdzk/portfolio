<x-app>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-20">
        <h1 class="text-4xl font-bold text-center text-gray-800 mb-16">Avis des utilisateurs</h1>

        <!-- Ligne contenant le filtre et le bouton -->
        <div class="flex flex-wrap-reverse justify-between items-center mb-6">
            <!-- Filtre -->
            <div class="flex items-center space-x-3">
                <div class="flex items-center space-x-2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v12m0-6H3m9 0h9" />
                    </svg>
                    <span class="text-sm font-medium">Sort by:</span>
                </div>
                <form action="{{ route('avis.index') }}" method="GET" class="flex items-center space-x-2">
                    <select
                        class="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-md px-3 py-2
                       focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none cursor-pointer
                       hover:border-gray-300 transition-colors"
                        name="sortOption"
                    >
                        <option value="newest" {{ old('sortOption', request('sortOption')) == 'newest' ? 'selected' : '' }}>Plus récent</option>
                        <option value="oldest" {{ old('sortOption', request('sortOption')) == 'oldest' ? 'selected' : '' }}>Plus ancien</option>
                        <option value="highest" {{ old('sortOption', request('sortOption')) == 'highest' ? 'selected' : '' }}>Note la plus élevée</option>
                        <option value="lowest" {{ old('sortOption', request('sortOption')) == 'lowest' ? 'selected' : '' }}>Note la plus basse</option>
                    </select>
                    <input
                        type="submit"
                        value="Valider"
                        class="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer
                   hover:bg-opacity-90 focus:ring-2 focus:ring-primary/50 focus:outline-none
                   transition duration-200"
                    />
                </form>
            </div>

            <!-- Bouton Ajouter un avis -->
            <div class="relative w-full sm:w-auto pb-5 sm:pb-0">
                <a href="{{ route('avis.create') }}" id="avis-button"
                   class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors w-full sm:w-auto">
                    Ajouter un avis
                </a>
                @guest()
                <div id="popup" class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-black text-white text-xs rounded shadow-lg opacity-0 pointer-events-none transition-opacity duration-200 z-50">
                    Vous devez être connecté pour ajouter un avis.
                </div>
                @endguest
            </div>

        </div>

        <div class="space-y-8">
        @foreach($avis as $avis)
            <div class="bg-gray-50 rounded-lg shadow-md p-6 relative group hover:shadow-lg transition-shadow">
                <!-- Contenu principal -->
                <div class="flex items-start space-x-4">
                    @if($avis->avatar)
                        <img
                            src="{{ $avis->avatar }}"
                            alt="{{ $avis->name }}"
                            class="w-12 h-12 rounded-full object-cover"
                        />
                    @endif

                    <div class="flex-1">
                        <div class="flex items-start justify-between">
                            <div>
                                <h3 class="font-semibold text-lg text-gray-900">{{ $avis->user->name }}</h3>
                                <div class="flex items-center mt-1">
                                    @for($i = 0; $i < 5; $i++)
                                        <svg class="w-4 h-4 {{ $i < $avis->note ? 'text-yellow-400 fill-current' : 'text-gray-300' }}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.973 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.973-2.888a1 1 0 00-1.175 0l-3.973 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 9.101c-.784-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69L9.049 2.927z"/>
                                        </svg>
                                    @endfor
                                </div>
                            </div>
                            <span class="text-sm text-gray-500">{{ $avis->created_at->diffForHumans() }}</span>
                        </div>
                        <p class="mt-4 text-gray-600 leading-relaxed">{{ $avis->commentaire }}</p>
                    </div>
                </div>
                <!-- Boutons Éditer et Supprimer -->
                <div class="flex justify-end mt-4 space-x-4">
                    <a href="{{ route('avis.edit', $avis->id) }}" class="text-primary hover:text-pink-500 font-semibold">
                        Éditer
                    </a>
                    <form action="{{ route('avis.destroy', $avis->id) }}" method="POST" onsubmit="return confirm('Êtes-vous sûr de vouloir supprimer cet avis ?');">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="text-black hover:text-primary font-semibold">
                            Supprimer
                        </button>
                    </form>
                </div>
            </div>
        @endforeach
        </div>
    </div>
</x-app>

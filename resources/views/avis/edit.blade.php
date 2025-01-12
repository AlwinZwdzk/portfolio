<x-app>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <h1 class="text-4xl font-bold text-center text-gray-800 mb-16">Ajouter un avis</h1>
        <form action="{{ route('avis.update', $avis->id) }}" method="POST" class="bg-gray-50 rounded-lg shadow-md p-10 max-w-lg mx-auto ">
            @csrf
            @method('PUT')
            <div class="space-y-4">
                <!-- Rating -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Note
                    </label>
                    <div class="flex items-center space-x-1" id="rating-stars">
                        @for ($i = 1; $i <= 5; $i++)
                            <button
                                type="button"
                                class="focus:outline-none star-button"
                                data-value="{{ $i }}"
                                onclick="updateStars({{ $i }})">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-4 h-4 star-icon {{ $i <= $avis->note ? 'text-yellow-400 fill-current' : 'text-gray-300' }}"
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.973 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.973-2.888a1 1 0 00-1.175 0l-3.973 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 9.101c-.784-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69L9.049 2.927z" />
                                </svg>
                            </button>
                        @endfor
                    </div>
                    <input type="hidden" name="note" id="note" value="{{ $avis->note }}">

                    <script>
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
                    </script>

                </div>

                <!-- Comment -->
                <div>
                    <label for="commentaire" class="block text-md font-medium text-gray-700 mb-1">
                        Comment
                    </label>
                    <textarea
                        id="commentaire"
                        name="commentaire"
                        rows="4"
                        class="h-56 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        required
                    >{{$avis->commentaire}}
                    </textarea>
                </div>

                <!-- Submit Button -->
                <button
                    type="submit"
                    class="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
                >
                    Submit Review
                </button>
            </div>
        </form>
    </div>
</x-app>

<div class="project-card cursor-pointer flex flex-col bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
    <h3 class="text-xl font-semibold text-primary mb-4 flex-grow">
        {{$title}}
    </h3>
    <div class="w-full h-auto aspect-w-16 aspect-h-9">
        <img src="{{ $image }}"
             alt="{{$alt}}"
             class="w-full h-full object-cover rounded-lg">
    </div>
</div>

<!-- Modal -->
<div id="project-modal" class="fixed inset-0 z-50 hidden bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[150vh] overflow-auto relative">
        <!-- Close Button -->
        <button id="close-modal" class="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
            ✕
        </button>

        <!-- Modal Content -->
        <div class="p-6">
            <h2 id="modal-title" class="text-2xl font-bold text-black mb-4"></h2>
            <p id="modal-description" class="text-gray-600 mb-6"></p>

            <!-- Carrousel -->
            <div id="modal-carousel"  class="relative">
                <div id="carousel-images" class="flex overflow-x-scroll gap-4 max-h-[55vh]">
                    <!-- Images will be injected dynamically -->
                </div>
                <!-- Navigation Buttons -->
                <button id="prev-slide" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow">←</button>
                <button id="next-slide" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow">→</button>
            </div>

        </div>
    </div>
</div>

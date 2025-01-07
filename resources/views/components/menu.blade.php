<nav class="bg-background shadow-lg fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="flex justify-between h-20 items-center">

            <a href="/" class="h-full">
                <img src="{{Vite::asset('resources/images/logo.png')}}" alt="logo" class="h-full object-contain">
            </a>

            <x-desktop-menu></x-desktop-menu>

            <x-mobile-menu></x-mobile-menu>

        </div>
    </div>
</nav>

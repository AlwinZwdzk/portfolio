<div class="lg:hidden flex items-center">
    <button
        id="menuToggle"
        class="text-black hover:text-primary p-2 group"
        aria-label="Toggle menu"
    >
        <div class="relative w-6 h-5">
            <span class="absolute top-0 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out"></span>
            <span class="absolute top-2 left-0 w-full h-0.5 bg-current transition-all duration-200"></span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out"></span>
        </div>
    </button>
</div>

<div id="mobileMenu" class="lg:hidden absolute top-full left-0 w-full bg-background shadow-lg transition-all duration-300 ease-in-out max-h-0 opacity-0 invisible overflow-hidden">
    <div class="py-4 px-6 space-y-4">
        <a href="#about" class="block text-center text-lg font-medium text-black hover:text-primary transition-colors">
            About
        </a>
        <a href="#trainings" class="block text-center text-lg font-medium text-black hover:text-primary transition-colors">
            Trainings
        </a>
        <a href="#projects" class="block text-center text-lg font-medium text-black hover:text-primary transition-colors">
            Projects
        </a>
        <a href="#contact" class="block text-center text-lg font-medium text-black hover:text-primary transition-colors">
            Contact
        </a>
        <a href="{{route('avis.index')}}" class="block text-center text-lg font-medium text-black hover:text-primary transition-colors">
            Avis
        </a>
    </div>
    @auth
    <div class="mt-4 space-y-4 px-6">
        <a href="{{route("logout")}}" onclick="document.getElementById('logout').submit(); return false;" class="block w-full text-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-lg">
            Déconnexion
        </a>
        <form id="logout" action="{{route("logout")}}" method="post">
            @csrf
        </form>
    </div>
    @else
    <div class="mt-4 space-y-4 px-6">
        <a href="{{route("login")}}" class="block w-full text-center px-6 py-3 bg-white text-primary border-2 border-primary rounded-md hover:bg-primary hover:text-white transition-colors text-lg">
            Connexion
        </a>
        <a href="{{route("register")}}" class="block w-full text-center px-6 py-3 bg-primary text-white border-2 border-primary rounded-md hover:bg-primary/90 transition-colors text-lg">
            Inscription
        </a>
    </div>
    @endauth
</div>

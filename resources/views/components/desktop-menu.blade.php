<div class="hidden lg:flex w-full justify-between items-center ml-12">
    <div class="flex items-center space-x-8">
        <a href="{{route('welcome')}}#about" class="text-black hover:text-primary px-4 py-2 text-base font-medium whitespace-nowrap">
            À propos
        </a>
        <a href="{{route('welcome')}}#trainings" class="text-black hover:text-primary px-4 py-2 text-base font-medium">
            Formations
        </a>
        <a href="{{route('welcome')}}#projects" class="text-black hover:text-primary px-4 py-2 text-base font-medium">
            Projets
        </a>
        <a href="{{route('welcome')}}#hobbies" class="text-black hover:text-primary px-4 py-2 text-base font-medium">
            Loisirs
        </a>
        <a href="{{route('welcome')}}#contact" class="text-black hover:text-primary px-4 py-2 text-base font-medium">
            Contact
        </a>
        <a href="{{route('avis.index')}}" class="text-black hover:text-primary px-4 py-2 text-base font-medium">
            Avis
        </a>
    </div>


    @auth
        <div class="flex items-center space-x-4 lg:space-x-6">
            <a href="{{route("logout")}}" onclick="document.getElementById('logout').submit(); return false;"
               class="px-4 lg:px-6 py-2.5 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-base whitespace-nowrap">
                Déconnexion
            </a>
            <form id="logout" action="{{route("logout")}}" method="post">
                @csrf
            </form>
        </div>
    @else
        <div class="flex items-center space-x-4 lg:space-x-6">
            <a href="{{route("login")}}" class="px-4 lg:px-6 py-2.5 bg-white text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition-colors text-base whitespace-nowrap">
                Connexion
            </a>
            <a href="{{route("register")}}" class="px-4 lg:px-6 py-2.5 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-base whitespace-nowrap">
                Inscription
            </a>
        </div>
    @endauth
</div>

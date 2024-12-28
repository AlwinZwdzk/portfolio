<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta charset="UTF-8">
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="icon" type="image/png" href="{{Vite::asset('resources/images/favicon.png')}}">
        @section("head")
            @vite(['resources/css/app.css', 'resources/js/app.js', 'resources/js/bootstrap.js'])
        @show
        <style>
            .main-container {
                padding-top: 80px; /* Ajoute un espace en haut pour compenser la hauteur du menu */
            }

            section {
                min-height: 100vh; /* Prend au moins toute la hauteur de la fenêtre */
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .section-box {
                width: 80%; /* Largeur de la boîte */
                max-width: 1200px; /* Largeur maximale de la boîte */
                background-color: #ffffff; /* Couleur de fond de la boîte */
                padding: 20px;
                margin: 20px; /* Marge autour de la boîte */
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre pour l'effet de boîte */
                border-radius: 8px; /* Coins arrondis */
            }
        </style>
    </head>

    <body>
        <div class="min-h-screen bg-background main-container">
            <x-menu></x-menu>

            <section id="about" class="h-screen flex items-center justify-center">
                <div class="section-box">
                    <h1>À propos</h1>
                    <img src="{{Vite::asset('resources/images/favicon.png')}}" alt="Photo de profil" class="rounded-full w-32 h-32 mx-auto my-4">
                </div>
            </section>

            <section id="trainings" class="h-screen flex items-center justify-center">
                <div class="section-box">
                    <h1>Formations</h1>
                </div>
            </section>

            <section id="projects" class="h-screen flex items-center justify-center">
                <div class="section-box">
                    <h1>Projets</h1>
                </div>
            </section>

            <section id="contact" class="h-screen flex items-center justify-center">
                <div class="section-box">
                    <h1>Contact</h1>
                </div>
            </section>
        </div>
    </body>
</html>

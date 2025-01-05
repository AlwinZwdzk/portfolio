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
        @vite(['resources/css/app.css'])
    @show
</head>
<div class="min-h-screen flex items-center justify-center bg-background">
    <div class="bg-white max-w-md w-full p-6 rounded-lg shadow-lg">
        <div class="mb-6">
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg text-sm">
                Mot de passe oublié ? Pas de problème. Indiquez votre adresse mail et nous vous transmettrons un lien pour en choisir un nouveau.
            </div>
        </div>

        <form method="POST" action="{{ route('password.email') }}">
            @csrf
            <div class="mb-6 text-center">
                <h3 class="text-2xl font-bold text-primary">Initialisation du mot de passe</h3>
            </div>

            <!-- Email Address -->
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Adresse e-mail</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value="{{ old('email') }}"
                    required
                    autofocus
                    class="form-input w-full bg-blue-50 border-gray-300 rounded-lg focus:border-primary focus:ring-primary placeholder-gray-400 px-1 py-1"
                >
            </div>

            <!-- Submit Button -->
            <div>
                <button
                    type="submit"
                    class="w-full bg-primary text-white font-bold py-1 px-1 text-sm rounded shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    Mail initialisation mot de passe
                </button>
            </div>
        </form>
    </div>
</div>
</html>

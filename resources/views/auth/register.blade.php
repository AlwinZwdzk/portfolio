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
    <form class="bg-white max-w-md w-full p-6 rounded-lg shadow-lg" action="{{ route('register') }}" method="post">
        @csrf
        <div class="mb-6 text-center">
            <h3 class="text-2xl font-bold text-primary">Enregistrement</h3>
            <p class="text-gray-600">Enregistrement pour l'accès à l'application</p>
        </div>

        <!-- Name Input -->
        <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Prénom et Nom</label>
            <input
                type="text"
                name="name"
                id="name"
                class="form-input w-full bg-blue-50 border-gray-300 rounded-lg focus:border-primary focus:ring-primary placeholder-gray-400 px-1 py-1"
                >
        </div>

        <!-- Email Input -->
        <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Adresse e-mail</label>
            <input
                type="text"
                name="email"
                id="email"
                class="form-input w-full bg-blue-50 border-gray-300 rounded-lg focus:border-primary focus:ring-primary placeholder-gray-400 px-1 py-1"
                >
        </div>

        <!-- Password Input -->
        <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <input
                type="password"
                name="password"
                id="password"
                class="form-input w-full bg-blue-50 border-gray-300 rounded-lg focus:border-primary focus:ring-primary placeholder-gray-400 px-1 py-1"
                >
        </div>

        <!-- Confirm Password Input -->
        <div class="mb-4">
            <label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-1">Confirmez le mot de passe</label>
            <input
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                class="form-input w-full bg-blue-50 border-gray-300 rounded-lg focus:border-primary focus:ring-primary placeholder-gray-400 px-1 py-1"
                >
        </div>

        <!-- Register Button -->
        <div class="mb-4">
            <button
                type="submit"
                class="w-full bg-primary text-white font-bold py-1 px-1 text-sm rounded shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Enregistrement
            </button>
        </div>

        <!-- Login Link -->
        <div class="text-center text-sm text-gray-600">
            <p>
                Vous avez déjà un compte ?
                <a href="{{ route('login') }}" class="text-primary font-semibold hover:underline">Connexion</a>
            </p>
        </div>
    </form>
</div>

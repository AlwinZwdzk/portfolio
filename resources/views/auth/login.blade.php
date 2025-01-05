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
    @if (session('message'))
        <div class="absolute top-4 text-center bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg shadow-md">
            {{ session('message') }}
        </div>
    @endif
    <form class="bg-white max-w-md w-full p-6 rounded-lg shadow-lg" action="{{ route('login') }}" method="post">
        @csrf
        <div class="mb-6 text-center">
            <h3 class="text-2xl font-bold text-primary">Connexion</h3>
            <p class="text-gray-600">Accès au tableau de bord</p>
        </div>

        <!-- Email Input -->
        <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Adresse e-mail</label>
            <input
                type="text"
                name="email"
                id="email"
                class="form-input w-full bg-blue-50 border-gray-300 rounded-lg focus:border-primary focus:ring-primary placeholder-gray-400 px-1 py-1"
                placeholder="email@example.com">
        </div>

        <!-- Password Input -->
        <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <input
                type="password"
                name="password"
                id="password"
                class="form-input w-full bg-blue-50 border-gray-300 rounded-lg focus:border-primary focus:ring-primary placeholder-gray-400 px-1 py-1"
                placeholder="********">
        </div>

        <!-- Remember Me Checkbox -->
        <div class="flex items-center mb-4">
            <input
                type="checkbox"
                name="remember"
                id="remember"
                class="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary">
            <label for="remember" class="ml-2 text-sm text-gray-700">Se souvenir de moi</label>
        </div>

        <!-- Login Button -->
        <div class="mb-4">
            <button
                type="submit"
                class="w-full bg-primary text-white font-bold py-1 px-1 text-sm rounded shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Connexion
            </button>
        </div>

        <!-- Register and Forgot Password Links -->
        <div class="text-center text-sm text-gray-600">
            <p class="mb-2">
                Vous n'avez pas de compte ?
                <a href="{{ route('register') }}" class="text-primary font-semibold hover:underline">S'inscrire</a>
            </p>
            <p>
                <a href="{{ route('password.request') }}" class="text-primary font-semibold hover:underline">Mot de passe oublié ?</a>
            </p>
        </div>
    </form>
</div>

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
        <form action="{{ url('reset-password') }}" method="post">
            @csrf
            <!-- Header -->
            <div class="mb-6 text-center">
                <h3 class="text-2xl font-bold text-primary">Initialisation du mot de passe</h3>
                <p class="text-sm text-gray-500">Entrez vos informations pour réinitialiser votre mot de passe.</p>
            </div>

            <!-- Password Reset Token -->
            <input type="hidden" name="token" value="{{ $request->route('token') }}">

            <!-- Email Input -->
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Adresse e-mail</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    class="form-input w-full bg-blue-50 border-gray-300 rounded-lg focus:border-primary focus:ring-primary placeholder-gray-400 px-1 py-1"
                    value="{{ old('email', $request->email) }}"
                    required>
            </div>

            <!-- Password Input -->
            <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Nouveau mot de passe</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-input w-full bg-blue-50 border-gray-300 rounded-lg focus:border-primary focus:ring-primary placeholder-gray-400 px-1 py-1"
                    required>
            </div>

            <!-- Confirm Password Input -->
            <div class="mb-6">
                <label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-1">Confirmez le mot de passe</label>
                <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    class="form-input w-full bg-blue-50 border-gray-300 rounded-lg focus:border-primary focus:ring-primary placeholder-gray-400 px-1 py-1"
                    required>
            </div>

            <!-- Submit Button -->
            <div>
                <button
                    type="submit"
                    class="w-full bg-primary text-white font-bold py-1 px-1 text-sm rounded shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    Init mot de passe
                </button>
            </div>
        </form>
    </div>
</div>

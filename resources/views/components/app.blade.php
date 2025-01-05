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
        @vite(['resources/css/app.css', 'resources/js/app.js', 'resources/js/bootstrap.js', 'resources/css/welcome.css'])
    @show
</head>

<body>
<div class="min-h-screen bg-background main-container">
    <x-menu></x-menu>
    <main>
        {{$slot}}
    </main>
</div>
</body>
<footer class="bg-background py-12">
    <x-footer></x-footer>
</footer>

</html>

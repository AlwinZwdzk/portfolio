<?php

use App\Http\Controllers\AvisController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TrainingController;

Route::get('/', [App\Http\Controllers\TrainingController::class, 'index'])->name('welcome');

Route::get('/projets', function () {
    /*if (!auth()->check()) {
        session()->flash('message', 'Vous devez être connecté pour voir d\'autres projets.');
        return redirect()->route('login');
    }*/
    return view('projects');
})->middleware('auth')->name('projects');

Route::resource('avis', AvisController::class);
Route::get('/avis/create', [AvisController::class, 'create'])
    ->middleware('auth')
    ->name('avis.create');

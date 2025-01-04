<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [App\Http\Controllers\TrainingController::class, 'index'])->name('welcome');

Route::get('/home', [App\Http\Controllers\TrainingController::class, 'index'])->middleware(['auth'])->name('home');

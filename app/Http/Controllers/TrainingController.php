<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TrainingController extends Controller
{
    public function index()
    {
        $trainingsData = [
            [
                'year' => '2023',
                'title' => 'Master in Computer Science',
                'institution' => 'Stanford University',
                'description' => 'Specialized in Artificial Intelligence and Machine Learning with a focus on Neural Networks.',
            ],
            [
                'year' => '2021',
                'title' => 'Bachelor in Computer Science',
                'institution' => 'MIT',
                'description' => 'Core computer science fundamentals with emphasis on software engineering practices.',
            ],
            [
                'year' => '2018',
                'title' => 'Web Development Bootcamp',
                'institution' => 'Coding Academy',
                'description' => 'Intensive training in modern web technologies including React, Node.js, and databases.',
            ],
        ];

        return view('welcome', compact('trainingsData'));
    }
}

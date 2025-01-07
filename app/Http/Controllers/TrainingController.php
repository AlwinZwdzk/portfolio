<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TrainingController extends Controller
{
    public function index()
    {
        $trainingsData = [
            [
                'year' => '2023 - Aujourd\'hui',
                'title' => 'Bachelor Universitaire de Technologie - Informatique',
                'institution' => 'IUT - Lens',
                'description' => 'Actuellement en deuxième année.',
            ],
            [
                'year' => '2022-2023',
                'title' => 'Ecole d\'ingénieur en informatique et industriel',
                'institution' => 'IG2I Centrale Lille - Lens',
                'description' => 'J\'ai décidé de me réorienter à l\'issu de la première pour me concentrer sur l\'informatique.',
            ],
            [
                'year' => '2022',
                'title' => 'Baccaulauréat général',
                'institution' => 'Lycée Anatole France - Lillers ',
                'description' => 'Mention bien avec les spécialités Mathématiques et Numérique et Sciences Informatiques (NSI)',
            ],
        ];

        return view('welcome', compact('trainingsData'));
    }
}

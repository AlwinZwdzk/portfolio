<?php

namespace App\Http\Controllers;

use App\Models\Avis;
use Illuminate\Http\Request;

class AvisController extends Controller
{
    public function index(Request $request)
    {
        // Récupérer l'option de tri, avec une valeur par défaut
        $sortOption = $request->input('sortOption', 'newest');

        // Appliquer le tri en fonction de l'option sélectionnée
        switch ($sortOption) {
            case 'oldest':
                $avis = Avis::orderBy('created_at', 'asc')->get(); // Tri par date croissante (le plus ancien en premier)
                break;
            case 'highest':
                $avis = Avis::orderBy('note', 'desc')->get(); // Tri par la note la plus élevée
                break;
            case 'lowest':
                $avis = Avis::orderBy('note', 'asc')->get(); // Tri par la note la plus basse
                break;
            case 'newest':
            default:
                $avis = Avis::orderBy('created_at', 'desc')->get(); // Tri par date décroissante (le plus récent en premier)
                break;
        }

        // Retourner la vue avec les avis triés
        return view('avis.index', ['avis' => $avis]);
    }


    public function create()
    {
        if (!auth()->check()) {
            session()->flash('message', 'Vous devez être connecté pour créer un avis.');
            return redirect()->route('login');
        }
        return view('avis.create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'titre' => 'required|string',
            'commentaire' => 'required|string',
            'note' => 'required|integer',
        ]);

        $validatedData['user_id'] = $request->user()->id;

        $avis = Avis::create($validatedData);

        return redirect()->route('avis.index');
    }
}

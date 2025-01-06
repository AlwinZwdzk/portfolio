<?php

namespace App\Http\Controllers;

use App\Models\Avis;
use Illuminate\Http\Request;

class AvisController extends Controller
{
    public function index() {
        $avis = Avis::all(); // stocke dans la variable $Taches, les objets Tache récupérés dans la table taches de la base de données.
        return view('avis.index', ['avis' => $avis]);
    }

    public function create()
    {
        if (auth()->guest()) {
            return redirect()->route('login');
        }
        return view('avis.create');
    }

    public function store(Request $request)
    {
        if (auth()->guest()) {
            return redirect()->route('login');
        }

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

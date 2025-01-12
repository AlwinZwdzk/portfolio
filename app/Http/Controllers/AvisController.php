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
        $user = auth()->user();
        if ($user->cannot('create', Avis::class)) {
            return redirect()->route('avis.index')
                ->with('status', 'Vous ne pouvez créer qu\'un seul avis.');
        }
        return view('avis.create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'commentaire' => 'required|string',
            'note' => 'required|integer',
        ]);

        $validatedData['user_id'] = $request->user()->id;

        Avis::create($validatedData);

        return redirect()->route('avis.index');
    }

    public function destroy(int $id)
    {
        $avis = Avis::findOrFail($id);
        $user = auth()->user();
        if($user->can('delete', $avis)) {
            $avis->delete();
        }
        return redirect()->route('avis.index');
    }

    public function edit(int $id)
    {
        $avis = Avis::findOrFail($id);
        if (request()->user()->can('update', $avis)) {
            return view('avis.edit', ['avis' => $avis]);
        }
        return redirect()->route('avis.index');
    }

    public function update(Request $request, int $id)
    {
        $avis = Avis::findOrFail($id);
        if ($request->user()->can('update', $avis)) {
            $data = request()->validate([
                'commentaire' => 'required|string|max:255',
                'note' => 'required|int',
            ]);
            $avis->update($data);
        }

        return redirect()->route('avis.index');
    }
}

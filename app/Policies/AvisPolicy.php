<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Avis;
use App\Enums\Role;

class AvisPolicy
{

    function create()
    {
        $nbAvis = auth()->user()->avis()->count();
        return $nbAvis < 1 || auth()->user()->role === Role::ADMIN;
    }

    function update(User $user, Avis $avis) {
        return $user->id === $avis->user_id;
    }

    function delete(User $user, Avis $avis) {
        return $user->role === Role::ADMIN || $user->id === $avis->user_id;
    }
}

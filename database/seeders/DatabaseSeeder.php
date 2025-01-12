<?php

namespace Database\Seeders;

use App\Enums\Role;
use App\Models\Avis;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        User::factory([
            'name' => "Alwin Zawadzki",
            'email' => "alwin@gmail.com",
            'email_verified_at' => now(),
            'password' => Hash::make('GrosSecret'),
            'remember_token' => Str::random(10),
            'role' => Role::ADMIN,
        ])->create();
        Avis::factory(2)->create();
    }
}

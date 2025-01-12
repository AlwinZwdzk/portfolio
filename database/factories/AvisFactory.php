<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Avis>
 */
class AvisFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'commentaire' => 'Ceci est un faux commentaire à des fins de tests et démonstrations.',
            'note' => $this->faker->numberBetween(1, 5),
            'user_id' => 1,
        ];
    }
}

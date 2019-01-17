<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Models\ReposRate::class, function (Faker $faker) {

    $repos = [1,26,27,28,29,31,35,36,42];
    $users = [1,2,3,4];

    return [
        'repo_id' => $faker->randomElement($repos),
        'user_id' => $faker->randomElement($users),
        'status' => $faker->boolean($chanceOfGettingTrue = 70),
    ];
});

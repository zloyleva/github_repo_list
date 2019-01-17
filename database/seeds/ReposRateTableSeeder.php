<?php

use Illuminate\Database\Seeder;
use App\Models\ReposRate;

class ReposRateTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ReposRate::truncate();

        for ($i = 0; $i < 40; $i++){
            try{
                factory(ReposRate::class)->create();
            }catch (Exception $e){

            }
        }

    }
}

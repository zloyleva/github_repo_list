<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReposRatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('repos_rates', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('repo_id');
            $table->integer('user_id');
            $table->boolean('status')->nullable();

            $table->timestamps();

            $table->unique(['repo_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('repos_rates');
    }
}

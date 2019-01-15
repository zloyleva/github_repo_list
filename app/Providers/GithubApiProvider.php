<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Library\GithubApi\GithubApi;

class GithubApiProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(GithubApi::class, function ($app) {
            return new GithubApi();
        });
    }
}

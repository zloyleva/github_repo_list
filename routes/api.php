<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',
//    'prefix' => 'auth'
], function ($router) {
    Route::get('/repo', 'GithubAPIController@index');
    Route::get('/repo/{owner}/{repo}', 'GithubAPIController@show');

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');

    Route::post('me', 'AuthController@me');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'rate'
], function ($router) {
    Route::post('/show', 'ReposRateController@show');
    Route::post('/', 'ReposRateController@index');
    Route::put('/', 'ReposRateController@update');
});

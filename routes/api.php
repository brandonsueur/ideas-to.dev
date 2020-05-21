<?php

/**
 * Auth
 */
Route::post('login', 'Api\UsersController@login');
Route::post('register', 'Api\UsersController@register');

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('details', 'Api\UsersController@details');
});

/**
 * Ideas
 */
Route::group(['prefix' => 'ideas'], function () {
    Route::get('/', ['uses' => 'Api\IdeasController@index'])
        ->name('api.ideas.index');
    Route::get('/notpublished', ['uses' => 'Api\IdeasController@notPublished'])
        ->name('api.ideas.notPublished');
    Route::get('/{id}', ['uses' => 'Api\IdeasController@show'])
        ->name('api.ideas.show');
    Route::get('category/{id}', ['uses' => 'Api\IdeasController@category'])
        ->name('api.ideas.category');
    Route::post('/', ['uses' => 'Api\IdeasController@store'])
        ->name('api.ideas.store');
});

/**
 * Categories
 */
Route::group(['prefix' => 'categories'], function () {
    Route::get('/', ['uses' => 'Api\CategoriesController@index'])
        ->name('api.categories.index');
    Route::get('/{id}', ['uses' => 'Api\CategoriesController@show'])
        ->name('api.categories.show');
});

/**
 * Repositories
 */
Route::group(['prefix' => 'repositories'], function () {
    Route::get('/', ['uses' => 'Api\RepositoriesController@index'])
        ->name('api.repositories.index');
    Route::get('/{id}', ['uses' => 'Api\RepositoriesController@show'])
        ->name('api.repositories.show');
    Route::post('/', ['uses' => 'Api\RepositoriesController@store'])
        ->name('api.repositories.store');
});

/**
 * Likes
 */
Route::group(['prefix' => 'likes'], function () {
    Route::get('/', ['uses' => 'Api\LikesController@index'])
        ->name('api.likes.index');
    Route::post('/', ['uses' => 'Api\LikesController@store'])
        ->name('api.likes.store');
});

/**
 * Newsletter
 */
Route::group(['prefix' => 'newsletter'], function(){
    Route::post('/', ['uses' => 'Api\BaseController@newsletter'])
        ->name('api.likes.store');
});

// Route::middleware(
//     ['auth']
// )->group(function () {
// });

<?php

Route::get('auth/github', 'AuthController@redirectToProvider');
Route::get('auth/github/callback', 'AuthController@handleProviderCallback');
Route::pattern('path', '[a-zA-Z0-9-/]+');

Route::any( '{path}', function( $page ){
    return view('app');
});

Route::get('/', function () {
    return view('app');
});

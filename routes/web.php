<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);


Route::statamic('styles', 'styles');
Route::statamic('blog/tags', 'blog.taxonomies');
Route::statamic('search', 'search');
Route::statamic('users', 'user.index');
Route::statamic('users/{username}', 'user.profile');
Route::statamic('account', 'user.account');
Route::statamic('login', 'auth.login');
Route::statamic('register', 'auth.register');
Route::statamic('forgot-password', 'auth.password_forgot');
Route::statamic('reset-password', 'auth.password_reset');
Route::statamic('style-guide', 'style-guide');
Route::statamic('email-signature', '', [
    'layout' => 'email-signature',
]);
Route::statamic('blog/archive', 'blog-archive', [
    'title' => 'Blog Archive',
]);

Route::get('/!/DynamicToken/refresh', [DynamicToken::class, 'getRefresh']);
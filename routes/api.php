<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;

use App\Http\Controllers\AuctionController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PromoController;

use App\Http\Controllers\NewsCategoryController;

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

// auth
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('user', function (Request $request) {
        return $request->user();
    });
    Route::post('logout', [AuthController::class, 'logout']);
});

// news
Route::resource('news', NewsController::class);
Route::resource('news-auction', AuctionController::class);
Route::resource('news-promotion', PromoController::class);
Route::resource('news-category', NewsCategoryController::class);

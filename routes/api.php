<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;

use App\Http\Controllers\AuctionController;
use App\Http\Controllers\CustomerListController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\NewsCategoryController;
use App\Http\Controllers\ProductSubmissionController;
use App\Http\Controllers\PromoController;
use App\Http\Controllers\UserController;

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

// additional
Route::middleware('auth:sanctum')->group(function () {
    Route::get('user', function (Request $request) {
        return $request->user();
    });
    Route::post('logout', [AuthController::class, 'logout']);
});
Route::post('upload-image', [FileController::class, 'uploadImage']);

// auth
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

// news
Route::resource('news', NewsController::class);
Route::resource('news-auction', AuctionController::class);
Route::resource('news-promotion', PromoController::class);

// news category
Route::resource('news-category', NewsCategoryController::class);
Route::get('news-category-all', [NewsCategoryController::class, 'getAll']);

// product submission
Route::resource('product-submission', ProductSubmissionController::class);

// customer list
Route::resource('customer-list', CustomerListController::class);

// user
Route::resource('users', UserController::class);

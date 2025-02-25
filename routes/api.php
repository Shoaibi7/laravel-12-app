<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProductController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');




Route::middleware('auth:sanctum')->group(function () {
    // API Resource Routes for Products
    Route::apiResource('products', ProductController::class);
});

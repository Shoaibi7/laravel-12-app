<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

   // Products List Page
   Route::get('/products', function () {
    return Inertia::render('Products/products'); // Renders the ProductsList page
})->name('products');

// Create Product Page
Route::get('/create-product', function () {
    return Inertia::render('Products/CreateProduct'); // Renders the CreateProduct page
})->name('product.create');

// Edit Product Page
Route::get('/products/edit/{id}', function ($id) {
    return Inertia::render('Products/Edit', ['id' => $id]); // Passes the product ID to the EditProduct page
})->name('product.edit');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

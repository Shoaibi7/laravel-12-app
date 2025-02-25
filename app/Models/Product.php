<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    // Define fillable fields for mass assignment
    protected $fillable = [
        'title',
        'price',
        'description',
        'image',
        'category',
    ];

    // Optional: Casts for specific data types
    protected $casts = [
        'price' => 'decimal:2', // Ensure price is stored as a decimal with 2 decimal places
    ];
}

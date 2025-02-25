<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable(false); // Title of the product
            $table->decimal('price', 8, 2)->nullable(false); // Price of the product
            $table->text('description')->nullable(); // Description of the product
            $table->string('image')->nullable(); // Image URL of the product
            $table->string('category')->nullable(); // Category of the product
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('products');
    }
};

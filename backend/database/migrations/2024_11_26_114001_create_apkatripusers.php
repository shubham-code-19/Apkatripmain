<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('apkatripusers', function (Blueprint $table) {
            $table->id();
            $table->string("name",80);
            $table->string("number")->unique();
            $table->string("password");
            $table->string("email")->unique();
            $table->boolean("useractive")->default(true);
            $table->string("others")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('apkatripusers');
    }
};

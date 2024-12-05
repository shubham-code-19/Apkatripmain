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
        Schema::create('bookedhotels', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable(); // Allow null for user_id to handle delete set null
            $table->string('user_name'); // Storing the user's name
            $table->string('user_number'); // Storing the user's number
            $table->string('hotel_name'); // Name of the hotel
            $table->string('location'); // Hotel location
            $table->string('address'); // Hotel address
            $table->date('check_in_date'); // Hotel check-in date
            $table->date('check_out_date'); // Hotel check-out date
            $table->string('room_type'); // Type of room booked (e.g., single, double)
            $table->decimal('price', 8, 2); // Price of the room
            $table->dateTime('date_of_booking'); // Date of booking
            $table->text('initial_response')->nullable(); // Initial response
            $table->boolean('refund')->default(false); // Refund status (default is false)
            $table->text('response')->nullable(); // Final response
            $table->timestamps();

            // Foreign key to link the user
            $table->foreign('user_id')
                  ->references('id')
                  ->on('apkatripusers')
                  ->nullOnDelete(); // Set user_id to null if the user is deleted
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookedhotels');
    }
};

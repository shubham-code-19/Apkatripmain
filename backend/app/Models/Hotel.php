<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Hotel extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'hotels';

    protected $fillable = [
        'name',
        'email',
        'password',
         "slug",
        'phone', 
        'useractive',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /**
     * Relationship with HotelDetails model.
     */
    public function hotelDetails()
    {
        return $this->hasOne(hoteldetails::class, 'hotel_id');
    }

    /**
     * Relationship with RoomReg model.
     */
    public function roomRegs()
    {
        return $this->hasMany(roomreg::class, 'hotel_id');
    }

    /**
     * Relationship with Amenities model.
     */
    public function amenities()
    {
        return $this->hasOne(amenities::class, 'hotel_id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class roomreg extends Model
{
    use HasFactory;
    protected $fillable = [
        'room_type',
        'size',
        'bed_type',
        'price',
        'max_occupancy',
        'room_ava',
        'features',
        'image',
        'room_des',
        'additional_serv',
    ];
    protected $casts = [
        'features' => 'array',
        'image' => 'array',
        'additional_serv' => 'array',
    ];
}
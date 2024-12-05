<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class roomreg extends Model
{
    use HasFactory;

    protected $table = 'room_regs';

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
        'hotel_id',
    ];

    protected $casts = [
        'features' => 'array',
        'image' => 'array',
        'additional_serv' => 'array',
    ];

    /**
     * Relationship with Hotel model.
     */
    public function hotel()
    {
        return $this->belongsTo(Hotel::class, 'hotel_id');
    }
    
    protected static function booted()
    {
        static::addGlobalScope('hotel', function (Builder $builder) {
            if (auth()->check()) {
                $builder->where('hotel_id', auth()->user()->id);
            }
        });
    }
}

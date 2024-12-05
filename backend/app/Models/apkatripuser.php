<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;



class apkatripuser extends Model
{
    use HasFactory;

    protected $table="apkatripusers";
protected $fillable=[
"name",
"number",
"password",
"others",
];

public function setPasswordAttribute($value)
{
    $this->attributes['password'] = Hash::make($value);
}

}

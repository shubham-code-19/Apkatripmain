<?php

namespace App\Policies;

use App\Models\Hotel;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class HotelPolicy
{

    public function viewAny(User $user): bool
    {


        return $user->is_admin;
    }

    public function view(User $user, Hotel $hotel): bool
    {

        return $user->id === $hotel->user_id || $user->is_admin;
    }

    public function create(User $user): bool
    {

        return $user->is_authenticated;
    }

    public function update(User $user, Hotel $hotel): bool
    {

        return $user->id === $hotel->user_id || $user->is_admin;
    }

    public function delete(User $user, Hotel $hotel): bool
    {

        return $user->id === $hotel->user_id || $user->is_admin;
    }

    public function restore(User $user, Hotel $hotel): bool
    {

        return $user->id === $hotel->user_id || $user->is_admin;
    }

    public function forceDelete(User $user, Hotel $hotel): bool
    {

        return $user->id === $hotel->user_id || $user->is_admin;
    }
}

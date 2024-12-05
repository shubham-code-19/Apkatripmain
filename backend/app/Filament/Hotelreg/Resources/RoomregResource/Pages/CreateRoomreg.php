<?php

namespace App\Filament\Hotelreg\Resources\RoomregResource\Pages;

use App\Filament\Hotelreg\Resources\RoomregResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateRoomreg extends CreateRecord
{
    protected static string $resource = RoomregResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['hotel_id'] = auth()->user()->id;
        return $data;
    }
}

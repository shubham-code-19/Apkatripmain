<?php

namespace App\Filament\Hotelreg\Resources\RoomregResource\Pages;

use App\Filament\Hotelreg\Resources\RoomregResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListRoomregs extends ListRecords
{
    protected static string $resource = RoomregResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}

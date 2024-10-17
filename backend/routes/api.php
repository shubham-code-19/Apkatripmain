<?php


use App\Http\Controllers\AirportController;
use App\Http\Controllers\TopPorts;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
use App\Http\Controllers\TBOController;

use App\Http\Controllers\FlightController;



Route::apiResource('v1/airports', AirportController::class);
Route::apiResource('v1/topairports', TopPorts::class);

Route::post('v1/search-flights', [FlightController::class, 'searchFlights']);
Route::post('v1/search-return-flights', [FlightController::class, 'searchreturnflight']);
Route::post('v1/advance-search-flights', [FlightController::class, 'advance_search']);

Route::apiResource('v1/blog', BlogController::class);


Route::post('v1/cities', [TBOController::class, 'fetchCities']);


Route::post('v1/hotels', [TBOController::class, 'fetchHotels']);


// Route::get('/search-flights-one', (Request $request) {
//     return "<h1>Hello world</h1>"
// });

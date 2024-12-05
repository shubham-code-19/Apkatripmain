<?php


use App\Http\Controllers\AirportController;
use App\Http\Controllers\TopPorts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\TBOController;
use App\Http\Controllers\HotelRegistrationController;
use App\Http\Controllers\FlightController;
use App\Http\Controllers\SightseeingController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\BusController;
use App\Http\Controllers\BusControllerSearch;
use App\Http\Controllers\HotelControllerSearchRes;
use App\Http\Controllers\CountryControllerCab;
use App\Http\Controllers\TransferController;
use App\Http\Controllers\TransferSearchController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::apiResource('v1/airports', AirportController::class);
Route::apiResource('v1/topairports', TopPorts::class);

Route::post('v1/search-flights', [FlightController::class, 'searchFlights']);
Route::post('v1/search-return-flights', [FlightController::class, 'searchreturnflight']);
Route::post('v1/advance-search-flights', [FlightController::class, 'advance_search']);
Route::post('v1/farerule', [FlightController::class, 'fareRules']);

Route::post('v1/advance-ssr', [FlightController::class, 'ssrrequest']);
Route::post('v1/farequate', [FlightController::class, 'farequate']);




Route::apiResource('v1/blog', BlogController::class);




Route::get('v1/cities', [TBOController::class, 'fetchCities']);
Route::post('v1/hotels', [TBOController::class, 'fetchHotels']);

Route::post('v1/hotels/search', [HotelControllerSearchRes::class, 'searchHotels']);


Route::post('v1/hotels/hotel_single', [HotelControllerSearchRes::class, 'singleHotelget']);
Route::post('v1/hotels/prebooking', [HotelControllerSearchRes::class, 'preBooking']);


// routes/api.php






Route::post('v1/hotelslist', [HotelController::class, 'getHotelDetails']);
Route::post('v1/sightseeing/search', [SightseeingController::class, 'search']);
Route::post('v1/sightseeing', [SightseeingController::class, 'meRandomdata']);



Route::get('v1/bus/cities', [BusController::class, 'searchBusCityList']);
Route::post('v1/bus/search', [BusControllerSearch::class, 'searchBuses']);
Route::post('v1/bus/seatlayout', [BusControllerSearch::class, 'busSeatLayout']);



Route::post('/transfer-search', [TransferSearchController::class, 'searchTransfer']);


Route::get('/transfers', [TransferController::class, 'getTransferData']);

Route::get('v1/cab/countries', [CountryControllerCab::class, 'getCountryList']);


Route::prefix('v1')->group(function () {
    Route::apiResource('hotelreg', HotelRegistrationController::class);
});

use App\Http\Controllers\HotelRegesController;

Route::post("v1/test", [HotelRegesController::class, "getHotelUser"]);
Route::post("v1/hotelreq/signupHotel", [HotelRegesController::class, "sendVerify"]);
Route::post("v1/hotelreq/otp", [HotelRegesController::class, "sendHotelOtp"]);

Route::post("v1/hotelreq/loginhotel", [HotelRegesController::class, "loginhotel"]);
Route::get("v1/hotel/all", [HotelRegesController::class, "getAllhotels"]);
Route::get("v1/hotel/single/{slug}", [HotelRegesController::class, "getSingleHotellreq"]);

use  App\Http\Controllers\OtpController;

Route::post("v1/user/sendotp", [OtpController::class, "sendOtp"]);
Route::post("v1/user/verifyotp", [OtpController::class, "verifyOtp"]);
Route::post("v1/user/forgotPassword", [OtpController::class, "forgotPasswordSendotp"]);




use  App\Http\Controllers\SiteUser;

Route::post("v1/user/signup", [SiteUser::class, "signupUser"]);
Route::post("v1/user/login", [SiteUser::class, "loginUser"]);
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Services\ApiService;

class FlightController extends Controller
{
    protected $apiService;

    public function __construct(ApiService $apiService)
    {
        $this->apiService = $apiService;
    }

    public function searchFlights(Request $request)
    {

        $token = $this->apiService->getToken();

        $validatedData = $request->validate([
            "EndUserIp" => 'required',
            'AdultCount' => 'required|integer',
            'Origin' => 'required|string',
            'Destination' => 'required|string',
            'FlightCabinClass' => 'required|integer',
            'PreferredDepartureTime' => 'required',
            'ChildCount' => 'nullable|integer',
            'InfantCount' => 'nullable|integer',
            'DirectFlight' => 'nullable|boolean',
            'OneStopFlight' => 'nullable|boolean',
            'JourneyType' => 'required|integer',
            'PreferredAirlines' => 'nullable|string',

        ]);

        // Prepare the search payload with the validated data and token
        $searchPayload = [
            "EndUserIp" => $validatedData['EndUserIp'],
            "TokenId" => $token,
            "AdultCount" => $validatedData['AdultCount'],
            "ChildCount" => $validatedData['ChildCount'],
            "InfantCount" => $validatedData['InfantCount'],
            "DirectFlight" => $validatedData['DirectFlight'],
            "OneStopFlight" => $validatedData['OneStopFlight'],
            "JourneyType" => $validatedData['JourneyType'],
            "PreferredAirlines" => $validatedData['PreferredAirlines'],
            "Segments" => [
                [
                    "Origin" => $validatedData['Origin'],
                    "Destination" => $validatedData['Destination'],
                    "FlightCabinClass" => $validatedData['FlightCabinClass'],
                    "PreferredDepartureTime" => $validatedData['PreferredDepartureTime'],
                    "PreferredArrivalTime" => $validatedData['PreferredDepartureTime']
                    
                ]
            ],
            "Sources" => null
        ];


        $response = Http::timeout(100)->withHeaders([])->post('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search', $searchPayload);



        if ($response->json('Response.Error.ErrorCode') === 6) {

            $token = $this->apiService->authenticate();


            $response = Http::timeout(90)->withHeaders([])->post('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search', $searchPayload);
        }

        return     $response;
    }





    public function searchreturnflight(Request $request)
    {

        $token = $this->apiService->getToken();

        $validatedData = $request->validate([
            "EndUserIp" => 'required',
            'AdultCount' => 'required|integer',
            'Origin' => 'required|string',
            'Destination' => 'required|string',
            'FlightCabinClass' => 'required|integer',
            'PreferredDepartureTime' => 'required',
            'PreferredDepartureTime2' => 'required',
            'ChildCount' => 'nullable|integer',
            'InfantCount' => 'nullable|integer',
            'DirectFlight' => 'nullable|boolean',
            'OneStopFlight' => 'nullable|boolean',
            'JourneyType' => 'required|integer',
            'PreferredAirlines' => 'nullable|string',

        ]);

        // Prepare the search payload with the validated data and token
        $searchPayload = [
            "EndUserIp" => $validatedData['EndUserIp'],
            "TokenId" => $token,
            "AdultCount" => $validatedData['AdultCount'],
            "ChildCount" => $validatedData['ChildCount'],
            "InfantCount" => $validatedData['InfantCount'],
            "DirectFlight" => $validatedData['DirectFlight'],
            "OneStopFlight" => $validatedData['OneStopFlight'],
            "JourneyType" => $validatedData['JourneyType'],
            "PreferredAirlines" => $validatedData['PreferredAirlines'],
            "Segments" => [
                [
                    "Origin" => $validatedData['Origin'],
                    "Destination" => $validatedData['Destination'],
                    "FlightCabinClass" => $validatedData['FlightCabinClass'],
                    "PreferredDepartureTime" => $validatedData['PreferredDepartureTime'],
                    "PreferredArrivalTime" => $validatedData['PreferredDepartureTime']                 // "PreferredDepartureTime" =>$validatedData['PreferredDepartureTime'],
                    // "PreferredArrivalTime" =>$validatedData['PreferredDepartureTime']
                ],
                [
                    "Origin" => $validatedData['Destination'],
                    "Destination" => $validatedData['Origin'],
                    "FlightCabinClass" => $validatedData['FlightCabinClass'],
                    "PreferredDepartureTime" => $validatedData['PreferredDepartureTime2'],
                    "PreferredArrivalTime" => $validatedData['PreferredDepartureTime2']

                ]
            ],
            "Sources" => null
        ];


        $response = Http::timeout(100)->withHeaders([])->post('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search', $searchPayload);



        if ($response->json('Response.Error.ErrorCode') === 6) {

            $token = $this->apiService->authenticate();


            $response = Http::timeout(90)->withHeaders([])->post('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search', $searchPayload);
        }

        //  Return the search response
        return $response->json();
    }







    public function advance_search(Request $request)
    {

        $token = $this->apiService->getToken();

        $validatedData = $request->validate([
            "EndUserIp" => 'required',
            'AdultCount' => 'required|integer',
            'ChildCount' => 'nullable|integer',
            'InfantCount' => 'nullable|integer',
            "TraceId" => "required",
            "ResultIndex" => "required",
            "Source" => "required",
            "IsLCC" => "required",
            "IsRefundable" => "required",
            "AirlineRemark" => "nullable",
            "TripIndicator" => "required",
            "SegmentIndicator" => "required",
            "AirlineCode" => "required",
            "AirlineName" => "required",
            "FlightNumber" => "required",
            "FareClass" => "required",
            "OperatingCarrier" => "nullable"
        ]);

        // Prepare the search payload with the validated data and token
        $searchPayload = [
            'AdultCount' =>  $validatedData['AdultCount'],
            'ChildCount' =>  $validatedData['ChildCount'],
            'InfantCount' =>  $validatedData['InfantCount'],
            'EndUserIp' =>  $validatedData['EndUserIp'],
            'TokenId' =>  $token,
            'TraceId' =>  $validatedData['TraceId'],
            'AirSearchResult' => [
                [
                    'ResultIndex' =>  $validatedData['ResultIndex'],
                    'Source' =>  $validatedData['Source'],
                    'IsLCC' =>  $validatedData['IsLCC'],
                    'IsRefundable' => $validatedData['IsRefundable'],
                    'AirlineRemark' =>  $validatedData['AirlineRemark'],
                    'Segments' => [
                        [
                            [
                                'TripIndicator' => $validatedData['TripIndicator'],
                                'SegmentIndicator' => $validatedData['SegmentIndicator'],
                                'Airline' => [
                                    'AirlineCode' => $validatedData['AirlineCode'],
                                    'AirlineName' => $validatedData['AirlineName'],
                                    'FlightNumber' => $validatedData['FlightNumber'],
                                    'FareClass' => $validatedData['FareClass'],
                                    'OperatingCarrier' => $validatedData['OperatingCarrier'],
                                ],
                            ],
                        ],
                    ],
                ],
            ],
        ];


        $response = Http::timeout(100)->withHeaders([])->post('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/PriceRBD', $searchPayload);



        if ($response->json('Response.Error.ErrorCode') === 6) {

            $token = $this->apiService->authenticate();


            $response = Http::timeout(90)->withHeaders([])->post('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/PriceRBD', $searchPayload);
        }

        //  Return the search response
        return $response->json();
    }


    function fareRules(Request  $request)
    {
        $token = $this->apiService->getToken();

        $validatedData = $request->validate([
            "EndUserIp" => "required",
            "TraceId" => "required|string",
            "ResultIndex" => "required|string"

        ]);
        $validatedData["TokenId"] = $token;
        $response;
        $response = Http::timeout(100)->withHeaders([])->post('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/FareRule', $validatedData);
        if ($response->json('Response.Error.ErrorCode') === 6) {

            $token = $this->apiService->authenticate();


            $response = Http::timeout(100)->withHeaders([])->post('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/FareRule', $validatedData);
        }
        return $response;
    }







    function ssrrequest(Request $request)
    {
        $token = $this->apiService->getToken();


        $validatedData = $request->validate([
            "EndUserIp" => 'required',
            "TraceId" => "required",
            "ResultIndex" => "required",
        ]);

        $searchpayload = [
            "EndUserIp" => $validatedData["EndUserIp"],
            "TokenId" => $token,
            "TraceId" => $validatedData["TraceId"],
            "ResultIndex" => $validatedData["ResultIndex"]
        ];


        $response = Http::timeout(100)->withHeaders([])->post('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/SSR', $searchpayload);
        if ($response->json('Response.Error.ErrorCode') === 6) {

            $token = $this->apiService->authenticate();


            $response = Http::timeout(100)->withHeaders([])->post('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/SSR', $searchpayload);
        }
        return $response;
    }



    function farequate(Request  $request)
    {
        $token = $this->apiService->getToken();

        $validatedData = $request->validate([
            "EndUserIp" => "required",
            "TraceId" => "required|string",
            "ResultIndex" => "required|string"

        ]);
        $validatedData["TokenId"] = $token;
        $response;
        $response = Http::timeout(100)->withHeaders([])->post('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/FareQuote', $validatedData);
        if ($response->json('Response.Error.ErrorCode') === 6) {

            $token = $this->apiService->authenticate();


            $response = Http::timeout(100)->withHeaders([])->post('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/FareQuote', $validatedData);
        }
        return $response;
    }
}

<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use App\Models\ApiToken;

class ApiService
{
    private $clientId;
    private $username;
    private $password;

    public function __construct()
    {
        $this->clientId = env('API_CLIENT_ID');
        $this->username = env('API_USERNAME');
        $this->password = env('API_PASSWORD');
    }

    public function authenticate()
    {
        $response = Http::post('http://api.tektravels.com/SharedServices/SharedData.svc/rest/Authenticate', [
            'ClientId' => $this->clientId,
            'UserName' => $this->username,
            'Password' => $this->password,
            'EndUserIp' => request()->ip(),
        ]);

        \Log::info('API Response: ', ['response' => $response->json()]);

        if ($response->successful()) {
            $data = $response->json();

            // Check if TokenId exists in the response
            if (!isset($data['TokenId']) || empty($data['TokenId'])) {
                \Log::error('TokenId missing in API response', ['response' => $data]);
                throw new \Exception('TokenId missing in API response');
            }

            $token = $data['TokenId'];
            $expiresAt = now()->addHours(18);

            ApiToken::updateOrCreate(
                ['id' => 1], // Assuming a single record to manage the token
                ['token' => $token, 'expires_at' => $expiresAt]
            );

            return $token;
        } else {
            \Log::error('Authentication API failed', ['status' => $response->status(), 'body' => $response->body()]);
            throw new \Exception('Authentication failed: ' . $response->body());
        }
    }

    public function getToken()
    {
        $tokenData = ApiToken::first();

        // Check if token exists and is still valid
        if ($tokenData && now()->lessThan($tokenData->expires_at)) {
            return $tokenData->token;
        }

        // Re-authenticate if token is expired or not found
        return $this->authenticate();
    }
}

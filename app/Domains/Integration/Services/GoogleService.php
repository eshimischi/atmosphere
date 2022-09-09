<?php
namespace App\Domains\Integrations\Services;

use App\Domains\Integration\Models\Integration;
use Exception;
use Google\Client as GoogleClient;
use Google\Service\Calendar;
use Google\Service\Gmail;

class GoogleService
{

    public static function requestAccessToken($data, $user) {
        $client = new GoogleClient([
            "client_id" => config('integrations.google.client_id')
        ]);
        $client->addScope([
            Gmail::GMAIL_READONLY,
        ]);
        $client->setRedirectUri(config('app.url') . "/services/accept-oauth");
        $client->setAccessType('offline');
        $client->setLoginHint($user->email);
        $client->setApprovalPrompt('force');
        $client->setIncludeGrantedScopes(true);

        $authUrl = $client->createAuthUrl();
        if ($authUrl) {
            self::storeIntegration($data, $user);
        }
        return $authUrl;
    }

    public static function getConfigPath() {
        return base_path(config("integrations.google.credentials_path"));
    }

    public static function setTokens($data, $user, $integrationId = null) {
        if (!$integrationId && $_GET['code']) {
            $client = new GoogleClient([ 'client_id' => config('integrations.google.client_id')]);
            $client->setAuthConfig(self::getConfigPath());
            $client->setAccessType('offline');
            $userIdToken = $_GET['code'];
            $tokenResponse = $client->fetchAccessTokenWithAuthCode($userIdToken);
            $integration = Integration::where([
                'user_id' => $user->id,
                'team_id' => $user->current_team_id,
                'name' => 'Google'
            ])->first();
            $googleUser = $client->verifyIdToken($tokenResponse["id_token"]);
            if ($googleUser['email'] == $user->email) {
                $integration->token = json_encode($tokenResponse);
                $integration->save();
                return;
            }
            throw new Exception("Error obtaining the token" . $googleUser['email']);
        } else if ($integrationId) {
            $integration = Integration::find($integrationId);
            $integration->token = json_encode($data->access_token);
            return;
        };
    }

    public static function getClient($integrationId) {
        $integration = Integration::find($integrationId);
        $client = new GoogleClient();
        $client->setAuthConfig(self::getConfigPath());

        if ($integration->token) {
            $accessToken = json_decode($integration->token, true);
        }

        $client->setAccessToken($accessToken);

        if ($client->isAccessTokenExpired()) {
            dd($accessToken);
            if ($refreshToken = $client->getRefreshToken()) {
                $tokenResponse = $client->fetchAccessTokenWithRefreshToken($refreshToken);
                self::setTokens((object) [
                    'access_token' => $tokenResponse,
                ],
                $integration->user,
                $integrationId);
            } else {
                throw new Exception("Need authorize again");
            }
        }
        return $client;
    }

    public static function storeIntegration($data, $user) {
        Integration::updateOrCreate([
            "team_id" => $user->current_team_id,
            "user_id" => $user->id,
            "name" => $data->service_name,
            "automation_service_id" => $data->service_id
        ], [
            "hash" => $user->email
        ]);
    }


}

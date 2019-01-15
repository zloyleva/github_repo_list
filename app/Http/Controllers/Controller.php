<?php

namespace App\Http\Controllers;

use GuzzleHttp\Psr7\Response;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

use GuzzleHttp\Exception\ClientException;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * @param $defaultResponse
     * @param int $status
     * @return \Illuminate\Http\JsonResponse
     */
    protected function jsonResponse($defaultResponse, int $status = 200)
    {

        if ($defaultResponse instanceof Response) {
            $defaultResponse = ["data" => json_decode($defaultResponse->getBody()->getContents())];
        }elseif ($defaultResponse instanceof ClientException) {
            $errors = $defaultResponse->getResponse();
            $status = $errors->getStatusCode();
            $defaultResponse = ['message' => json_decode($errors->getBody()->getContents())];
        }

        return response()->json($defaultResponse, $status);
    }
}

<?php

namespace App\Library\GithubApi;

use GuzzleHttp\Exception\ServerException;
use GuzzleHttp\Psr7;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\ConnectException;
use GuzzleHttp\Exception\RequestException;

class GithubApi{
    protected $url = "https://api.github.com/";

    public $client = null;

    public function __construct(){
        $this->client = new \GuzzleHttp\Client();
    }

    /**
     * @return \Exception|ClientException|ConnectException|RequestException|ServerException|\Psr\Http\Message\ResponseInterface
     */
    public function getAllPublicRepos(){

        try{
            return $this->makeRequest("repositories");
        }catch (RequestException | ConnectException | ServerException | ClientException $e){
            return $e;
        }
    }

    /**
     * @param string $query
     * @return \Psr\Http\Message\ResponseInterface
     */
    private function makeRequest(string $query){
        return $this->client->get($this->url.$query);
    }
}

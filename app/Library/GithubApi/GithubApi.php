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
        return $this->makeRequest("repositories");
    }

    /**
     * @param string $owner
     * @param string $repo
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function getSingleRepo(string $owner, string $repo){
        return $this->makeRequest("repos/$owner/$repo");
    }

    /**
     * @param string $query
     * @return \Psr\Http\Message\ResponseInterface
     */
    private function makeRequest(string $query){
        try{
            return $this->client->get($this->url.$query);
        }catch (RequestException | ConnectException | ServerException | ClientException $e){
            return $e;
        }
    }
}

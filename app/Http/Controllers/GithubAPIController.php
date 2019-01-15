<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Library\GithubApi\GithubApi;

class GithubAPIController extends Controller
{
    /**
     * @param GithubApi $githubApi
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(GithubApi $githubApi){
        return $this->jsonResponse($githubApi->getAllPublicRepos());
    }
}

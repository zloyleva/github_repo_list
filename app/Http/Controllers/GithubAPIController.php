<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Library\GithubApi\GithubApi;

class GithubAPIController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    /**
     * @param GithubApi $githubApi
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(GithubApi $githubApi){
        return $this->jsonResponse($githubApi->getAllPublicRepos());
    }

    /**
     * @param string $owner
     * @param string $repo
     * @param GithubApi $githubApi
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(string $owner, string $repo, GithubApi $githubApi){
        return $this->jsonResponse($githubApi->getSingleRepo($owner,$repo));
    }
}

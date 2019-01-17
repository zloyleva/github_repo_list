<?php

namespace App\Http\Controllers;

use App\Models\ReposRate;
use Illuminate\Http\Request;

class ReposRateController extends Controller
{
    public function __construct(){
        $this->middleware('auth:api');
    }

    /**
     * @param Request $request
     * @param ReposRate $rate
     * @return mixed
     */
    public function index(Request $request, ReposRate $rate){
        $user_id = auth()->id();
        return $rate->getListData($request->repos_id,$user_id);
    }

    /**
     * @param Request $request
     * @param ReposRate $rate
     * @return mixed
     */
    public function update(Request $request, ReposRate $rate){
        $user_id = auth()->id();
        return $rate->setRate($request->repo_id,$request->status, $user_id);
    }

    /**
     * @param Request $request
     * @param ReposRate $rate
     * @return mixed
     */
    public function show(Request $request, ReposRate $rate){
        return $rate->getRateByRepo($request->repo_id);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    /**
     * @param string $owner
     * @param string $repo
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show(string $owner, string $repo)
    {
        //Todo add validation(and/or Form request...)
        return view('repo',[
            "query" =>[
                "owner" => $owner,
                "repo" => $repo,
            ]
        ]);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ReposRate extends Model
{
    protected $fillable = ["repo_id","user_id","status"];

    /**
     * @param array $list
     * @param int $user_id
     * @return mixed
     */
    public function getListData(array $list, int $user_id){
        return $this->whereIn("repo_id", $list)->where("user_id",$user_id)->get();
    }

    /**
     * @param int $repo_id
     * @param int $status
     * @param int $user_id
     * @return mixed
     */
    public function setRate(int $repo_id, int $status, int $user_id){
        return $this->updateOrCreate(
            ["repo_id" => $repo_id, "user_id" => $user_id],
            ["status" => $status]
        );
    }

    /**
     * @param int $repo_id
     * @return mixed
     */
    public function getRateByRepo(int $repo_id){
        return $this->select(
            DB::raw('count( IF ( status = 1, 1, NULL) ) as rate_like'),
            DB::raw('count( IF ( status = 0, 1, NULL) ) as rate_unlike')
        )
            ->where('repo_id', $repo_id)
            ->first();
    }
}

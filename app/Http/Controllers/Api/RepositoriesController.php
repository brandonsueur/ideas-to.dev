<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController as BaseController;

use App\Http\Resources\RepositoryResource;
use App\Repository;
use Illuminate\Http\Request;

use App\Like;
use Validator;

class RepositoriesController extends BaseController
{
    public function index()
    {
        $repositories = Repository::all();

        return RepositoryResource::collection($repositories);
    }

    public function show($id)
    {
        $repository = Repository::where('id', '=', $id)->first();

        return RepositoryResource::make($repository);
    }

    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'address_ip' => 'required',
            'user_id' => 'required',
            'idea_id' => 'required',
            'name' => 'required',
            'link' => 'link'
        ]);

        if($validator->fails()) $validator->errors();

        $data = [
            'user_id' => $input['user_id'],
            'idea_id' => $input['idea_id'],
            'address_ip' => $request->ip(),

        ];

        Like::create($data);

        return response()->json(['data' =>  $data],201);
    }
}

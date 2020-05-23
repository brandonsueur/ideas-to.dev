<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController as BaseController;

use Illuminate\Http\Request;


use App\Like;
use Validator;

class LikesController extends BaseController
{
    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'address_ip' => 'required',
            'user_id' => 'nullable',
            'idea_id' => 'required'
        ]);

        if ($validator->fails()) $validator->errors();

        $ifExist = Like::all()
            ->where('idea_id', '=', $input['idea_id'])
            ->where('address_ip', '=', $request->ip())
            ->count();

        if ($ifExist == 0) {
            $data = [
                'user_id' => isset($input['user_id']) ? $input['user_id'] : null,
                'idea_id' => $input['idea_id'],
                'address_ip' => $request->ip(),
            ];

            Like::create($data);

            $countLikes = Like::all()
                ->where('idea_id', '=', $input['idea_id'])
                ->count();

            return response()->json(['countLikes' => $countLikes, 'data' =>  $data], 201);
        } else {
            $countLikes = Like::all()
                ->where('idea_id', '=', $input['idea_id'])
                ->count();

            return response()->json(['countLikes' => $countLikes], 401);
        }
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller as Controller;
use App\Newsletter;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    public function newsletter(Request $request){
        $input = $request->all();

        $validator = Validator::make($input, [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required',
            'address_ip' => 'required',
        ]);

        if($validator->fails()) $validator->errors();

        $ifExist = Newsletter::all()
            ->where('email', '=', $input['email'])
            ->where('address_ip', '=', $request->ip())
            ->count();

        if(!$ifExist){
            $data = [
                'fist_name' => $input['fist_name'] || '',
                'last_name' => $input['last_name'] || '',
                'email' => isset($input['email']) ? $input['email'] : null,
                'address_ip' => $request->ip(),
            ];

            Newsletter::create($data);

            return response()->json(['already_registered' => false, 'data' => $data], 201);
        } else {
            return response()->json(['already_registered' => true], 401);
        }
    }
}

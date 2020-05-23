<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller as Controller;
use App\Newsletter;
use Illuminate\Http\Request;

use Validator;

class BaseController extends Controller
{
    public function newsletter(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'email' => 'required',
        ]);

        $request->request->add([
            'address_ip' => request()->ip(),
        ]);

        if ($validator->fails()) return $validator->errors();

        $ifExist = Newsletter::all()
            ->where('email', '=', $input['email'])
            ->where('address_ip', '=', $request->ip())
            ->count();

        if (!$ifExist) {
            $data = [
                'first_name' => $request->get('first_name'),
                'last_name' => $request->get('last_name'),
                'email' => $request->get('email'),
                'address_ip' => $request->ip(),
            ];

            Newsletter::create($data);

            return response()->json(['data' => $data], 201);
        } else {
            return response()->json(['message' => 'Already registered'], 401);
        }
    }
}

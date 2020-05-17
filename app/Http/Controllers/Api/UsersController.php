<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;

class UsersController extends Controller
{
  public function login()
  {
    if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
      $user = Auth::user();
      $success['token'] = $user->createToken('MyApp')->accessToken;

      return response()->json(['success' => $success], 200);
    } else {
      return response()->json(['error' => 'Unauthorised'], 401);
    }
  }

  public function register(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'name' => 'required',
      'email' => 'required|email',
      'password' => 'required',
      'c_password' => 'required|same:password',
    ]);

    if ($validator->fails()) {
      return response()->json(['error' => $validator->errors()], 401);
    }

    $input = $request->all();
    $input['password'] = bcrypt($input['password']);
    $user = User::create($input);
    $success['token'] =  $user->createToken('MyApp')->accessToken;
    $success['name'] =  $user->name;

    return response()->json(['success' => $success], 200);
  }

  public function details()
  {
    $user = Auth::user();

    return response()->json(['success' => $user], 200);
  }

  public function logout(Request $request)
  {
      $request->user()->token()->revoke();
      return response()->json([
          'message' => 'Successfully logged out'
      ]);
  }

  public function user(Request $request)
  {
    return response()->json($request->user());
  }
}

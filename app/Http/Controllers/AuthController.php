<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'photo' => 'image|mimes:jpeg,png,jpg|max:5048',
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255|unique:users',
            'phone' => 'required|unique:users,phone',
            'password' => 'required|string|min:8',
            // 'level_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $photo = $request->file('photo');

        if ($photo) {
            $fileName = time() . '_' . $photo->getClientOriginalName();
            $filePath = $photo->storeAs('images/users', $fileName, 'public');
        }

        $phone = $request['phone'];

        if ($request['phone'][0] == '0') {
            $phone = substr($phone, 1);
        }

        if ($phone[0] == '8') {
            $phone = '62' . $phone;
        }

        $user = new User;
        $user->photo = $filePath ?? null;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $phone;
        $user->password = Hash::make($request->password);
        $user->save();
        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'data' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer'
        ]);
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }

        $user = User::where('email', $request->email)->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login success',
            'access_token' => $token,
            'token_type' => 'Bearer'
        ]);
    }

    public function logout()
    {
        Auth::user()->tokens()->delete();
        return response()->json([
            'message' => 'logout success'
        ]);
    }
}

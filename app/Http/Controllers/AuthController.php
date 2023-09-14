<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function register(Request $request): JsonResponse
    {
        // Validate the request data
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422); // Return validation errors if any
        }

        DB::table('users')->insert([
            'name' => 'karan', 
            'email' => $request->input('email'),
            'email_verified_at' => now(),
            'password' => bcrypt($request->input('password')), 
            'remember_token' => '3', 
            'created_at' => now(),
            'updated_at' => now()
        ]);

        return response()->json(['message' => 'User registered successfully'], 201);
    }
}

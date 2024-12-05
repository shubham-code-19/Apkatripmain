<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\apkatripuser;
use Illuminate\Support\Facades\Hash;


class SiteUser extends Controller
{
    //

    public function signupUser(Request $request)
    {

        $validate = $request->validate([
            "name" => "required",
            "number" => "null",
            "password" => "required|min:6"
        ]);

        $allreadyuser = apkatripuser::where("number", $validate["number"])->first();

        if ($allreadyuser) {
            return response()->json(["message" => "Number allready exist", "success" => false]);
        }

        // return $allreadyuser;


        $addUser = apkatripuser::create([
            "name" => $validate["name"],
            "number" => $validate["number"],
            "password" => $validate["password"],
        ]);






        return response()->json([
            'message' => 'User registered successfully',
            'success' => true,
            'info' => $addUser,
        ]);
    }






    public function loginUser(Request $request)
    {
        $validate = $request->validate([
            "number" => "required",
            "password" => "required|min:6",
        ]);

        $verifyemail = apkatripuser::where("number", $validate["number"])->first();



        if (!$verifyemail) {
            return response()->json(["message" => "Enter valide data", "success" => false]);
        }

        $verifypass = Hash::check($validate["password"], $verifyemail->password);
        if (!$verifypass) {
            return response()->json(["message" => "Enter valide data", "success" => false]);
        }

        return response()->json(["message" => "User register", "success" => true, "info" => $verifyemail]);
    }
}

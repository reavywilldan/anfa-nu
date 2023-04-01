<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FileController extends Controller
{
    public function uploadImage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'photo' => 'required|image|mimes:jpeg,png,jpg|max:5048',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $photo = $request->file('photo');
        $path = $request->query('path') ?? 'news';

        if ($photo) {
            $fileName = time() . '_' . $photo->getClientOriginalName();
            $filePath = $photo->storeAs($path, $fileName, ['disk' => 'public_img']);
        }

        return response()->json([
            'data' => $filePath
        ]);
    }
}

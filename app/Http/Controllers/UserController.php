<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function index()
    {
        $user = User::select('id', 'name', 'email', 'phone')
            ->orderBy('created_at', 'DESC')
            ->simplePaginate(10);

        return $user;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255|unique:users',
            'phone' => 'required|unique:users,phone',
            'password' => 'required|string|min:8'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $phone = $request['phone'];

        if ($request['phone'][0] == '0') {
            $phone = substr($phone, 1);
        }

        if ($phone[0] == '8') {
            $phone = '62' . $phone;
        }

        $user = new User;
        $user->photo = null;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $phone;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json([
            'data' => $user
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::findOrFail($id);
        return $user;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'string|max:255',
            'email' => 'string|max:255',
            'phone' => '',
            'password' => ''
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $user = User::findOrFail($id);

        if ($request->name) {
            $user->name = $request->name;
        }

        if ($request->email) {
            $user->email = $request->email;
        }

        if ($request->phone) {
            $user->phone = $request->phone;
        }

        if ($request->password) {
            $user->password = Hash::make($request->password);
        }

        $user->save();

        if ($user) {
            return response()->json([
                'data' => $user
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);

        if ($user->delete()) {
            return response()->json([
                'data' => 'success delete'
            ]);
        } else {
            return response()->json([
                'data' => 'failed delete'
            ]);
        }
    }
}

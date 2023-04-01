<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Collection;

use App\Models\NewsCategory;

class NewsCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['index', 'show', 'getAll']);
    }

    public function index(Request $request)
    {
        $search = $request->query('search');

        $newsCategory = NewsCategory::query();
        $newsCategory->select('id', 'name', 'created_at');

        if ($search) {
            $newsCategory->where('name', 'like', '%' . $search . '%');
        }

        $newsCategory->orderBy('created_at', 'DESC');

        return new Collection(
            $newsCategory->simplePaginate(10)
        );
    }

    public function getAll()
    {
        $newsCategory = NewsCategory::orderBy('name', 'ASC')->get();

        return response()->json([
            'data' => $newsCategory
        ]);
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
            'name' => 'required|string|max:255|unique:news_category',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $newsCategory = new NewsCategory;
        $newsCategory->name = $request->name;

        $newsCategory->save();

        return response()->json([
            'data' => $newsCategory
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
        $newsCategory = NewsCategory::findOrFail($id);
        return $newsCategory;
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
            'name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $newsCategory = NewsCategory::findOrFail($id);
        $newsCategory->name = $request->name;

        $newsCategory->save();

        if ($newsCategory) {
            return response()->json([
                'data' => $newsCategory
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
        $newsCategory = NewsCategory::findOrFail($id);

        if ($newsCategory->delete()) {
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

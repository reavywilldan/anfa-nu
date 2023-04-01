<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Collection;

use App\Models\News;
use App\Models\NewsCategoryList;
use App\Models\NewsMedia;

class PromoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['index', 'show']);
    }

    public function index(Request $request)
    {
        $search = $request->query('search');
        $limit = $request->query('limit') ?? 10;

        $news = News::query();
        $news->select('id', 'username', 'title', 'created_at');
        $news->where('type', '=', 'promotion');

        if ($search) {
            $news->where(function ($query) use ($search) {
                return $query
                    ->where('username', 'like', '%' . $search . '%')
                    ->orWhere('title', 'like', '%' . $search . '%');
            });
        }

        $news->with('oldestNewsMedia')->orderBy('created_at', 'DESC');

        return new Collection(
            $news->simplePaginate($limit)
        );
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
            'username' => 'required|string',
            'title' => 'required|string|max:255',
            'text' => 'required|string',
            'category' => 'required|array',
            'photo' => 'required|array'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $news = new News;
        $news->username = $request->username;
        $news->title = $request->title;
        $news->text = $request->text;
        $news->type = 'promotion';
        $news->save();

        $idNews = $news['id'];

        $arrCategory = $request->category;
        $arrPhoto = $request->photo;

        if (count($arrCategory) < 1) {
            return response()->json([
                "category" => [
                    "The category field is empty."
                ]
            ]);
        }

        if (count($arrPhoto) < 1) {
            return response()->json([
                "photo" => [
                    "The photo field is empty."
                ]
            ]);
        }

        foreach ($arrCategory as $data) {
            $newsCategoryList = new NewsCategoryList;
            $newsCategoryList->id_news = $idNews;
            $newsCategoryList->id_category = $data;
            $newsCategoryList->save();
        }

        foreach ($arrPhoto as $data) {
            $newsMedia = new NewsMedia;
            $newsMedia->id_news = $idNews;
            $newsMedia->name = $data;
            $newsMedia->save();
        }

        return response()->json([
            'data' => $news
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
        $news = News::where('type', '=', 'promotion')
            ->with('newsMedia')
            ->with(['newsCategoryList' => function ($query) {
                $query->join('news_category', 'news_category.id', '=', 'news_category_list.id_category')
                    ->select([
                        'news_category_list.*',
                        'news_category.name'
                    ]);
            }])
            ->findOrFail($id);

        return $news;
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $news = News::findOrFail($id)->where('type', '=', 'promotion');

        if ($news) {
            $newsMedia = NewsMedia::select('id', 'name')->where('id_news', '=', "$id")->get();
            $newsCategoryList = NewsCategoryList::select('id', 'id_category')->where('id_news', '=', "$id")->get();

            foreach ($newsMedia as $data) {
                $path = public_path('img/' . $data['name']);

                if (File::exists($path)) {
                    File::delete($path);
                }

                $newsMediaById = NewsMedia::findOrFail($data['id']);
                $newsMediaById->delete();
            }

            foreach ($newsCategoryList as $data) {
                $newsCategoryListById = NewsCategoryList::findOrFail($data['id']);
                $newsCategoryListById->delete();
            }

            if ($news->delete()) {
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
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsCategoryList extends Model
{
    use HasFactory;

    protected $table = "news_category_list";
    public $incrementing = true;

    public function news()
    {
        return $this->belongsTo(News::class, 'id');
    }

    public function newsCategory()
    {
        return $this->belongsTo(NewsCategory::class, 'id');
    }
}

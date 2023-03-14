<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $table = "news";
    public $incrementing = true;

    public function newsMedia()
    {
        return $this->hasMany(NewsMedia::class, 'id_news');
    }

    public function oldestNewsMedia()
    {
        return $this->hasOne(NewsMedia::class, 'id_news');
    }

    public function newsCategoryList()
    {
        return $this->hasMany(NewsCategoryList::class, 'id_news');
    }
}

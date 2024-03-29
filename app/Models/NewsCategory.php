<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsCategory extends Model
{
    use HasFactory;

    protected $table = "news_category";
    public $incrementing = true;

    public function newsCategoryList()
    {
        return $this->hasMany(NewsCategoryList::class, 'id_category');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsMedia extends Model
{
    use HasFactory;

    protected $table = "news_media";
    public $incrementing = true;

    public function news()
    {
        return $this->belongsTo(News::class, 'id');
    }
}

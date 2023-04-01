<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductSubmission extends Model
{
    use HasFactory;

    protected $table = "product_submission";
    public $incrementing = true;
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = ['id'];

    public function ideas()
    {
        return $this->belongsTo(Idea::class, 'id', 'category_id')->where('status', 1);
    }
}

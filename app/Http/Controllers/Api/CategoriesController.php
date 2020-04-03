<?php

namespace App\Http\Controllers\Api;

use App\Category;
use App\Http\Controllers\Api\BaseController as BaseController;

use App\Http\Resources\CategoryResource;

class CategoriesController extends BaseController
{
    public function index()
    {
        $categories = Category::withCount('ideas')->get();

        return CategoryResource::collection($categories);
    }

    public function show($id)
    {
        $category = Category::query()
            ->withCount('ideas')
            ->where('id', '=', $id)
            ->first();

        return CategoryResource::make($category);
    }
}

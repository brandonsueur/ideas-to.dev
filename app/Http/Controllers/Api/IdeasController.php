<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController as BaseController;

use App\Http\Resources\IdeaResource;
use App\Idea;

class IdeasController extends BaseController
{
    public function index()
    {
        $ideas = Idea::withCount('likes')
            ->with('category')
            ->where('display', true)
            ->where('draft', false)
            ->get();

        return IdeaResource::collection($ideas);
    }

    public function category($id)
    {
        $ideas = Idea::query()
            ->withCount('likes')
            ->where('category_id', $id)
            ->where('display', true)
            ->where('draft', false)
            ->get();

        return IdeaResource::collection($ideas);
    }

    public function show($id)
    {
        $idea = Idea::withCount('likes')
            ->with('category')
            ->where('display', true)
            ->where('draft', false)
            ->where('id', '=', $id)
            ->first();

        return IdeaResource::make($idea);
    }
}

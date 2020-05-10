<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController as BaseController;

use App\Http\Resources\IdeaResource;
use App\Idea;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use Validator;


class IdeasController extends BaseController
{
    public function index()
    {
        $ideas = Idea::published()->with('category')->get();

        return IdeaResource::collection($ideas);
    }

    public function all()
    {
        $ideas = Idea::all()->where('status', '!=', 1);

        return IdeaResource::collection($ideas);
    }

    public function category($id)
    {
        $ideas = Idea::published()
            ->where('id', '=')
            ->get();

        return IdeaResource::collection($ideas);
    }

    public function show($id)
    {
        $idea = Idea::published()
            ->withCount('likes')
            ->with('category')
            ->where('id', '=', $id)
            ->first();

        return IdeaResource::make($idea);
    }

    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'title' => [
                'min:2',
                'max:120',
                'required',
                'unique:ideas,title',
            ],
            'content' => [
                'required',
                'min:10',
            ],
            'category_id' => [
                'required',
                'exists:categories,id'
            ],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $data = [
            'user_id' => 0,
            'title' => $input['title'],
            'slug' => Str::slug($input['title'], '-'),
            'content' => $input['content'],
            'category_id' => $input['category_id'],
        ];

        Idea::create($data);

        return response()->json(['data' =>  $data], 201);
    }
}

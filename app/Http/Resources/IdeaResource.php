<?php

namespace App\Http\Resources;

use App\Like;
use Illuminate\Http\Resources\Json\JsonResource;

class IdeaResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'category' => CategoryResource::make($this->whenLoaded('category')),
            'title' => (string) $this->title,
            'slug' => (string) $this->slug,
            'content' => (string) $this->content,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'likes_count' => Like::all()->where('idea_id', '=', $this->id)->count()
        ];
    }
}

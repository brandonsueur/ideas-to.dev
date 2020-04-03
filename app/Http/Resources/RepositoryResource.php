<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RepositoryResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => (int) $this->user_id,
            'idea_id' => (int) $this->idea_id,
            'name' => (string) $this->name,
            'link' => (string) $this->string,

            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}

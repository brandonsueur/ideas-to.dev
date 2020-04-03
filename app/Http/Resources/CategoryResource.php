<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\MissingValue;

class CategoryResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'icon' => (string) $this->icon,
            'name' => (string) $this->name,
            'color' => (string) $this->color,
            'ideas_count' => (int) $this->ideas_count ?? new MissingValue()
        ];
    }
}

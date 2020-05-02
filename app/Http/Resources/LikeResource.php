<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LikeResource extends JsonResource
{
  public function toArray($request)
  {
    return [
      'id' => $this->id,
      'user_id' => (string) $this->user_id,
      'idea_id' => (string) $this->idea_id
    ];
  }
}

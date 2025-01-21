<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class University extends Model
{
    use HasFactory;

    protected $fillable = ['university_id','name', 'location','type', 'established_year', 'location','description','website','logo_image']; // Add relevant fields

    public function colleges()
    {
        return $this->hasMany(College::class);
    }

    public function location()
    {
        return $this->belongsTo(Location::class);
    }
}

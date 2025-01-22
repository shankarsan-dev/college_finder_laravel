<?php

// namespace App\Models;
// use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;

// class University extends Model
// {
//     use HasFactory;

//     protected $fillable = ['university_id','name', 'location','type', 'established_year', 'location','description','website','logo_image']; // Add relevant fields

//     public function colleges()
//     {
//         return $this->hasMany(College::class);
//     }

//     public function location()
//     {
//         return $this->belongsTo(Location::class);
//     }
// }


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class University extends Model
{
    use HasFactory;

    protected $table = 'universities';

    // Define the fillable attributes
    protected $fillable = [
        'name',
        'type',
        'established_year',
        'location',
        'description',
        'website',
        'logo_image',
        'college_id',
    ];

    /**
     * Relationship with College
     */
    public function college()
    {
        return $this->belongsTo(College::class, 'college_id');
    }
}

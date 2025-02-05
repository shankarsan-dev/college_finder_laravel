<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    // Table associated with the Course model
    protected $table = 'courses';

    // The primary key for the table (optional if it's 'id' by default)
    protected $primaryKey = 'course_id';

    // Fields that are mass assignable
    // protected $fillable = [
    //     'full_name', 'duration', 'level', 'department', 'short_name', 'eligibility', 'college_id', 'university', 'created_at', 'updated_at'
    // ];

    // Define the relationship between Course and College (Many-to-One)
    public function college()
    {
        return $this->belongsTo(College::class, 'college_id', 'college_id');
    }
}

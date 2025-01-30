<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class College extends Model
{
    use HasFactory;

    // Table associated with the College model
    protected $table = 'Colleges';

    // The primary key for the table (optional if it's 'id' by default)
    protected $primaryKey = 'id';

    // Fields that are mass assignable
    // protected $fillable = [
    //     'name', 'city', 'email', 'phone', 'website', 'created_at', 'updated_at'
    // ];

    // Define the relationship between College and Courses (One-to-Many)
    public function courses()
    {
        return $this->hasMany(Course::class, 'college_id', 'college_id');
    }
    // public function universities()
    // {
    //     return $this->hasMany(University::class, 'college_id', 'college_id');
    // }
}

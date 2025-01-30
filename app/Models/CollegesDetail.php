<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CollegesDetail extends Model
{
    use HasFactory;

    // Table associated with the College model
     protected $table = 'colleges_details';

    // The primary key for the table (optional if it's 'id' by default)
    protected $primaryKey = 'id';

    // Fields that are mass assignable
    // protected $fillable = [
    //     'name', 'city', 'email', 'phone', 'website', 'created_at', 'updated_at'
    // ];
}

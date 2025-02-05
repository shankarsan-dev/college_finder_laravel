<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Exception;

class CourseController extends Controller
{
    // Display a listing of all courses
    // public function index()
    // {
    //     try {
    //         $courses = Course::all()->groupBy('full_name,university',);
    //         return response()->json($courses);
    //     } catch (Exception $e) {
    //         return response()->json(['error' => 'Failed to retrieve courses', 'message' => $e->getMessage()], 500);
    //     }
    // }


    public function index()
    {
        try {
            $courses = Course::all();
            return response()->json($courses);
        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to retrieve courses', 'message' => $e->getMessage()], 500);
        }
    }
    
}
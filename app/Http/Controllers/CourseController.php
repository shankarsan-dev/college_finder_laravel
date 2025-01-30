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


    // Display courses based on the level (e.g., 'Bachelor')
    public function getByLevel($level)
    {
        try {
            $courses = Course::where('level', $level)->get();
            return response()->json($courses);
        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to retrieve courses by level', 'message' => $e->getMessage()], 500);
        }
    }

    // Create a new course
    public function store(Request $request)
    {
        try {
            $request->validate([
                'full_name' => 'required|string',
                'duration' => 'required|string',
                'level' => 'required|string',
                'department' => 'required|string',
                'short_name' => 'nullable|string',
                'eligibility' => 'nullable|string',
                'college_id' => 'required|exists:colleges,college_id',
                'university' => 'nullable|string'
            ]);

            $course = Course::create($request->all());
            return response()->json($course, 201);
        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to create course', 'message' => $e->getMessage()], 500);
        }
    }

    // Update a course
    public function update(Request $request, $course_id)
    {
        try {
            $course = Course::findOrFail($course_id);
            $course->update($request->all());
            return response()->json($course);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Course not found'], 404);
        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to update course', 'message' => $e->getMessage()], 500);
        }
    }

    // Delete a course
    public function destroy($course_id)
    {
        try {
            $course = Course::findOrFail($course_id);
            $course->delete();
            return response()->json(['message' => 'Course deleted successfully']);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Course not found'], 404);
        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to delete course', 'message' => $e->getMessage()], 500);
        }
    }
}

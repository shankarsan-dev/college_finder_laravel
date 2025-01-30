<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CollegeController;
use App\Http\Controllers\CollegeDetailController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\UniversityController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
// Route::post('/colleges/filter/', [CollegeController::class, 'filterColleges']);
//Route::get('/colleges', [CollegeController::class, 'index']);
Route::get('/colleges', [CollegeDetailController::class,'index']); // Get all colleges
Route::get('/colleges/{college_id}', [CollegeDetailController::class,'findCollegeById']); // Get all colleges

// Route::get('/colleges/{college_id}/courses', [CollegeController::class, 'showCourses']);
// Get courses for a specific college
// Route::post('/colleges', [CollegeController::class, 'store']); // Create a new college
// Route::put('/colleges/{college_id}', [CollegeController::class, 'update']); // Update a college
// Route::delete('/colleges/{college_id}', [CollegeController::class, 'destroy']); // Delete a college

// Course Routes
Route::get('/courses', [CourseController::class, 'index']); // Get all courses
Route::get('/courses', [CourseController::class, 'index']);
Route::get('/courses/level/{level}', [CourseController::class, 'getByLevel']); // Get courses by level (e.g., Bachelor)
Route::post('/courses', [CourseController::class, 'store']); // Create a new course
Route::put('/courses/{course_id}', [CourseController::class, 'update']); // Update a course
Route::delete('/courses/{course_id}', [CourseController::class, 'destroy']); // Delete a course


//university routes
Route::get('/universities', [UniversityController::class, 'index']);



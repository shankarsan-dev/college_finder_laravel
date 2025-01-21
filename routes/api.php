<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CollegeController;
use App\Http\Controllers\CourseController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::get('colleges', [CollegeController::class, 'index']);
// //Route::post('colleges', [CollegeController::class, 'store']);
// College Routes
Route::get('/colleges', [CollegeController::class, 'index']); // Get all colleges
Route::get('/colleges/{college_id}/courses', [CollegeController::class, 'showCourses']); // Get courses for a specific college
Route::post('/colleges', [CollegeController::class, 'store']); // Create a new college
Route::put('/colleges/{college_id}', [CollegeController::class, 'update']); // Update a college
Route::delete('/colleges/{college_id}', [CollegeController::class, 'destroy']); // Delete a college

// Course Routes
Route::get('/courses', [CourseController::class, 'index']); // Get all courses
Route::get('/courses/level/{level}', [CourseController::class, 'getByLevel']); // Get courses by level (e.g., Bachelor)
Route::post('/courses', [CourseController::class, 'store']); // Create a new course
Route::put('/courses/{course_id}', [CourseController::class, 'update']); // Update a course
Route::delete('/courses/{course_id}', [CourseController::class, 'destroy']); // Delete a course


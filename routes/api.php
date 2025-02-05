<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CollegeController;
use App\Http\Controllers\CollegeDetailController;
use App\Http\Controllers\CourseController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
// Route::post('/colleges/filter/', [CollegeController::class, 'filterColleges']);
//Route::get('/colleges', [CollegeController::class, 'index']);
Route::get('/colleges', [CollegeDetailController::class,'index']); // Get all colleges
Route::get('/colleges/search/{college_name}', [CollegeDetailController::class,'findByName']); // Get all colleges
Route::get('/colleges/search/course/{course}/{university}', [CollegeDetailController::class,'findByCourse']); // Get all colleges
Route::get('/colleges/{college_id}', [CollegeDetailController::class,'findCollegeById']); // Get all colleges

// Course Routes
Route::get('/courses', [CourseController::class, 'index']); // Get all courses

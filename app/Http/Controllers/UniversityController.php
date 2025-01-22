<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\University;

class UniversityController extends Controller
 {
//     public function index()
// {
//     try {
//         // Fetch all universities with their associated colleges
//         $universities = University::all()->groupBy('name')->get();

//         return response()->json([
//             'status' => 'success',
//             'data' => $universities
//         ], 200);
//     } catch (\Exception $e) {
//         return response()->json([
//             'status' => 'error',
//             'message' => 'Failed to fetch universities',
//             'error' => $e->getMessage()
//         ], 500);
//     }
// }


public function index()
{
    try {
        // Fetch universities grouped by name with associated colleges
        $universities = University::all()
            ->groupBy('name');
            
        return response()->json([
            'status' => 'success',
            'data' => $universities
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'status' => 'error',
            'message' => 'Failed to fetch universities',
            'error' => $e->getMessage()
        ], 500);
    }
}

}

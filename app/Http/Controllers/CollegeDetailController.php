<?php

// namespace App\Http\Controllers;
// use App\Models\CollegesDetail;
// use App\Models\College;
// use Illuminate\Http\Request;
// use Illuminate\Database\Eloquent\ModelNotFoundException;
// use Exception;

// class CollegeDetailController extends Controller
// {
//     public function index()
//     {
//         try {
//             $results = CollegeDetail::join('colleges as c', 'colleges_details.college_name', '=', 'c.college_name')
//             ->select('c.address', 'colleges_details.*');
//         } catch (Exception $e) {
//             return response()->json(['error' => 'Failed to retrieve colleges', 'message' => $e->getMessage()], 500);
//         }
//     }

// }

namespace App\Http\Controllers;

use App\Models\CollegesDetail;
use App\Models\College;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

class CollegeDetailController extends Controller
{
    /**
     * Fetch all college details with address from the joined tables.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            // Using Eloquent (Preferred if you want to work with Models)
            $results = CollegesDetail::join('Colleges as c', 'colleges_details.college_name', '=', 'c.college_name')
                ->select('c.address', 'colleges_details.*')
                ->get();

            // Return the results if query is successful
            return response()->json($results);
        } catch (QueryException $e) {
            // If there is a query exception, log and return an error response
            \Log::error('Database Query Error: ' . $e->getMessage());

            return response()->json([
                'status' => 'error',
                'message' => 'There was an error fetching the college details: ' . $e->getMessage()
            ], 500);
        } catch (\Exception $e) {
            // For any other general exceptions
            \Log::error('General Error: ' . $e->getMessage());

            return response()->json([
                'status' => 'error',
                'message' => 'An unexpected error occurred: ' . $e->getMessage()
            ], 500);
        }
    }
}

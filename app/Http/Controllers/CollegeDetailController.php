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
                    ->select('c.address','c.university_name', 'colleges_details.*')
                    ->get();
                // Return the results if query is successful
                return response()->json($results);
            } catch (QueryException $e) {
                // If there is a query exception, log and return an error response
                // \Log::error('Database Query Error: ' . $e->getMessage());

                return response()->json([
                    'status' => 'error',
                    'message' => 'There was an error fetching the college details: ' . $e->getMessage()
                ], 500);
            } catch (\Exception $e) {   
                // For any other general exceptions
                // \Log::error('General Error: ' . $e->getMessage());

                return response()->json([
                    'status' => 'error',
                    // 'message' => 'An unexpected error occurred: ' . $e->getMessage()
                ], 500);
            }
        }

    
    public function findCollegeById($college_id)
    {
        try {
            // Validate if $college_id is a valid integer
            if (!is_numeric($college_id) || (int)$college_id <= 0) {
                return response()->json([
                    'error' => 'Invalid college ID provided.'
                ], 400);
            }

            // Execute the custom SQL query
            $collegeDetails = DB::select(
                'SELECT c.address, c.university_name, cd.* 
                FROM colleges_details cd 
                JOIN Colleges c ON cd.college_name = c.college_name 
                WHERE cd.college_id = ?', [$college_id]
            );
            
            $collegeDetails = !empty($collegeDetails) ? $collegeDetails[0] : null; // Take the first result (if exists)
            
            // Check if any data was found
            if (empty($collegeDetails)) {
                return response()->json([
                    'error' => 'College not found.'
                ], 404);
            }

    //         return response()->json(
    //  $collegeDetails);
return response()->json($collegeDetails);

    } catch (QueryException $e) {
        // Log SQL-related errors and return a generic message
        // \Log::error('Database query error: ' . $e->getMessage());
        return response()->json([
            'error' => 'An error occurred while processing your request. Please try again later.'
        ], 500);

    } catch (\Exception $e) {
        // Log general errors and return a generic message
        // \Log::error('General error: ' . $e->getMessage());
        return response()->json([
            'error' => 'An unexpected error occurred. Please try again later.'
        ], 500);
    }
}




// public function findByName(Request $request)
// {
//     try {
//         // Get the search term from the request
//         $searchTerm = $request->input('college_name');

//         // Using Eloquent with LIKE for case-insensitive search
//         $results = CollegesDetail::join('Colleges as c', 'colleges_details.college_name', '=', 'c.college_name')
//             ->select('c.address', 'c.university_name', 'colleges_details.*')
//             ->whereRaw('LOWER(colleges_details.college_name) LIKE LOWER(?)', ['%' . $searchTerm . '%'])
//             ->get();

//         return response()->json($results);
//     } catch (QueryException $e) {
//         return response()->json([
//             'status' => 'error',
//             'message' => 'There was an error fetching the college details: ' . $e->getMessage()
//         ], 500);
//     } catch (\Exception $e) {
//         return response()->json([
//             'status' => 'error',
//             'message' => 'An unexpected error occurred.'
//         ], 500);
//     }
// }

// }

public function findByCourse($course,$university)
{
    try {
        // Validate if $college_name is a valid string
        if (empty($course) || !is_string($course)) {
            return response()->json([
                'error' => 'Invalid college name provided.'
            ], 400);
        }

        $collegeDetails = DB::select(
            'SELECT c.address, c.university_name, cd.* 
             FROM colleges_details cd 
             JOIN Colleges c ON LOWER(cd.college_name) = LOWER(c.college_name) 
             WHERE LOWER(cd.offered_program) LIKE LOWER(?) 
               AND LOWER(c.university_name) LIKE LOWER(?)',
            ["%$course%", "$university"]
        );
        // Check if any data was found
        if (empty($collegeDetails)) {
            return response()->json([
                'error' => 'College not found.'
            ], 404);
        }

        return response()->json($collegeDetails, 200);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'An error occurred while retrieving college details.',
            'message' => $e->getMessage()
        ], 500);
    }
}

public function findByName($college_name)
{
    try {
        // Validate if $college_name is a valid string
        if (empty($college_name) || !is_string($college_name)) {
            return response()->json([
                'error' => 'Invalid college name provided.'
            ], 400);
        }

        // Execute the SQL query with case-insensitive LIKE comparison
        $collegeDetails = DB::select(
            'SELECT college_name,college_id 
            FROM colleges_details 
            WHERE LOWER(college_name) LIKE LOWER(?)', ["$college_name%"]
        );
        // Check if any data was found
        if (empty($collegeDetails)) {
            return response()->json([
                'error' => 'College not found.'
            ], 404);
        }

        return response()->json($collegeDetails, 200);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'An error occurred while retrieving college details.',
            'message' => $e->getMessage()
        ], 500);
    }
}
}
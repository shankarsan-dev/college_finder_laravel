<?php
// namespace App\Http\Controllers;

// use Illuminate\Support\Facades\DB;
// use App\Models\College;
// use PHPUnit\Framework\Attributes\Group;

// class CollegeController extends Controller
// {
//     public function index()
//     {
//         // Perform the join between colleges and contact_infos on college_id and select all columns
//         $colleges = DB::table('colleges',)
//             ->leftJoin('contact_infos', 'colleges.college_id', '=', 'contact_infos.college_id')
//             ->leftJoin('locations','colleges.college_id','=','locations.college_id')
//             ->leftJoin('college_courses','colleges.college_id','=','college_courses.college_id')
//             ->select('colleges.*','contact_infos.*' ,'locations.*',) // Select all columns from both tables
//             ->get();


//         // Return the result as a JSON response
//         return response()->json($colleges);
//     }
// }













namespace App\Http\Controllers;

use App\Models\College;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Exception;

class CollegeController extends Controller
{
    // Display a listing of all colleges
    public function index()
    {
        try {
            $colleges = College::all();
            return response()->json($colleges);
        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to retrieve colleges', 'message' => $e->getMessage()], 500);
        }
    }


    // public function filterColleges(Request $request)
    // {
    //     // Validate the incoming request
    //     $validated = $request->validate([
    //         'level' => 'nullable|string|max:255',
    //         'course' => 'nullable|string|max:255',
    //         'city' => 'nullable|string|max:255',
    //     ]);

    //     try {
    //         // Start the query for colleges
    //         $query = College::query();

    //         // Apply level filter if provided in the request body
    //         if (!empty($validated['level'])) {
    //             $query->where('level', 'like', '%' . $validated['level'] . '%');
    //         }

    //         // Apply course filter if provided in the request body
    //         if (!empty($validated['course'])) {
    //             $query->whereHas('courses', function ($q) use ($validated) {
    //                 $q->where('full_name', 'like', '%' . $validated['course'] . '%');
    //             });
    //         }

    //         // Apply city filter if provided in the request body
    //         if (!empty($validated['city'])) {
    //             $query->where('city', 'like', '%' . $validated['city'] . '%');
    //         }

    //         // Execute the query and fetch the results
    //         $colleges = $query->get();

    //         return response()->json([
    //             'status' => 'success',
    //             'data' => $colleges
    //         ], 200);
    //     } catch (Exception $e) {
    //         return response()->json([
    //             'status' => 'error',
    //             'message' => 'Failed to fetch colleges',
    //             'error' => $e->getMessage()
    //         ], 500);
    //     }
    // }
    public function filterByCourseAndLocation(Request $request)
    {
        // Validate the incoming request
        $validated = $request->validate([
            'course' => 'required|string|max:255', // Course name is required
            'city' => 'required|string|max:255',   // City name is required
        ]);
    
        try {
            // Fetch colleges offering the exact course in the specified city
            $colleges = College::join('courses', 'colleges.college_id', '=', 'courses.college_id')
                ->where('courses.full_name', $validated['course']) // Exact match for course
                ->where('colleges.city', $validated['city'])       // Exact match for city
                ->select('colleges.*', 'courses.full_name as course_name', 'courses.department', 'courses.duration')
                ->get();
    
            return response()->json([
                'status' => 'success',
                'data' => $colleges
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch colleges by course and location',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    
    public function filterColleges(Request $request)
{
    // Validate the incoming request
    $validated = $request->validate([
        'level' => 'nullable|string|max:255',
        'course' => 'nullable|string|max:255',
        'city' => 'nullable|string|max:255',
    ]);

    try {
        // Start the query for colleges with eager loading for courses
        $query = College::with('courses');
        // Apply filters only if they are provided
        if (!empty($validated['level'])) {
            $query->whereHas('courses', function ($q) use ($validated) {
                $q->where('level', $validated['level']); 
            });
        }

        if (!empty($validated['course'])) {
            $query->whereHas('courses', function ($q) use ($validated) {
                $q->where('short_name',$validated['course']);
            });
        }

        if (!empty($validated['city'])) {
            $query->where('city', $validated['city']); // Exact match for city
        }

        // Fetch results that match all provided conditions
        $colleges = $query->get();

        // Return response
        return response()->json([
            'status' => 'success',
            'data' => $colleges
        ], 200);
    } catch (Exception $e) {
        return response()->json([
            'status' => 'error',
            'message' => 'Failed to fetch colleges',
            // 'error' => $e->getMessage()
        ], 500);
    }
}


    

    
    public function showCourses($college_id)
    {
        try {
            $college = College::findOrFail($college_id);
            $courses = $college->courses;
            return response()->json($courses);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'College not found'], 404);
        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to retrieve courses', 'message' => $e->getMessage()], 500);
        }
    }

    // Create a new college
    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string',
                'city' => 'required|string',
                'province' => 'required|string',
                'email' => 'nullable|email',
                'phone' => 'nullable|string',
                'website' => 'nullable|url'
            ]);

            $college = College::create($request->all());
            return response()->json($college, 201);
        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to create college', 'message' => $e->getMessage()], 500);
        }
    }

    // Update a college
    public function update(Request $request, $college_id)
    {
        try {
            $college = College::findOrFail($college_id);
            $college->update($request->all());
            return response()->json($college);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'College not found'], 404);
        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to update college', 'message' => $e->getMessage()], 500);
        }
    }

    // Delete a college
    public function destroy($college_id)
    {
        try {
            $college = College::findOrFail($college_id);
            $college->delete();
            return response()->json(['message' => 'College deleted successfully']);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'College not found'], 404);
        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to delete college', 'message' => $e->getMessage()], 500);
        }
    }
}



















// namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\DB;

// class CollegeController extends Controller
// {
//     public function index()
//     {
//         // SQL query to join colleges and contact_infos
//         $colleges = DB::table('colleges')
//             ->leftJoin('contact_infos', 'colleges.id', '=', 'contact_infos.college_id')
//             ->select(
//                 'colleges.id as CollegeID',
//                 'colleges.name as CollegeName',
//                 'contact_infos.website as Website',
//                 'contact_infos.email as Email',
//                 'contact_infos.phone as Phone'
//             )
//             ->get();

//         return response()->json($colleges);
//     }
// }



    /**
     * Show the form for creating a new resource.
//      */
//     public function create()
//     {
//         //
//     }

//     /**
//      * Store a newly created resource in storage.
//      */
//     public function store(Request $request)
//     {
//         // Validate incoming data
//         $validated = $request->validate([
//             'name' => 'required|string|max:255',
//             'location' => 'required|string|max:255',
//             'type' => 'required|string|max:100',
//             'contact_id'=>'required',
//             'established_year' => 'required|integer',
//             'university' => 'required|string|max:255',
//         ]);

//         // Create a new college record in the database
//         $college = College::create([
//             'name' => $validated['name'],
//             'location' => $validated['location'],
//             'type' => $validated['type'],
//             'email' => $validated['email'],
//             'contact_id' => $validated['phone       '],
//             'established_year' => $validated['established_year'],
//             'university' => $validated['university'],
//         ]);

//         // Return a success response
//         return response()->json([
//             'message' => 'College created successfully!',
//             'college' => $college
//         ], 201);
//     }

//     /**
//      * Display the specified resource.
//      */
//     public function show(College $college)
//     {
//         //
//     }

//     /**
//      * Show the form for editing the specified resource.
//      */
//     public function edit(College $college)
//     {
//         //
//     }

//     /**
//      * Update the specified resource in storage.
//      */
//     public function update(UpdateCollegeRequest $request, College $college)
//     {
//         //
//     }

//     /**
//      * Remove the specified resource from storage.
//      */
//     public function destroy(College $college)
//     {
//         //
//     }
// }

<?php

namespace App\Http\Controllers;
use App\Models\CollegesDetail;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Exception;


abstract class Controller
{
    //namespace App\Http\Controllers;



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

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HpController extends Controller
{
    public function index(){
        return view('index');
        //index.blade.phpを全部表示（hpの内容）
    }

    public function about(){
       return view('about');     
    }
}

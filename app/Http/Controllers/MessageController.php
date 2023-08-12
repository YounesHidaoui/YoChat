<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function ChatSend($id,Request $request,UserService $userService)
    {
            $userService->sentMessage($id,$request->message);
            return response()->json('Message sending !');
        //
    }
}

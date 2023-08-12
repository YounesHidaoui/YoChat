<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ControllerChatting extends Controller
{
        public function index()
        {
            $data = User::all();
            $data_messages = Message::all();
            
            return Inertia::render(
                'Chat/components/Head_section',[
                    'data'=>$data,
                    'messages'=>$data_messages
                ]
            );
           
        }
        public function ChatForm($id,UserService $userService,Request $request)
        {
            $Message_user = $request->Message;
            //dd($Message_user);
            $userService->sentMessage($id,$Message_user);
           
           
          
        }
    
        public function ShowUser($id,UserService $userService)
        {
            $data_messages = User::find(1)->messages;
            //return $data_messages;
            // get all Users 
            $data = User::all();
            // get user from table users 
            $sender = User::find(Auth::id());

            //return $sender;

            //  get all messages reciver with variable link from reciver
            $messages = DB::table('messages')->select()->where('receiver_id','=',$id)->where('sender','=',Auth::id())->latest()->get();

            // get all messages with variable Auth from sender
            $messages_reciver = DB::table('messages')->select()->where('receiver_id','=',Auth::id())->where('sender','=',$id)
            ->latest()->get();


          
            //return $messages_sender ;
            $user_id = $userService->getuser($id);
           // return $data;
            return Inertia::render(
                'Chat/components/Chat_User',[
                    'id'=>$user_id,
                    'data'=>$data,
                    'messages'=>$messages,
                    'sender'=>$sender,
                    'messages_reciver'=> $messages_reciver

                ]
            );
        }
    }
    
    //


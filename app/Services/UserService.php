<?php

namespace App\Services;

use App\Events\ChatEvent;
use App\Models\Message;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserService{

    public function getuser($user_id)
    {
        return User::where('id',$user_id)->first();
    }
    public function createUser(array $data):User
    {
        $data['password']=Hash::make($data['password']);
        return User::create($data);
    }
    public function sentMessage($user_id,$message)
    {
        
         $data['receiver_id']=$user_id;
         $data['messager']=$message;
         $data['sender']=Auth::user()->id;
         //dd($user_id);
         Message::create($data);
         $receiver = $this->getuser($user_id);
         
        broadcast(new ChatEvent($receiver,$message));



    }
}
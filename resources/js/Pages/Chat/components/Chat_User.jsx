import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Navbar from './layout/Navbar';
import Head_chat from './layout/Head_chat'
import Body_chat from './layout/Body_chat';
import FooterChat from './layout/Footer-chat';
import './style/app.css'
export default function Chat_User(props) {
    
    console.log(props.auth.user);
    console.log(props.id.name);
  return (
   
    <div class="container text-center ">
    <div className="row">
            <div className="col-sm-4 p-3 bg-light overflow-auto">
            <Navbar 
            data={props.data}
            notuser={props.auth.user}/>
            </div>
        <div className="col-sm-8 rounded ">
            <div className="row  p-3 ">
                <div className="col-12 col-sm-12  ">
                    <Head_chat name={props.id.name}/>
                </div>
                <div className="col-12  col-md-12 col-sm-6 bg-light ">
                    <Body_chat data={props.id} sender={props.sender} messages_reciver={props.messages_reciver} messages={props.messages}/>
                </div>
                <div className="col-12 col-sm-6 col-md-12 ">
                <   FooterChat id={props.id.id}/>
                </div>
            </div>
        </div>

    </div>
</div>
        
       
      
   
  )
}

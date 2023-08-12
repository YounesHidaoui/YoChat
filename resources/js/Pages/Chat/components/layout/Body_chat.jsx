import React from 'react'
import '../style/Body_chat.css'
export default function Body_chat(props) {
  console.log(props.data);
  return (
    <div className=' container  ' style={{"height":"450px", "maxHeight": "600px" ,'width':"100%"}}>
      
            {
           
            
              props.data == undefined?<h2 className='text-center text-light ' style={{"marginTop":"200px"}}>
                Select un amis </h2>:<div className='row'>
                <div className="reciver col">
                {props.messages.map((e)=>
                  <div className='col-12 text'>
                    <div className="btn py-4">
                    <button className='btn ' style={{"marginTop":'-10px'}}>{props.sender.name[0]}</button>
                    </div>
                   <div className="text-chat">
                   <p className='bg-light shadow rounded p-2'>{e.messager}
                      
                   </p>
                   
                   </div>
                   
                  </div>
                )}
                </div>
                <div className="sender col">
                {
                  props.messages_reciver.map((e)=>
                  <div className=' text1'>
                    
                   <div className="text-chat1 py-2 mt-3">
                   <p className='bg-light shadow rounded p-2' style={{'color':'#64c679'}}>{e.messager}</p>
                   </div>
                   <div className="btn-r py-4 mr-2">
                    <button className='btn btn-dark'>{props.data.name[0]}</button>
                    </div>
                   
                  </div>)
                }
              </div>
              
              </div>
            }

    </div>
  )
}

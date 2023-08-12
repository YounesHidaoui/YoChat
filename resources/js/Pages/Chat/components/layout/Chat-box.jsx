import React from 'react';
import { router } from '@inertiajs/react'

const ChatBox = (props ) => {
    //const nav = Navigate()
    function handleSubmit(e) {
        e.preventDefault()
        router.get(`/chat/${props.id}`)
      }
    
    return (
        <>
            <div className="box-chat shadow m-2 p-2 rounded " >
                        
                   <form action=""  onSubmit={handleSubmit}>

                  
                        <div className="i row justify-content-md-center" >
                            <div className="col-12">
                                <div className="row">
                                <div className="col-3">
                         <span className='text-white i'>
                           <button type='submit'>
                            {props.firstletter}
                            </button> 
                         </span>
                       
                        </div>
                        <div className="col-3">
                        <h4 className='text-dark pt-3'>{props.name}</h4>
                        </div>
                     
                            </div>
                                </div>
                            
                       
                        </div>
                      
                        
                        </form>
                        
                    </div>
                    
                        
                       
                        
                   
                    
            
        </>
    );
}

export default ChatBox;

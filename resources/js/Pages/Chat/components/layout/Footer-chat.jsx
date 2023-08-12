import React,{useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIls } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { router } from '@inertiajs/react'
import { Inertia } from '@inertiajs/inertia';
const FooterChat = (props) => {
  const [Message, setMessage] = useState('')
  console.log(props.id);
 
  function handleSubmit(e) {
    e.preventDefault()
    sendDataToController(Message)
  }
  const sendDataToController =(Message) => {
    // Make an API request to your Laravel backend
    // You can use Axios, Fetch, or any other library

    // Example using Axios
    Inertia.post(`/chat/${props.id}`,{Message:Message})
      .then((response) => {
        // Handle the response from the backend
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };
    return (
        <div className="container bg-dark">
                <div className='row '>
                    <form action=""  method='POST' onSubmit={handleSubmit} className='footer-chatting'>
                                    <div className="text-chatting ">
                                            <input type="text"  name="Message" 
                                            onChange={(e)=>setMessage(e.target.value)} id="" />
                                    </div>
                                    <div className="file-input-container  ">
                                        <input type="submit"  className='hidden'   id="file-input"/>
                                        <label for="file-input" class="custom-button">
                                        <span className='pt-3 '> 
                                            <FontAwesomeIcon icon={faIls} style={{color: "balck"}} />                                          
                                        </span>                  
                                        </label>
                                    </div>
                    </form>

                </div>
        </div>
        
    );
}

export default FooterChat;

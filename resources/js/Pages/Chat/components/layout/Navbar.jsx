import React from 'react';
import InputSearch from './Input-search';
import ChatBox from './Chat-box';
const Navbar = (props) => {
    console.log(props.notuser);
    const users_array = props.data.filter((item)=>item.id!==props.notuser.id)
    console.log(users_array);
    return (
        
        <div className=" ">
          <InputSearch/>
           {
            users_array.map((item)=>

             <div key={item.id}>
              <ChatBox name={item.name} id={item.id} firstletter={item.name[0]} />
              </div>
             
            )
          }
         </div>
        
    );
}

export default Navbar;

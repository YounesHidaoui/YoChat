import React ,{useState}from 'react'


export default function Head_chat(props) {
//const[reciver_m ,setreciver_m]= useState('');

  console.log(props.name);
  return (
    <div className="head-chat bg-white rounded shadow">
      <div className="i py-3 m-2">
      <button className='text-white  shadow'>

            {props.name ==undefined?
            
            <div></div>:props.name[0]
          }
      </button>
      </div>
    
</div>
  )
}

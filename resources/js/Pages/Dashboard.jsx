import React from 'react'
import img from "./photo/5.svg"
import "./Chat/components/style/Header.css"
import { router } from '@inertiajs/react'

export default function Dashboard() {

    function handleSubmit(e) {
        e.preventDefault()
        router.get(`/chat`)
      }
  return (
    <div className="container  ">
        
        <div className='row-1'>

          <div className='row-img'>
                <img src={img} className=''/>
          </div>

          <div className="row-para">
          <div className="text-pra">
                <h4>
                  <span >YoChat ?</span> Ç'est une excellente application
                </h4>
                <h5>
                Discutons avec des amis.
                </h5>
              </div>
          
          <div className='row-text'> 
                
                <div className="py-2  m-3">
                 Pour commance Click sur button
                </div>
                <form action='' onSubmit={handleSubmit} className='m-3'>

                      <button type='submit' className='btn '>
                        Entrez
                      </button>
                </form>
                        
                    
          </div>
        </div>
        </div>
       
    </div>
  )
}

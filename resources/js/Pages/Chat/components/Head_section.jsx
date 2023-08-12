import React from 'react';
import FooterChat from './layout/Footer-chat'
import './style/app.css'
import SenderMessage from './SenderMessage';
import ReciverMessage from './ReciverMessage';
import Head_chat from './layout/Head_chat';
import Navbar from './layout/Navbar'
import Body_chat from './layout/Body_chat'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Head_section = (props) => {
console.log(props.auth.user);
const users = props.data ;

    return (
      
       <AuthenticatedLayout user={props.auth.user} >
          <div class="container text-center">
                        <div className="row">
                                <div className="col-sm-4 p-3 bg-light overflow-auto">
                                <Navbar 
                                data={users}
                                notuser={props.auth.user}/>
                                </div>
                            <div className="col-sm-8 rounded ">
                                <div className="row  p-3 ">
                                    <div className="col col-sm-12  ">
                                        <Head_chat/>
                                    </div>
                                    <div className=" col-md-12 col-sm-12 bg-light overflow-auto">
                                        <Body_chat />
                                    </div>
                                    <div className="col col-md-12 col-sm-12 ">
                                    <   FooterChat/>
                                    </div>
                                </div>
                            </div>

                        </div>
            </div>
            </AuthenticatedLayout>
    );
}

export default Head_section;

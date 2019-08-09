import React from 'react';
import {Link} from 'react-router-dom';

import NavBar from '../../../components/NavBar'
import TableForm from './TableForm';

const Contacts = () => {
    return(
        <React.Fragment>
           <NavBar/>
            <div className="container">
                <TableForm/>
            </div>
        </React.Fragment>
        
 
       
 
    )

    
}





export default Contacts;